# Entry detail copy icon feedback

## Goal

Prevent the prompt copy action from overlapping prompt text while preserving clear copy-success feedback.

## Design

- Keep the action at the prompt panel's top-right as an icon-only control.
- Show a copy icon by default and replace it with a check icon for the existing success timeout after a successful clipboard write.
- Use localized accessible labels for the default and copied states; no visible copy text is shown.
- Keep prompt text in normal flow with padding that accommodates the compact icon hit target.

## Scope and verification

- Change only `EntryDetail` and its icon import.
- Preserve clipboard behavior, the existing success timeout, and the prompt panel layout.
- Verify the build and check both default and copied icon states at desktop width.
