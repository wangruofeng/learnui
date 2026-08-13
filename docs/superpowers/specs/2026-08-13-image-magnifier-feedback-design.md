# Image magnifier interaction feedback

## Goal

Make the Image Magnifier detail demo clearly communicate that its image is zoomable and that the magnified region follows the pointer.

## Design

- Replace the abstract gradient thumbnail with a compact product-style illustration containing fine details that become visibly larger when magnified.
- On mouse or pen hover, show a circular 2× lens directly over the source image and a synchronized detail preview beside it.
- Give the active lens a distinct border, shadow, and `2× ZOOM` status label. The preview receives the same active-state treatment.
- Before interaction, display a short hover instruction. Hide it while the lens is active and restore it on pointer leave.

## Interaction and accessibility

- Pointer position maps directly to the lens and preview background position, clamped to the image bounds.
- Pointer-move updates must not use CSS transitions, so the lens remains aligned with the pointer.
- Enter and leave may use a short opacity/scale transition for legibility.
- The demo retains a native `cursor: crosshair`; touch remains intentionally unsupported, matching the entry prompt.
- Use non-textual visual state plus the visible `2× ZOOM` label so activation does not depend on color alone.

## Scope and verification

- Limit changes to `ImageMagnifierDemo` and any narrowly scoped supporting styles.
- Preserve the component's existing registry entry and its detail-page rendering contract.
- Verify the build and manually test initial, active, and pointer-leave states at desktop and mobile widths.
