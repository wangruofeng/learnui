# name that ui

A bilingual UI visual dictionary for turning interface elements you can see but cannot name into searchable, understandable, prompt-ready terminology.

[中文 README](./README.md)

This is a learning re-creation of [namethatui.com](https://namethatui.com/), built with React, TypeScript, and Vite. The original content remains the property of its respective authors.

## Features

- **UI element dictionary** — Browse common Web and macOS interface elements with their names, symbols, aliases, and explanations.
- **Search and filters** — Search by name, alias, or description; filter by platform; press `⌘K` / `Ctrl+K` to focus search quickly.
- **Interactive demos** — Explore interactive UI examples. Entries with anatomy diagrams let you highlight individual parts by number.
- **Entry details** — Read the full explanation, anatomy, and a coding-agent-ready prompt; close with `Esc` or copy the prompt in one click.
- **UI style dictionary** — Browse visual styles such as Glassmorphism, Neubrutalism, and Swiss at `/styles`, with live demos and copyable prompts.
- **Bilingual interface** — Switch between English and Chinese. The choice is stored locally, and first-time visitors follow their browser language.
- **Methodology and sources** — Learn about naming principles, reference standards, and content boundaries at `/methodology`.
- **Project support** — Find the WeChat account and donation QR codes at `/sponsor`.

## Routes

| Route | Description |
| --- | --- |
| `/` | UI element search, platform filters, selected anatomy, and entry details |
| `/styles` | UI style cards, live demos, and prompt copying |
| `/methodology` | Naming methodology, references, and disclaimer |
| `/sponsor` | Follow and support information |
| `/releases` | Release notes |

## Getting started

Node.js and pnpm are required.

```bash
pnpm install
pnpm dev
```

Vite uses port `3000` by default and selects the next available port if needed.

## Commands

```bash
pnpm dev      # Start the development server
pnpm build    # Type-check and build for production
pnpm preview  # Preview the production build
pnpm lint     # Run ESLint
```

## Tech stack

- React 19, TypeScript, and Vite
- React Router
- Tailwind CSS
- Radix UI and Lucide React
- `localStorage` for language preference

## Project structure

```text
src/
├── components/    # App shell, entry cards, detail dialog, and UI demos
├── data/          # UI entries, styles, and Chinese localization data
├── i18n/          # English/Chinese UI copy and language state
├── pages/         # Home, Styles, Methodology, and Sponsor pages
└── App.tsx        # Routes and global layout
public/
├── favicon.png
├── reward-qr.png
└── wechat-qr.png
```

## Content and copyright

This project is for learning and UI terminology organization. Refer to the in-app `/methodology` page and footer for content sources, naming references, and copyright notices. Use original material only in accordance with its authors' licenses and permissions.

## License

The source code in this repository is licensed under the [MIT License](./LICENSE).

## Links

- [Project repository](https://github.com/wangruofeng/learnui)
- [namethatui.com](https://namethatui.com/)
