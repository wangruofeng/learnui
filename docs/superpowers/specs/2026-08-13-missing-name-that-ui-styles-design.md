# Missing Name That UI styles

## Goal

Add the five styles currently present on `namethatui.com/styles` but absent from this project's styles atlas: Liquid Glass, Frutiger Aero, Vernacular Web, Aqua, and Windows Aero.

## Content model

- Add each style to `src/data/styles.ts` with an id, English name, alias, concise definition, four recognition traits, and an agent-ready prompt.
- Add matching Chinese overrides to `STYLES_ZH` in `src/data/zh.ts`. The English and Chinese data structures must stay aligned.
- Keep the existing entries unchanged. The new items append to the current `STYLES` order so previously shipped cards retain their positions.

## Demo approach

- Reuse the existing `demos-styles.tsx` pattern: a compact `StyleShell` specimen with a small visual composition, no additional teaching overlay, navigation, or new interaction model.
- Register the five demo components in `DEMO_REGISTRY`, so `Styles.tsx` continues rendering each card without page-level changes.
- Use only style-native feedback where useful and keep it lightweight:
  - Liquid Glass: opaque content with a floating, lens-highlighted glass control layer.
  - Frutiger Aero: sky/grass gradients, glossy aqua controls, and static bubbles.
  - Vernacular Web: tiled stars, decorative sparkle/badge composition, and a static visitor counter.
  - Aqua: pinstriped early-Mac window chrome, gumdrop controls, and a blue candy-gel default button.
  - Windows Aero: wallpaper behind a translucent window frame, specular sweep, caption controls, and a luminous progress bar.

## Accessibility and visual boundaries

- Preserve readable content text and existing focus behavior; cards themselves remain non-interactive apart from the established prompt-copy button.
- If a demo contains decorative animation, respect `prefers-reduced-motion`; the planned five specimens are intentionally static to match the surrounding style-card demos.
- Distinguish related styles in the visible specimens: Liquid Glass reserves glass for controls, Frutiger Aero requires optimistic nature imagery, Aqua uses opaque gel and pinstripes, and Windows Aero uses architectural glass frames rather than generic glass cards.

## Verification

- Run the production build and inspect `/styles` at desktop and mobile widths.
- Confirm all five cards render in English and Chinese, have localized traits/prompts, and use their matching demo.
- Check that the new cards retain the existing grid/card dimensions without overflow or clipped text.
