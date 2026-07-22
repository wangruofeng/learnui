import type { Entry } from '../data/entries'
import { DEMO_REGISTRY } from './demo-registry'
import { useI18n, useEntry } from '../i18n/LanguageContext'

export function PlatformBadge({ platform, isNew }: { platform: 'web' | 'macos'; isNew?: boolean }) {
  const { ui } = useI18n()
  const c = ui.entryCard
  return (
    <span className="flex items-center gap-1">
      {isNew && (
        <span className="rounded-sm bg-orange-600 px-1.5 py-px font-mono-ui text-[9px] font-medium uppercase tracking-wider text-white">
          {c.badgeNew}
        </span>
      )}
      <span
        className={`rounded-sm px-1.5 py-px font-mono-ui text-[9px] font-medium uppercase tracking-wider ${
          platform === 'web' ? 'border border-hairline-dark text-ink-2' : 'bg-ink text-white'
        }`}
      >
        {platform === 'web' ? c.platformWeb : c.platformMac}
      </span>
    </span>
  )
}

export function EntryCard({ entry, onOpen }: { entry: Entry; onOpen: (e: Entry) => void }) {
  const e = useEntry(entry)
  const Demo = DEMO_REGISTRY[e.id]
  return (
    <button
      onClick={() => onOpen(e)}
      className="entry-card group flex flex-col overflow-hidden rounded-lg border border-hairline bg-white text-left"
    >
      {Demo ? <Demo /> : <div className="h-36 border-b border-hairline bg-neutral-50" />}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[14px] font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4">
            {e.name}
          </h3>
          <PlatformBadge platform={e.platform} isNew={e.isNew} />
        </div>
        <code className="mt-1.5 block truncate font-mono-ui text-[11px] text-ink-3">{e.symbol}</code>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{e.blurb}</p>
      </div>
    </button>
  )
}
