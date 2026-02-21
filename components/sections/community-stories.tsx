"use client"

import { useState, useEffect } from 'react'
import { useLanguage, type Language } from '@/lib/i18n/language-context'

interface Story {
  name: string
  role: string
  quote: string
  impact: string
  image: string
  tag: string
}

interface SectionText {
  sectionLabel: string
  sectionTitle: string
}

const stories: Record<Language, Story[]> = {
  "zh-TW": [
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
  ],
  en: [
    {
      name: "Emily Zhang",
      role: "Junior student at a local university, dual major in Art & Technology",
      quote: "At university, we study classical arts alongside modern technology. The revitalization plan has brought more internship and job opportunities near campus — my classmates no longer have to leave the community after graduation.",
      impact: "120+ new internships near campus",
      image: "👩🏻‍🎓",
      tag: "Education"
    },
    {
      name: "Carlos Rivera",
      role: "Local restaurant owner, Middletown resident for 15 years",
      quote: "The revitalization plan brought new residents and visitors. My restaurant went from barely surviving to fully booked every night. I even opened a second location and hired 8 new employees.",
      impact: "Monthly revenue up $18,000",
      image: "👨🏽‍🍳",
      tag: "Small Business"
    },
    {
      name: "David Park",
      role: "Former logistics worker, now Data Analyst at the Tech & Media Park",
      quote: "Through the park's career transition program, I switched from warehouse logistics to data analytics at age 38. Beyond doubling my salary, I finally found a clear career path.",
      impact: "Annual salary up $52,000",
      image: "👨🏻‍💻",
      tag: "Career Change"
    }
  ],
  es: [
    {
      name: "Emily Zhang",
      role: "Estudiante universitaria, doble especialización en Arte y Tecnología",
      quote: "En la universidad, estudiamos artes clásicas junto con tecnología moderna. El plan de revitalización ha traído más oportunidades de pasantías y empleo cerca del campus.",
      impact: "120+ nuevas pasantías",
      image: "👩🏻‍🎓",
      tag: "Educación"
    },
    {
      name: "Carlos Rivera",
      role: "Dueño de restaurante local, residente de Middletown por 15 años",
      quote: "El plan de revitalización trajo nuevos residentes y visitantes. Mi restaurante pasó de apenas sobrevivir a estar lleno todas las noches.",
      impact: "Ingresos mensuales +$18,000",
      image: "👨🏽‍🍳",
      tag: "Pequeñas Empresas"
    },
    {
      name: "David Park",
      role: "Ex trabajador de logística, ahora Analista de Datos en el Parque Tecnológico",
      quote: "A través del programa de transición profesional del parque, cambié de logística a análisis de datos a los 38 años.",
      impact: "Salario anual +$52,000",
      image: "👨🏻‍💻",
      tag: "Cambio de Carrera"
    }
  ]
}

const sectionTexts: Record<Language, SectionText> = {
  "zh-TW": {
    sectionLabel: "社區影響力故事",
    sectionTitle: "真實的改變，從人開始"
  },
  en: {
    sectionLabel: "Community Impact Stories",
    sectionTitle: "Real Change Starts with People"
  },
  es: {
    sectionLabel: "Historias de Impacto",
    sectionTitle: "El Cambio Real Comienza con las Personas"
  }
}

export function CommunityStories() {
  const { language } = useLanguage()
  const [current, setCurrent] = useState(0)

  const localizedStories = stories[language] || stories["zh-TW"]
  const localizedText = sectionTexts[language] || sectionTexts["zh-TW"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % localizedStories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [localizedStories.length])

  const story = localizedStories[current]

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-6 w-1 bg-orange-600" />
          <span className="text-sm font-mono uppercase tracking-widest text-slate-500">
            {localizedText.sectionLabel}
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {localizedText.sectionTitle}
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
            {localizedStories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'bg-orange-600 w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
