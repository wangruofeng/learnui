import { useState } from 'react'
import { STYLES } from '../data/styles'
import { DEMO_REGISTRY } from '../components/demo-registry'
import { useI18n, useStyle } from '../i18n/LanguageContext'

function StyleCard({ id }: { id: (typeof STYLES)[number] }) {
  const { ui } = useI18n()
  const [copied, setCopied] = useState(false)
  const s = useStyle(id)
  const Demo = DEMO_REGISTRY[s.id]
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(s.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* noop */
    }
  }
  return (
    <div className="entry-card flex flex-col overflow-hidden rounded-lg border border-hairline bg-white">
      {Demo && <Demo />}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-ink">{s.name}</h3>
          <span className="font-mono-ui text-[10px] text-ink-3">{s.aka}</span>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{s.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {s.traits.map((t) => (
            <span key={t} className="rounded-full border border-hairline px-2 py-0.5 text-[10px] text-ink-2">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-start justify-between gap-2 rounded-md border border-hairline bg-paper p-2.5">
          <p className="text-[11px] leading-relaxed text-ink-2">{s.prompt}</p>
          <button
            onClick={copy}
            className="shrink-0 rounded border border-hairline bg-white px-2 py-0.5 font-mono-ui text-[10px] text-ink-2 hover:text-ink"
          >
            {copied ? ui.entryCard.copied : ui.entryCard.copy}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Styles() {
  const { ui } = useI18n()
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="pb-10 pt-14 text-center">
        <p className="eyebrow mb-4">{ui.styles.eyebrow}</p>
        <h1 className="font-display text-[44px] leading-[1.05] tracking-tight sm:text-[60px]">
          {ui.styles.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-2">
          {ui.styles.sub}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STYLES.map((s) => (
          <StyleCard key={s.id} id={s} />
        ))}
      </section>
    </main>
  )
}
