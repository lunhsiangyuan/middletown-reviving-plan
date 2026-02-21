# Team Atlas — Civic Gravity 設計實作簡報

## 角色

你是 Team Atlas 的首席設計工程師，負責將 Middletown Reviving Plan 網站重構成「聯邦政策白皮書美學」。
這份設計針對政府補助官員（ESD、HUD、NYS 州參議員辦公室），傳遞「官方可信度」與「政策嚴肅感」。

## 工作環境

```
工作目錄：~/Desktop/middletown-hackathon/team-atlas/
Git Branch：hackathon/team-atlas
Dev Port：3001
啟動指令：cd ~/Desktop/middletown-hackathon/team-atlas && bun dev --port 3001
```

**注意**：node_modules 已安裝（bun install 已執行）。直接修改檔案，無需重新安裝。

## 設計 DNA — Civic Gravity

**靈感**：US Federal Register、NYS Executive Budget、UN Sustainable Development Reports
**核心感受**：克制、結構感、官方重量感，讓政府官員感覺「這是嚴肅的政策提案」

## 色彩系統（全面覆寫）

```css
主色：slate-900 (#0f172a)     ← 取代現有 indigo-950
強調色：orange-600 (#ea580c)  ← 取代現有 amber-500
Hero 背景漸層：from-slate-900 via-slate-800 to-slate-900
背景層次：slate-50（頁面底色）→ white（卡片）→ slate-100（交替行）
邊框：slate-200（輕型）/ slate-300（中型）
文字：slate-900（標題）/ slate-600（正文）/ slate-400（輔助）
成功色：emerald-700（政策達成標記）
```

## 字型調整

- 保留現有 Noto Serif TC 700（標題字體，中文優先）
- 數字統計改用：`font-mono tabular-nums font-bold tracking-tight`
- 移除所有 italic（政府文件不用斜體）
- CTA 按鈕：全大寫 `uppercase tracking-widest`

## 三大差異化功能實作

### 功能 1：政策指標進度條（改造 stats-section.tsx）

將現有的統計數字格改為「目標 vs 現狀」進度條格式。

**實作規格**：
```tsx
// 每個統計格的新結構
<div className="bg-white border border-slate-200 p-6">
  <div className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">
    {stat.label}
  </div>
  <div className="flex items-end gap-3 mb-3">
    <span className="text-4xl font-mono font-bold text-slate-900 tabular-nums">
      {stat.current}
    </span>
    <span className="text-sm text-slate-500 mb-1">/ 目標 {stat.target}</span>
  </div>
  <div className="w-full bg-slate-100 h-2 rounded-full">
    <div
      className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
      style={{ width: `${stat.progress}%` }}
    />
  </div>
  <div className="text-xs text-slate-400 mt-1">{stat.progress}% 達成</div>
</div>
```

數據來源：使用硬編碼的政策目標數字（不修改 lib/data/）：
- 就業機會：現狀 2,847 / 目標 5,000 / 進度 57%
- 住宅單位：現狀 450 / 目標 1,200 / 進度 38%
- 投資金額（M）：現狀 $234 / 目標 $500 / 進度 47%
- 計畫完成率：現狀 12 / 目標 28 / 進度 43%

### 功能 2：合規標章橫幅（header.tsx 正下方）

在 header 正下方插入一條橫幅，顯示合規標章：

```tsx
// 插入在 <header> 標籤之後的固定橫幅
<div className="bg-slate-900 border-b border-orange-600/30 py-2">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center gap-6 text-xs text-slate-400">
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-orange-600"></span>
        NYS ESD Certified Proposal
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-orange-600"></span>
        HUD Community Development Block Grant Eligible
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-orange-600"></span>
        City Council District 8 Endorsed
      </span>
    </div>
    <div className="text-xs text-slate-500 font-mono">
      Proposal Ref: MRP-2026-NYS-001
    </div>
  </div>
</div>
```

**注意**：這個橫幅應該在 header 組件「之後」渲染，可加在 layout.tsx 或在 header.tsx 內部末尾。

### 功能 3：Executive Summary PDF CTA（cta-section.tsx）

在現有 CTA 格中新增第四張卡片（PDF 下載）：

```tsx
// 新增在現有三格之後
<div className="border border-slate-300 bg-white p-6 flex flex-col items-start gap-4">
  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
    </svg>
  </div>
  <div>
    <h3 className="font-serif font-bold text-slate-900 text-lg">政策提案摘要</h3>
    <p className="text-slate-600 text-sm mt-1">含財務預測、時間軸、合規評估的完整執行摘要</p>
  </div>
  <button className="mt-auto border border-slate-900 text-slate-900 px-4 py-2 text-sm font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors">
    下載 PDF →
  </button>
</div>
```

## 組織名稱中性化

在整個 team-atlas worktree 中搜尋並替換：
- 「乾淨世界」 → 「科技與影音平台公司」
- 「神韻」 → 「文化與零售投資機構」

搜尋指令：
```bash
grep -r "乾淨世界\|神韻" ~/Desktop/middletown-hackathon/team-atlas/ --include="*.tsx" --include="*.ts" -l
```

## Hero 區塊修改

在 `components/sections/hero.tsx` 中：

1. 背景漸層改為：`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
2. eyebrow 標籤文字改為：`OFFICIAL PROPOSAL · NYS ESD 2026`
3. eyebrow badge 樣式：`bg-orange-600/20 text-orange-400 border border-orange-600/40`
4. CTA 按鈕主要色：`bg-orange-600 hover:bg-orange-700`
5. 統計數字區域底色：`bg-slate-800/50 border border-slate-700`

## app/globals.css 新增主題變數

在 globals.css 末尾新增：

```css
/* === Team Atlas: Civic Gravity Theme === */
.theme-civic {
  --primary: 15 23 42;        /* slate-900 */
  --primary-foreground: 255 255 255;
  --accent: 234 88 12;        /* orange-600 */
  --accent-foreground: 255 255 255;
  --background: 248 250 252;  /* slate-50 */
  --card: 255 255 255;
  --border: 226 232 240;      /* slate-200 */
  --muted: 100 116 139;       /* slate-500 */
}
```

## 完成標準（Commit Message 格式）

所有修改完成後，執行：
```bash
cd ~/Desktop/middletown-hackathon/team-atlas
git add -A
git commit -m "feat(atlas): Civic Gravity design — federal policy aesthetic

- slate-900/orange-600 color system replacing indigo/amber
- Policy progress bars in stats section
- Compliance badge banner below header
- Executive Summary PDF CTA card
- Organization name neutralization"
```

## 驗證清單

- [ ] `bun run build` 通過（零 TypeScript 錯誤）
- [ ] Port 3001 首頁：slate-900 深藍底色，視覺上顯著有別於現有設計
- [ ] Header 下方：合規標章橫幅可見
- [ ] Stats section：進度條格式正確顯示
- [ ] CTA section：四格卡片（含 PDF 下載）
- [ ] 搜尋不到「乾淨世界」「神韻」字樣
- [ ] 行動裝置（375px）無破版

## 注意事項

1. **不修改 lib/data/ 下的任何 .ts 檔案**（資料層保持不變）
2. **不大幅修改內容文字**，只改設計語言
3. Tailwind CSS 4 語法（已使用 @import "tailwindcss"，不需要 @tailwind 指令）
4. 現有的 Leaflet 地圖元件不動
5. 如果遇到 TypeScript 類型錯誤，優先修復而非忽略
