import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import type { Entry } from '../data/entries'
import { DEMO_REGISTRY } from './demo-registry'
import { BadgeChipPillTagDemo } from './demos-web'
import { PlatformBadge } from './EntryCard'
import { useI18n, localizeEntry } from '../i18n/LanguageContext'

export function EntryDetail({ entry, onClose }: { entry: Entry | null; onClose: () => void }) {
  const { ui, lang } = useI18n()
  const d = ui.detail
  const [active, setActive] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setActive(null)
    setCopied(false)
    if (!entry) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [entry, onClose])

  // Lock background scroll while the panel is open
  useEffect(() => {
    if (!entry) return
    const { body, documentElement } = document
    const prevBody = body.style.overflow
    const prevHtml = documentElement.style.overflow
    body.style.overflow = 'hidden'
    documentElement.style.overflow = 'hidden'
    return () => {
      body.style.overflow = prevBody
      documentElement.style.overflow = prevHtml
    }
  }, [entry])

  if (!entry) return null
  const e = localizeEntry(entry, lang)
  const Demo = DEMO_REGISTRY[e.id]

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(e.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-neutral-950/45 backdrop-blur-[2px]" />
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-hairline bg-paper shadow-2xl sm:rounded-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-paper/95 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-xl tracking-tight">{e.name}</h2>
            <PlatformBadge platform={e.platform} isNew={e.isNew} />
          </div>
          <button onClick={onClose} className="rounded-full border border-hairline bg-white px-2.5 py-1 font-mono-ui text-[11px] text-ink-2 hover:text-ink">
            {d.esc}
          </button>
        </div>

        <div className="p-5">
          <div className="overflow-hidden rounded-lg border border-hairline bg-white [&>div]:h-52 [&>div]:rounded-none [&>div]:border-b-0">
            {Demo && (e.id === 'badge-chip-pill-tag'
              ? <BadgeChipPillTagDemo anatomyActive={active} onAnatomyActive={setActive} />
              : <Demo />)}
          </div>

          <div className={`mt-4 grid gap-4 ${e.anatomy ? 'sm:grid-cols-[1fr_240px]' : ''}`}>
            <div>
              <div className="eyebrow mb-1">{d.realName}</div>
              <code className="block rounded-md border border-hairline bg-white px-3 py-2 font-mono-ui text-[12px] text-ink">
                {e.symbol}
              </code>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{e.blurb}</p>

              <div className="eyebrow mb-1 mt-4">{d.findByTyping}</div>
              <div className="flex flex-wrap gap-1.5">
                {e.aka.map((a) => (
                  <span key={a} className="rounded-full border border-hairline bg-white px-2.5 py-0.5 text-[11px] text-ink-2">
                    “{a}”
                  </span>
                ))}
              </div>

              <div className="eyebrow mb-1 mt-4">{d.promptLabel}</div>
              <div className="relative rounded-md border border-hairline bg-ink p-3 pr-12 text-[12px] leading-relaxed text-neutral-200">
                {e.prompt}
                <button
                  onClick={copyPrompt}
                  aria-label={copied ? d.copied : d.copy}
                  title={copied ? d.copied : d.copy}
                  className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white/80 hover:bg-white/10"
                >
                  {copied ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
                </button>
              </div>
            </div>

            {e.anatomy && (
              <div>
                <div className="eyebrow mb-1">{d.parts}</div>
                <ol className="overflow-hidden rounded-md border border-hairline bg-white">
                  {e.anatomy.map((p) => (
                    <li
                      key={p.n}
                      onMouseEnter={() => setActive(p.n)}
                      onMouseLeave={() => setActive(null)}
                      className={`anatomy-row flex cursor-default items-start gap-2.5 border-b border-hairline px-3 py-2 last:border-b-0 ${active === p.n ? 'is-active' : ''}`}
                    >
                      <span className="anatomy-pin flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-hairline-dark font-mono-ui text-[10px]">
                        {p.n}
                      </span>
                      <span>
                        <span className="block text-[12px] font-medium">{p.label}</span>
                        {p.note && <span className={`block text-[11px] ${active === p.n ? 'text-white/70' : 'text-ink-3'}`}>{p.note}</span>}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
