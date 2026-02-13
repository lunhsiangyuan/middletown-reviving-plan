#!/usr/bin/env bun
// i18n 翻譯完整性驗證腳本
//
// 檢查範圍：
// A. Content 檔案 - 動態 import 比較 key 結構
// B. Data 檔案 - 正則掃描 Record<Language, string> 欄位
// C. 元件內嵌翻譯 - 正則掃描翻譯物件字面量
// D. JSON 翻譯檔 - 比較三語 key 結構
//
// 退出碼：0 = 全部通過，1 = 有缺失

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

// ---------------------------------------------------------------------------
// 常數
// ---------------------------------------------------------------------------

const ROOT = import.meta.dir.replace(/\/scripts$/, "");
const LANGUAGES = ["en", "zh-TW", "es"] as const;
type Language = (typeof LANGUAGES)[number];

// 統計
let totalFilesChecked = 0;
let totalEntriesVerified = 0;
let totalMissing = 0;

interface Issue {
  file: string;
  path: string;
  missingLangs: string[];
}
const issues: Issue[] = [];

// ---------------------------------------------------------------------------
// 工具函式
// ---------------------------------------------------------------------------

/** 遞迴取得所有 key 路徑 (含陣列索引) */
function getKeyPaths(obj: unknown, prefix = ""): string[] {
  if (obj === null || obj === undefined) return [];
  if (typeof obj !== "object") return [prefix];

  if (Array.isArray(obj)) {
    const paths: string[] = [];
    for (let i = 0; i < obj.length; i++) {
      paths.push(...getKeyPaths(obj[i], prefix ? `${prefix}[${i}]` : `[${i}]`));
    }
    return paths;
  }

  const paths: string[] = [];
  for (const key of Object.keys(obj as Record<string, unknown>)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    paths.push(
      ...getKeyPaths((obj as Record<string, unknown>)[key], fullKey)
    );
  }
  return paths;
}

/** 遞迴掃描目錄找特定檔名 */
function findFiles(dir: string, pattern: RegExp): string[] {
  const results: string[] = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next" && entry.name !== ".git") {
        results.push(...findFiles(fullPath, pattern));
      } else if (entry.isFile() && pattern.test(entry.name)) {
        results.push(fullPath);
      }
    }
  } catch {
    // 忽略無法讀取的目錄
  }
  return results;
}

function rel(absPath: string): string {
  return relative(ROOT, absPath);
}

// ---------------------------------------------------------------------------
// A. Content 檔案檢查
// ---------------------------------------------------------------------------

