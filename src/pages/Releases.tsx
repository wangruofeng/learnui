import { useI18n } from '../i18n/LanguageContext'
import { RELEASES, formatReleaseDate } from '../data/releases'

export default function Releases() {
  const { lang, ui } = useI18n()
  const r = ui.releases

  return (
    <main className="mx-auto max-w-3xl px-4 pb-8 pt-14">
      <p className="eyebrow mb-3">{r.eyebrow}</p>
      <h1 className="font-display text-[40px] leading-tight tracking-tight">{r.title}</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{r.intro}</p>

      <div className="mt-12 space-y-14">
        {RELEASES.map((release) => (
          <section key={release.version} aria-labelledby={`release-${release.version}`}>
            <h2 id={`release-${release.version}`} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-release-version text-[34px] leading-none tracking-tight">v{release.version}</span>
              <time dateTime={release.date} className="font-mono-ui text-[13px] text-ink-3">
                {formatReleaseDate(release.date, lang)}
              </time>
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-ink-2 marker:font-mono-ui marker:text-[12px] marker:text-ink-3">
              {release.notes[lang].map((note) => (
                <li key={note.lead} className="pl-1">
                  <span className="font-semibold text-ink">{note.lead}</span>
                  <span className="text-ink-2">{lang === 'zh' ? '：' : ': '}{note.body}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  )
}
