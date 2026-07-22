import { useEffect, useState } from 'react'

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
  const [open, setOpen] = useState(false)
  const tints = ['from-amber-200 to-rose-300', 'from-sky-200 to-indigo-300', 'from-emerald-200 to-teal-300']
  return (
    <DemoBox>
      <div className="text-center">
        <div className="mb-1.5 flex justify-center gap-1.5">
          {tints.map((t, i) => (
            <button
              key={i}
              onClick={() => setOpen(true)}
              className={`h-9 w-12 rounded-md bg-gradient-to-br ${t} transition-transform hover:scale-105`}
            />
          ))}
        </div>
        <div className="font-mono-ui text-[9px] text-neutral-400">3 photos · click one to enlarge</div>
      </div>
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-950/70"
        >
          <div className={`h-20 w-28 rounded-lg bg-gradient-to-br ${tints[0]} shadow-2xl`} />
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

export function BadgeChipPillTagDemo() {
  return (
    <DemoBox>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
        <div className="flex items-center gap-1.5">
          <span className="relative text-sm">✉</span>
          <span className="-ml-2 -mt-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-bold text-white">7</span>
          <span className="font-mono-ui text-[9px] text-neutral-400">badge</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-md bg-neutral-900 px-2 py-0.5 text-[9px] text-white">Design ×</span>
          <span className="font-mono-ui text-[9px] text-neutral-400">chip</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[9px] font-medium text-emerald-700">Active</span>
          <span className="font-mono-ui text-[9px] text-neutral-400">pill</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-sm border border-neutral-300 px-1.5 py-px text-[9px] text-neutral-600">web</span>
          <span className="font-mono-ui text-[9px] text-neutral-400">tag</span>
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
  return (
    <DemoBox>
      <div className="flex items-end gap-2.5">
        <div className="relative h-20 w-24 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 bg-neutral-950/30" />
          <div className="absolute left-1/2 top-1/2 h-10 w-14 -translate-x-1/2 -translate-y-1/2 rounded bg-white shadow" />
          <div className="absolute bottom-0.5 w-full text-center font-mono-ui text-[8px] text-neutral-500">dialog</div>
        </div>
        <div className="relative h-20 w-24 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 bg-neutral-950/30" />
          <div className="absolute inset-y-0 right-0 w-12 bg-white shadow" />
          <div className="absolute bottom-0.5 w-full text-center font-mono-ui text-[8px] text-neutral-500">drawer</div>
        </div>
        <div className="relative h-20 w-24 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 bg-neutral-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-9 rounded-t-lg bg-white shadow" />
          <div className="absolute bottom-0.5 w-full text-center font-mono-ui text-[8px] text-neutral-500">sheet</div>
        </div>
      </div>
    </DemoBox>
  )
}

export function PopoverDropdownTooltipDemo() {
  return (
    <DemoBox>
      <div className="flex items-start gap-4 pt-2">
        <div className="flex flex-col items-center">
          <div className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px] shadow-sm">Filter ▾</div>
          <div className="h-1.5 w-px bg-neutral-300" />
          <div className="rounded-md border border-neutral-200 bg-white p-1.5 shadow-md">
            <div className="h-1.5 w-14 rounded bg-neutral-200" />
            <div className="mt-1 h-1.5 w-10 rounded bg-neutral-200" />
          </div>
          <div className="mt-0.5 font-mono-ui text-[8px] text-neutral-400">popover</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px] shadow-sm">Sort ▾</div>
          <div className="h-1.5 w-px bg-neutral-300" />
          <div className="rounded-md border border-neutral-200 bg-white py-0.5 shadow-md">
            <div className="bg-blue-600 px-2 py-0.5 text-[8px] text-white">Newest</div>
            <div className="px-2 py-0.5 text-[8px] text-neutral-600">Oldest</div>
          </div>
          <div className="mt-0.5 font-mono-ui text-[8px] text-neutral-400">dropdown</div>
        </div>
        <div className="flex flex-col items-center pt-6">
          <div className="rounded bg-neutral-900 px-1.5 py-0.5 text-[8px] text-white">Last updated today</div>
          <div className="h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-neutral-900" />
          <div className="mt-0.5 rounded-md border border-neutral-300 bg-white px-2 py-1 text-[9px]">ⓘ</div>
          <div className="mt-0.5 font-mono-ui text-[8px] text-neutral-400">tooltip</div>
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
      <div className="w-52 space-y-3 text-left">
        <div>
          <div className="mb-0.5 font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">text-overflow: ellipsis</div>
          <p className="truncate rounded border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700">
            The quarterly review meeting has been rescheduled to Friday afternoon
          </p>
        </div>
        <div>
          <div className="mb-0.5 font-mono-ui text-[8px] uppercase tracking-wider text-neutral-400">line-clamp: 2</div>
          <p className="line-clamp-2 rounded border border-neutral-200 bg-white px-2 py-1 text-[10px] leading-snug text-neutral-700">
            Release notes: this update reworks the sync engine, fixes twelve reported issues with offline edits, and adds keyboard shortcuts for every panel in the app.
          </p>
        </div>
      </div>
    </DemoBox>
  )
}
