import type { Entry } from '../data/entries'
import { DEMO_REGISTRY } from './demo-registry'
import { useI18n, useEntry } from '../i18n/LanguageContext'
import { Star } from 'lucide-react'

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

export function EntryCard({ entry, onOpen, isFavorite = false, onToggleFavorite }: { entry: Entry; onOpen: (e: Entry) => void; isFavorite?: boolean; onToggleFavorite?: (id: string) => void }) {
  const e = useEntry(entry)
  const { ui } = useI18n()
  const Demo = DEMO_REGISTRY[e.id]
  return (
    <div
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (target.closest('button, a, input, select, textarea, [role="button"], [role="tab"]')) return
        onOpen(e)
      }}
      className="entry-card group flex flex-col overflow-hidden rounded-lg border border-hairline bg-white text-left"
    >
      {Demo ? <Demo /> : <div className="h-36 border-b border-hairline bg-neutral-50" />}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[14px] font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4">
            {e.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {onToggleFavorite && (
              <button type="button" onClick={() => onToggleFavorite(e.id)} aria-label={isFavorite ? ui.entryCard.removeFavorite : ui.entryCard.addFavorite} aria-pressed={isFavorite} title={isFavorite ? ui.entryCard.removeFavorite : ui.entryCard.addFavorite} className={`rounded-full p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${isFavorite ? 'text-orange-600 hover:bg-orange-50' : 'text-ink-3 hover:bg-neutral-100 hover:text-ink'}`}>
                <Star className="h-3.5 w-3.5" fill={isFavorite ? 'currentColor' : 'none'} aria-hidden="true" />
              </button>
            )}
            <PlatformBadge platform={e.platform} isNew={e.isNew} />
          </div>
        </div>
        <code className="mt-1.5 block truncate font-mono-ui text-[11px] text-ink-3">{e.symbol}</code>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-2">{e.blurb}</p>
      </div>
    </div>
  )
}
