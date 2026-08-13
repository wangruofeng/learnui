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
          body: '新增 18 个 Web 词条：斜杠菜单、差异视图、提及补全、标签输入、冻结列、批量操作栏、行展开、加载更多、引导高亮、公告条、通知中心、状态点、主题切换、图片放大镜、模糊渐进、操作列表、速度拨号 FAB、悬浮胶囊导航。每条均提供中英文说明与可交互 demo。',
        },
        {
          lead: '浏览',
          body: '首页加入「最近更新」筛选与回到顶部按钮；导航和更新日志页已完善，版本标识改用 Charter 衬线字体。',
        },
        {
          lead: '交互与文档',
          body: '图片放大镜升级为跟随式透镜与 2× 细节预览；README 拆分为中文与英文版本，仓库新增 MIT 开源协议。',
        },
      ],
      en: [
        {
          lead: 'Entries',
          body: 'Added 18 web entries: Slash Command Menu, Diff View, Mention Autocomplete, Tag Input, Frozen Column, Bulk Action Bar, Row Expansion, Load More, Coach Mark, Announcement Bar, Notification Center, Status Dot, Theme Toggle, Image Magnifier, Blur-up, Action Sheet, Speed Dial FAB, and Floating Pill Navigation. Each includes bilingual copy and an interactive demo.',
        },
        {
          lead: 'Browse',
          body: 'Added a Recent filter and a back-to-top control on the home page. Navigation and the release-notes page are refined, and version labels now use the Charter serif stack.',
        },
        {
          lead: 'Interaction and docs',
          body: 'The Image Magnifier now uses a pointer-following lens with a 2× detail preview. The README is split into Chinese and English editions, and the repository now includes an MIT License.',
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
          body: '发布中英双语 UI 视觉词典：Web 与 macOS 词条、可交互 demo 与风格页。',
        },
      ],
      en: [
        {
          lead: 'Launch',
          body: 'Shipped the bilingual UI visual dictionary: Web and macOS entries, interactive demos, and the styles atlas.',
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
