"use client"

import { useState, useEffect } from 'react'

const stories = [
  {
    name: "Emily Zhang",
    role: "在地大學大三學生，藝術與科技雙主修",
    quote: "在大學裡，我們同時學習古典藝術和現代科技。復甦計畫讓校園周邊有了更多實習和就業機會，我的同學們畢業後不用離開這個社區了。",
    impact: "校區周邊新增 120+ 實習崗位",
    image: "👩🏻‍🎓",
    tag: "教育發展"
  },
  {
    name: "Carlos Rivera",
    role: "在地餐廳業主，Middletown 居民 15 年",
    quote: "復甦計畫帶來了新的住戶和遊客，我的餐廳從勉強維持變成每晚客滿。我甚至開了第二家分店，僱用了 8 位新員工。",
    impact: "月營業額增加 $18,000",
    image: "👨🏽‍🍳",
    tag: "小企業成長"
  },
  {
    name: "David Park",
    role: "前物流業員工，現任科技與媒體園區資料分析師",
    quote: "透過園區的職業轉型計畫，我在 38 歲從倉儲物流轉入資料分析領域。薪資翻倍之外，更重要的是我終於有了職業發展的方向。",
    impact: "年薪提升 $52,000",
    image: "👨🏻‍💻",
    tag: "職業轉型"
  }
]

export function CommunityStories() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % stories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const story = stories[current]

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-6 w-1 bg-orange-600" />
          <span className="text-sm font-mono uppercase tracking-widest text-slate-500">
            社區影響力故事
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            真實的改變，從人開始
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-200 p-10 relative">
            {/* 引號裝飾 */}
            <div className="text-8xl text-orange-100 font-serif absolute top-4 left-6 leading-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              <p className="text-2xl italic text-slate-700 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
                {story.quote}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-4xl">{story.image}</div>
                <div>
                  <div className="font-semibold text-slate-900">{story.name}</div>
                  <div className="text-sm text-slate-500">{story.role}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-orange-600 font-mono font-medium">{story.impact}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{story.tag}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 導航點 */}
          <div className="flex justify-center gap-2 mt-6">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'bg-orange-600 w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`切換到第 ${i + 1} 個故事`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
