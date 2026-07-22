export interface StyleEntry {
  id: string
  name: string
  aka: string
  blurb: string
  traits: string[]
  prompt: string
}

export const STYLES: StyleEntry[] = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    aka: 'frosted glass UI',
    blurb: 'Translucent frosted panels floating over colorful backgrounds — blur, thin light borders, soft shadows.',
    traits: ['backdrop blur', 'translucent fill', '1px light border', 'vivid backdrop'],
    prompt: 'Style the cards as glassmorphism: semi-transparent white fills, backdrop-filter blur ~16px, a 1px white/20 border, over a colorful gradient background.',
  },
  {
    id: 'neubrutalism',
    name: 'Neubrutalism',
    aka: 'neo-brutalism',
    blurb: 'Flat saturated blocks, thick black outlines, and hard offset shadows with zero blur — loud on purpose.',
    traits: ['2–3px black border', 'hard shadow, no blur', 'clashing brights', 'no gradients'],
    prompt: 'Go neubrutalist: solid saturated fills, 3px black borders, and hard 4px offset box-shadows with no blur; keep corners square-ish and type bold.',
  },
  {
    id: 'flat-design',
    name: 'Flat Design',
    aka: 'flat UI',
    blurb: 'No shadows, no gradients, no texture — color blocks and typography doing all the work.',
    traits: ['solid colors', 'zero elevation', 'simple icons', 'strong type'],
    prompt: 'Keep it flat: solid color blocks, no shadows or gradients, simple two-tone icons, and hierarchy carried by typography and spacing.',
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    aka: 'realistic UI',
    blurb: 'Interfaces dressed as physical objects — stitched leather, brushed metal, glossy glass buttons you could almost touch.',
    traits: ['real-world textures', 'inner shadows', 'gloss highlights', 'literal metaphors'],
    prompt: 'Design it skeuomorphic: the panel looks like brushed metal with subtle noise, buttons have glossy highlights and inner shadows like physical keys.',
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    aka: 'clay UI',
    blurb: 'Puffy pastel shapes that look hand-molded — big radii, inner light, and multiple soft outer shadows.',
    traits: ['pastel fills', 'large radius', 'inner highlight', 'double soft shadow'],
    prompt: 'Make the cards claymorphic: pastel fills, 24px+ radii, a light inner shadow top-left and two soft dark outer shadows for that inflated clay look.',
  },
  {
    id: 'minimalism',
    name: 'Minimalism',
    aka: 'Swiss-minimal UI',
    blurb: 'Almost nothing on screen — generous whitespace, one typeface, a single accent, everything else removed.',
    traits: ['whitespace first', 'one accent', 'hairline rules', 'limited palette'],
    prompt: 'Keep it radically minimal: generous whitespace, black/white plus a single accent color, hairline dividers, and one typeface across all levels.',
  },
  {
    id: 'swiss',
    name: 'Swiss / International Style',
    aka: 'International Typographic Style',
    blurb: 'Ruthless grid, grotesque type set flush-left, and asymmetric layouts — design as mathematics.',
    traits: ['strict grid', 'grotesque type', 'flush left', 'red/black palette'],
    prompt: 'Use Swiss International Style: a strict 12-column grid, flush-left grotesque type (no centering), oversized numerals, and a red/black/white palette.',
  },
  {
    id: 'web-brutalism',
    name: 'Web Brutalism',
    aka: 'raw HTML aesthetic',
    blurb: 'Deliberately unstyled: system fonts, default borders, visible link blue — honesty as an aesthetic.',
    traits: ['system/monospace type', 'default borders', 'raw links', 'no polish'],
    prompt: 'Make it web-brutalist: monospace system fonts, visible default table borders, blue underlined links, and zero decorative styling — raw HTML energy.',
  },
  {
    id: 'darkmode',
    name: 'Dark Mode / OLED Black',
    aka: 'true-black dark UI',
    blurb: 'Interfaces on near-black backgrounds — careful elevation with grays, softened whites, and saturated accents.',
    traits: ['#000–#111 base', 'muted foregrounds', 'elevation via gray', 'neon-safe accents'],
    prompt: 'Design a dark mode on near-black (#0a0a0a) surfaces: elevate with dark grays not shadows, use 87%/60% white for text emphasis, and one saturated accent.',
  },
  {
    id: 'aurora',
    name: 'Aurora Gradients',
    aka: 'mesh gradient glow',
    blurb: 'Soft blurred color blobs drifting behind content — the dreamy northern-lights backdrop of modern landing pages.',
    traits: ['blurred color blobs', 'slow drift', 'dark or light base', 'glow, not lines'],
    prompt: 'Add an aurora background: two or three large radial-gradient blobs (violet/cyan/pink) with heavy blur, slowly drifting behind otherwise quiet content.',
  },
  {
    id: 'y2k',
    name: 'Y2K / Chrome',
    aka: 'metallic 2000s',
    blurb: 'Liquid chrome text, iridescent gradients, and bubble shapes — the optimistic plastic-fantastic turn of the millennium.',
    traits: ['chrome/metal gradients', 'iridescent colors', 'bubble forms', 'star accents'],
    prompt: 'Give the headline a Y2K chrome treatment: metallic linear gradient with sharp light bands, iridescent pink-blue accents, and small star sparkles.',
  },
  {
    id: 'pixel',
    name: 'Pixel / 8-bit',
    aka: 'retro game UI',
    blurb: 'Chunky pixels, stepped edges, and bitmap fonts — interfaces that wear their grid proudly.',
    traits: ['bitmap type', 'stepped borders', 'limited palette', 'hard pixels'],
    prompt: 'Style it as 8-bit pixel UI: a bitmap font, 2px stepped box borders (no anti-aliasing, image-rendering: pixelated), and a 4-color retro palette.',
  },
]
