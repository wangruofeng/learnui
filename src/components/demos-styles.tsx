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