async function checkContentFiles(): Promise<void> {
  console.log("\n\x1b[34m📁 Content Files (app/**/content.ts)\x1b[0m");

  const contentFiles = findFiles(join(ROOT, "app"), /^content\.ts$/);

  if (contentFiles.length === 0) {
    console.log("  (no content files found)");
    return;
  }

  for (const filePath of contentFiles.sort()) {
    totalFilesChecked++;
    const relPath = rel(filePath);

    try {
      const mod = await import(filePath);
      const content = mod.content;

      if (!content || typeof content !== "object") {
        console.log(`  \x1b[33m⚠️  ${relPath} — no 'content' export found\x1b[0m`);
        continue;
      }

      const presentLangs = LANGUAGES.filter((l) => l in content);
      const missingLangs = LANGUAGES.filter((l) => !(l in content));

      if (missingLangs.length > 0) {
        console.log(
          `  \x1b[33m⚠️  ${relPath} — missing languages: ${missingLangs.join(", ")}\x1b[0m`
        );
        issues.push({ file: relPath, path: "content", missingLangs: [...missingLangs] });
        totalMissing += missingLangs.length;
        continue;
      }

      // 取得 en 的 key 結構作為基準
      const enKeys = getKeyPaths(content.en);
      let keyIssues = 0;

      for (const lang of presentLangs.filter((l) => l !== "en")) {
        const langKeys = getKeyPaths(content[lang]);
        const missingKeys = enKeys.filter((k) => !langKeys.includes(k));
        const extraKeys = langKeys.filter((k) => !enKeys.includes(k));

        for (const key of missingKeys) {
          console.log(
            `    \x1b[33m- ${lang} missing key: ${key}\x1b[0m`
          );
          issues.push({ file: relPath, path: key, missingLangs: [lang] });
          keyIssues++;
          totalMissing++;
        }
        for (const key of extraKeys) {
          console.log(
            `    \x1b[36m- ${lang} extra key: ${key}\x1b[0m`
          );
        }
      }

      totalEntriesVerified += enKeys.length * presentLangs.length;

      if (keyIssues === 0) {
        console.log(
          `  \x1b[32m✅ ${relPath} — all ${presentLangs.length} languages present, ${enKeys.length} keys matched\x1b[0m`
        );
      }
    } catch (err) {
      console.log(
        `  \x1b[31m❌ ${relPath} — import error: ${(err as Error).message}\x1b[0m`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// B. Data 檔案檢查 (正則掃描)
// ---------------------------------------------------------------------------

function checkDataFiles(): void {
  console.log("\n\x1b[34m📁 Data Files (lib/data/*.ts)\x1b[0m");

  const dataDir = join(ROOT, "lib", "data");
  const dataFiles = findFiles(dataDir, /\.ts$/).filter(
    (f) => !f.endsWith("index.ts")
  );

  if (dataFiles.length === 0) {
    console.log("  (no data files found)");
    return;
  }

  for (const filePath of dataFiles.sort()) {
    totalFilesChecked++;
    const relPath = rel(filePath);
    const source = readFileSync(filePath, "utf-8");

    // 找到所有 Record<Language, ...> 物件字面量 (含巢狀的)
    // 策略：尋找 { en: ..., 可能有 "zh-TW": ..., 可能有 es: ... } 的模式
    const recordPattern =
      /\{\s*(?:en:\s*(?:"[^"]*"|'[^']*'|\[[\s\S]*?\]|\{[\s\S]*?\}),?\s*)(?:(?:"zh-TW":\s*(?:"[^"]*"|'[^']*'|\[[\s\S]*?\]|\{[\s\S]*?\}),?\s*))?(?:(?:es:\s*(?:"[^"]*"|'[^']*'|\[[\s\S]*?\]|\{[\s\S]*?\}),?\s*))?\}/g;

    // 更精準的做法：分別找 en:, "zh-TW":, es: 出現在同一個區塊內
    // 我們用行級掃描來找翻譯區塊
    const lines = source.split("\n");
    let blockCount = 0;
    let blockOk = 0;
    let blockIssues = 0;
    const fileIssues: { context: string; missing: string[] }[] = [];

    // 找包含 en: 的行，然後往回和往前找 "zh-TW": 和 es:
    // 更好的方法：找到所有 `{ en:` 開頭的翻譯物件
    // 使用較寬鬆的正則在整個文字中搜尋

    // 找 Record<Language, string> 類的欄位 — 搜尋 `{ en: "...", "zh-TW": "...", es: "..." }` 的模式
    // 以及 `{ en: [...], "zh-TW": [...], es: [...] }`
    const translationBlockRegex =
      /\{[^{}]*?\ben\s*:/g;

    let match: RegExpExecArray | null;
    while ((match = translationBlockRegex.exec(source)) !== null) {
      const startIdx = match.index;

      // 往後找到此物件的結束大括號
      let depth = 0;
      let endIdx = startIdx;
      let foundStart = false;
      for (let i = startIdx; i < source.length; i++) {
        if (source[i] === "{") {
          depth++;
          foundStart = true;
        } else if (source[i] === "}") {
          depth--;
          if (foundStart && depth === 0) {
            endIdx = i + 1;
            break;
          }
        }
      }

      const block = source.slice(startIdx, endIdx);

      // 排除非翻譯物件（如 hours, coordinates, socialMedia 等）
      // 翻譯物件應該有 en 和至少一個其他語言 key
      const hasEn = /\ben\s*:/.test(block);
      const hasZhTW = /"zh-TW"\s*:/.test(block);
      const hasEs = /\bes\s*:/.test(block);

      // 至少要有 en 和一個其他語言，才視為翻譯物件
      if (!hasEn || (!hasZhTW && !hasEs)) continue;

      blockCount++;

      // 取得上下文（找出此區塊附近的變數名稱）
      const beforeBlock = source.slice(Math.max(0, startIdx - 200), startIdx);
      const contextMatch = beforeBlock.match(
        /(\w+)\s*:\s*$/
      );
      const context = contextMatch ? contextMatch[1] : `offset:${startIdx}`;

      const missing: string[] = [];
      if (!hasEn) missing.push("en");
      if (!hasZhTW) missing.push("zh-TW");
      if (!hasEs) missing.push("es");

      if (missing.length > 0) {
        fileIssues.push({ context, missing });
        blockIssues++;
        totalMissing += missing.length;
        issues.push({ file: relPath, path: context, missingLangs: missing });
      } else {
        blockOk++;
        totalEntriesVerified += 3;
      }
    }

    if (blockCount === 0) {
      console.log(`  \x1b[90m⬚  ${relPath} — no translation blocks found\x1b[0m`);
    } else if (blockIssues === 0) {
      console.log(
        `  \x1b[32m✅ ${relPath} — ${blockCount} translation blocks, all 3 languages present\x1b[0m`
      );
    } else {
      console.log(
        `  \x1b[33m⚠️  ${relPath} — ${blockIssues}/${blockCount} blocks missing translations\x1b[0m`
      );
      for (const issue of fileIssues) {
        console.log(
          `    \x1b[33m- ${issue.context}: missing ${issue.missing.join(", ")}\x1b[0m`
        );
      }
    }
  }
}

// ---------------------------------------------------------------------------
// C. 元件內嵌翻譯檢查
// ---------------------------------------------------------------------------

function checkComponentFiles(): void {
  console.log("\n\x1b[34m📁 Component & Client i18n (inline translations)\x1b[0m");

  // 掃描 components/**/*.tsx 和 app/**/client.tsx
  const componentFiles = [
    ...findFiles(join(ROOT, "components"), /\.tsx$/),
    ...findFiles(join(ROOT, "app"), /^client\.tsx$/),
    // 也包括 app/**/layout.tsx (可能有內嵌翻譯)
    ...findFiles(join(ROOT, "app"), /^layout\.tsx$/).filter(
      (f) => f !== join(ROOT, "app", "layout.tsx") // 排除根 layout
    ),
  ];

  // 也掃描 hero.tsx 等特殊元件
  const heroFiles = findFiles(join(ROOT, "components"), /\.tsx$/).filter(
    (f) => {
      const source = readFileSync(f, "utf-8");
      return /"zh-TW"/.test(source) || /Record<Language/.test(source);
    }
  );

  const allFiles = [...new Set([...componentFiles, ...heroFiles])];

  if (allFiles.length === 0) {
    console.log("  (no component files found)");
    return;
  }

  for (const filePath of allFiles.sort()) {
    const relPath = rel(filePath);
    const source = readFileSync(filePath, "utf-8");

    // 跳過 UI 基礎元件 (components/ui/)
    if (relPath.startsWith("components/ui/")) continue;

    // 找有翻譯物件的檔案
    const hasInlineTranslation =
      /"zh-TW"\s*:/.test(source) && /\ben\s*:/.test(source);

    if (!hasInlineTranslation) continue;

    totalFilesChecked++;

    // 同 Data 檔案的掃描邏輯
    const translationBlockRegex = /\{[^{}]*?\ben\s*:/g;
    let match: RegExpExecArray | null;
    let blockCount = 0;
    let blockOk = 0;
    let blockIssues = 0;
    const fileIssues: { context: string; missing: string[] }[] = [];

    while ((match = translationBlockRegex.exec(source)) !== null) {
      const startIdx = match.index;

      let depth = 0;
      let endIdx = startIdx;
      let foundStart = false;
      for (let i = startIdx; i < source.length; i++) {
        if (source[i] === "{") {
          depth++;
          foundStart = true;
        } else if (source[i] === "}") {
          depth--;
          if (foundStart && depth === 0) {
            endIdx = i + 1;
            break;
          }
        }
      }

      const block = source.slice(startIdx, endIdx);
      const hasEn = /\ben\s*:/.test(block);
      const hasZhTW = /"zh-TW"\s*:/.test(block);
      const hasEs = /\bes\s*:/.test(block);

      if (!hasEn || (!hasZhTW && !hasEs)) continue;

      blockCount++;

      const beforeBlock = source.slice(Math.max(0, startIdx - 200), startIdx);
      const contextMatch = beforeBlock.match(/(\w+)\s*:\s*$/);
      const context = contextMatch ? contextMatch[1] : `offset:${startIdx}`;

      const missing: string[] = [];
      if (!hasEn) missing.push("en");
      if (!hasZhTW) missing.push("zh-TW");
      if (!hasEs) missing.push("es");

      if (missing.length > 0) {
        fileIssues.push({ context, missing });
        blockIssues++;
        totalMissing += missing.length;
        issues.push({ file: relPath, path: context, missingLangs: missing });
      } else {
        blockOk++;
        totalEntriesVerified += 3;
      }
    }

    if (blockCount === 0) continue; // 沒有翻譯區塊的跳過

    if (blockIssues === 0) {
      console.log(
        `  \x1b[32m✅ ${relPath} — ${blockCount} translation blocks, all 3 languages\x1b[0m`
      );
    } else {
      console.log(
        `  \x1b[33m⚠️  ${relPath} — ${blockIssues}/${blockCount} blocks missing translations\x1b[0m`
      );
      for (const issue of fileIssues) {
        console.log(
          `    \x1b[33m- ${issue.context}: missing ${issue.missing.join(", ")}\x1b[0m`
        );
      }
    }
  }
}

// ---------------------------------------------------------------------------
// D. JSON 翻譯檔檢查
// ---------------------------------------------------------------------------

function checkJsonTranslations(): void {
  console.log("\n\x1b[34m📁 JSON Translation Files (lib/i18n/translations/)\x1b[0m");

  const translationsDir = join(ROOT, "lib", "i18n", "translations");

  const jsonFiles: Record<string, string> = {};
  try {
    const entries = readdirSync(translationsDir);
    for (const entry of entries) {
      if (entry.endsWith(".json")) {
        const langCode = entry.replace(".json", "");
        jsonFiles[langCode] = join(translationsDir, entry);
      }
    }
  } catch {
    console.log("  (translations directory not found)");
    return;
  }

  totalFilesChecked += Object.keys(jsonFiles).length;

  // 檢查三語是否都存在
  const missingJsonLangs = LANGUAGES.filter((l) => !(l in jsonFiles));
  if (missingJsonLangs.length > 0) {
    console.log(
      `  \x1b[33m⚠️  Missing JSON files for: ${missingJsonLangs.join(", ")}\x1b[0m`
    );
    totalMissing += missingJsonLangs.length;
  }

  // 載入所有 JSON
  const jsonData: Record<string, unknown> = {};
  for (const [lang, filePath] of Object.entries(jsonFiles)) {
    try {
      jsonData[lang] = JSON.parse(readFileSync(filePath, "utf-8"));
    } catch (err) {
      console.log(
        `  \x1b[31m❌ ${rel(filePath)} — parse error: ${(err as Error).message}\x1b[0m`
      );
    }
  }

  // 以 en.json 為基準，比較其他語言的 key
  if (!jsonData.en) {
    console.log("  \x1b[31m❌ en.json not found — cannot compare\x1b[0m");
    return;
  }

  const enKeys = getKeyPaths(jsonData.en);
  let jsonIssueCount = 0;

  for (const lang of LANGUAGES.filter((l) => l !== "en")) {
    if (!jsonData[lang]) continue;

    const langKeys = getKeyPaths(jsonData[lang]);
    const missingKeys = enKeys.filter((k) => !langKeys.includes(k));
    const extraKeys = langKeys.filter((k) => !enKeys.includes(k));

    for (const key of missingKeys) {
      console.log(
        `    \x1b[33m- ${lang}.json missing key: ${key}\x1b[0m`
      );
      issues.push({
        file: `lib/i18n/translations/${lang}.json`,
        path: key,
        missingLangs: [lang],
      });
      jsonIssueCount++;
      totalMissing++;
    }
    for (const key of extraKeys) {
      console.log(
        `    \x1b[36m- ${lang}.json extra key: ${key}\x1b[0m`
      );
    }
  }

  totalEntriesVerified += enKeys.length * Object.keys(jsonData).length;

  if (jsonIssueCount === 0 && missingJsonLangs.length === 0) {
    console.log(
      `  \x1b[32m✅ All ${Object.keys(jsonFiles).length} JSON files present — ${enKeys.length} keys matched across languages\x1b[0m`
    );
  }
}

// ---------------------------------------------------------------------------
// 主程式
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log(
    "\n\x1b[1m🌐 i18n Translation Coverage Report\x1b[0m"
  );
  console.log("=====================================");
  console.log(`Languages: ${LANGUAGES.join(", ")}`);
  console.log(`Project root: ${ROOT}`);

  await checkContentFiles();
  checkDataFiles();
  checkComponentFiles();
  checkJsonTranslations();

  // 總結
  console.log("\n\x1b[1mSummary:\x1b[0m");
  console.log(`  📂 ${totalFilesChecked} files checked`);
  console.log(`  ✅ ${totalEntriesVerified} translation entries verified`);

  if (totalMissing === 0) {
    console.log(`  \x1b[32m✅ No missing translations found!\x1b[0m`);
  } else {
    console.log(`  \x1b[33m⚠️  ${totalMissing} missing translations found\x1b[0m`);

    // 列出所有問題
    if (issues.length > 0) {
      console.log("\n\x1b[1mDetailed Issues:\x1b[0m");
      for (const issue of issues) {
        console.log(
          `  - ${issue.file} > ${issue.path}: missing ${issue.missingLangs.join(", ")}`
        );
      }
    }
  }

  console.log("");
  process.exit(totalMissing > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(2);
});
