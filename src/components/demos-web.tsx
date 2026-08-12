import { useEffect, useRef, useState } from 'react'
import { FileText, Grid2X2, Home, Plus, UserRound } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* shared bits                                                         */
/* ------------------------------------------------------------------ */

export function DemoBox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex h-36 w-full items-center justify-center overflow-hidden rounded-t-lg border-b border-hairline bg-white ${className}`}>
      {children}
    </div>
  )
}

const CHARS = 'abcdefghijklmnopqrstuvwxyz#$%&@*!?'

/* ------------------------------------------------------------------ */
/* new · motion & layout                                               */
/* ------------------------------------------------------------------ */

export function TextScrambleDemo() {
  const target = 'decode'
  const [text, setText] = useState(target)
  useEffect(() => {
    let frame = 0
    const id = setInterval(() => {
      frame++
      const settled = Math.floor(frame / 3)
      let out = ''
      for (let i = 0; i < target.length; i++) {
        out += i < settled ? target[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      setText(out)
      if (settled >= target.length + 2) frame = -30
    }, 50)
    return () => clearInterval(id)
  }, [])
  return (
    <DemoBox className="dot-grid">
      <span className="font-mono-ui text-2xl font-medium tracking-[0.3em] text-neutral-900">{text}</span>
    </DemoBox>
  )
}

export function SpringDemo() {
  return (
    <DemoBox>
      <div className="w-44">
        <div className="mb-2 flex justify-between font-mono-ui text-[9px] uppercase tracking-wider text-neutral-400">
          <span>spring</span>
          <span>overshoot → settle</span>
        </div>
        <div className="relative h-6 rounded-full bg-neutral-100">
          <div className="anim-spring absolute left-1 top-1 h-4 w-4 rounded-full bg-neutral-900" />
          <div className="absolute right-1 top-1 h-4 w-px bg-neutral-300" />
        </div>
      </div>
    </DemoBox>
  )
}

export function EasingDemo() {
  return (
    <DemoBox>
      <div className="w-44 space-y-3">
        <div>
          <div className="mb-1 font-mono-ui text-[9px] uppercase tracking-wider text-neutral-400">linear</div>
          <div className="relative h-3 rounded-full bg-neutral-100">
            <div className="anim-linear absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-neutral-400" />
          </div>
        </div>
        <div>
          <div className="mb-1 font-mono-ui text-[9px] uppercase tracking-wider text-neutral-400">ease-in-out</div>
          <div className="relative h-3 rounded-full bg-neutral-100">
            <div className="anim-ease absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-blue-600" />
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function MasonryDemo() {
  const heights = [34, 52, 26, 44, 30, 48]
  return (
    <DemoBox>
      <div className="w-44 columns-3 gap-1.5">
        {heights.map((h, i) => (
          <div
            key={i}
            className="mb-1.5 w-full break-inside-avoid rounded-md border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100"
            style={{ height: h }}
          />
        ))}
      </div>
    </DemoBox>
  )
}

export function BentoDemo() {
  return (
    <DemoBox>
      <div className="grid w-52 grid-cols-3 gap-1.5">
        <div className="col-span-2 row-span-2 rounded-lg bg-neutral-900 p-2.5 text-white">
          <div className="font-mono-ui text-[9px] uppercase tracking-wider text-neutral-400">Revenue</div>
          <div className="mt-2 text-lg font-semibold">$48.2k</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-2">
          <div className="font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">Users</div>
          <div className="text-xs font-semibold">2.4k</div>
        </div>
        <div className="rounded-lg border border-neutral-200 p-2">
          <div className="font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">Growth</div>
          <div className="text-xs font-semibold text-emerald-600">↑ 12%</div>
        </div>
        <div className="col-span-3 rounded-lg border border-dashed border-neutral-300 px-2 py-1 text-[9px] text-neutral-500">
          +9 signups today
        </div>
      </div>
    </DemoBox>
  )
}

export function HamburgerDemo() {
  const [open, setOpen] = useState(false)
  return (
    <DemoBox>
      <div className="relative h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
          <span className="text-[10px] font-semibold">Field Notes</span>
          <button
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-5 w-6 flex-col items-center justify-center gap-[3px]"
          >
            <span className={`h-[1.5px] w-4 bg-neutral-800 transition-transform ${open ? 'translate-y-[4.5px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] w-4 bg-neutral-800 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[1.5px] w-4 bg-neutral-800 transition-transform ${open ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
          </button>
        </div>
        <div className="p-3 text-[10px] text-neutral-400">Tap the three lines →</div>
        <div
          className={`absolute inset-y-0 left-0 w-28 border-r border-neutral-200 bg-neutral-50 p-3 transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {['Home', 'Articles', 'Archive', 'About'].map((item) => (
            <div key={item} className="py-1 text-[10px] font-medium text-neutral-700">{item}</div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function LightboxDemo() {
  const [selected, setSelected] = useState<number | null>(null)
  const tints = ['from-amber-200 to-rose-300', 'from-sky-200 to-indigo-300', 'from-emerald-200 to-teal-300']
  return (
    <DemoBox>
      <div className="text-center">
        <div className="mb-1.5 flex justify-center gap-1.5">
          {tints.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              aria-label={`Enlarge photo ${i + 1}`}
              className={`h-9 w-12 rounded-md bg-gradient-to-br ${t} transition-all duration-200 hover:scale-105 ${selected === i ? 'ring-2 ring-neutral-900 ring-offset-2' : ''}`}
            />
          ))}
        </div>
        <div className="font-mono-ui text-[9px] text-neutral-400">3 photos · click one to enlarge</div>
      </div>
      {selected !== null && (
        <button
          onClick={() => setSelected(null)}
          aria-label="Close lightbox"
          className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-950/70"
        >
          <div className={`h-20 w-28 animate-in zoom-in-75 fade-in duration-200 rounded-lg bg-gradient-to-br ${tints[selected]} shadow-2xl`} />
        </button>
      )}
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* classics                                                            */
/* ------------------------------------------------------------------ */

export function AccordionDemo() {
  const [open, setOpen] = useState(0)
  const items = ['What is a design token?', 'Why name things precisely?']
  return (
    <DemoBox>
      <div className="w-52 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white text-left">
        {items.map((q, i) => (
          <div key={q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-3 py-2 text-[10px] font-medium">
              {q}
              <span className={`text-neutral-400 transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open === i && (
              <div className="px-3 pb-2 text-[9px] leading-relaxed text-neutral-500">
                {i === 0
                  ? 'A named value for color, spacing, or type — one design decision, one name.'
                  : 'Shared names make design and implementation prompts precise.'}
              </div>
            )}
          </div>
        ))}
      </div>
    </DemoBox>
  )
}

export function BadgeChipPillTagDemo({ anatomyActive, onAnatomyActive }: { anatomyActive?: number | null; onAnatomyActive?: (part: number | null) => void } = {}) {
  const [count, setCount] = useState(7)
  const [chipVisible, setChipVisible] = useState(true)
  const [active, setActive] = useState(true)
  const [tagSelected, setTagSelected] = useState(false)
  const [localActive, setLocalActive] = useState<number | null>(null)
  const highlighted = anatomyActive ?? localActive

  function activate(part: number | null) {
    setLocalActive(part)
    onAnatomyActive?.(part)
  }

  return (
    <DemoBox>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
        <div onMouseEnter={() => activate(1)} onMouseLeave={() => activate(null)} className={`relative flex items-center gap-1.5 transition-transform duration-150 ${highlighted === 1 ? 'scale-110' : ''}`}>
          <button onClick={() => setCount((current) => current + 1)} aria-label="Add notification" className="relative text-sm">✉</button>
          <span key={count} className="-ml-2 -mt-2 flex h-4 min-w-4 animate-in zoom-in-50 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-bold text-white">{count}</span>
          <span className="font-mono-ui text-[9px] text-neutral-400">badge</span>
          <button onMouseEnter={() => activate(1)} onMouseLeave={() => activate(null)} aria-label="Badge anatomy part 1" className={`anatomy-pin absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-700 bg-white font-mono-ui text-[7px] ${highlighted === 1 ? 'is-active' : ''}`}>1</button>
        </div>
        <div onMouseEnter={() => activate(2)} onMouseLeave={() => activate(null)} className={`relative flex items-center gap-1.5 transition-transform duration-150 ${highlighted === 2 ? 'scale-110' : ''}`}>
          {chipVisible ? <button onClick={() => setChipVisible(false)} className="flex items-center gap-1 rounded-md bg-neutral-900 px-2 py-0.5 text-[9px] text-white transition-transform hover:scale-105">Design ×</button> : <button onClick={() => setChipVisible(true)} className="rounded-md border border-dashed border-neutral-300 px-2 py-0.5 text-[8px] text-neutral-400">+ filter</button>}
          <span className="font-mono-ui text-[9px] text-neutral-400">chip</span>
          <button onMouseEnter={() => activate(2)} onMouseLeave={() => activate(null)} aria-label="Chip anatomy part 2" className={`anatomy-pin absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-700 bg-white font-mono-ui text-[7px] ${highlighted === 2 ? 'is-active' : ''}`}>2</button>
        </div>
        <div onMouseEnter={() => activate(3)} onMouseLeave={() => activate(null)} className={`relative flex items-center gap-1.5 transition-transform duration-150 ${highlighted === 3 ? 'scale-110' : ''}`}>
          <button onClick={() => setActive(!active)} className={`rounded-full px-2.5 py-0.5 text-[9px] font-medium transition-colors duration-200 ${active ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-200 text-neutral-500'}`}>{active ? 'Active' : 'Paused'}</button>
          <span className="font-mono-ui text-[9px] text-neutral-400">pill</span>
          <button onMouseEnter={() => activate(3)} onMouseLeave={() => activate(null)} aria-label="Pill anatomy part 3" className={`anatomy-pin absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-700 bg-white font-mono-ui text-[7px] ${highlighted === 3 ? 'is-active' : ''}`}>3</button>
        </div>
        <div onMouseEnter={() => activate(4)} onMouseLeave={() => activate(null)} className={`relative flex items-center gap-1.5 transition-transform duration-150 ${highlighted === 4 ? 'scale-110' : ''}`}>
          <button onClick={() => setTagSelected(!tagSelected)} aria-pressed={tagSelected} className={`rounded-sm border px-1.5 py-px text-[9px] transition-colors duration-200 ${tagSelected ? 'border-neutral-800 bg-neutral-800 text-white' : 'border-neutral-300 text-neutral-600'}`}>web</button>
          <span className="font-mono-ui text-[9px] text-neutral-400">tag</span>
          <button onMouseEnter={() => activate(4)} onMouseLeave={() => activate(null)} aria-label="Tag anatomy part 4" className={`anatomy-pin absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-700 bg-white font-mono-ui text-[7px] ${highlighted === 4 ? 'is-active' : ''}`}>4</button>
        </div>
      </div>
    </DemoBox>
  )
}

export function BreadcrumbsDemo() {
  return (
    <DemoBox>
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px]">
        <span className="text-neutral-500 underline-offset-2 hover:underline">Docs</span>
        <span className="text-neutral-300">›</span>
        <span className="text-neutral-500 underline-offset-2 hover:underline">Components</span>
        <span className="text-neutral-300">›</span>
        <span className="font-medium text-neutral-900" aria-current="page">Buttons</span>
      </nav>
    </DemoBox>
  )
}

