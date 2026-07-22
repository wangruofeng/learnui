import { useI18n } from '../i18n/LanguageContext'

export default function Methodology() {
  const { ui } = useI18n()
  const m = ui.methodology
  return (
    <main className="mx-auto max-w-3xl px-4 pb-8 pt-14">
      <p className="eyebrow mb-3">{m.eyebrow}</p>
      <h1 className="font-display text-[40px] leading-tight tracking-tight">{m.title}</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{m.intro}</p>

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight">{m.howTitle}</h2>
        <ol className="mt-4 space-y-4">
          {m.steps.map(([title, body], i) => (
            <li key={title} className="flex gap-4 rounded-lg border border-hairline bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline-dark font-mono-ui text-[12px]">
                {i + 1}
              </span>
              <div>
                <div className="text-[14px] font-semibold">{title}</div>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-2">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight">{m.sourcesTitle}</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{m.sourcesSub}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-hairline bg-white p-4">
            <div className="text-[14px] font-semibold">{m.card1Title}</div>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-2">{m.card1Body}</p>
            <div className="mt-2 flex gap-1.5 font-mono-ui text-[10px] text-ink-3">
              <span className="rounded border border-hairline px-1.5 py-0.5">WAI-ARIA</span>
              <span className="rounded border border-hairline px-1.5 py-0.5">ARIA APG</span>
              <span className="rounded border border-hairline px-1.5 py-0.5">WCAG</span>
            </div>
          </div>
          <div className="rounded-lg border border-hairline bg-white p-4">
            <div className="text-[14px] font-semibold">{m.card2Title}</div>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-2">{m.card2Body}</p>
            <div className="mt-2 flex gap-1.5 font-mono-ui text-[10px] text-ink-3">
              <span className="rounded border border-hairline px-1.5 py-0.5">WHATWG HTML</span>
              <span className="rounded border border-hairline px-1.5 py-0.5">MDN Web Docs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <div className="rounded-lg border border-hairline bg-white p-5">
          <h2 className="font-display text-xl tracking-tight">{m.realTitle}</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{m.realBody}</p>
        </div>
        <div className="rounded-lg border border-hairline bg-white p-5">
          <h2 className="font-display text-xl tracking-tight">{m.disagreeTitle}</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{m.disagreeBody}</p>
        </div>
      </section>

      <p className="mt-10 border-t border-hairline pt-6 text-[12px] leading-relaxed text-ink-3">{m.disclaimer}</p>
    </main>
  )
}
