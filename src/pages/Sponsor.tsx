import { useEffect, useState } from 'react'
import { MacWindowDemo } from '../components/demos-macos'
import { useI18n } from '../i18n/LanguageContext'

function useCounter(target: number, duration = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf: number
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return n
}

function Tier({ price, unit, title, children, featured }: { price: string; unit: string; title: string; children: React.ReactNode; featured?: boolean }) {
  return (
    <div className={`flex flex-col rounded-xl border p-6 ${featured ? 'border-ink bg-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]' : 'border-hairline bg-white'}`}>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl tracking-tight">{price}</span>
        <span className="text-[12px] text-ink-3">{unit}</span>
      </div>
      <h3 className="mt-1 text-[15px] font-semibold">{title}</h3>
      <div className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-2">{children}</div>
    </div>
  )
}

export default function Sponsor() {
  const { ui } = useI18n()
  const s = ui.sponsor
  const pageviews = useCounter(1284930)
  const countries = useCounter(118)
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="pb-10 pt-14 text-center">
        <p className="eyebrow mb-3">{s.eyebrow}</p>
        <h1 className="mx-auto max-w-2xl font-display text-[40px] leading-[1.08] tracking-tight sm:text-[52px]">
          {s.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-2">{s.sub}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-hairline bg-white p-6 text-center">
          <div className="eyebrow mb-2">{s.liveAudience}</div>
          <div className="font-display text-5xl tracking-tight">{pageviews.toLocaleString()}</div>
          <p className="mt-1 text-[12px] text-ink-3">{s.liveAudienceNote}</p>
        </div>
        <div className="rounded-xl border border-hairline bg-white p-6 text-center">
          <div className="eyebrow mb-2">{s.globalReach}</div>
          <div className="font-display text-5xl tracking-tight">{countries}</div>
          <p className="mt-1 text-[12px] text-ink-3">{s.globalReachNote}</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl tracking-tight">{s.startedTitle}</h2>
        <div className="mt-4 rounded-xl border border-hairline bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-orange-300 text-lg">🥔</span>
            <div>
              <div className="text-[14px] font-semibold">🥔🥔🥔</div>
              <div className="font-mono-ui text-[11px] text-ink-3">@argofowl</div>
            </div>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed">{s.quote}</p>
          <div className="mt-4 flex flex-wrap gap-4 border-t border-hairline pt-3 font-mono-ui text-[11px] text-ink-3">
            <span>{s.statViews}</span>
            <span>{s.statLikes}</span>
            <span>{s.statBookmarks}</span>
            <span>{s.statReplies}</span>
          </div>
        </div>
        <p className="mt-3 text-[13px] text-ink-2">{s.startedNote}</p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl tracking-tight">{s.waysTitle}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Tier price={s.foundingPrice} unit={s.foundingUnit} title={s.foundingTitle} featured>
            <p>{s.foundingBody}</p>
            <div className="mt-4 rounded-lg border border-hairline bg-paper p-3">
              <div className="mb-2 flex items-center justify-center gap-2 border-b border-hairline pb-1.5 font-mono-ui text-[9px] uppercase tracking-[0.14em] text-ink-3">
                <span>{ui.sponsorLine.label}</span>
                <span className="text-ink underline decoration-dotted underline-offset-4">{ui.sponsorLine.link}</span>
              </div>
              <div className="pointer-events-none mx-auto max-w-[220px] scale-[0.72] opacity-80 [&>div]:h-auto">
                <MacWindowDemo />
              </div>
            </div>
          </Tier>
          <Tier price={s.supporterPrice} unit={s.supporterUnit} title={s.supporterTitle}>
            <p>{s.supporterBody}</p>
            <div className="mt-4 rounded-lg border border-hairline bg-paper p-4">
              <div className="font-display text-lg">name that ui</div>
              <p className="mt-2 text-[11px] text-ink-3">
                supported by <span className="underline decoration-dotted underline-offset-4">Your studio</span>
              </p>
            </div>
          </Tier>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-hairline bg-white p-6">
          <h3 className="text-[15px] font-semibold">{s.whatYouGetTitle}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{s.whatYouGetBody}</p>
        </div>
        <div className="rounded-xl border border-hairline bg-white p-6">
          <h3 className="text-[15px] font-semibold">{s.whatStaysTitle}</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed text-ink-2">
            {s.whatStays.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 rounded-xl border border-ink bg-ink p-8 text-center text-white">
        <h2 className="font-display text-3xl tracking-tight">{s.ctaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-white/70">{s.ctaBody}</p>
        <a
          href="mailto:sponsor@namethatui.com"
          className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-ink hover:opacity-90"
        >
          sponsor@namethatui.com
        </a>
      </section>
    </main>
  )
}
