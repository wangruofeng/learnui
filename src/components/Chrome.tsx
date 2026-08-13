import { Link, NavLink } from 'react-router'
import { Fragment, useEffect, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/ui'

export function SponsorLine() {
  const { ui } = useI18n()
  return (
    <div className="border-b border-hairline bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5">
        <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-ink-3">{ui.sponsorLine.label}</span>
        <Link to="/sponsor" className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-ink underline decoration-dotted underline-offset-4 hover:opacity-70">
          {ui.sponsorLine.link}
        </Link>
      </div>
    </div>
  )
}

/* 右上角语言切换：EN | 中文 */
function LangSwitch() {
  const { lang, setLang, ui } = useI18n()
  return (
    <div className="flex items-center rounded-full border border-hairline bg-white p-0.5" role="group" aria-label="language switch">
      {(['en', 'zh'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l as Lang)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
            lang === l ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink'
          }`}
        >
          {ui.langSwitch[l]}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { ui } = useI18n()
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-display text-[22px] leading-none tracking-tight text-ink">
          name <em className="not-italic opacity-60">that</em> ui
        </Link>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 rounded-full border border-hairline bg-white p-1">
            {[
              { to: '/', label: ui.nav.elements, end: true },
              { to: '/styles', label: ui.nav.styles, end: false },
              { to: '/releases', label: ui.nav.releases, end: false },
            ].map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                end={t.end}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-1 text-[12px] transition-colors ${
                    isActive ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink'
                  }`
                }
              >
                {t.label}
              </NavLink>
            ))}
          </nav>
          <LangSwitch />
        </div>
      </div>
    </header>
  )
}

function QrBox({ title, note, src }: { title: string; note: string; src?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <div className="flex items-center gap-3">
      {src ? (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={`放大查看${title}二维码`}
            className="shrink-0 cursor-zoom-in rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <img src={src} alt={title} className="h-20 w-20 rounded-md border border-hairline object-cover" />
          </button>
          {isOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${title}二维码`}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            >
              <div className="relative" onClick={(event) => event.stopPropagation()}>
                <img src={src} alt={title} className="max-h-[80vh] max-w-[80vw] rounded-lg bg-white shadow-2xl" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="关闭二维码预览"
                  className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-ink shadow-md"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-dashed border-hairline-dark bg-neutral-100 font-mono-ui text-[9px] uppercase tracking-wider text-ink-3">
          QR
        </div>
      )}
      <div>
        <div className="text-[13px] font-medium text-ink">{title}</div>
        <div className="text-[11px] text-ink-3">{note}</div>
      </div>
    </div>
  )
}

export function Footer() {
  const { ui } = useI18n()
  const f = ui.footer

  return (
    <footer className="mt-20 border-t border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* 品牌行 */}
        <div className="border-b border-hairline pb-8">
          <div>
            <div className="font-display text-[28px] leading-none tracking-tight">
              name <em className="not-italic opacity-60">that</em> ui
            </div>
            <p className="mt-2 font-mono-ui text-[11px] uppercase tracking-[0.14em] text-ink-3">{f.tagline}</p>
          </div>
        </div>

       {/* 关注与支持 */}
       <div className="grid gap-10 py-10 md:grid-cols-[140px_1fr]">
         <div className="eyebrow">{f.followTitle}</div>
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {/* 微信公众号 */}
             <QrBox title={f.wechatLabel} note={f.wechatNote} src="/wechat-qr.png" />
           {/* 打赏支持 */}
             <QrBox title={f.rewardLabel} note={f.rewardNote} src="/reward-qr.png" />
           {/* 社交与订阅 */}
            <div className="flex flex-col justify-center gap-2 text-[12px] text-ink-2 sm:col-span-2 lg:col-span-1">
             <a href="https://x.com/oneruofeng" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-ink">
               X · @oneruofeng
             </a>
             <a href="https://github.com/wangruofeng" target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-ink">
               GitHub · @wangruofeng
             </a>
           </div>
         </div>
       </div>
      </div>

      {/* 版权条 */}
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-[11px] leading-relaxed text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            <a
              href="https://github.com/wangruofeng/learnui"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4 text-ink-2"
            >
              GitHub
            </a>
            {' · '}
            {f.poweredBy}{' '}
            <a
              href="https://wangruofeng007.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4 text-ink-2"
            >
              {f.placeholder}
            </a>
          </span>
          <span>
            {f.sourceNote.split('namethatui.com').map((part, index, parts) => (
              <Fragment key={`${part}-${index}`}>
                {part}
                {index < parts.length - 1 && (
                  <a
                    href="https://namethatui.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-dotted underline-offset-4 text-ink-2"
                  >
                    namethatui.com
                  </a>
                )}
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