export function ComboboxDemo() {
  return (
    <DemoBox>
      <div className="w-48">
        <div className="flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-2.5 py-1.5">
          <span className="text-[10px] text-neutral-800">ap</span>
          <span className="anim-blink h-3 w-px bg-neutral-800" />
        </div>
        <div className="mt-1 rounded-md border border-neutral-200 bg-white py-1 shadow-lg">
          {['Apple', 'Apricot', 'Avocado'].map((f, i) => (
            <div key={f} className={`px-2.5 py-1 text-[10px] ${i === 0 ? 'bg-blue-600 text-white' : 'text-neutral-700'}`}>
              <span className="font-semibold">ap</span>
              {f.slice(2)}
            </div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function CommandPaletteDemo() {
  return (
    <DemoBox className="bg-neutral-100">
      <div className="w-56 rounded-lg border border-neutral-200 bg-white shadow-xl">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-3 py-2">
          <span className="text-[10px] text-neutral-400">⌕</span>
          <span className="text-[10px] text-neutral-800">new</span>
          <span className="anim-blink h-3 w-px bg-neutral-800" />
        </div>
        <div className="p-1">
          {[
            ['New file', '⌘N', true],
            ['New window', '⇧⌘N', false],
            ['Newest first', '', false],
          ].map(([label, key, active]) => (
            <div key={label as string} className={`flex items-center justify-between rounded px-2 py-1 text-[10px] ${active ? 'bg-blue-600 text-white' : 'text-neutral-700'}`}>
              <span>{label}</span>
              <kbd className={`font-mono-ui text-[8px] ${active ? 'text-blue-100' : 'text-neutral-400'}`}>{key}</kbd>
            </div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function DividerDemo() {
  return (
    <DemoBox>
      <div className="flex items-start gap-5">
        <div className="w-24 rounded-lg border border-neutral-200 bg-white py-1 shadow-sm">
          {['Cut', 'Copy', 'Paste'].map((i) => (
            <div key={i} className="px-3 py-1 text-[10px] text-neutral-700">{i}</div>
          ))}
          <div role="separator" className="mx-2 my-1 border-t border-neutral-200" />
          <div className="px-3 py-1 text-[10px] text-red-600">Delete</div>
        </div>
        <div className="w-28 text-left">
          <div className="text-[10px] font-medium">Section one</div>
          <hr className="my-2 border-neutral-300" />
          <div className="font-mono-ui text-[9px] text-neutral-400">&lt;hr&gt; thematic break</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function DragDropDemo() {
  return (
    <DemoBox>
      <div className="relative w-52 space-y-1">
        {['Write the intro', 'Ship the draft'].map((t, i) => (
          <div key={t} className={`flex items-center gap-2 rounded-md border bg-white px-2 py-1.5 ${i === 1 ? 'border-dashed border-blue-400' : 'border-neutral-200'}`}>
            <span className="grid grid-cols-2 gap-px">
              {[...Array(6)].map((_, d) => <span key={d} className="h-[3px] w-[3px] rounded-full bg-neutral-400" />)}
            </span>
            <span className={`text-[10px] ${i === 1 ? 'text-blue-500' : 'text-neutral-700'}`}>{t}</span>
          </div>
        ))}
        <div className="anim-drag absolute -top-1 left-6 z-10 flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-2 py-1.5 shadow-lg">
          <span className="grid grid-cols-2 gap-px">
            {[...Array(6)].map((_, d) => <span key={d} className="h-[3px] w-[3px] rounded-full bg-neutral-500" />)}
          </span>
          <span className="text-[10px] text-neutral-800">Fix the header</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function EmptyStateDemo() {
  return (
    <DemoBox>
      <div className="flex w-52 flex-col items-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50/50 px-4 py-4 text-center">
        <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 text-xs text-neutral-500">✦</div>
        <div className="text-[10px] font-medium text-neutral-800">No projects yet</div>
        <div className="mb-2 text-[9px] text-neutral-500">Create your first one to get started.</div>
        <button className="rounded-md bg-neutral-900 px-2.5 py-1 text-[9px] font-medium text-white">New project</button>
      </div>
    </DemoBox>
  )
}

export function FocusVisibleDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-3">
        <button className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-[10px] text-neutral-600">Mouse</button>
        <button className="anim-focus-glow rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-[10px] font-medium text-neutral-900 outline-none ring-2 ring-blue-500">
          Keyboard
        </button>
      </div>
    </DemoBox>
  )
}

export function FormFieldDemo() {
  return (
    <DemoBox>
      <div className="w-52 text-left">
        <label htmlFor="demo-email" className="mb-1 block text-[10px] font-medium text-neutral-800">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="demo-email"
          name="email"
          type="email"
          placeholder="you@studio.com"
          className="w-full rounded-md border border-neutral-300 px-2.5 py-1.5 text-[10px] outline-none focus:border-neutral-500"
        />
        <p className="mt-1 text-[9px] text-neutral-400">We’ll only use this to sign you in.</p>
        <p role="alert" className="mt-0.5 hidden text-[9px] text-red-600">That address looks incomplete.</p>
      </div>
    </DemoBox>
  )
}

export function HoverCardDemo() {
  const [show, setShow] = useState(false)
  return (
    <DemoBox>
      <div className="relative">
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="text-[11px] font-medium text-blue-700 underline decoration-dotted underline-offset-4"
        >
          Designed by @jane
        </button>
        <div
          className={`absolute left-1/2 top-6 z-10 w-48 -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-3 text-left shadow-xl transition-all ${
            show ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-[10px] font-bold text-white">J</span>
            <div>
              <div className="text-[10px] font-semibold">Jane Appleseed</div>
              <div className="text-[9px] text-neutral-400">@jane</div>
            </div>
          </div>
          <p className="mt-1.5 text-[9px] leading-relaxed text-neutral-600">Design systems engineer. Making interfaces easier to name and build.</p>
          <div className="mt-1.5 flex gap-2 font-mono-ui text-[8px] text-neutral-400">
            <span>Toronto</span>
            <span>2.4k followers</span>
          </div>
        </div>
        <div className="mt-8 font-mono-ui text-[9px] text-neutral-400">hover the name</div>
      </div>
    </DemoBox>
  )
}

export function ModalDrawerSheetDemo() {
  const [mode, setMode] = useState<'dialog' | 'drawer' | 'sheet' | null>(null)
  const labels = { dialog: 'Dialog', drawer: 'Drawer', sheet: 'Sheet' }

  return (
    <DemoBox>
      <div className="w-56">
        <div className="mb-1.5 flex justify-center gap-1">
          {(Object.keys(labels) as Array<keyof typeof labels>).map((kind) => (
            <button key={kind} onClick={() => setMode(kind)} className={`rounded-full px-2 py-0.5 text-[7px] transition-colors ${mode === kind ? 'bg-neutral-900 text-white' : 'border border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}>{labels[kind]}</button>
          ))}
        </div>
        <div className="relative h-20 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
          <div className="space-y-1.5 p-2"><div className="h-1.5 w-1/3 rounded bg-neutral-300" />{[0, 1, 2].map((i) => <div key={i} className="h-1 w-full rounded bg-neutral-200" />)}</div>
          <button onClick={() => setMode(null)} aria-label="Close overlay" className={`absolute inset-0 bg-neutral-950/35 transition-opacity duration-200 ${mode ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />
          <div className={`absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-2 shadow-lg transition-all duration-200 ${mode === 'dialog' ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'}`}>
            <div className="text-[8px] font-medium">Confirm change?</div><div className="mt-1 h-1 w-full rounded bg-neutral-200" /><div className="mt-1.5 h-3 w-8 rounded bg-neutral-900" />
          </div>
          <div className={`absolute inset-y-0 right-0 w-20 bg-white p-2 shadow-lg transition-transform duration-200 ${mode === 'drawer' ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="text-[7px] font-medium">Filters</div><div className="mt-2 space-y-1"><div className="h-1 w-full rounded bg-neutral-200" /><div className="h-1 w-3/4 rounded bg-neutral-200" /></div>
          </div>
          <div className={`absolute inset-x-0 bottom-0 rounded-t-md bg-white p-2 shadow-lg transition-transform duration-200 ${mode === 'sheet' ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="mx-auto h-0.5 w-6 rounded bg-neutral-300" /><div className="mt-1.5 text-[7px] font-medium">Quick action</div><div className="mt-1 h-3 rounded bg-neutral-900" />
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function PopoverDropdownTooltipDemo() {
  const [open, setOpen] = useState<'popover' | 'dropdown' | null>(null)
  const [tooltip, setTooltip] = useState(false)

  return (
    <DemoBox>
      <div onClick={() => setOpen(null)} className="relative h-24 w-56">
        <div className="flex items-start justify-center gap-5 pt-3">
          <div className="relative">
            <button onClick={(event) => { event.stopPropagation(); setOpen(open === 'popover' ? null : 'popover') }} aria-expanded={open === 'popover'} className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px] shadow-sm">Filter ▾</button>
            <div className={`absolute left-0 top-7 z-10 w-20 rounded-md border border-neutral-200 bg-white p-1.5 shadow-md transition-all duration-150 ${open === 'popover' ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
              <div className="text-[7px] font-medium text-neutral-700">Filter results</div><div className="mt-1 h-1.5 w-full rounded bg-neutral-200" /><div className="mt-1 h-1.5 w-2/3 rounded bg-neutral-200" />
            </div>
            <div className="mt-1.5 text-center font-mono-ui text-[7px] text-neutral-400">click → popover</div>
          </div>
          <div className="relative">
            <button onClick={(event) => { event.stopPropagation(); setOpen(open === 'dropdown' ? null : 'dropdown') }} aria-expanded={open === 'dropdown'} className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px] shadow-sm">Sort ▾</button>
            <div role="menu" className={`absolute left-0 top-7 z-10 w-16 overflow-hidden rounded-md border border-neutral-200 bg-white py-0.5 shadow-md transition-all duration-150 ${open === 'dropdown' ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
              <button role="menuitem" className="block w-full bg-neutral-900 px-2 py-0.5 text-left text-[7px] text-white">Newest</button><button role="menuitem" className="block w-full px-2 py-0.5 text-left text-[7px] text-neutral-600 hover:bg-neutral-50">Oldest</button>
            </div>
            <div className="mt-1.5 text-center font-mono-ui text-[7px] text-neutral-400">click → menu</div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className={`absolute bottom-7 whitespace-nowrap rounded bg-neutral-900 px-1.5 py-0.5 text-[7px] text-white transition-all duration-150 ${tooltip ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'}`}>Last updated today</div>
            <button onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} onFocus={() => setTooltip(true)} onBlur={() => setTooltip(false)} aria-describedby="updated-tooltip" className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px]">ⓘ</button>
            <div id="updated-tooltip" className="mt-1.5 font-mono-ui text-[7px] text-neutral-400">hover → tooltip</div>
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function ProgressDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="anim-spin-slow h-6 w-6 rounded-full border-2 border-neutral-200 border-t-neutral-800" />
          <span className="font-mono-ui text-[8px] text-neutral-400">spinner</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 40 40" className="h-8 w-8 -rotate-90">
            <circle cx="20" cy="20" r="16" fill="none" strokeWidth="4" className="stroke-neutral-200" />
            <circle
              cx="20" cy="20" r="16" fill="none" strokeWidth="4" strokeLinecap="round"
              className="stroke-blue-600" strokeDasharray="100" style={{ animation: 'nt-dash-ring 2.8s ease-in-out infinite' }}
            />
          </svg>
          <span className="font-mono-ui text-[8px] text-neutral-400">ring 65%</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-neutral-200">
            <div className="anim-bar h-full rounded-full bg-blue-600" />
          </div>
          <span className="font-mono-ui text-[8px] text-neutral-400">bar</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function ScrimDemo() {
  return (
    <DemoBox>
      <div className="relative h-24 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className="space-y-1.5 p-3">
          <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
          <div className="h-1.5 w-1/2 rounded bg-neutral-200" />
          <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
        </div>
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px]" />
        <div className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-2 shadow-xl">
          <div className="text-[9px] font-semibold">Modal surface</div>
          <div className="text-[8px] text-neutral-500">The dim behind me is the scrim.</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function SkeletonDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-5">
        <div className="w-32 space-y-2">
          <div className="skeleton-line h-8 w-8 rounded-full" />
          <div className="skeleton-line h-2.5 w-full" />
          <div className="skeleton-line h-2.5 w-4/5" />
          <div className="skeleton-line h-2.5 w-3/5" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono-ui text-[9px] text-neutral-400">vs</span>
          <div className="anim-spin-slow h-5 w-5 rounded-full border-2 border-neutral-200 border-t-neutral-700" />
        </div>
      </div>
    </DemoBox>
  )
}

export function StickyFixedDemo() {
  return (
    <DemoBox>
      <div className="flex gap-4">
        <div className="demo-scroll relative h-24 w-28 overflow-y-auto rounded-lg border border-neutral-200 bg-white">
          <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white/95 px-2 py-1 text-[9px] font-semibold backdrop-blur">
            Sticky header
          </div>
          <div className="space-y-1.5 p-2">
            {[...Array(8)].map((_, i) => <div key={i} className="h-1.5 rounded bg-neutral-100" style={{ width: `${90 - i * 7}%` }} />)}
          </div>
        </div>
        <div className="relative h-24 w-28 overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <div className="space-y-1.5 p-2 pt-6">
            {[...Array(8)].map((_, i) => <div key={i} className="h-1.5 rounded bg-neutral-100" style={{ width: `${88 - i * 6}%` }} />)}
          </div>
          <div className="absolute right-2 top-2 rounded bg-neutral-900 px-1.5 py-0.5 text-[8px] text-white shadow">fixed ▸</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function SwitchCheckboxRadioDemo() {
  const [on, setOn] = useState(true)
  const [checked, setChecked] = useState(true)
  const [radio, setRadio] = useState('a')
  return (
    <DemoBox>
      <div className="flex items-center gap-5">
        <button
          role="switch"
          aria-checked={on}
          onClick={() => setOn(!on)}
          className={`flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${on ? 'justify-end bg-emerald-500' : 'justify-start bg-neutral-300'}`}
        >
          <span className="h-4 w-4 rounded-full bg-white shadow" />
        </button>
        <button onClick={() => setChecked(!checked)} className="flex items-center gap-1.5">
          <span className={`flex h-4 w-4 items-center justify-center rounded border ${checked ? 'border-blue-600 bg-blue-600' : 'border-neutral-400 bg-white'}`}>
            {checked && (
              <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-none stroke-white" strokeWidth="2">
                <path d="M1 4l3 3 5-6" />
              </svg>
            )}
          </span>
          <span className="text-[10px] text-neutral-600">Notify</span>
        </button>
        <div className="flex items-center gap-2">
          {['a', 'b'].map((v) => (
            <button key={v} onClick={() => setRadio(v)} className="flex items-center gap-1">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${radio === v ? 'border-blue-600' : 'border-neutral-400'}`}>
                {radio === v && <span className="h-2 w-2 rounded-full bg-blue-600" />}
              </span>
              <span className="text-[10px] text-neutral-600">{v === 'a' ? 'One' : 'Two'}</span>
            </button>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function TabsDemo() {
  const [tab, setTab] = useState(0)
  const tabs = ['Analytics', 'Customers', 'Revenue', 'Activity']
  return (
    <DemoBox>
      <div className="w-56">
        <div role="tablist" className="flex border-b border-neutral-200">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`relative px-2.5 py-1.5 text-[10px] ${tab === i ? 'font-semibold text-neutral-900' : 'text-neutral-400'}`}
            >
              {t}
              {tab === i && <span className="absolute inset-x-1 -bottom-px h-0.5 rounded bg-neutral-900" />}
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-end gap-1 px-1">
          {[10, 16, 8, 20, 13, 17].map((h, i) => (
            <div key={i} className="w-5 rounded-sm bg-neutral-200" style={{ height: h * (tab + 1) * 0.5 + 6 }} />
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function ToastDemo() {
  return (
    <DemoBox>
      <div className="relative h-full w-full">
        <div className="anim-toast absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-neutral-900 py-2 pl-3 pr-4 text-white shadow-xl">
          <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-emerald-400" strokeWidth="2">
            <path d="M2 6.5l2.5 2.5L10 3" />
          </svg>
          <span className="text-[10px]">Changes saved</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function ToggleGroupDemo() {
  const [sel, setSel] = useState(1)
  const opts = ['◧', '◫', '◨']
  return (
    <DemoBox>
      <div>
        <div className="inline-flex overflow-hidden rounded-md border border-neutral-300 bg-white">
          {opts.map((o, i) => (
            <button
              key={i}
              aria-pressed={sel === i}
              onClick={() => setSel(i)}
              className={`border-r border-neutral-300 px-3 py-1.5 text-[11px] last:border-r-0 ${sel === i ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:bg-neutral-50'}`}
            >
              {o}
            </button>
          ))}
        </div>
        <div className="mt-1.5 text-center font-mono-ui text-[8px] text-neutral-400">single selection · one stays pressed</div>
      </div>
    </DemoBox>
  )
}

export function TruncationDemo() {
  return (
    <DemoBox>
      <div className="w-52 space-y-2.5 text-left">
        <div>
          <div className="mb-0.5 font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">text-overflow: ellipsis</div>
          <p className="truncate rounded border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700">
            The quarterly review meeting has been rescheduled to Friday afternoon
          </p>
        </div>
        <div>
          <div className="mb-0.5 font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">line-clamp: 2</div>
          <p className="line-clamp-2 min-h-[30px] rounded border border-neutral-200 bg-white px-2 py-1 text-[10px] leading-[13px] text-neutral-700">
            Release notes: this update reworks the sync engine, fixes twelve reported issues with offline edits, and adds keyboard shortcuts for every panel in the app.
          </p>
        </div>
      </div>
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* vocab · layout / structure / nav / components                       */
/* ------------------------------------------------------------------ */

export function CardGridDemo() {
  return (
    <DemoBox>
      <div className="grid w-56 grid-cols-3 gap-1.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="overflow-hidden rounded-md border border-neutral-200 bg-white">
            <div className="h-6 bg-gradient-to-br from-neutral-100 to-neutral-200" />
            <div className="space-y-1 p-1.5">
              <div className="h-1 w-3/4 rounded bg-neutral-300" />
              <div className="h-1 w-full rounded bg-neutral-200" />
              <div className="mt-1 h-1.5 w-6 rounded-full bg-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </DemoBox>
  )
}

export function SplitScreenDemo() {
  return (
    <DemoBox>
      <div className="flex w-56 overflow-hidden rounded-lg border border-neutral-200">
        <div className="w-[45%] space-y-1.5 border-r border-neutral-200 bg-white p-2.5">
          <div className="font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">45%</div>
          <div className="h-2 w-full rounded bg-neutral-800" />
          <div className="h-1.5 w-4/5 rounded bg-neutral-200" />
          <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
          <div className="flex gap-1 pt-0.5">
            <div className="h-3 w-9 rounded-full bg-neutral-900" />
            <div className="h-3 w-9 rounded-full border border-neutral-300" />
          </div>
        </div>
        <div className="flex w-[55%] items-center justify-center bg-gradient-to-br from-emerald-100 to-neutral-200 p-2.5">
          <div className="font-mono-ui text-[8px] uppercase tracking-wider text-neutral-500">55%</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function SidebarWebDemo() {
  return (
    <DemoBox>
      <div className="flex w-56 overflow-hidden rounded-lg border border-neutral-200">
        <div className="w-16 space-y-1 border-r border-neutral-200 bg-neutral-50 p-1.5">
          <div className="flex items-center gap-1">
            <div className="h-3.5 w-3.5 rounded-full bg-neutral-300" />
            <div className="h-1.5 w-5 rounded bg-neutral-300" />
          </div>
          <div className="rounded bg-neutral-800/10 px-1 py-0.5 text-[7px] text-neutral-700">All</div>
          {['UI', 'Motion', 'Code'].map((t) => (
            <div key={t} className="px-1 py-0.5 text-[7px] text-neutral-500">{t}</div>
          ))}
        </div>
        <div className="flex-1 space-y-1 p-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-1.5 rounded border border-neutral-100 p-1">
              <div className="h-4 w-4 rounded bg-neutral-200" />
              <div className="flex-1 space-y-0.5 pt-0.5">
                <div className="h-1 w-3/4 rounded bg-neutral-300" />
                <div className="h-1 w-1/2 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function DashboardDemo() {
  return (
    <DemoBox>
      <div className="flex w-60 overflow-hidden rounded-lg border border-neutral-200">
        <div className="w-10 space-y-1.5 border-r border-neutral-200 bg-neutral-900 p-1 pt-1.5">
          <div className="h-1.5 w-full rounded bg-white/80" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`mx-auto h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-emerald-400' : 'bg-white/30'}`} />
          ))}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between border-b border-neutral-100 px-2 py-1">
            <div className="h-1.5 w-10 rounded bg-neutral-200" />
            <div className="h-3 w-3 rounded-full bg-neutral-300" />
          </div>
          <div className="grid grid-cols-3 gap-1 p-1.5">
            {[['Rev', '$48k'], ['User', '2.4k'], ['Grow', '12%']].map(([k, v]) => (
              <div key={k} className="rounded border border-neutral-200 p-1">
                <div className="font-mono-ui text-[6px] uppercase tracking-wider text-neutral-400">{k}</div>
                <div className="text-[9px] font-semibold text-neutral-800">{v}</div>
              </div>
            ))}
          </div>
          <div className="mx-1.5 flex h-5 items-end gap-0.5 rounded border border-neutral-100 px-1.5 pb-0.5 pt-1">
            {[40, 65, 30, 80, 55, 90, 60].map((h, i) => (
              <div key={i} className="w-1.5 rounded-sm bg-neutral-800/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function FullBleedDemo() {
  return (
    <DemoBox className="!px-0">
      <div className="w-full">
        <div className="relative flex h-16 items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-600">
          <div className="text-center">
            <div className="font-display text-[13px] text-white">Full-bleed Hero</div>
            <div className="font-mono-ui text-[7px] uppercase tracking-wider text-white/60">100vw · breaks the container</div>
          </div>
        </div>
        <div className="mx-auto mt-2 w-2/3 space-y-1 rounded border border-neutral-200 bg-white p-1.5">
          <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
          <div className="h-1.5 w-full rounded bg-neutral-100" />
        </div>
      </div>
    </DemoBox>
  )
}

export function HeroDemo() {
  return (
    <DemoBox>
      <div className="flex w-60 items-center gap-3">
        <div className="flex-1 space-y-1.5">
          <div className="font-display text-[15px] leading-tight text-neutral-900">Design AI-native experiences</div>
          <div className="h-1 w-full rounded bg-neutral-200" />
          <div className="h-1 w-4/5 rounded bg-neutral-100" />
          <div className="flex gap-1 pt-1">
            <div className="rounded-full bg-neutral-900 px-2 py-0.5 text-[7px] text-white">View Work →</div>
            <div className="rounded-full border border-neutral-300 px-2 py-0.5 text-[7px] text-neutral-600">Contact</div>
          </div>
        </div>
        <div className="h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br from-emerald-200 via-neutral-200 to-neutral-300" />
      </div>
    </DemoBox>
  )
}

export function FeatureGridDemo() {
  const feats = [
    ['Design', '◇'],
    ['Frontend', '▰'],
    ['AI Proto', '✦'],
    ['Writing', '¶'],
  ]
  return (
    <DemoBox>
      <div className="grid w-60 grid-cols-4 gap-1.5">
        {feats.map(([f, ic]) => (
          <div key={f} className="rounded-md border border-neutral-200 p-1.5 text-center">
            <div className="text-[11px] text-neutral-700">{ic}</div>
            <div className="mt-0.5 text-[7px] font-medium text-neutral-800">{f}</div>
            <div className="mx-auto mt-0.5 h-0.5 w-3/4 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </DemoBox>
  )
}

export function StickyStorytellingDemo() {
  const stages = ['Discover', 'Design', 'Build']
  const [active, setActive] = useState(0)

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    setActive(Math.max(0, Math.min(stages.length - 1, Math.round(event.currentTarget.scrollTop / 38))))
  }

  return (
    <DemoBox>
      <div className="flex w-60 gap-2">
        <div className="flex w-20 flex-col justify-center rounded-md bg-neutral-900 p-2 text-white">
          <div className="font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">pinned</div>
          <div className="mt-0.5 text-[10px] font-semibold transition-all duration-200">{stages[active]}</div>
          <div className="mt-0.5 text-[7px] text-white/60">stage {active + 1} / 3</div>
          <div className="mt-2 h-0.5 w-full overflow-hidden rounded bg-white/20"><div className="h-full bg-emerald-400 transition-[width] duration-200" style={{ width: `${((active + 1) / stages.length) * 100}%` }} /></div>
        </div>
        <div onScroll={handleScroll} className="h-20 flex-1 snap-y snap-mandatory overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Sticky storytelling demo">
          {stages.map((s, i) => (
            <div key={s} className="flex h-[38px] snap-start items-center">
              <div className={`flex w-full items-center gap-1.5 rounded border px-1.5 py-1 transition-all duration-200 ${i === active ? 'border-neutral-800 bg-neutral-50 shadow-sm' : 'border-neutral-200 opacity-45'}`}>
                <span className="font-mono-ui text-[7px] text-neutral-400">0{i + 1}</span>
                <span className="text-[8px] font-medium text-neutral-700">{s}</span>
              </div>
            </div>
          ))}
          <div className="h-4" />
        </div>
      </div>
    </DemoBox>
  )
}

export function TimelineDemo() {
  const items: [string, string][] = [['2019', 'Founded'], ['2021', 'Series A'], ['2024', 'AI launch']]
  return (
    <DemoBox>
      <div className="w-44">
        <div className="relative pl-4">
          <div className="absolute bottom-1 left-1 top-1 w-px bg-emerald-500/50" />
          {items.map(([y, e]) => (
            <div key={y} className="relative mb-2.5 last:mb-0">
              <div className="absolute -left-[14.5px] top-0.5 h-1.5 w-1.5 rounded-full border-2 border-emerald-500 bg-white" />
              <div className="font-mono-ui text-[7px] text-emerald-700">{y}</div>
              <div className="text-[9px] font-medium text-neutral-800">{e}</div>
              <div className="mt-0.5 h-0.5 w-3/4 rounded bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function FooterDemo() {
  return (
    <DemoBox>
      <div className="w-60 rounded-lg bg-neutral-900 p-2.5 text-white">
        <div className="flex justify-between gap-2">
          <div className="space-y-1">
            <div className="text-[9px] font-bold">Punk</div>
            <div className="h-0.5 w-8 rounded bg-white/40" />
          </div>
          {['Explore', 'Connect'].map((h) => (
            <div key={h} className="space-y-1">
              <div className="font-mono-ui text-[6px] uppercase tracking-wider text-white/50">{h}</div>
              <div className="h-0.5 w-6 rounded bg-white/30" />
              <div className="h-0.5 w-5 rounded bg-white/20" />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-1.5">
          <div className="font-mono-ui text-[6px] text-white/40">© 2026</div>
          <div className="h-2.5 w-10 rounded-full border border-white/30" />
        </div>
      </div>
    </DemoBox>
  )
}

export function AnchorLinkDemo() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const sections = ['About', 'Work', 'Writing', 'Contact']
  const [active, setActive] = useState(0)

  function jumpTo(index: number) {
    scrollerRef.current?.scrollTo({ top: index * 42, behavior: 'smooth' })
  }

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    setActive(Math.max(0, Math.min(sections.length - 1, Math.round(event.currentTarget.scrollTop / 42))))
  }

  return (
    <DemoBox>
      <div className="w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className="flex gap-1 border-b border-neutral-100 px-2 py-1">
          {sections.map((section, i) => (
            <button
              key={section}
              onClick={() => jumpTo(i)}
              className={`rounded-full px-1.5 py-0.5 text-[7px] transition-colors duration-200 ${active === i ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:bg-neutral-100'}`}
            >
              {section}
            </button>
          ))}
        </div>
        <div ref={scrollerRef} onScroll={handleScroll} className="h-14 snap-y snap-mandatory overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="In-page anchor navigation demo">
          {sections.map((section, i) => (
            <section key={section} id={`demo-${section.toLowerCase()}`} className="relative flex h-[42px] snap-start items-center px-2">
              <div className={`absolute left-2 h-3 w-1 rounded-full transition-colors duration-200 ${active === i ? 'bg-emerald-500' : 'bg-neutral-200'}`} />
              <div className="pl-3">
                <div className="text-[8px] font-semibold text-neutral-800">#{section.toLowerCase()}</div>
                <div className="mt-1 flex gap-1"><div className="h-1 w-12 rounded bg-neutral-200" /><div className="h-1 w-7 rounded bg-neutral-100" /></div>
              </div>
            </section>
          ))}
          <div className="h-2" />
        </div>
      </div>
    </DemoBox>
  )
}

export function MegaMenuDemo() {
  const [open, setOpen] = useState(false)
  const columns = [
    ['Projects', 'Brand systems', 'Mobile apps'],
    ['Experiments', 'Motion studies', 'Type tests'],
    ['Resources', 'Notes', 'Templates'],
  ]

  return (
    <DemoBox>
      <div onClick={() => open && setOpen(false)} className="relative h-24 w-60 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-2 py-1">
          <div className="text-[9px] font-bold">Logo</div>
          <div className="ml-auto flex gap-1 text-[7px] text-neutral-500"><span>About</span><span>Notes</span></div>
          <button
            onClick={(event) => {
              event.stopPropagation()
              setOpen(!open)
            }}
            aria-expanded={open}
            aria-controls="mega-menu-panel"
            className={`rounded px-1.5 py-0.5 text-[7px] transition-colors ${open ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
          >
            Work ▾
          </button>
        </div>
        <div className="p-2">
          <div className="h-1.5 w-1/2 rounded bg-neutral-200" />
          <div className="mt-1.5 space-y-1"><div className="h-1 w-full rounded bg-neutral-100" /><div className="h-1 w-3/4 rounded bg-neutral-100" /></div>
        </div>
        <div
          id="mega-menu-panel"
          className={`absolute inset-x-1 top-7 z-10 grid grid-cols-[1fr_1fr_1fr_1.25fr] gap-1 rounded-md border border-neutral-200 bg-white p-1.5 shadow-lg transition-all duration-200 ${
            open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
          }`}
        >
          {columns.map(([title, first, second]) => (
            <div key={title} className="space-y-1">
              <div className="font-mono-ui text-[5px] uppercase tracking-wider text-neutral-400">{title}</div>
              <button className="block text-left text-[6px] text-neutral-700">{first}</button>
              <button className="block text-left text-[6px] text-neutral-500">{second}</button>
            </div>
          ))}
          <div className="rounded bg-neutral-900 p-1 text-white">
            <div className="h-5 rounded bg-gradient-to-br from-emerald-300 to-neutral-500" />
            <div className="mt-1 text-[6px] font-medium">Featured</div>
            <div className="mt-0.5 font-mono-ui text-[5px] text-white/60">Studio Atlas →</div>
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function BottomNavDemo() {
  const [active, setActive] = useState(0)
  const items = [
    { label: 'Home', icon: Home },
    { label: 'Work', icon: Grid2X2 },
    { label: 'Create', icon: Plus },
    { label: 'Notes', icon: FileText },
    { label: 'Profile', icon: UserRound },
  ]
  const activeItem = items[active]

  return (
    <DemoBox>
      <div className="flex h-28 w-28 flex-col overflow-hidden rounded-[14px] border-[1.5px] border-neutral-800 bg-white">
        <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 transition-opacity duration-200">
          <activeItem.icon className="h-5 w-5 text-emerald-600" strokeWidth={1.6} />
          <div className="mt-1 text-[7px] font-medium text-neutral-800">{activeItem.label}</div>
        </div>
        <div role="tablist" aria-label="Bottom navigation preview" className="relative flex h-8 justify-around border-t border-neutral-100 bg-white px-0.5 pt-1">
          <div className="absolute top-0 h-0.5 w-3 -translate-x-1/2 rounded-full bg-emerald-500 transition-[left] duration-300 ease-out" style={{ left: `${active * 20 + 10}%` }} />
          {items.map((item, i) => {
            const Icon = item.icon
            const isActive = i === active
            return (
              <div
                key={item.label}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                onClick={() => setActive(i)}
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setActive(i)}
                className={`flex w-5 cursor-pointer flex-col items-center gap-0.5 text-[5px] transition-all duration-200 ${
                  isActive ? 'scale-105 text-neutral-900' : 'text-neutral-400'
                } ${i === 2 ? '-mt-2' : ''}`}
              >
                <span className={`flex h-4 w-4 items-center justify-center rounded-full transition-colors duration-200 ${i === 2 ? 'bg-neutral-900 text-white shadow' : ''}`}>
                  <Icon className="h-2.5 w-2.5" strokeWidth={isActive ? 2.3 : 1.7} />
                </span>
                <span className={i === 2 ? 'mt-1' : ''}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </DemoBox>
  )
}

export function PaginationDemo() {
  const [page, setPage] = useState(2)
  const pages = [1, 2, 3, 4, 5]

  return (
    <DemoBox>
      <div className="w-52">
        <div key={page} className="animate-in fade-in slide-in-from-bottom-1 duration-200 space-y-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1.5 rounded border border-neutral-100 bg-white px-1.5 py-1">
              <div className="flex h-3 w-3 items-center justify-center rounded bg-emerald-100 font-mono-ui text-[5px] text-emerald-700">{page}</div>
              <div className="flex-1 space-y-0.5"><div className="h-1 w-3/4 rounded bg-neutral-300" /><div className="h-1 w-1/2 rounded bg-neutral-200" /></div>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-1">
          <button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded border border-neutral-200 px-1.5 py-0.5 text-[7px] text-neutral-500 disabled:opacity-30">‹ Prev</button>
          <div className="flex gap-0.5">
            {pages.map((number) => (
              <button key={number} onClick={() => setPage(number)} aria-current={page === number ? 'page' : undefined} className={`flex h-5 w-5 items-center justify-center rounded text-[8px] transition-colors duration-200 ${page === number ? 'bg-neutral-900 text-white' : 'border border-neutral-200 text-neutral-600 hover:bg-neutral-100'}`}>{number}</button>
            ))}
          </div>
          <button onClick={() => setPage((current) => Math.min(pages.length, current + 1))} disabled={page === pages.length} className="rounded border border-neutral-200 px-1.5 py-0.5 text-[7px] text-neutral-500 disabled:opacity-30">Next ›</button>
        </div>
        <div className="mt-1 text-center font-mono-ui text-[6px] text-neutral-400">?page={page} · 10 results</div>
      </div>
    </DemoBox>
  )
}

export function BackToTopDemo() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [showButton, setShowButton] = useState(false)

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    setShowButton(event.currentTarget.scrollTop > 18)
  }

  function scrollToTop() {
    scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <DemoBox>
      <div className="relative h-24 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Scrollable page preview"
        >
          <div className="font-mono-ui text-[6px] uppercase tracking-wider text-neutral-400">Article</div>
          <div className="mt-1 space-y-1.5">
            {[92, 74, 100, 83, 68, 94, 78, 100, 72, 88].map((width, i) => (
              <div key={i} className="h-1 rounded bg-neutral-200" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white shadow-lg transition-all duration-200 ${
            showButton ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          ↑
        </button>
      </div>
    </DemoBox>
  )
}

export function CarouselDemo() {
  return (
    <DemoBox>
      <div className="w-60">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-[9px] text-neutral-500">‹</div>
          <div className="relative flex-1 overflow-hidden rounded-md">
            <div className="flex">
              <div className="flex h-16 w-3/4 shrink-0 flex-col justify-end bg-gradient-to-br from-emerald-200 to-neutral-300 p-1.5">
                <div className="text-[8px] font-semibold text-neutral-800">Featured 01</div>
              </div>
              <div className="h-16 w-1/4 shrink-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
            </div>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-[9px] text-neutral-500">›</div>
        </div>
        <div className="mt-1.5 flex items-center justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1 rounded-full ${i === 0 ? 'w-3 bg-neutral-800' : 'w-1 bg-neutral-300'}`} />
          ))}
          <div className="ml-1 font-mono-ui text-[7px] text-neutral-400">01 / 05</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function FabDemo() {
  const [open, setOpen] = useState(false)
  const actions = [
    { label: 'Upload', icon: '↑' },
    { label: 'New Post', icon: '✎' },
    { label: 'New Project', icon: '▤' },
  ]

  return (
    <DemoBox>
      <div className="relative h-24 w-44 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
        <div className="space-y-1.5 p-2">
          <div className="h-1.5 w-2/3 rounded bg-neutral-300" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-1.5 rounded border border-neutral-100 bg-white p-1">
              <div className="h-4 w-4 rounded bg-neutral-200" />
              <div className="flex-1 space-y-1 pt-0.5">
                <div className="h-1 w-4/5 rounded bg-neutral-300" />
                <div className="h-1 w-1/2 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1">
          <div className={`flex flex-col items-end gap-1 transition-all duration-200 ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
            {actions.map((action) => (
              <button key={action.label} className="flex items-center gap-1">
                <span className="rounded-full bg-white px-1.5 py-0.5 text-[7px] text-neutral-600 shadow">{action.label}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] shadow">{action.icon}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close actions' : 'Open actions'}
            aria-expanded={open}
            className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-[12px] text-white shadow-lg transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          >
            +
          </button>
        </div>
      </div>
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* vocab · scroll & motion                                             */
/* ------------------------------------------------------------------ */

export function ScrollRevealDemo() {
  return (
    <DemoBox className="dot-grid">
      <div className="w-44 space-y-1.5">
        <div className="anim-reveal rounded-md border border-neutral-200 bg-white p-2">
          <div className="font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">entering viewport</div>
          <div className="mt-1 h-1.5 w-3/4 rounded bg-neutral-800" />
          <div className="mt-1 h-1 w-full rounded bg-neutral-200" />
        </div>
        <div className="text-center font-mono-ui text-[7px] text-neutral-400">fade in + ↑ 16px</div>
      </div>
    </DemoBox>
  )
}

export function ParallaxDemo() {
  const [scroll, setScroll] = useState(0)

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    setScroll(event.currentTarget.scrollTop)
  }

  return (
    <DemoBox className="dot-grid">
      <div className="relative h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div onScroll={handleScroll} className="absolute inset-0 z-10 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Parallax scroll demo">
          <div className="h-48" />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 bottom-0 h-14 w-28 rounded-full bg-emerald-300/45 blur-[2px] transition-transform duration-75" style={{ transform: `translateY(${-scroll * 0.18}px)` }} />
          <div className="absolute right-8 top-5 h-10 w-10 rounded-md border border-neutral-300 bg-white/70 shadow-sm backdrop-blur transition-transform duration-75" style={{ transform: `translateY(${-scroll * 0.48}px)` }} />
          <div className="absolute left-1/2 top-1/2 font-display text-[13px] text-neutral-900 transition-transform duration-75" style={{ transform: `translate(-50%, calc(-50% - ${scroll * 0.72}px))` }}>depth</div>
          <div className="absolute bottom-1 left-2 font-mono-ui text-[6px] uppercase tracking-wider text-neutral-400">bg · mid · fg</div>
          <div className="absolute right-1 top-1 font-mono-ui text-[5px] text-neutral-400">scroll ↓</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function ScrollProgressDemo() {
  return (
    <DemoBox>
      <div className="w-full">
        <div className="flex items-center justify-between border-b border-neutral-200 px-2 py-1">
          <div className="text-[8px] font-semibold">Article title</div>
          <div className="font-mono-ui text-[6px] text-neutral-400">sticky nav</div>
        </div>
        <div className="h-[3px] w-full bg-neutral-100">
          <div className="anim-progress-line h-full bg-emerald-600" />
        </div>
        <div className="space-y-1 p-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1 rounded bg-neutral-200" style={{ width: `${85 - i * 18}%` }} />
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function ScrollSnapDemo() {
  const [active, setActive] = useState(1)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startX: 0, startScrollLeft: 0, dragging: false })
  const cards = ['01', '02', '03', '04']

  function scrollToCard(index: number) {
    scrollerRef.current?.scrollTo({ left: index * 72, behavior: 'smooth' })
  }

  function move(direction: number) {
    scrollToCard(Math.max(0, Math.min(cards.length - 1, active + direction)))
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    event.preventDefault()
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX
  }

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    setActive(Math.max(0, Math.min(cards.length - 1, Math.round(event.currentTarget.scrollLeft / 72))))
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    dragRef.current = { startX: event.clientX, startScrollLeft: event.currentTarget.scrollLeft, dragging: true }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.dragging) return
    event.currentTarget.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX)
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    dragRef.current.dragging = false
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <DemoBox>
      <div className="w-60" aria-label="Scroll snap demo">
        <div className="flex items-center gap-1.5">
          <button onClick={() => move(-1)} disabled={active === 0} aria-label="Previous card" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-[10px] text-neutral-600 disabled:opacity-30">‹</button>
          <div className="relative flex h-20 flex-1 items-center overflow-hidden">
            <div className="absolute left-1/2 top-1 h-[calc(100%-8px)] w-px -translate-x-1/2 bg-emerald-500/70" />
            <div
              ref={scrollerRef}
              onWheel={handleWheel}
              onScroll={handleScroll}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="flex h-full w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto overscroll-x-contain px-[calc(50%-2rem)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card, i) => (
                <div
                  key={card}
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToCard(i)}
                  onKeyDown={(event) => event.key === 'Enter' && scrollToCard(i)}
                  className={`flex h-14 w-16 shrink-0 snap-center select-none items-center justify-center rounded-md border text-[10px] transition-all duration-300 ${
                    i === active ? 'scale-110 border-neutral-800 bg-neutral-900 font-medium text-white shadow-lg' : 'border-neutral-200 bg-white text-neutral-400 opacity-65'
                  }`}
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => move(1)} disabled={active === cards.length - 1} aria-label="Next card" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-[10px] text-neutral-600 disabled:opacity-30">›</button>
        </div>
        <div className="mt-1 flex items-center justify-between font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">
          <span>snap to center</span>
          <span>{active + 1} / {cards.length}</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function HorizontalScrollDemo() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startX: 0, startScrollLeft: 0, dragging: false })

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    event.preventDefault()
    event.currentTarget.scrollLeft += event.deltaX || event.deltaY
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    dragRef.current = { startX: event.clientX, startScrollLeft: event.currentTarget.scrollLeft, dragging: true }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.dragging) return
    event.currentTarget.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX)
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    dragRef.current.dragging = false
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <DemoBox>
      <div className="w-60">
        <div className="flex items-center gap-1">
          <div className="text-[9px] text-neutral-400">‹</div>
          <div
            ref={scrollerRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="flex flex-1 cursor-ew-resize gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Horizontal scroll demo"
          >
            {['Design', 'Build', 'Launch', 'Grow'].map((label, i) => (
              <div key={label} className={`h-12 w-16 shrink-0 select-none rounded-md border bg-gradient-to-br p-1.5 ${i === 0 ? 'border-emerald-300 from-emerald-100 to-emerald-50' : 'border-neutral-200 from-neutral-50 to-neutral-100'}`}>
                <div className="h-1 w-3/4 rounded bg-neutral-400/40" />
                <div className="mt-1.5 h-5 rounded bg-white/70" />
                <div className="mt-1 font-mono-ui text-[5px] uppercase tracking-wider text-neutral-500">{label}</div>
              </div>
            ))}
          </div>
          <div className="text-[9px] text-neutral-400">›</div>
        </div>
        <div className="mt-1 flex items-center justify-between font-mono-ui text-[7px] text-neutral-400">
          <span>swipe ↔</span>
          <span>3.5 cards visible</span>
        </div>
      </div>
    </DemoBox>
  )
}

export function InfiniteScrollDemo() {
  return (
    <DemoBox>
      <div className="relative h-28 w-40 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className="anim-infscroll space-y-1 p-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-1.5 rounded border border-neutral-100 p-1">
              <div className="h-4 w-4 rounded bg-neutral-200" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 w-3/4 rounded bg-neutral-300" />
                <div className="h-1 w-1/2 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white via-white/80 to-transparent pb-1 pt-3">
          <div className="anim-spin-slow h-3 w-3 rounded-full border-2 border-neutral-300 border-t-neutral-700" />
        </div>
      </div>
    </DemoBox>
  )
}

export function MarqueeDemo() {
  const items = ['Design', 'Frontend', 'AI Prototyping', 'Writing', 'Creative Tools']
  const row = [...items, ...items]
  return (
    <DemoBox className="!justify-start">
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="anim-marquee flex shrink-0 gap-2 pr-2">
          {row.map((t, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[9px] text-neutral-700">{t}</span>
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function HoverMicroDemo() {
  const [hovered, setHovered] = useState(false)

  return (
    <DemoBox>
      <div className="flex items-center gap-2">
        <div className="rounded-md border border-neutral-200 bg-white p-2 opacity-60">
          <div className="h-8 w-12 rounded bg-neutral-100" />
        </div>
        <div
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          className={`cursor-pointer rounded-md border border-neutral-800 bg-white p-2 transition-all duration-200 ease-out ${
            hovered ? '-translate-y-1 border-emerald-500 shadow-[0_10px_20px_-10px_rgba(5,150,105,0.6)]' : 'shadow-sm'
          }`}
        >
          <div className="h-8 w-12 rounded bg-gradient-to-br from-emerald-200 to-neutral-200" />
          <div className="mt-1 flex items-center justify-between">
            <div className="h-1 w-8 rounded bg-neutral-800" />
            <span className={`text-[9px] text-neutral-800 transition-transform duration-200 ${hovered ? 'translate-x-1' : ''}`}>→</span>
          </div>
        </div>
        <div className="rounded-md border border-neutral-200 bg-white p-2 opacity-60">
          <div className="h-8 w-12 rounded bg-neutral-100" />
        </div>
      </div>
    </DemoBox>
  )
}

export function StaggeredDemo() {
  const icons = ['◇', '▰', '✦', '¶']
  return (
    <DemoBox className="dot-grid">
      <div className="flex w-56 gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="anim-reveal flex-1 rounded-md border border-neutral-200 bg-white p-1.5 text-center" style={{ animationDelay: `${i * 0.18}s` }}>
            <div className="text-[10px] text-neutral-700">{icons[i]}</div>
            <div className="mt-1 h-1 w-full rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </DemoBox>
  )
}

export function ScrollDrivenDemo() {
  const [progress, setProgress] = useState(18)
  const stages = ['Discover', 'Design', 'Build']

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    event.preventDefault()
    setProgress((current) => Math.max(0, Math.min(100, current + event.deltaY * 0.18)))
  }

  return (
    <DemoBox>
      <div onWheel={handleWheel} className="flex w-52 cursor-ns-resize items-stretch gap-2 rounded-md p-1" aria-label="Scroll-driven animation demo">
        <div className="relative w-1.5 rounded-full bg-neutral-200">
          <div className="absolute left-0 top-0 w-full rounded-full bg-neutral-800 transition-[height] duration-150 ease-out" style={{ height: `${progress}%` }} />
          <div
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-800 bg-white shadow-sm transition-[top] duration-150 ease-out"
            style={{ top: `${progress}%` }}
          />
        </div>
        <div className="flex-1 space-y-1">
          {stages.map((stage, i) => {
            const threshold = i * 34
            const active = progress >= threshold
            const current = progress >= threshold && progress < threshold + 34
            return (
              <div
                key={stage}
                className={`flex items-center gap-1.5 rounded border px-1.5 py-1 transition-all duration-200 ${
                  active ? 'border-neutral-700 bg-neutral-50 opacity-100' : 'border-neutral-200 bg-white opacity-35'
                } ${current ? '-translate-x-0.5 shadow-sm' : ''}`}
              >
                <div className={`h-3 w-6 rounded transition-colors duration-200 ${active ? 'bg-emerald-300' : 'bg-neutral-200'}`} />
                <div className={`h-1 flex-1 rounded transition-colors duration-200 ${active ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
              </div>
            )
          })}
        </div>
      </div>
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* vocab · feedback & loading                                          */
/* ------------------------------------------------------------------ */

export function LoadingButtonDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-20 items-center justify-center rounded-full border border-neutral-200 bg-white text-[9px] text-neutral-500">Send</div>
        <div className="flex h-7 w-24 items-center justify-center gap-1.5 rounded-full bg-neutral-900 text-[9px] text-white">
          <span className="anim-spin-slow h-2.5 w-2.5 rounded-full border-2 border-white/40 border-t-white" />
          Sending…
        </div>
        <div className="flex h-7 w-16 items-center justify-center gap-1 rounded-full bg-emerald-600 text-[9px] text-white">✓ Sent</div>
      </div>
    </DemoBox>
  )
}

export function ErrorStateDemo() {
  return (
    <DemoBox>
      <div className="w-48 rounded-lg border border-red-200 bg-red-50 p-2.5 text-center">
        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-[12px] font-bold text-red-600">!</div>
        <div className="mt-1 text-[10px] font-semibold text-neutral-800">Couldn’t load</div>
        <div className="mt-0.5 text-[8px] text-neutral-500">Network timed out</div>
        <div className="mt-1.5 inline-block rounded-full bg-neutral-900 px-2 py-0.5 text-[7px] text-white">Retry</div>
      </div>
    </DemoBox>
  )
}

export function RetryStateDemo() {
  return (
    <DemoBox>
      <div className="w-52 space-y-1">
        <div className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white p-1.5">
          <div className="h-6 w-6 rounded bg-neutral-200" />
          <div className="flex-1">
            <div className="h-1 w-3/4 rounded bg-neutral-300" />
            <div className="mt-0.5 text-[7px] text-emerald-600">✓ done</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-red-200 bg-red-50 p-1.5">
          <div className="h-6 w-6 rounded bg-red-200" />
          <div className="flex-1">
            <div className="h-1 w-3/4 rounded bg-neutral-300" />
            <div className="mt-0.5 text-[7px] font-medium text-red-600">⚠ Upload failed</div>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="rounded bg-neutral-900 px-1 py-0.5 text-[6px] text-white">Retry</div>
            <div className="rounded border border-neutral-300 px-1 py-0.5 text-[6px] text-neutral-500">Remove</div>
          </div>
        </div>
      </div>
    </DemoBox>
  )
}

export function OptimisticUiDemo() {
  return (
    <DemoBox>
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5">
          <span className="text-[11px] text-neutral-300">♡</span>
          <span className="text-[8px] text-neutral-500">24</span>
        </div>
        <div className="font-mono-ui text-[7px] text-neutral-400">click →</div>
        <div className="anim-badge-pop flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-white">
          <span className="text-[11px] text-red-400">♥</span>
          <span className="text-[8px]">25</span>
        </div>
        <div className="font-mono-ui text-[7px] text-neutral-400">syncing…</div>
      </div>
    </DemoBox>
  )
}

export function InlineValidationDemo() {
  return (
    <DemoBox>
      <div className="w-48 text-left">
        <div className="font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">Email</div>
        <div className="mt-0.5 flex items-center rounded-md border border-red-400 bg-white px-2 py-1">
          <span className="text-[9px] text-neutral-700">punk@</span>
          <span className="anim-blink text-[9px] text-neutral-400">|</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-[8px] text-red-600">
          <span>⚠</span> Enter a valid email address
        </div>
      </div>
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* vocab · advanced effects                                            */
/* ------------------------------------------------------------------ */

export function CustomCursorDemo() {
  const [cursor, setCursor] = useState({ visible: false, x: 50, y: 50, label: '' })

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    const rect = event.currentTarget.getBoundingClientRect()
    const target = (event.target as HTMLElement).closest('[data-cursor-label]')
    setCursor({
      visible: true,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      label: target?.getAttribute('data-cursor-label') ?? '',
    })
  }

  return (
    <DemoBox>
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setCursor((current) => ({ ...current, visible: false, label: '' }))}
        className="relative h-24 w-52 cursor-none overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50"
        aria-label="Custom cursor demo"
      >
        <div className="grid h-full grid-cols-3 gap-1 p-1.5">
          {['Field Notes', 'Studio', 'Archive'].map((label, i) => (
            <div
              key={label}
              data-cursor-label="View"
              className={`rounded border border-transparent bg-gradient-to-br p-1 transition-colors ${
                i === 0 ? 'from-emerald-200 to-emerald-50 hover:border-emerald-400' : 'from-neutral-100 to-neutral-200 hover:border-neutral-400'
              }`}
            >
              <div className="h-1 w-3/4 rounded bg-neutral-500/30" />
              <div className="mt-1 h-5 rounded bg-white/45" />
              <div className="mt-1 font-mono-ui text-[5px] uppercase tracking-wider text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
        <div
          className={`pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center transition-opacity duration-150 ${cursor.visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: cursor.x, top: cursor.y }}
        >
          {cursor.label && <div className="flex h-5 items-center rounded-full bg-emerald-600 px-1.5 text-[7px] font-medium text-white shadow-lg">{cursor.label}</div>}
          <div className={`h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-600 shadow ${cursor.label ? '-ml-1.5' : ''}`} />
        </div>
      </div>
    </DemoBox>
  )
}

export function MagneticButtonDemo() {
  return (
    <DemoBox>
      <div className="relative flex h-24 w-52 items-center justify-center">
        <div className="absolute right-8 top-7 h-1.5 w-1.5 rounded-full bg-neutral-400" />
        <div className="anim-magnet flex h-8 w-28 items-center justify-center rounded-full bg-neutral-900 text-[9px] text-white">View Work</div>
      </div>
    </DemoBox>
  )
}

export function TiltCardDemo() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    setTilt({ x: (0.5 - y) * 10, y: (x - 0.5) * 10 })
  }

  return (
    <DemoBox>
      <div className="[perspective:600px]">
        <div
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative h-20 w-32 cursor-default rounded-lg border border-neutral-200 bg-white p-2 shadow-lg transition-transform duration-200 ease-out [transform-style:preserve-3d] will-change-transform"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <div className="[transform:translateZ(18px)] font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">featured</div>
          <div className="mt-1 rounded bg-gradient-to-br from-emerald-200 to-neutral-200 [transform:translateZ(12px)] h-8" />
          <div className="mt-1.5 h-1.5 w-2/3 rounded bg-neutral-800 [transform:translateZ(20px)]" />
          <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-white/70 shadow backdrop-blur [transform:translateZ(28px)]" />
        </div>
      </div>
    </DemoBox>
  )
}

export function SpotlightHoverDemo() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    const rect = event.currentTarget.getBoundingClientRect()
    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <DemoBox>
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setSpotlight({ x: 50, y: 50 })}
        className="relative h-24 w-52 cursor-default overflow-hidden rounded-lg bg-neutral-950"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-[background] duration-150 ease-out"
          style={{
            background: `radial-gradient(72px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.34), rgba(16, 185, 129, 0.28) 32%, transparent 72%)`,
          }}
        />
        <div className="relative grid h-full grid-cols-3 gap-1.5 p-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-white/15 bg-white/10 shadow-[0_6px_14px_rgba(0,0,0,0.28)]" />
          ))}
        </div>
      </div>
    </DemoBox>
  )
}

export function TextMaskDemo() {
  return (
    <DemoBox className="dot-grid">
      <div className="text-center">
        <div className="bg-gradient-to-r from-emerald-500 via-neutral-600 to-neutral-900 bg-clip-text font-display text-2xl font-medium tracking-tight text-transparent">
          MAKE IT VISIBLE
        </div>
        <div className="mt-1 font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">background-clip: text</div>
      </div>
    </DemoBox>
  )
}

export function ClipPathRevealDemo() {
  return (
    <DemoBox>
      <div className="flex w-52 items-center gap-3">
        <div className="anim-clip h-16 w-24 rounded-md bg-gradient-to-br from-emerald-300 via-neutral-300 to-neutral-500" />
        <div className="font-mono-ui text-[7px] uppercase leading-relaxed tracking-wider text-neutral-400">
          inset(0 100% 0 0)
          <br />
          → reveal
        </div>
      </div>
    </DemoBox>
  )
}

export function WebGLHeroDemo() {
  return (
    <DemoBox>
      <div className="relative h-24 w-52 overflow-hidden rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-700">
        <div className="anim-blob-a absolute left-8 top-6 h-12 w-12 rounded-full bg-emerald-500/30 blur-md" />
        <div
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)' }}
        />
        <div className="anim-parallax-slow absolute right-6 top-4 h-10 w-14 rounded-md border border-white/15 bg-white/5 backdrop-blur" />
        <div className="absolute bottom-1 left-2 font-mono-ui text-[6px] uppercase tracking-wider text-white/40">three.js · low-poly</div>
      </div>
    </DemoBox>
  )
}

export function ViewTransitionsDemo() {
  return (
    <DemoBox>
      <div className="relative flex h-24 w-52 items-center justify-center gap-2 overflow-hidden">
        <div className="anim-vt h-14 w-20 rounded-md bg-gradient-to-br from-emerald-300 to-neutral-400 shadow" />
        <div className="font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">card → hero</div>
      </div>
    </DemoBox>
  )
}

/* ------------------------------------------------------------------ */
/* vocabulary additions                                                */
/* ------------------------------------------------------------------ */

export function HoldToConfirmDemo() {
  const [holding, setHolding] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const timerRef = useRef<number | null>(null)

  function stopHolding() {
    setHolding(false)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = null
  }

  function startHolding() {
    if (confirmed) return
    setHolding(true)
    timerRef.current = window.setTimeout(() => {
      setConfirmed(true)
      setHolding(false)
    }, 900)
  }

  useEffect(() => () => { if (timerRef.current) window.clearTimeout(timerRef.current) }, [])

  return (
    <DemoBox>
      <div className="text-center">
        <button
          onPointerDown={startHolding}
          onPointerUp={stopHolding}
          onPointerLeave={stopHolding}
          onPointerCancel={stopHolding}
          onClick={() => confirmed && setConfirmed(false)}
          className={`relative h-9 w-32 overflow-hidden rounded-full border text-[10px] font-medium transition-colors ${confirmed ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-red-300 bg-white text-red-700'}`}
        >
          <span className={`absolute inset-y-0 left-0 bg-red-100 transition-[width] ${holding ? 'w-full duration-[900ms]' : 'w-0 duration-150'}`} />
          <span className="relative">{confirmed ? 'Deleted · click to reset' : 'Hold to delete'}</span>
        </button>
        <div className="mt-2 font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">hold · release to cancel</div>
      </div>
    </DemoBox>
  )
}

export function SwipeActionsDemo() {
  const [open, setOpen] = useState(false)
  return (
    <DemoBox>
      <div className="w-52">
        <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 bg-red-500 px-2 text-[7px] text-white"><button onClick={() => setOpen(false)}>Archive</button><button onClick={() => setOpen(false)}>Delete</button></div>
          <div className={`relative flex items-center gap-2 bg-white p-2 transition-transform duration-200 ${open ? '-translate-x-20' : ''}`}>
            <div className="h-6 w-6 rounded bg-emerald-100" /><div className="flex-1"><div className="h-1.5 w-3/4 rounded bg-neutral-700" /><div className="mt-1 h-1 w-1/2 rounded bg-neutral-200" /></div>
            <button onClick={() => setOpen(!open)} aria-label="Toggle swipe actions" className="text-[10px] text-neutral-400">←</button>
          </div>
        </div>
        <div className="mt-2 text-center font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">swipe left to reveal</div>
      </div>
    </DemoBox>
  )
}

export function PullToRefreshDemo() {
  const [refreshing, setRefreshing] = useState(false)
  const [ready, setReady] = useState(false)
  const [dragging, setDragging] = useState(false)
  const surfaceRef = useRef<HTMLDivElement>(null)
  const startY = useRef<number | null>(null)
  const pull = useRef(0)

  const THRESHOLD = 44 // eased px at which "release to refresh" arms
  const MAX = 58 // eased px ceiling
  const HOLD = 26 // resting offset while the refresh spins

  function write(offset: number) {
    pull.current = offset
    const el = surfaceRef.current
    if (!el) return
    el.style.setProperty('--ptr-offset', `${offset}px`)
    el.style.setProperty('--ptr-progress', String(Math.min(1, offset / THRESHOLD)))
  }

  // Rubber-band resistance: 1:1 for the first 16px, then diminishing returns toward MAX.
  function ease(distance: number) {
    const d = Math.max(0, distance)
    if (d <= 16) return d
    return Math.min(MAX, 16 + (d - 16) * 0.5)
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (refreshing) return
    startY.current = e.clientY
    setDragging(true) // disable the settle transition → 1:1 tracking
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (startY.current === null) return
    const offset = ease(e.clientY - startY.current)
    write(offset)
    setReady(offset >= THRESHOLD)
  }

  function onPointerUp() {
    if (startY.current === null) return
    startY.current = null
    setDragging(false) // re-enable the settle transition on next paint…
    if (pull.current >= THRESHOLD) {
      setRefreshing(true)
      requestAnimationFrame(() => write(HOLD)) // …then snap into the loading position
      window.setTimeout(() => {
        setRefreshing(false)
        setReady(false)
        requestAnimationFrame(() => write(0))
      }, 800)
    } else {
      setReady(false)
      requestAnimationFrame(() => write(0)) // spring back to rest
    }
  }

  const settle = !dragging

  return (
    <DemoBox>
      <div ref={surfaceRef} className="relative h-24 w-44 select-none overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 [--ptr-offset:0px] [--ptr-progress:0]">
        {/* Refresh slot — sits behind the feed and is revealed as it pulls down */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center ${settle ? 'transition-[height] duration-300 ease-out' : ''}`} style={{ height: 'var(--ptr-offset)' }}>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-200 border-t-emerald-500 text-emerald-600" style={{ opacity: 'var(--ptr-progress)', transform: 'scale(calc(0.6 + var(--ptr-progress) * 0.4))' }}>
            <span className={`flex h-full w-full items-center justify-center text-[9px] leading-none transition-transform duration-200 ${refreshing ? 'anim-spin-slow' : ''}`} style={{ transform: ready && !refreshing ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {refreshing ? '' : '↓'}
            </span>
          </span>
        </div>
        {/* Draggable feed */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`absolute inset-0 cursor-ns-resize touch-none bg-white p-2 will-change-transform ${settle ? 'transition-transform duration-300 ease-out' : ''}`}
          style={{ transform: 'translateY(var(--ptr-offset))' }}
        >
          {[0, 1, 2, 3].map((i) => <div key={i} className="mb-1.5 flex items-center gap-1.5"><div className="h-3 w-3 shrink-0 rounded bg-neutral-200" /><div className="h-1 flex-1 rounded bg-neutral-200" /></div>)}
        </div>
      </div>
    </DemoBox>
  )
}

export function BeforeAfterDemo() {
  const [value, setValue] = useState(50)
  return (
    <DemoBox>
      <div className="relative h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-rose-300 to-rose-400" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}><div className="h-full w-52 bg-gradient-to-br from-sky-200 via-indigo-300 to-indigo-500" /></div>
        <div className="pointer-events-none absolute inset-y-0 w-px bg-white shadow" style={{ left: `${value}%` }}><span className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 bg-white text-[8px] text-neutral-700">↔</span></div>
        <span className="absolute left-2 top-2 rounded bg-neutral-900/65 px-1 py-0.5 font-mono-ui text-[6px] text-white">BEFORE</span><span className="absolute right-2 top-2 rounded bg-neutral-900/65 px-1 py-0.5 font-mono-ui text-[6px] text-white">AFTER</span>
        <input id="before-after-position" name="before-after-position" aria-label="Before and after position" type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
    </DemoBox>
  )
}

export function UndoToastDemo() {
  const [deleted, setDeleted] = useState(false)
  const [toast, setToast] = useState(false)
  function deleteItem() { setDeleted(true); setToast(true); window.setTimeout(() => setToast(false), 3000) }
  return (
    <DemoBox>
      <div className="relative h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2">
        {!deleted ? <div className="flex items-center gap-2 rounded border border-neutral-100 p-1.5"><div className="h-5 w-5 rounded bg-emerald-100" /><div className="flex-1"><div className="h-1.5 w-3/4 rounded bg-neutral-700" /><div className="mt-1 h-1 w-1/2 rounded bg-neutral-200" /></div><button onClick={deleteItem} className="text-[8px] text-red-600">Delete</button></div> : <div className="py-4 text-center text-[8px] text-neutral-400">Item removed</div>}
        <div role="status" className={`absolute inset-x-2 bottom-2 flex items-center justify-between rounded bg-neutral-900 px-2 py-1 text-[7px] text-white transition-all duration-200 ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}><span>Item deleted</span><button onClick={() => { setDeleted(false); setToast(false) }} className="font-medium text-emerald-300">Undo</button></div>
      </div>
    </DemoBox>
  )
}

export function InlineEditDemo() {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('Project Atlas')
  const [draft, setDraft] = useState(title)
  function save() { setTitle(draft.trim() || title); setEditing(false) }
  return (
    <DemoBox>
      <div className="w-52 rounded-lg border border-neutral-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          {editing ? <input id="inline-project-title" name="inline-project-title" autoFocus value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') save(); if (event.key === 'Escape') { setDraft(title); setEditing(false) } }} className="min-w-0 flex-1 border-b border-emerald-500 bg-transparent text-[10px] font-medium outline-none" /> : <span className="text-[10px] font-medium text-neutral-800">{title}</span>}
          <button onClick={() => editing ? save() : setEditing(true)} className="shrink-0 text-[8px] text-emerald-700">{editing ? 'Save' : 'Edit'}</button>
        </div>
        <div className="mt-2 h-1.5 w-4/5 rounded bg-neutral-200" /><div className="mt-1 h-1.5 w-3/5 rounded bg-neutral-100" />
      </div>
    </DemoBox>
  )
}

export function ScrollShadowDemo() {
  const [scrolled, setScrolled] = useState(false)
  return (
    <DemoBox>
      <div className="h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className={`relative z-10 flex h-7 items-center justify-between bg-white px-2 transition-shadow duration-150 ${scrolled ? 'shadow-md' : ''}`}><span className="text-[8px] font-medium">Articles</span><span className="text-[7px] text-neutral-400">sticky</span></div>
        <div onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 0)} className="h-[68px] overflow-y-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Scroll shadow demo">
          {[0, 1, 2, 3, 4].map((i) => <div key={i} className="mt-2 h-5 rounded border border-neutral-100 bg-neutral-50 p-1"><div className="h-1 w-3/4 rounded bg-neutral-200" /></div>)}
        </div>
      </div>
    </DemoBox>
  )
}

export function CollapsingHeaderDemo() {
  const [scroll, setScroll] = useState(0)
  const compact = scroll > 18
  return (
    <DemoBox>
      <div className="h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <div className={`relative z-10 flex items-center bg-white px-2 transition-all duration-200 ${compact ? 'h-7 shadow-sm' : 'h-12'}`}><span className={`font-display transition-all duration-200 ${compact ? 'text-[11px]' : 'text-[16px]'}`}>Field Notes</span><span className="ml-auto font-mono-ui text-[6px] text-neutral-400">{compact ? 'sticky' : 'scroll ↓'}</span></div>
        <div onScroll={(event) => setScroll(event.currentTarget.scrollTop)} className="h-[60px] overflow-y-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Collapsing header demo">
          {[0, 1, 2, 3, 4].map((i) => <div key={i} className="mt-2 h-4 rounded bg-neutral-100" />)}
        </div>
      </div>
    </DemoBox>
  )
}

export function DropzoneDemo() {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<string | null>(null)
  return (
    <DemoBox>
      <div
        onDragOver={(event) => { event.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => { event.preventDefault(); setDragging(false); setFile(event.dataTransfer.files[0]?.name || 'brief.pdf') }}
        className={`flex h-24 w-52 flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${dragging ? 'border-emerald-500 bg-emerald-50' : 'border-neutral-300 bg-neutral-50'}`}
      >
        {file ? <><div className="text-[9px] font-medium text-neutral-800">{file}</div><button onClick={() => setFile(null)} className="mt-1 text-[8px] text-red-600">Remove</button></> : <><div className="text-lg text-emerald-600">↑</div><div className="text-[9px] text-neutral-700">Drop a file here</div><button onClick={() => setFile('project-brief.pdf')} className="mt-1 text-[8px] text-emerald-700">or browse</button></>}
      </div>
    </DemoBox>
  )
}

export function SelectionToolbarDemo() {
  const [selected, setSelected] = useState(false)
  return (
    <DemoBox>
      <div className="relative w-52 rounded-lg border border-neutral-200 bg-white p-3">
        <div onMouseUp={() => setSelected(true)} onDoubleClick={() => setSelected(true)} className="cursor-text text-[10px] leading-relaxed text-neutral-700"><span className={selected ? 'bg-emerald-200' : ''}>Select this sentence</span> to reveal useful actions.</div>
        <div className={`absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-full gap-1 rounded-md bg-neutral-900 p-1 shadow-lg transition-all duration-150 ${selected ? 'opacity-100' : 'pointer-events-none translate-y-1 opacity-0'}`}><button onClick={() => setSelected(false)} className="px-1 text-[7px] text-white">Copy</button><button className="px-1 text-[7px] text-white">Highlight</button><button className="px-1 text-[7px] text-white">Comment</button></div>
        <button onClick={() => setSelected(!selected)} className="mt-2 font-mono-ui text-[7px] text-neutral-400">{selected ? 'clear selection' : 'select text'}</button>
      </div>
    </DemoBox>
  )
}

export function RangeSliderDemo() {
  const [min, setMin] = useState(20)
  const [max, setMax] = useState(80)
  return (
    <DemoBox>
      <div className="w-52">
        <div className="mb-3 flex justify-between font-mono-ui text-[8px] text-neutral-600"><span>${min}</span><span>${max}</span></div>
        <div className="relative h-5"><div className="absolute left-0 right-0 top-2 h-1 rounded bg-neutral-200" /><div className="absolute top-2 h-1 rounded bg-emerald-500" style={{ left: `${min}%`, right: `${100 - max}%` }} /><input id="range-min" name="range-min" aria-label="Minimum price" type="range" min="0" max="100" value={min} onChange={(event) => setMin(Math.min(Number(event.target.value), max - 5))} className="absolute inset-0 w-full opacity-0" /><input id="range-max" name="range-max" aria-label="Maximum price" type="range" min="0" max="100" value={max} onChange={(event) => setMax(Math.max(Number(event.target.value), min + 5))} className="absolute inset-0 w-full opacity-0" /><span className="pointer-events-none absolute top-0 h-5 w-5 rounded-full border-2 border-emerald-600 bg-white" style={{ left: `calc(${min}% - 10px)` }} /><span className="pointer-events-none absolute top-0 h-5 w-5 rounded-full border-2 border-emerald-600 bg-white" style={{ left: `calc(${max}% - 10px)` }} /></div>
        <div className="mt-2 text-center font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">price range</div>
      </div>
    </DemoBox>
  )
}

export function SortableTableDemo() {
  const [descending, setDescending] = useState(false)
  const rows = [{ name: 'Atlas', value: 42 }, { name: 'Cedar', value: 18 }, { name: 'Nova', value: 67 }].sort((a, b) => descending ? b.value - a.value : a.value - b.value)
  return (
    <DemoBox>
      <table className="w-52 overflow-hidden rounded-md border border-neutral-200 text-left text-[8px]"><thead><tr className="border-b border-neutral-200"><th className="px-2 py-1 font-medium">Project</th><th className="px-2 py-1 text-right"><button onClick={() => setDescending(!descending)} aria-sort={descending ? 'descending' : 'ascending'} className="font-medium text-emerald-700">Score {descending ? '↓' : '↑'}</button></th></tr></thead><tbody>{rows.map((row) => <tr key={row.name} className="border-b border-neutral-100 last:border-0"><td className="px-2 py-1">{row.name}</td><td className="px-2 py-1 text-right font-mono-ui">{row.value}</td></tr>)}</tbody></table>
    </DemoBox>
  )
}

export function OverflowToolbarDemo() {
  const [compact, setCompact] = useState(false)
  const [more, setMore] = useState(false)
  return (
    <DemoBox>
      <div className={`relative rounded-lg border border-neutral-200 bg-white p-1.5 transition-[width] duration-200 ${compact ? 'w-36' : 'w-52'}`}>
        <div className="flex items-center gap-1"><button className="rounded bg-neutral-900 px-1.5 py-1 text-[7px] text-white">Save</button><button className="rounded border border-neutral-200 px-1.5 py-1 text-[7px]">Share</button>{!compact && <><button className="rounded border border-neutral-200 px-1.5 py-1 text-[7px]">Export</button><button className="rounded border border-neutral-200 px-1.5 py-1 text-[7px]">Print</button></>}<button onClick={() => setMore(!more)} aria-expanded={more} className="ml-auto rounded border border-neutral-200 px-1.5 py-1 text-[7px]">•••</button></div>
        {more && <div className="absolute right-1.5 top-9 z-10 rounded border border-neutral-200 bg-white py-1 shadow-md"><button className="block px-2 py-1 text-[7px]">Export</button><button className="block px-2 py-1 text-[7px]">Print</button></div>}
        <button onClick={() => setCompact(!compact)} className="mt-1.5 font-mono-ui text-[6px] text-neutral-400">{compact ? 'expand' : 'shrink'} toolbar</button>
      </div>
    </DemoBox>
  )
}

export function CharacterCounterDemo() {
  const [text, setText] = useState('A quiet note')
  const limit = 40
  const nearLimit = text.length >= limit - 8
  return (
    <DemoBox>
      <div className="w-52"><textarea id="post-copy" name="post-copy" value={text} maxLength={limit} onChange={(event) => setText(event.target.value)} aria-describedby="post-copy-count" className="h-14 w-full resize-none rounded-md border border-neutral-300 p-2 text-[9px] outline-none focus:border-emerald-600" /><div id="post-copy-count" className={`mt-1 text-right font-mono-ui text-[8px] ${nearLimit ? 'text-red-600' : 'text-neutral-400'}`}>{text.length} / {limit}</div></div>
    </DemoBox>
  )
}

export function CopyFeedbackDemo() {
  const [copied, setCopied] = useState(false)
  function copy() { setCopied(true); window.setTimeout(() => setCopied(false), 1500) }
  return (
    <DemoBox>
      <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-2"><code className="font-mono-ui text-[9px] text-neutral-600">npm install learnui</code><button onClick={copy} className={`rounded px-2 py-1 text-[8px] transition-colors ${copied ? 'bg-emerald-600 text-white' : 'bg-neutral-900 text-white'}`}>{copied ? '✓ Copied' : 'Copy'}</button></div>
    </DemoBox>
  )
}

export function ScrollMinimapDemo() {
  const [scroll, setScroll] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)
  function jump(position: number) { scrollerRef.current?.scrollTo({ top: position, behavior: 'smooth' }) }
  return (
    <DemoBox>
      <div className="flex h-24 w-52 gap-2 rounded-lg border border-neutral-200 bg-white p-2"><div ref={scrollerRef} onScroll={(event) => setScroll(event.currentTarget.scrollTop)} className="flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Document with minimap">{[0, 1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="mb-2"><div className="h-1.5 w-3/4 rounded bg-neutral-700" /><div className="mt-1 h-1 w-full rounded bg-neutral-200" /><div className="mt-1 h-1 w-4/5 rounded bg-neutral-100" /></div>)}</div><div className="relative w-4 rounded bg-neutral-100">{[5, 29, 54, 80].map((top, i) => <button key={top} onClick={() => jump(i * 35)} className="absolute left-1/2 h-1.5 w-2 -translate-x-1/2 rounded bg-neutral-400" style={{ top: `${top}%` }} />)}<span className="absolute inset-x-0 h-4 rounded border border-emerald-500 bg-emerald-100/70 transition-[top] duration-100" style={{ top: `${Math.min(80, scroll / 2)}%` }} /></div></div>
    </DemoBox>
  )
}

export function OtpInputDemo() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const refs = useRef<Array<HTMLInputElement | null>>([])
  function update(index: number, value: string) { const digit = value.replace(/\D/g, '').slice(-1); const next = [...code]; next[index] = digit; setCode(next); if (digit) refs.current[index + 1]?.focus() }
  return <DemoBox><div className="text-center"><div className="flex gap-1.5">{code.map((digit, i) => <input key={i} ref={(node) => { refs.current[i] = node }} id={`otp-${i}`} name={`otp-${i}`} inputMode="numeric" maxLength={1} value={digit} onChange={(event) => update(i, event.target.value)} onKeyDown={(event) => { if (event.key === 'Backspace' && !code[i]) refs.current[i - 1]?.focus() }} className="h-8 w-7 rounded border border-neutral-300 text-center text-[12px] outline-none focus:border-emerald-600" />)}</div><div className="mt-2 font-mono-ui text-[7px] uppercase tracking-wider text-neutral-400">verification code</div></div></DemoBox>
}

export function ReorderableListDemo() {
  const [items, setItems] = useState(['Research', 'Design', 'Build'])
  const [dragged, setDragged] = useState<number | null>(null)
  function move(index: number, direction: number) { const target = index + direction; if (target < 0 || target >= items.length) return; const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; setItems(next) }
  return <DemoBox><div className="w-52 space-y-1">{items.map((item, i) => <div key={item} draggable onDragStart={() => setDragged(i)} onDragEnd={() => setDragged(null)} onDragOver={(event) => event.preventDefault()} onDrop={() => { if (dragged === null || dragged === i) return; const next = [...items]; const [moved] = next.splice(dragged, 1); next.splice(i, 0, moved); setItems(next) }} className={`flex items-center gap-2 rounded border bg-white px-2 py-1.5 text-[8px] transition-all ${dragged === i ? 'scale-105 border-emerald-500 opacity-60 shadow' : 'border-neutral-200'}`}><span className="cursor-grab text-neutral-400">⠿</span><span className="flex-1">{item}</span><button onClick={() => move(i, -1)} aria-label={`Move ${item} up`} className="text-neutral-400">↑</button><button onClick={() => move(i, 1)} aria-label={`Move ${item} down`} className="text-neutral-400">↓</button></div>)}</div></DemoBox>
}

export function PasswordStrengthDemo() {
  const [password, setPassword] = useState('')
  const rules = [password.length >= 8, /[A-Z]/.test(password), /\d/.test(password)]
  const score = rules.filter(Boolean).length
  return <DemoBox><div className="w-52"><input id="strength-password" name="strength-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Create password" className="w-full rounded border border-neutral-300 px-2 py-1.5 text-[9px] outline-none focus:border-emerald-600" /><div className="mt-2 flex gap-1">{[0, 1, 2].map((i) => <div key={i} className={`h-1 flex-1 rounded transition-colors ${i < score ? ['bg-red-400', 'bg-amber-400', 'bg-emerald-500'][score - 1] : 'bg-neutral-200'}`} />)}</div><div className="mt-2 space-y-0.5 font-mono-ui text-[7px] text-neutral-500">{['8+ characters', 'uppercase letter', 'a number'].map((rule, i) => <div key={rule} className={rules[i] ? 'text-emerald-700' : ''}>{rules[i] ? '✓' : '○'} {rule}</div>)}</div></div></DemoBox>
}

export function MultiStepFormDemo() {
  const [step, setStep] = useState(0)
  const steps = ['Profile', 'Details', 'Done']
  return <DemoBox><div className="w-52"><div className="mb-3 flex items-center gap-1">{steps.map((label, i) => <div key={label} className="flex flex-1 items-center gap-1"><span className={`flex h-4 w-4 items-center justify-center rounded-full text-[7px] ${i <= step ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-500'}`}>{i + 1}</span>{i < 2 && <span className={`h-px flex-1 ${i < step ? 'bg-emerald-600' : 'bg-neutral-200'}`} />}</div>)}</div><div className="h-9 rounded border border-neutral-200 bg-neutral-50 p-2 text-[9px] text-neutral-700">{step === 2 ? 'All set. Ready to publish.' : `Complete your ${steps[step].toLowerCase()}.`}</div><div className="mt-2 flex justify-between"><button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="text-[8px] text-neutral-500 disabled:opacity-30">Back</button><button onClick={() => setStep(Math.min(2, step + 1))} className="text-[8px] text-emerald-700">{step === 2 ? 'Finish' : 'Next'}</button></div></div></DemoBox>
}

export function NotificationStackDemo() {
  const [notes, setNotes] = useState(['Comment added', 'Draft saved'])
  return <DemoBox><div className="relative h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50"><button onClick={() => setNotes((current) => [`New update ${current.length + 1}`, ...current].slice(0, 3))} className="absolute left-2 top-2 text-[8px] text-emerald-700">+ Notify</button><div className="absolute bottom-2 right-2 w-32 space-y-1">{notes.map((note, i) => <div key={note} className="flex items-center justify-between rounded bg-neutral-900 px-2 py-1 text-[7px] text-white shadow" style={{ transform: `translateY(${i * -1}px)` }}><span>{note}</span><button onClick={() => setNotes((current) => current.filter((item) => item !== note))}>×</button></div>)}</div></div></DemoBox>
}

export function AutosaveDemo() {
  const [value, setValue] = useState('Draft notes')
  const [status, setStatus] = useState<'saved' | 'saving'>('saved')
  const timerRef = useRef<number | null>(null)
  function change(value: string) { setValue(value); setStatus('saving'); if (timerRef.current) window.clearTimeout(timerRef.current); timerRef.current = window.setTimeout(() => setStatus('saved'), 600) }
  useEffect(() => () => { if (timerRef.current) window.clearTimeout(timerRef.current) }, [])
  return <DemoBox><div className="w-52"><textarea id="autosave-draft" name="autosave-draft" value={value} onChange={(event) => change(event.target.value)} className="h-12 w-full resize-none rounded border border-neutral-300 p-2 text-[9px] outline-none focus:border-emerald-600" /><div className={`mt-1 text-right font-mono-ui text-[7px] ${status === 'saving' ? 'text-amber-600' : 'text-emerald-700'}`}>{status === 'saving' ? 'Saving…' : '✓ Saved just now'}</div></div></DemoBox>
}

export function SplitPaneDemo() {
  const [left, setLeft] = useState(50)
  const paneRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startX: 0, startLeft: 50, active: false })

  function applySize(value: number) {
    const next = Math.max(25, Math.min(75, value))
    paneRef.current?.style.setProperty('--left-pane', `${next}%`)
    return next
  }

  function finishDrag() {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    const current = Number.parseFloat(paneRef.current?.style.getPropertyValue('--left-pane') || `${left}`)
    setLeft(current)
  }

  return (
    <DemoBox>
      <div ref={paneRef} className="grid h-24 w-52 overflow-hidden rounded-lg border border-neutral-200 [grid-template-columns:var(--left-pane,50%)_8px_1fr]" style={{ '--left-pane': `${left}%` } as React.CSSProperties}>
        <div className="min-w-0 bg-neutral-50 p-2"><div className="h-1.5 w-3/4 rounded bg-neutral-300" /><div className="mt-2 h-10 rounded bg-neutral-200" /></div>
        <div
          role="separator"
          tabIndex={0}
          aria-label="Panel divider"
          aria-orientation="vertical"
          aria-valuemin={25}
          aria-valuemax={75}
          aria-valuenow={left}
          onPointerDown={(event) => {
            const rect = paneRef.current?.getBoundingClientRect()
            if (!rect) return
            dragRef.current = { startX: event.clientX, startLeft: left, active: true }
            event.currentTarget.setPointerCapture(event.pointerId)
          }}
          onPointerMove={(event) => {
            if (!dragRef.current.active) return
            const rect = paneRef.current?.getBoundingClientRect()
            if (!rect) return
            applySize(dragRef.current.startLeft + ((event.clientX - dragRef.current.startX) / rect.width) * 100)
          }}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onKeyDown={(event) => {
            const delta = event.key === 'ArrowLeft' ? -5 : event.key === 'ArrowRight' ? 5 : 0
            if (!delta) return
            event.preventDefault()
            setLeft((current) => applySize(current + delta))
          }}
          className="cursor-col-resize bg-neutral-200 transition-colors hover:bg-emerald-500 focus:bg-emerald-500 focus:outline-none"
        />
        <div className="min-w-0 bg-white p-2"><div className="h-1.5 w-2/3 rounded bg-neutral-300" /><div className="mt-2 h-10 rounded bg-emerald-100" /></div>
      </div>
    </DemoBox>
  )
}

export function ColorPickerDemo() {
  const [color, setColor] = useState('#10b981')
  return <DemoBox><div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3"><input id="picker-color" name="picker-color" aria-label="Accent color" type="color" value={color} onChange={(event) => setColor(event.target.value)} className="h-9 w-9 cursor-pointer rounded border-0 p-0" /><div><div className="text-[9px] font-medium text-neutral-700">Accent color</div><code className="font-mono-ui text-[8px] text-neutral-400">{color.toUpperCase()}</code></div><div className="ml-auto h-6 w-6 rounded-full" style={{ backgroundColor: color }} /></div></DemoBox>
}
