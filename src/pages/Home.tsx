import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ENTRIES, type Entry } from '../data/entries'
import { ENTRIES_ZH } from '../data/zh'
import { EntryCard } from '../components/EntryCard'
import { EntryDetail } from '../components/EntryDetail'
import { TrafficLights } from '../components/demos-macos'
import { useI18n } from '../i18n/LanguageContext'
import { splitBr } from '../i18n/ui'

/* ------------------------------------------------------------------ */
/* search                                                              */
/* ------------------------------------------------------------------ */

function score(entry: Entry, q: string): number {
  const query = q.toLowerCase().trim()
  if (!query) return 1
  const words = query.split(/\s+/)
  let s = 0
  const hay = [entry.name, entry.symbol, entry.blurb, ...entry.aka].map((x) => x.toLowerCase())
  for (const w of words) {
    if (entry.name.toLowerCase().includes(w)) s += 5
    else if (entry.aka.some((a) => a.toLowerCase().includes(w))) s += 4
    else if (hay.some((h) => h.includes(w))) s += 2
    else return 0
  }
  return s
}

/** 按当前语言本地化词条，使中文搜索能匹配中文内容 */
function useLocalizedEntries(): Entry[] {
  const { lang } = useI18n()
  return useMemo(
    () =>
      ENTRIES.map((e) => {
        if (lang !== 'zh') return e
        const z = ENTRIES_ZH[e.id]
        return z ? { ...e, ...z } : e
      }),
    [lang],
  )
}

/* ------------------------------------------------------------------ */
/* featured anatomy (hero)                                             */
/* ------------------------------------------------------------------ */

