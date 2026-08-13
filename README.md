# name that ui

一个中英双语的 UI 视觉词典：把“看得到但叫不出名字”的界面元素，整理成可搜索、可理解、可直接用于 prompt 的准确术语。

[English README](./README_EN.md)

这是一个基于 React + TypeScript + Vite 构建的 [namethatui.com](https://namethatui.com/) 学习复刻版。原内容版权归原作者所有。

## 功能

- **UI 元素词典**：按 Web 与 macOS 平台浏览常见界面元素，查看真实名称、符号写法、别名和解释。
- **搜索与筛选**：支持按名称、别名和描述搜索，并按平台筛选；支持 `⌘K` / `Ctrl+K` 快速聚焦搜索框。
- **交互演示**：词条包含可交互的 UI demo；带 anatomy 的词条可以通过编号高亮对应部件。
- **详情弹窗**：查看词条完整解释、解剖结构和适合交给 coding agent 的 prompt，支持 `Esc` 关闭和一键复制。
- **UI 风格词典**：在 `/styles` 浏览 Glassmorphism、Neubrutalism、Swiss 等视觉风格，并复制风格 prompt。
- **中英双语**：支持 English / 中文切换，语言选择会保存到浏览器本地存储，首次访问会跟随浏览器语言。
- **方法论与来源**：在 `/methodology` 了解词条命名原则、参考标准和内容边界。
- **支持项目**：在 `/sponsor` 查看公众号和赞赏二维码，点击二维码可放大查看。

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | UI 元素搜索、平台筛选、精选 anatomy、词条详情 |
| `/styles` | UI 视觉风格卡片、实时 demo、prompt 复制 |
| `/methodology` | 命名方法、参考来源和免责声明 |
| `/sponsor` | 关注与赞赏信息 |
| `/releases` | 更新日志 |

## 本地开发

需要 Node.js 和 pnpm。

```bash
pnpm install
pnpm dev
```

Vite 默认使用 `3000` 端口；如果端口已被占用，会自动切换到下一个可用端口。

## 常用命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # TypeScript 检查并构建生产版本
pnpm preview  # 预览生产构建
pnpm lint     # ESLint 检查
```

## 技术栈

- React 19、TypeScript、Vite
- React Router
- Tailwind CSS
- Radix UI、Lucide React
- `localStorage` 保存语言偏好

## 项目结构

```text
src/
├── components/    # 页面壳层、词条卡片、详情弹窗和 UI demo
├── data/          # UI 元素、风格和中文本地化数据
├── i18n/          # 中英文界面文案与语言状态
├── pages/         # Home、Styles、Methodology、Sponsor
└── App.tsx        # 路由和全局布局
public/
├── favicon.png
├── reward-qr.png
└── wechat-qr.png
```

## 内容与版权

项目用于学习和 UI 术语整理。词条内容来源、命名参考和版权说明以站内 `/methodology` 与页脚说明为准；如需使用原始内容，请遵循原作者的授权和版权要求。

## 开源协议

本仓库中的源代码采用 [MIT License](./LICENSE) 开源。

## 相关链接

- [项目仓库](https://github.com/wangruofeng/learnui)
- [namethatui.com](https://namethatui.com/)
