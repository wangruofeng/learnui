# Entry detail adaptive layout

## Goal

Allow the primary content in an entry detail panel to use the full available width when the entry has no anatomy data.

## Layout rule

- Entries with `anatomy` retain the current desktop two-column layout: primary content plus a 240px parts column.
- Entries without `anatomy` render the primary content in a single column spanning the full panel width.
- At small viewports, both variants remain a single vertical column.

## Scope and verification

- Change only the conditional grid class in `EntryDetail`.
- Preserve the existing dialog structure, body scroll lock, anatomy hover behavior, and prompt copy interaction.
- Verify the build and inspect an entry with anatomy plus one without anatomy at desktop width.
