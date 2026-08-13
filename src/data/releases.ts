export type ReleaseNote = {
  lead: string
  body: string
}

export type Release = {
  version: string
  date: string
  notes: {
    en: ReleaseNote[]
    zh: ReleaseNote[]
  }
}

export const RELEASES: Release[] = [
  {
    version: '1.3.0',
    date: '2026-08-13',
    notes: {
      zh: [
        {
          lead: '词条',
          body: '新增 17 个 Web 词条：步骤条、头像组、多选、滚动监听、行内警告 vs. 提示框 vs. 横幅、登录表单、日期选择器、站点页头 vs. 导航栏、卡片、缩放手柄、三点菜单、树形视图、数量步进器、上下文菜单、分裂按钮、跳过链接、菜单按钮。每条都有可交互 demo，中英文同步。',
        },
        {
          lead: '标识',
          body: '「新」标记只留在本批词条上，更早的卡片不再显示，避免整站都像刚上线。',
        },
        {
          lead: '站点',
          body: '新增 /releases 更新日志页，页脚可进入；README 拆成中英两份。',
        },
      ],
      en: [
        {
          lead: 'Entries',
          body: 'Added 17 web entries: Steps, Avatar Group, Multi-select, Scrollspy, Inline Alert vs. Callout vs. Banner, Sign-in Form, Date Picker, Site Header vs. Navigation Bar, Card, Resize Handle, The Three Dots, Tree View, Spinbutton, Context Menu, Split Button, Skip Link, and Menu Button. Each has an interactive demo, with English and Chinese in sync.',
        },
        {
          lead: 'Badges',
          body: 'The New badge now stays only on this batch, so older cards no longer look freshly shipped.',
        },
        {
          lead: 'Site',
          body: 'Added a /releases changelog, linked from the footer. The README is now split into Chinese and English.',
        },
      ],
    },
  },
  {
    version: '1.2.0',
    date: '2026-08-12',
    notes: {
      zh: [
        {
          lead: '词条',
          body: '扩充约 45 个布局、导航、滚动动效、反馈加载和高级效果词条，并补齐 demo 与中文。',
        },
        {
          lead: '浏览',
          body: '首页增加类型筛选 chip，结果按分类分组展示。',
        },
        {
          lead: '交互',
          body: '详情弹窗打开时锁定背景滚动；关闭按钮完成中文化；词条卡片不再因为 demo 内的点击而误打开。',
        },
      ],
      en: [
        {
          lead: 'Entries',
          body: 'Added about 45 entries across layout, navigation, scroll and motion, feedback, and advanced effects, with demos and Chinese copy.',
        },
        {
          lead: 'Browse',
          body: 'The home page now filters by type, and results group by category.',
        },
        {
          lead: 'Interaction',
          body: 'Opening a detail panel locks background scroll. The close control is localized. Clicks inside a demo no longer open the card by accident.',
        },
      ],
    },
  },
  {
    version: '1.0.0',
    date: '2026-07-22',
    notes: {
      zh: [
        {
          lead: '上线',
          body: '发布中英双语 UI 视觉词典：Web 与 macOS 词条、可交互 demo、风格页、方法论与赞助页。',
        },
      ],
      en: [
        {
          lead: 'Launch',
          body: 'Shipped the bilingual UI visual dictionary: Web and macOS entries, interactive demos, the styles atlas, methodology, and a sponsor page.',
        },
      ],
    },
  },
]

export function formatReleaseDate(iso: string, lang: 'en' | 'zh'): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (lang === 'zh') return `${year} 年 ${month} 月 ${day} 日`
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${months[month - 1]} ${day}, ${year}`
}
