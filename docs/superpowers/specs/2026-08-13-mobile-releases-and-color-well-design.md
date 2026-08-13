# Mobile releases navigation and Color Well interaction

## Goals

- Move the Releases navigation entry out of the compact mobile header and into the page footer.
- Give the Color Well demo a concrete, browser-native interaction that teaches its AppKit behavior.

## Mobile Releases navigation

- Keep Releases in the header navigation at `sm` and larger widths.
- Hide that header link below the `sm` breakpoint.
- Add the Releases link to the footer copyright row below `sm`; hide it at `sm` and larger widths so desktop does not duplicate the entry.

## Color Well demo

- Clicking the color swatch toggles a compact macOS-inspired color popover within the demo.
- The popover shows a current-color preview, a small set of selectable preset swatches, and a hue control.
- Selecting a preset or changing the hue updates the color well immediately. Clicking the color well again closes the popover.
- The panel is explicitly a browser demo of `NSColorWell`, not a claim to open the actual macOS system color panel.

## Scope and verification

- Limit changes to `Chrome`, `MacColorWellDemo`, and any necessary localized accessibility labels.
- Preserve the existing desktop header/footer behavior, routing, and other macOS demos.
- Verify desktop and mobile layouts, color selection, panel toggle, and the production build.