function FeaturedAnatomy() {
  const { ui } = useI18n()
  const [active, setActive] = useState<number | null>(null)
  const parts = ui.home.featured.parts
  const pins = [
    { n: 1, style: { left: 26, top: 15 } },
    { n: 2, style: { right: 26, top: 15 } },
    { n: 3, style: { left: 30, top: 78 } },
    { n: 4, style: { right: 46, top: 78 } },
  ]
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-hairline bg-white p-6">
        <div className="relative">
          <div className="mac-window w-64">
            <div className={`mac-titlebar flex items-center gap-2 px-2 py-2 transition-colors ${active === 2 ? 'bg-blue-100' : ''}`}>
              <span className={active === 1 ? 'rounded ring-2 ring-ink/60 ring-offset-1' : ''}>
                <TrafficLights />
              </span>
              <span className="flex-1 text-center text-[9px] font-semibold text-neutral-600">Notes</span>
              <span className="text-[9px] text-neutral-400">⌕</span>
            </div>
            <div className="flex">
              <div className={`w-20 space-y-1 border-r border-neutral-200 p-1.5 transition-colors ${active === 3 ? 'bg-blue-100/70' : 'bg-neutral-100/80'}`}>
                <div className="rounded bg-blue-500/15 px-1 py-0.5 text-[8px] text-blue-700">Groceries</div>
                <div className="px-1 py-0.5 text-[8px] text-neutral-500">Ideas</div>
              </div>
              <div className={`flex-1 space-y-1 p-2 transition-colors ${active === 4 ? 'bg-blue-50' : ''}`}>
                <div className="h-1.5 w-4/5 rounded bg-neutral-200" />
                <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
                <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
                <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
              </div>
            </div>
          </div>
          {pins.map((p) => (
            <button
              key={p.n}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(null)}
              style={p.style}
              className={`anatomy-pin absolute flex h-6 w-6 items-center justify-center rounded-full border border-hairline-dark bg-white font-mono-ui text-[11px] shadow ${active === p.n ? 'is-active' : ''}`}
            >
              {p.n}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="eyebrow mb-2">{ui.home.featured.eyebrow}</p>
        <p className="mb-3 text-[14px] text-ink-2">{ui.home.featured.hint}</p>
        <ol className="overflow-hidden rounded-lg border border-hairline bg-white">
          {parts.map((p) => (
            <li
              key={p.n}
              onMouseEnter={() => setActive(p.n)}
              onMouseLeave={() => setActive(null)}
              className={`anatomy-row flex cursor-default items-center gap-3 border-b border-hairline px-3.5 py-2.5 last:border-b-0 ${active === p.n ? 'is-active' : ''}`}
            >
              <span className="anatomy-pin flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline-dark font-mono-ui text-[11px]">
                {p.n}
              </span>
              <span>
                <span className="block text-[13px] font-medium">{p.label}</span>
                <span className={`block text-[11px] ${active === p.n ? 'text-white/70' : 'text-ink-3'}`}>{p.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* translation table                                                   */
/* ------------------------------------------------------------------ */

function TranslationTable() {
  const { ui } = useI18n()
  const [q, setQ] = useState('')
  const rows = ui.home.table.rows.filter((r) => r.join(' ').toLowerCase().includes(q.toLowerCase()))
  return (
    <section className="mt-16">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl tracking-tight">{ui.home.table.title}</h2>
          <p className="mt-1 text-[13px] text-ink-2">{ui.home.table.sub}</p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={ui.home.table.placeholder}
          className="w-52 rounded-md border border-hairline bg-white px-3 py-1.5 text-[12px] outline-none focus:border-hairline-dark"
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border-hairline bg-white">
        <table className="w-full min-w-[640px] text-left text-[12px]">
          <thead>
            <tr className="border-b border-hairline">
              {ui.home.table.headers.map((h) => (
                <th key={h} className="px-3.5 py-2.5 font-mono-ui text-[10px] font-medium uppercase tracking-[0.14em] text-ink-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-hairline last:border-b-0 hover:bg-neutral-50/60">
                <td className="px-3.5 py-2.5 text-ink-2">“{r[0]}”</td>
                {r.slice(1).map((c, i) => (
                  <td key={i} className="px-3.5 py-2.5">
                    <code className={`font-mono-ui text-[11px] ${c === '—' ? 'text-ink-3' : 'text-ink'}`}>{c}</code>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

type Filter = 'all' | 'web' | 'macos'

export default function Home() {
  const { ui } = useI18n()
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState<Entry | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const entries = useLocalizedEntries()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(() => {
    return entries
      .filter((e) => (filter === 'all' ? true : e.platform === filter))
      .map((e) => ({ e, s: score(e, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => (q ? b.s - a.s : 0))
      .map((x) => x.e)
  }, [entries, q, filter])

  const counts = useMemo(
    () => ({
      all: ENTRIES.length,
      web: ENTRIES.filter((e) => e.platform === 'web').length,
      macos: ENTRIES.filter((e) => e.platform === 'macos').length,
    }),
    [],
  )

  const h = ui.home
  return (
    <main id="top" className="mx-auto max-w-6xl px-4">
      {/* hero */}
      <section className="pb-10 pt-14 text-center">
        <p className="eyebrow mb-4">{h.hero.eyebrow}</p>
        <h1 className="font-display text-[44px] leading-[1.05] tracking-tight sm:text-[64px]">
          {h.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-2">
          {splitBr(h.hero.sub).map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <Link
          to="/styles"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-1.5 text-[12px] text-ink-2 hover:border-hairline-dark"
        >
          <span className="rounded-sm bg-orange-600 px-1.5 py-px font-mono-ui text-[9px] font-medium uppercase tracking-wider text-white">{h.hero.ctaBadge}</span>
          {h.hero.cta}
          <span aria-hidden>→</span>
        </Link>

        {/* search */}
        <div className="relative mx-auto mt-8 max-w-xl">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={h.hero.searchPlaceholder}
            className="w-full rounded-xl border border-hairline bg-white px-4 py-3.5 pr-16 text-[15px] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] outline-none placeholder:font-display placeholder:italic placeholder:text-ink-3 focus:border-hairline-dark"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-hairline bg-paper px-1.5 py-0.5 font-mono-ui text-[10px] text-ink-3">
            ⌘K
          </kbd>
        </div>
        <p className="mt-3 font-mono-ui text-[11px] text-ink-3">{h.hero.searchHint}</p>
      </section>

      {/* featured anatomy */}
      <FeaturedAnatomy />

      {/* dictionary */}
      <section className="mt-16">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight">{h.dict.title}</h2>
          <div className="flex items-center gap-1 rounded-full border border-hairline bg-white p-1">
            {(['all', 'web', 'macos'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1 font-mono-ui text-[11px] uppercase tracking-wider transition-colors ${
                  filter === f ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {f === 'all' ? `${h.dict.filterAll} ${counts.all}` : f === 'web' ? `${h.dict.filterWeb} ${counts.web}` : `${h.dict.filterMac} ${counts.macos}`}
              </button>
            ))}
          </div>
        </div>

        {results.length === 0 ? (
          <div className="rounded-lg border border-dashed border-hairline-dark bg-white/60 px-6 py-16 text-center">
            <p className="font-display text-xl italic text-ink-2">{h.dict.emptyTitle}</p>
            <p className="mt-1 text-[13px] text-ink-3">{h.dict.emptyHint}</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((e) => (
              <EntryCard key={e.id} entry={e} onOpen={setOpen} />
            ))}
          </div>
        )}
      </section>

      <TranslationTable />

      <EntryDetail entry={open} onClose={() => setOpen(null)} />
    </main>
  )
}
