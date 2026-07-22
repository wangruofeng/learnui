import { useEffect, useState } from 'react'
import { useGlossary } from '../i18n/LanguageContext'

interface Hit {
  word: string
  def: string
  x: number
  y: number
}

export function DefinePopover() {
  const [hit, setHit] = useState<Hit | null>(null)
  const glossary = useGlossary()

  useEffect(() => {
    const onDoubleClick = (e: MouseEvent) => {
      const sel = window.getSelection()
      // 保留小写字母、空白与中文字符（兼容中英取词）
      const raw = sel?.toString().trim().toLowerCase().replace(/[^a-z\s一-龥]/g, '') ?? ''
      if (!raw) {
        setHit(null)
        return
      }
      const key = Object.keys(glossary)
        .sort((a, b) => b.length - a.length)
        .find((k) => {
          const kl = k.toLowerCase()
          return raw === kl || raw.includes(kl)
        })
      if (!key) {
        setHit(null)
        return
      }
      setHit({ word: key, def: glossary[key], x: e.clientX, y: e.clientY })
    }
    const dismiss = () => setHit(null)
    document.addEventListener('dblclick', onDoubleClick)
    document.addEventListener('click', dismiss)
    document.addEventListener('scroll', dismiss, true)
    return () => {
      document.removeEventListener('dblclick', onDoubleClick)
      document.removeEventListener('click', dismiss)
      document.removeEventListener('scroll', dismiss, true)
    }
  }, [glossary])

  if (!hit) return null
  const left = Math.min(Math.max(12, hit.x - 120), window.innerWidth - 260)
  const top = hit.y + 18 > window.innerHeight - 110 ? hit.y - 110 : hit.y + 18

  return (
    <div
      className="fixed z-[60] w-60 rounded-lg border border-hairline bg-ink p-3 text-white shadow-2xl"
      style={{ left, top }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-white/50">{hit.word}</div>
      <p className="mt-1 text-[12px] leading-relaxed text-white/90">{hit.def}</p>
    </div>
  )
}
