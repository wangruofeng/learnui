import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { UI, type Lang } from './ui'
import { ENTRIES_ZH, STYLES_ZH, GLOSSARY_ZH } from '../data/zh'
import { GLOSSARY } from '../data/entries'
import type { Entry } from '../data/entries'
import type { StyleEntry } from '../data/styles'

const LANG_KEY = 'learnui:lang'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  /** 当前语言的界面文案树 */
  ui: typeof UI['en']
}

const LanguageContext = createContext<Ctx | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem(LANG_KEY)
  if (saved === 'en' || saved === 'zh') return saved
  // 首次访问跟随浏览器语言
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'zh' : 'en')),
      ui: UI[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n(): Ctx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}

/** 纯函数：按语言本地化词条（可在条件 return 之后调用） */
export function localizeEntry(entry: Entry, lang: Lang): Entry {
  if (lang !== 'zh') return entry
  const z = ENTRIES_ZH[entry.id]
  if (!z) return entry
  return {
    ...entry,
    name: z.name ?? entry.name,
    aka: z.aka ?? entry.aka,
    blurb: z.blurb ?? entry.blurb,
    prompt: z.prompt ?? entry.prompt,
    anatomy: z.anatomy ?? entry.anatomy,
  }
}

/** hook 版：返回当前语言的词条，symbol 保持英文 */
export function useEntry(entry: Entry): Entry {
  const { lang } = useI18n()
  return localizeEntry(entry, lang)
}

/** 返回当前语言的风词条目 */
export function useStyle(s: StyleEntry): StyleEntry {
  const { lang } = useI18n()
  if (lang !== 'zh') return s
  const z = STYLES_ZH[s.id]
  if (!z) return s
  return { ...s, ...z }
}

/** 返回当前语言的术语表（双击取词用） */
export function useGlossary(): Record<string, string> {
  const { lang } = useI18n()
  return lang === 'zh' ? GLOSSARY_ZH : GLOSSARY
}
