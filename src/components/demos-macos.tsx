import { useState } from 'react'
import { DemoBox } from './demos-web'

/* ------------------------------------------------------------------ */
/* shared mac chrome                                                   */
/* ------------------------------------------------------------------ */

export function TrafficLights({ withGlyphs = false }: { withGlyphs?: boolean }) {
  const [hover, setHover] = useState(false)
  const lights = [
    { c: '#FF5F57', glyph: '×' },
    { c: '#FEBC2E', glyph: '−' },
    { c: '#28C840', glyph: '＋' },
  ]
  return (
    <div
      className="flex items-center gap-[6px]"
      onMouseEnter={() => withGlyphs && setHover(true)}
      onMouseLeave={() => withGlyphs && setHover(false)}
    >
      {lights.map((l, i) => (
        <span
          key={i}
          className="flex h-[11px] w-[11px] items-center justify-center rounded-full border border-black/10 text-[7px] font-bold text-black/50"
          style={{ backgroundColor: l.c }}
        >
          {withGlyphs && hover ? l.glyph : ''}
        </span>
      ))}
    </div>
  )
}

function MacTitle({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mac-titlebar relative flex items-center px-2 py-1.5">
      <TrafficLights />
      <span className="absolute inset-x-0 text-center text-[9px] font-semibold text-neutral-600">{children}</span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* demos                                                               */
/* ------------------------------------------------------------------ */

export function MacAlertDemo() {
  return (
    <DemoBox className="bg-neutral-200/60">
      <div className="mac-window w-48">
        <div className="flex gap-2.5 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-sky-400 to-blue-600 text-sm text-white shadow">⚠︎</span>
          <div className="flex-1">
            <div className="text-[10px] font-bold text-neutral-800">You can’t undo this action.</div>
            <div className="mb-2 mt-0.5 text-[9px] leading-snug text-neutral-500">The selected items will be deleted immediately.</div>
            <div className="flex justify-end gap-1.5">
              <button className="rounded-md bg-neutral-200 px-2.5 py-0.5 text-[9px] font-medium text-neutral-700 shadow-sm">Cancel</button>
              <button className="rounded-md bg-blue-500 px-2.5 py-0.5 text-[9px] font-medium text-white shadow-sm">OK</button>
            </div>
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacColorWellDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
        <button className="h-7 w-10 rounded-md border border-neutral-300 bg-gradient-to-br from-orange-400 to-rose-500 p-0.5 shadow-inner">
          <span className="block h-full w-full rounded-[3px] border border-white/60" />
        </button>
        <div>
          <div className="text-[10px] font-medium text-neutral-700">Fill</div>
          <div className="text-[9px] text-blue-600">Show Colors…</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacContextMenuDemo() {
  return (
    <DemoBox className="bg-neutral-100">
      <div className="frosted w-36 rounded-lg border border-black/10 py-1 shadow-xl">
        {[
          ['Open', ''],
          ['Get Info', '⌘I'],
          ['Rename', ''],
        ].map(([l, k]) => (
          <div key={l} className="flex items-center justify-between px-3 py-[3px] text-[10px] text-neutral-800">
            <span>{l}</span>
            <kbd className="font-mono-ui text-[8px] text-neutral-400">{k}</kbd>
          </div>
        ))}
        <div className="mx-2 my-1 border-t border-black/10" />
        <div className="bg-blue-500 px-3 py-[3px] text-[10px] text-white">Move to Trash</div>
      </div>
    </DemoBox>
  )
}

export function MacDisclosureDemo() {
  const [open, setOpen] = useState(true)
  return (
    <DemoBox>
      <div className="w-44 rounded-lg border border-neutral-200 bg-white p-2 text-left shadow-sm">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-[10px] font-medium text-neutral-800">
          <span className={`inline-block text-[8px] transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
          📁 Projects
        </button>
        {open && (
          <div className="ml-4 mt-1 space-y-0.5">
            {['Q3 Report.pages', 'Notes.md', 'installer.dmg'].map((f) => (
              <div key={f} className="text-[9px] text-neutral-500">📄 {f}</div>
            ))}
          </div>
        )}
        <div className="mt-1 flex items-center gap-1 text-[10px] font-medium text-neutral-800">
          <span className="inline-block text-[8px]">▶</span>
          📁 Archive
        </div>
      </div>
    </DemoBox>
  )
}

export function MacDockBadgeDemo() {
  return (
    <DemoBox>
      <div className="flex items-end gap-4">
        <div className="relative">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-sky-400 to-blue-600 text-2xl text-white shadow-lg">✉</span>
          <span className="anim-badge-pop absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow ring-2 ring-white">
            3
          </span>
        </div>
        <span className="mb-1 font-mono-ui text-[9px] text-neutral-400">unread, in the Dock</span>
      </div>
    </DemoBox>
  )
}

export function MacFocusRingDemo() {
  return (
    <DemoBox>
      <div className="w-44 space-y-2">
        <div className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-[10px] text-neutral-400 shadow-sm">Search…</div>
        <div className="rounded-md bg-white px-2 py-1.5 text-[10px] text-neutral-800 shadow-sm ring-[3px] ring-blue-500/70">Enabled</div>
        <div className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-[10px] text-neutral-400 shadow-sm">Save</div>
      </div>
    </DemoBox>
  )
}

export function MacInspectorDemo() {
  return (
    <DemoBox className="bg-neutral-100">
      <div className="flex h-28 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="flex flex-1 items-center justify-center bg-neutral-50">
          <div className="h-10 w-14 rounded bg-gradient-to-br from-violet-300 to-indigo-400" />
        </div>
        <div className="w-20 border-l border-neutral-200 bg-white p-1.5">
          <div className="mb-1 text-[8px] font-semibold text-neutral-500">Style ⌄</div>
          {['Fill', 'Border', 'Shadow'].map((s) => (
            <div key={s} className="mb-1 flex items-center justify-between rounded bg-neutral-100 px-1.5 py-0.5 text-[8px] text-neutral-600">
              {s}
              <span className="h-2 w-2 rounded-sm bg-indigo-300" />
            </div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function MacMenuBarDemo() {
  return (
    <DemoBox className="items-start p-0">
      <div className="w-full">
        <div className="frosted flex h-6 w-full items-center justify-between border-b border-black/10 px-3">
          <div className="flex items-center gap-2.5 text-[9px] text-neutral-800">
            <span className="text-[11px]"></span>
            <span className="font-bold">Finder</span>
            {['File', 'Edit', 'View', 'Go', 'Window'].map((m) => (
              <span key={m} className="text-neutral-600">{m}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[9px] text-neutral-600">
            <span>🔋</span>
            <span>⌘</span>
            <span className="font-mono-ui">Tue 9:41</span>
          </div>
        </div>
        <div className="flex h-[104px] items-center justify-center">
          <span className="font-mono-ui text-[9px] text-neutral-400">↑ the strip along the top of every Mac screen</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacMenuBarExtraDemo() {
  return (
    <DemoBox className="items-start p-0">
      <div className="w-full">
        <div className="frosted flex h-6 w-full items-center justify-end gap-2.5 border-b border-black/10 px-3 text-[10px] text-neutral-700">
          <span className="rounded bg-black/10 px-1">♪</span>
          <span>🔋 84%</span>
          <span>☕︎</span>
          <span className="font-mono-ui text-[9px]">9:41</span>
        </div>
        <div className="flex h-[104px] items-center justify-center gap-2">
          <span className="rounded-md border border-neutral-200 bg-white px-2 py-1 font-mono-ui text-[9px] text-neutral-500 shadow-sm">
            NSStatusItem — your app, always one click away
          </span>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacPanelDemo() {
  return (
    <DemoBox className="bg-neutral-200/70">
      <div className="hud-panel w-44 p-2">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] font-semibold">Colors</span>
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="grid grid-cols-6 gap-1">
          {['#f87171', '#fb923c', '#facc15', '#4ade80', '#22d3ee', '#818cf8', '#e879f9', '#f8fafc', '#a3a3a3', '#525252', '#171717', '#7c2d12'].map((c) => (
            <span key={c} className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function MacPopoverDemo() {
  return (
    <DemoBox>
      <div className="flex flex-col items-center">
        <div className="mac-window w-40 p-2.5">
          <div className="mb-1 text-[9px] font-semibold text-neutral-700">Now Playing</div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-pink-400 to-rose-500 text-[9px] text-white">♪</span>
            <div>
              <div className="text-[9px] font-medium text-neutral-700">Clair de Lune</div>
              <div className="text-[8px] text-neutral-400">Debussy</div>
            </div>
          </div>
        </div>
        <div className="h-0 w-0 border-x-[7px] border-t-[7px] border-x-transparent border-t-neutral-300" />
        <button className="mt-1 rounded-md bg-neutral-800 px-3 py-1 text-[9px] text-white shadow">♪ Menu bar extra</button>
      </div>
    </DemoBox>
  )
}

export function MacPopupPullDownDemo() {
  return (
    <DemoBox>
      <div className="space-y-1.5">
        {[
          ['pop-up button', 'Medium ⌄'],
          ['pull-down button', 'Actions ⌄'],
          ['combo box', 'Type or choose… ⌄'],
        ].map(([label, face]) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-24 text-right font-mono-ui text-[8px] text-neutral-400">{label}</span>
            <span className="rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 px-2.5 py-1 text-[9px] font-medium text-neutral-700 shadow-sm">
              {face}
            </span>
          </div>
        ))}
      </div>
    </DemoBox>
  )
}

export function MacScrollViewDemo() {
  return (
    <DemoBox>
      <div className="relative h-24 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="space-y-1.5 p-2.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2 rounded bg-neutral-100" style={{ width: `${95 - i * 8}%` }} />
          ))}
        </div>
        <div className="absolute inset-y-1 right-1 w-1 rounded-full bg-neutral-200/70">
          <div className="anim-scroll-thumb h-8 w-1 rounded-full bg-neutral-400/80" />
        </div>
        <span className="absolute bottom-1 left-2 font-mono-ui text-[8px] text-neutral-400">overlay scroller</span>
      </div>
    </DemoBox>
  )
}

export function MacSegmentedDemo() {
  const [sel, setSel] = useState(1)
  const icons = ['▤', '▦', '☰']
  return (
    <DemoBox>
      <div>
        <div className="inline-flex rounded-lg border border-neutral-300 bg-neutral-200/70 p-0.5 shadow-inner">
          {icons.map((ic, i) => (
            <button
              key={i}
              onClick={() => setSel(i)}
              className={`rounded-md px-3.5 py-1 text-[11px] transition-colors ${sel === i ? 'bg-white text-neutral-800 shadow' : 'text-neutral-500'}`}
            >
              {ic}
            </button>
          ))}
        </div>
        <div className="mt-1.5 text-center font-mono-ui text-[8px] text-neutral-400">icons · list · column view</div>
      </div>
    </DemoBox>
  )
}

export function MacSheetDemo() {
  return (
    <DemoBox className="bg-neutral-200/60">
      <div className="relative">
        <div className="mac-window w-52">
          <MacTitle>Documents</MacTitle>
          <div className="h-10" />
        </div>
        <div className="anim-sheet mac-window absolute inset-x-4 top-5 border-t-2 border-t-neutral-300">
          <div className="p-2.5 text-center">
            <div className="text-[10px] font-bold text-neutral-800">Delete “Q3 Report”?</div>
            <div className="mb-1.5 text-[8px] text-neutral-500">Blocks only this window.</div>
            <div className="flex justify-center gap-1.5">
              <button className="rounded-md bg-neutral-200 px-2 py-0.5 text-[8px] font-medium text-neutral-700">Cancel</button>
              <button className="rounded-md bg-blue-500 px-2 py-0.5 text-[8px] font-medium text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacSidebarDemo() {
  const [sel, setSel] = useState(0)
  const items = [
    ['⭐', 'Favorites'],
    ['🖥', 'Desktop'],
    ['📄', 'Documents'],
    ['⬇', 'Downloads'],
  ]
  return (
    <DemoBox className="bg-gradient-to-br from-rose-200 via-orange-100 to-sky-200">
      <div className="flex h-28 w-48 overflow-hidden rounded-lg border border-black/10 shadow-xl">
        <div className="frosted w-24 border-r border-black/5 p-1.5">
          {items.map(([icon, label], i) => (
            <button
              key={label}
              onClick={() => setSel(i)}
              className={`flex w-full items-center gap-1 rounded px-1.5 py-0.5 text-left text-[9px] ${sel === i ? 'bg-black/10 font-semibold text-neutral-800' : 'text-neutral-600'}`}
            >
              <span className="text-[8px]">{icon}</span>
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center bg-white/80">
          <span className="text-2xl">{items[sel][0]}</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacSliderDemo() {
  return (
    <DemoBox>
      <div className="w-44">
        <div className="mb-1 flex justify-between text-[9px] text-neutral-500">
          <span>Volume</span>
          <span>65</span>
        </div>
        <div className="relative flex h-5 items-center">
          <div className="h-1 w-full rounded-full bg-neutral-200" />
          <div className="absolute h-1 w-[65%] rounded-full bg-blue-500" />
          <div className="absolute left-[65%] h-4 w-4 -translate-x-1/2 rounded-full border border-neutral-300 bg-white shadow-md" />
        </div>
      </div>
    </DemoBox>
  )
}

export function MacSplitViewDemo() {
  return (
    <DemoBox>
      <div className="mac-window flex h-24 w-52 flex-col">
        <MacTitle />
        <div className="flex min-h-0 flex-1">
          <div className="w-2/5 border-r border-neutral-300 bg-neutral-50 p-1.5">
            {['Inbox', 'Sent', 'Drafts'].map((m, i) => (
              <div key={m} className={`rounded px-1.5 py-0.5 text-[8px] ${i === 0 ? 'bg-blue-500 text-white' : 'text-neutral-600'}`}>{m}</div>
            ))}
          </div>
          <div className="relative w-px cursor-col-resize bg-neutral-300">
            <span className="absolute left-1/2 top-1/2 h-6 w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white shadow-sm" />
          </div>
          <div className="flex-1 space-y-1 p-2">
            <div className="h-1.5 w-4/5 rounded bg-neutral-100" />
            <div className="h-1.5 w-3/5 rounded bg-neutral-100" />
            <div className="h-1.5 w-2/3 rounded bg-neutral-100" />
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacStepperDemo() {
  const [n, setN] = useState(2)
  return (
    <DemoBox>
      <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
        <span className="text-[10px] text-neutral-700">Copies:</span>
        <span className="w-6 rounded border border-neutral-300 px-1 py-0.5 text-center text-[10px]">{n}</span>
        <span className="flex flex-col overflow-hidden rounded border border-neutral-300">
          <button onClick={() => setN(n + 1)} className="border-b border-neutral-300 bg-gradient-to-b from-white to-neutral-100 px-1.5 text-[7px] leading-3 text-neutral-600">▲</button>
          <button onClick={() => setN(Math.max(1, n - 1))} className="bg-gradient-to-b from-white to-neutral-100 px-1.5 text-[7px] leading-3 text-neutral-600">▼</button>
        </span>
      </div>
    </DemoBox>
  )
}

export function MacToolbarDemo() {
  return (
    <DemoBox>
      <div className="mac-window w-56">
        <div className="mac-titlebar flex items-center gap-2 px-2 py-1.5">
          <TrafficLights />
          <span className="text-[9px] font-semibold text-neutral-600">Notes</span>
          <span className="flex-1" />
          <div className="flex items-center gap-1.5 text-[9px] text-neutral-500">
            <span className="rounded bg-white/70 px-1.5 py-0.5 shadow-sm">▦ ▤</span>
            <span className="rounded bg-white/70 px-1.5 py-0.5 shadow-sm">↗</span>
            <span className="rounded bg-white/70 px-1.5 py-0.5 shadow-sm">⌕</span>
          </div>
        </div>
        <div className="space-y-1 p-2">
          <div className="h-1.5 w-5/6 rounded bg-neutral-200" />
          <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
          <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
        </div>
      </div>
    </DemoBox>
  )
}

export function MacTrafficLightsDemo() {
  return (
    <DemoBox>
      <div className="text-center">
        <div className="mac-window inline-flex items-center gap-2 px-3 py-2.5">
          <TrafficLights withGlyphs />
          <span className="text-[9px] text-neutral-500">hover the dots</span>
        </div>
        <div className="mt-1.5 flex justify-center gap-3 font-mono-ui text-[8px] text-neutral-400">
          <span>close</span>
          <span>minimize</span>
          <span>zoom</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function MacVibrancyDemo() {
  return (
    <DemoBox className="bg-gradient-to-br from-indigo-400 via-fuchsia-300 to-amber-200">
      <div className="frosted w-44 rounded-xl border border-white/40 p-3 shadow-xl">
        <div className="text-[10px] font-semibold text-neutral-800">Vibrancy on</div>
        <div className="text-[9px] text-neutral-600">The wallpaper bleeds through the frosted material.</div>
      </div>
    </DemoBox>
  )
}

export function MacWindowDemo() {
  return (
    <DemoBox>
      <div className="mac-window w-56">
        <div className="mac-titlebar flex items-center gap-2 px-2 py-1.5">
          <TrafficLights />
          <span className="flex-1 text-center text-[9px] font-semibold text-neutral-600">Notes</span>
          <span className="text-[9px] text-neutral-400">⌕</span>
        </div>
        <div className="flex">
          <div className="w-14 space-y-1 border-r border-neutral-200 bg-neutral-100/80 p-1.5">
            <div className="rounded bg-blue-500/15 px-1 py-0.5 text-[8px] text-blue-700">Groceries</div>
            <div className="px-1 py-0.5 text-[8px] text-neutral-500">Ideas</div>
          </div>
          <div className="flex-1 space-y-1 p-2">
            <div className="h-1.5 w-4/5 rounded bg-neutral-200" />
            <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
            <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
          </div>
        </div>
      </div>
    </DemoBox>
  )
}
