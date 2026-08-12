# AGENTS.md

中英双语 UI 视觉词典（[namethatui.com](https://namethatui.com/) 的学习复刻版）。本文件面向在这个仓库里工作的 AI agent。
面向人类的项目说明、技术栈与命令见 [README.md](./README.md)；这里只写 README 里没有、但改代码必须知道的约定。

## 必须知道的内容架构

- **词条数据**：英文源在 `src/data/entries.ts`（每个词条的 `id / name / symbol / blurb / aka / prompt / anatomy`）；中文翻译在 `src/data/zh.ts`，按 `id` 覆盖。运行时用 `localizeEntry(entry, lang)`（`src/i18n/LanguageContext.tsx`）合并两份。**新增或改词条时，两份都要同步**，否则中文环境下会回落到英文。
- **界面文案**：`src/i18n/ui.ts` 维护 `en` 和 `zh` 两份结构完全对齐的字典，通过 `useI18n().ui.<分组>.<key>` 取用。**任何界面文案都要在 en / zh 两份里同时加**——历史上出现过只改一份导致某语言下未翻译（例如详情弹窗右上角关闭按钮曾一直显示英文 `esc`）。
- **可交互 demo**：组件写在 `src/components/demos-web.tsx`（Web 平台）或 `demos-macos.tsx`（macOS 平台），再到 `src/components/demo-registry.tsx` 按 `id` 注册进 `DEMO_REGISTRY`，词条详情页才会渲染对应 demo。
- **词条详情弹窗**：`src/components/EntryDetail.tsx`。打开时已锁定 `<body>` / `<html>` 滚动（见其中的 `useEffect`）；改弹窗结构时请保留这个滚动锁定。

## 动画 / 交互约定

- **拖拽类交互（pull-to-refresh、滑块、拖拽手柄等）不要套常驻 CSS `transition`**：拖动过程中每个 `pointermove` 都会触发过渡，导致内容落后于指针、手感发粘。正确做法是拖动时直接 1:1 写入位移（不加过渡），只在 `pointerup` 松手回弹 / 吸附时启用过渡。参考 `PullToRefreshDemo`。

## 红线

- 词条内容版权归原作者，本项目仅作学习复刻；不要把原站内容当作可自由分发的素材搬运。
