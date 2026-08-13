function StyleShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex h-40 w-full items-center justify-center overflow-hidden rounded-t-lg border-b border-hairline ${className}`}>
      {children}
    </div>
  )
}

export function GlassmorphismDemo() {
  return (
    <StyleShell className="bg-gradient-to-br from-violet-500 via-fuchsia-400 to-orange-300">
      <div className="rounded-2xl border border-white/40 bg-white/20 p-3 shadow-xl backdrop-blur-md">
        <div className="text-[10px] font-semibold text-white">Glass card</div>
        <div className="text-[9px] text-white/70">backdrop-filter: blur(16px)</div>
      </div>
    </StyleShell>
  )
}

export function NeubrutalismDemo() {
  return (
    <StyleShell className="bg-[#f5f0e6]">
      <div className="rotate-[-1.5deg]">
        <div className="rounded-lg border-[3px] border-black bg-[#ff6b6b] px-4 py-2.5 shadow-[6px_6px_0_#000]">
          <div className="text-[11px] font-black uppercase tracking-wide text-black">Click me!</div>
        </div>
        <div className="mt-2.5 inline-block rounded-md border-[3px] border-black bg-[#4ecdc4] px-2.5 py-1 text-[9px] font-bold text-black shadow-[4px_4px_0_#000]">
          no blur. all attitude.
        </div>
      </div>
    </StyleShell>
  )
}

export function FlatDesignDemo() {
  return (
    <StyleShell className="bg-white">
      <div className="flex gap-3">
        {['#1abc9c', '#3498db', '#e74c3c'].map((c, i) => (
          <div key={c} className="flex h-16 w-12 flex-col items-center justify-center rounded-md" style={{ backgroundColor: c }}>
            <span className="text-base text-white">{['✓', '★', '♥'][i]}</span>
            <span className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-white/90">{['done', 'fav', 'like'][i]}</span>
          </div>
        ))}
      </div>
    </StyleShell>
  )
}

export function SkeuomorphismDemo() {
  return (
    <StyleShell className="bg-[#3a3a3c]">
      <div className="rounded-xl bg-gradient-to-b from-[#e8e6e1] to-[#c9c7c2] p-3 shadow-[inset_0_1px_0_#fff,0_8px_16px_rgba(0,0,0,0.45)]">
        <div className="rounded-lg bg-gradient-to-b from-[#fdfcfb] to-[#e3e1dc] px-4 py-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]">
          <span className="bg-gradient-to-b from-[#666] to-[#222] bg-clip-text font-serif text-[12px] font-bold italic text-transparent">
            Notes
          </span>
        </div>
        <div className="mt-2 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-3 w-3 rounded-full bg-gradient-to-b from-[#fafafa] to-[#b9b7b2] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.3),0_1px_1px_#fff]" />
          ))}
        </div>
      </div>
    </StyleShell>
  )
}

export function ClaymorphismDemo() {
  return (
    <StyleShell className="bg-[#eef1ff]">
      <div className="flex gap-3">
        <div className="rounded-[28px] bg-[#ffd9e8] p-3.5 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(214,140,170,0.35),8px_8px_20px_rgba(190,160,200,0.4)]">
          <span className="text-lg">🌸</span>
        </div>
        <div className="rounded-[28px] bg-[#cfe4ff] p-3.5 shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(140,170,214,0.35),8px_8px_20px_rgba(160,170,200,0.4)]">
          <span className="text-lg">☁️</span>
        </div>
      </div>
    </StyleShell>
  )
}

export function MinimalismDemo() {
  return (
    <StyleShell className="bg-white">
      <div className="text-center">
        <div className="font-display text-2xl text-neutral-900">Less, but better.</div>
        <div className="mx-auto mt-2 h-px w-10 bg-neutral-900" />
        <div className="mt-2 font-mono-ui text-[8px] uppercase tracking-[0.25em] text-neutral-400">Dieter Rams, probably</div>
      </div>
    </StyleShell>
  )
}

export function SwissDemo() {
  return (
    <StyleShell className="bg-[#f4f1ea]">
      <div className="w-48 text-left">
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 text-[22px] font-black leading-none tracking-tight text-neutral-900">
            Grid<br />System
          </div>
          <div className="flex items-start justify-end">
            <span className="text-[22px] font-black leading-none text-[#e30613]">№1</span>
          </div>
          <div className="col-span-3 mt-1 h-[3px] w-full bg-neutral-900" />
          <div className="col-span-2 text-[8px] font-medium uppercase tracking-widest text-neutral-600">
            Flush left · grotesque · asymmetric
          </div>
          <div className="flex justify-end">
            <span className="h-4 w-4 bg-[#e30613]" />
          </div>
        </div>
      </div>
    </StyleShell>
  )
}

export function WebBrutalismDemo() {
  return (
    <StyleShell className="bg-white">
      <table className="border-collapse border-2 border-neutral-800 font-mono-ui text-[9px] text-neutral-900">
        <tbody>
          <tr>
            <td className="border border-neutral-800 bg-neutral-200 px-2 py-1 font-bold">raw.html</td>
            <td className="border border-neutral-800 px-2 py-1">no css was harmed</td>
          </tr>
          <tr>
            <td className="border border-neutral-800 px-2 py-1 underline" style={{ color: '#0000ee' }}>a blue link</td>
            <td className="border border-neutral-800 px-2 py-1">default borders: yes</td>
          </tr>
        </tbody>
      </table>
    </StyleShell>
  )
}

export function DarkModeDemo() {
  return (
    <StyleShell className="bg-[#0a0a0a]">
      <div className="w-44 space-y-1.5">
        <div className="rounded-xl bg-[#171717] p-2.5">
          <div className="text-[10px] font-semibold text-white/90">Now playing</div>
          <div className="text-[9px] text-white/50">elevation = lighter gray</div>
        </div>
        <div className="rounded-xl bg-[#262626] p-2.5">
          <div className="text-[10px] font-semibold text-white/90">One level up</div>
          <div className="text-[9px] text-[#7c8cff]">accent stays saturated</div>
        </div>
      </div>
    </StyleShell>
  )
}

export function AuroraDemo() {
  return (
    <StyleShell className="bg-[#0b1026]">
      <div className="anim-blob-a absolute left-6 top-4 h-20 w-20 rounded-full bg-violet-500/60 blur-2xl" />
      <div className="anim-blob-b absolute bottom-2 right-8 h-24 w-24 rounded-full bg-cyan-400/50 blur-2xl" />
      <div className="anim-blob-a absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-pink-500/40 blur-2xl" />
      <span className="relative font-display text-lg italic text-white/90">northern lights, but css</span>
    </StyleShell>
  )
}

export function Y2KDemo() {
  return (
    <StyleShell className="bg-gradient-to-br from-[#e0d7ff] via-[#ffd6f5] to-[#c8f4ff]">
      <div className="text-center">
        <div
          className="bg-gradient-to-b from-[#fdfdfd] via-[#9aa4b5] to-[#e8ecf4] bg-clip-text text-2xl font-black italic tracking-tight text-transparent"
          style={{ WebkitTextStroke: '1px rgba(60,70,90,0.35)' }}
        >
          Y2K★
        </div>
        <div className="mt-1 inline-block rounded-full border border-white/70 bg-white/40 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-fuchsia-600 backdrop-blur-sm">
          iridescent · chrome · bubbles
        </div>
      </div>
    </StyleShell>
  )
}

export function PixelDemo() {
  return (
    <StyleShell className="bg-[#202040]">
      <div className="text-center font-mono-ui">
        <div className="mx-auto mb-2 grid w-16 grid-cols-8 gap-0">
          {[
            '00111100', '01111110', '11011011', '11111111',
            '01111110', '00100100', '01100110', '11000011',
          ].map((row, r) =>
            row.split('').map((px, c) => (
              <span key={`${r}-${c}`} className="aspect-square" style={{ backgroundColor: px === '1' ? '#7cf77c' : 'transparent' }} />
            ))
          )}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7cf77c]" style={{ textShadow: '2px 2px 0 #143214' }}>
          insert coin
        </span>
      </div>
    </StyleShell>
  )
}

/* ------------------------------------------------------------------ */
/* vocab batch                                                         */
/* ------------------------------------------------------------------ */

export function EditorialDemo() {
  return (
    <StyleShell className="bg-[#f7f4ef]">
      <div className="flex w-64 gap-3 text-left">
        <div className="font-mono-ui text-[28px] leading-none text-neutral-300">01</div>
        <div className="flex-1">
          <div className="font-display text-[15px] leading-[1.05] text-neutral-900">
            <span className="float-left mr-1 font-display text-[32px] leading-[0.7] text-neutral-900">T</span>he making of a modern magazine
          </div>
          <div className="mt-1.5 h-px w-full bg-neutral-300" />
          <div className="mt-1.5 space-y-1">
            <div className="h-1 w-full rounded bg-neutral-200" />
            <div className="h-1 w-5/6 rounded bg-neutral-200" />
          </div>
          <div className="mt-1.5 border-l-2 border-neutral-800 pl-1.5 font-display text-[10px] italic leading-snug text-neutral-700">
            “Design is intelligence made visible.”
          </div>
        </div>
      </div>
    </StyleShell>
  )
}

export function DuotoneDemo() {
  return (
    <StyleShell className="bg-[#f3f1ec]">
      <div className="flex items-center gap-2.5">
        <div className="h-16 w-12 rounded-md" style={{ background: 'linear-gradient(135deg,#1f3d2b,#6a8f76)' }} />
        <div className="space-y-1.5">
          <div className="font-display text-[15px] text-neutral-900">Monochrome</div>
          <div className="font-mono-ui text-[7px] uppercase tracking-wider text-neutral-500">off-white · black · deep green</div>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-[#1f3d2b]" />
            <div className="h-3 w-3 rounded-full bg-neutral-900" />
            <div className="h-3 w-3 rounded-full border border-neutral-300 bg-[#f3f1ec]" />
          </div>
        </div>
      </div>
    </StyleShell>
  )
}

export function GradientMeshDemo() {
  return (
    <StyleShell className="bg-[#eef0ec]">
      <div className="relative h-28 w-64 overflow-hidden">
        <div className="anim-blob-a absolute left-6 top-2 h-20 w-20 rounded-full bg-emerald-400/40 blur-2xl" />
        <div className="anim-blob-b absolute right-8 top-6 h-24 w-24 rounded-full bg-neutral-400/40 blur-2xl" />
        <div className="anim-blob-a absolute bottom-0 left-1/3 h-16 w-16 rounded-full bg-[#cfe0d2]/70 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15px] text-neutral-800">mesh</div>
      </div>
    </StyleShell>
  )
}

export function GrainDemo() {
  const grain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")"
  return (
    <StyleShell className="bg-[#1f3d2b]">
      <div className="relative flex h-28 w-full items-center justify-center overflow-hidden">
        <span className="font-display text-[18px] text-[#f3f1ec]">grain</span>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{ backgroundImage: grain, backgroundSize: '80px 80px' }}
        />
      </div>
    </StyleShell>
  )
}

export function NeumorphismDemo() {
  const c = '#e6e9ef'
  const out = '6px 6px 12px #c8ccd4, -6px -6px 12px #ffffff'
  const inn = 'inset 5px 5px 10px #c8ccd4, inset -5px -5px 10px #ffffff'
  const bar = '4px 4px 8px #c8ccd4, -4px -4px 8px #ffffff'
  return (
    <StyleShell className="bg-[#e6e9ef]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full text-[14px] text-neutral-500" style={{ backgroundColor: c, boxShadow: out }}>▶</div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full text-[14px] text-neutral-500" style={{ backgroundColor: c, boxShadow: inn }}>■</div>
        <div className="space-y-1.5">
          <div className="h-2 w-14 rounded-full" style={{ backgroundColor: c, boxShadow: bar }} />
          <div className="h-2 w-10 rounded-full" style={{ backgroundColor: c, boxShadow: bar }} />
        </div>
      </div>
    </StyleShell>
  )
}

export function LiquidGlassDemo() {
  return (
    <StyleShell className="bg-[#dce5ea]">
      <div className="relative h-full w-full overflow-hidden bg-[#f6f5f2] p-3 text-left">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[8px] font-medium text-slate-400">Tuesday, July 14</div>
            <div className="mt-0.5 text-[12px] font-semibold tracking-tight text-slate-800">Good morning</div>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9a877] text-[10px] text-white">M</div>
        </div>
        <div className="mt-2.5 flex gap-2">
          <div className="h-12 flex-1 rounded-xl bg-[#254a64] p-2 text-[8px] text-white">
            <div className="text-white/60">Now playing</div>
            <div className="mt-1 font-medium">Night Drive</div>
          </div>
          <div className="h-12 flex-1 rounded-xl bg-[#e2c2a2] p-2 text-[8px] text-[#724c32]">
            <div className="text-[#724c32]/60">Today</div>
            <div className="mt-1 font-medium">3 new notes</div>
          </div>
        </div>
        <div className="mt-2 h-5 rounded-lg bg-[#e4eaed]" />
        <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/70 bg-white/20 p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,.85),inset_0_-1px_1px_rgba(41,78,99,.18),0_5px_14px_rgba(33,62,79,.22)] backdrop-blur-xl saturate-150">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/45 bg-white/35 text-[11px] text-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,.95),0_1px_2px_rgba(46,76,94,.14)]">⌂</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] text-slate-700">⌕</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full text-[13px] text-slate-700">⋯</span>
        </div>
      </div>
    </StyleShell>
  )
}

export function FrutigerAeroDemo() {
  return (
    <StyleShell className="bg-[linear-gradient(180deg,#9bdeff_0%,#42acec_52%,#96db55_53%,#4caa45_100%)]">
      <span className="absolute left-8 top-5 h-8 w-8 rounded-full border border-white/70 bg-white/15 shadow-[inset_2px_2px_4px_rgba(255,255,255,.9),2px_3px_6px_rgba(15,100,160,.2)]" />
      <span className="absolute right-10 top-9 h-4 w-4 rounded-full border border-white/70 bg-white/15 shadow-[inset_1px_1px_2px_rgba(255,255,255,.9)]" />
      <div className="relative rounded-2xl border border-white/60 bg-cyan-100/35 px-5 py-3 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,.95),0_5px_12px_rgba(0,90,130,.25)]">
        <div className="text-[11px] font-semibold text-[#075b86]">Fresh air today</div>
        <div className="mt-1 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.8)_0%,rgba(255,255,255,.2)_45%,rgba(35,153,222,.85)_48%,#167fc5_100%)] px-3 py-1 text-[8px] font-bold text-white shadow-[inset_0_1px_1px_white]">Explore</div>
      </div>
    </StyleShell>
  )
}

export function VernacularWebDemo() {
  return (
    <StyleShell className="bg-[#07153e]" >
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      <div className="relative w-56 border-2 border-fuchsia-300 bg-[#10205a] px-3 py-2 text-center font-serif text-[9px] text-yellow-100 shadow-[0_0_0_2px_#48d7ff]">
        <div className="text-[13px] text-fuchsia-200">✦ Mara&apos;s Page ✦</div>
        <div className="my-1 h-1 bg-[linear-gradient(90deg,#ff4141,#ffe34d,#50df72,#52d6ff,#cf5cff)]" />
        <div>Welcome to my corner of the web!</div>
        <div className="mt-1 inline-block border border-lime-300 bg-black px-1 font-mono-ui text-[8px] text-lime-300">000137</div>
        <div className="mt-1 text-cyan-200 underline">sign my guestbook</div>
      </div>
    </StyleShell>
  )
}

export function AquaDemo() {
  return (
    <StyleShell className="bg-[#477cbb]">
      <div className="w-56 overflow-hidden rounded-md border border-white/80 bg-[repeating-linear-gradient(180deg,#f4f6fa_0_2px,#e8ebf0_2px_4px)] shadow-[0_7px_15px_rgba(0,25,75,.5)]">
        <div className="flex items-center gap-1 border-b border-[#9aa8ba] px-2 py-1.5">
          {['#f45b52', '#f6bd3a', '#55c856'].map((color) => <span key={color} className="h-2.5 w-2.5 rounded-full border border-black/20 shadow-[inset_0_1px_1px_rgba(255,255,255,.9)]" style={{ backgroundColor: color }} />)}
          <span className="ml-2 text-[8px] font-semibold text-slate-600">Save As</span>
        </div>
        <div className="px-3 py-2 text-[9px] text-slate-600">Designs / aqua-mock.psd</div>
        <div className="flex justify-end gap-1.5 px-3 pb-2.5">
          <span className="rounded-full border border-slate-400 bg-white px-2 py-0.5 text-[8px] text-slate-600">Cancel</span>
          <span className="rounded-full border border-[#0b4daf] bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(255,255,255,.95)_0%,rgba(255,255,255,0)_48%),linear-gradient(180deg,#6ba8fa_0%,#1963d8_58%,#0d4dbc_100%)] px-2 py-0.5 text-[8px] font-semibold text-white shadow-[inset_0_1px_1px_white,0_1px_2px_rgba(0,30,90,.5)]">Save</span>
        </div>
      </div>
    </StyleShell>
  )
}

export function WindowsAeroDemo() {
  return (
    <StyleShell className="bg-[radial-gradient(circle_at_20%_20%,#bcdbff_0%,transparent_28%),linear-gradient(135deg,#193a7b,#43a5cc_52%,#276f50)]">
      <div className="relative w-56 rounded-md border border-white/70 bg-[#b8d6ed]/35 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,.35),0_8px_20px_rgba(0,15,65,.45)] backdrop-blur-md">
        <div className="relative overflow-hidden rounded-t-sm px-2 py-1.5 text-[8px] font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,.9)]">
          Downloads
          <span className="absolute -right-3 -top-3 h-8 w-20 rotate-[-25deg] bg-white/25" />
          <span className="relative float-right flex gap-1"><i className="h-2 w-2 rounded-sm bg-white/30" /><i className="h-2 w-2 rounded-sm bg-white/30" /><i className="h-2 w-2 rounded-sm bg-[#e84b54] shadow-[0_0_6px_#ff7b7b]" /></span>
        </div>
        <div className="rounded-sm bg-white/95 px-3 py-2">
          <div className="text-[9px] text-slate-700">Copying 3 items…</div>
          <div className="mt-2 h-2 overflow-hidden rounded-full border border-[#348740] bg-[#d8f2d8]">
            <div className="relative h-full w-[58%] overflow-hidden bg-[linear-gradient(180deg,#a8f79f,#27c446_50%,#0e9b2c)] shadow-[inset_0_1px_1px_rgba(255,255,255,.8)]">
              <span className="anim-aero-progress-shimmer absolute inset-y-0 w-1/3 -skew-x-[22deg] bg-gradient-to-r from-transparent via-white/75 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </StyleShell>
  )
}
