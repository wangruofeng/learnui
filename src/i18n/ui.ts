export type Lang = 'en' | 'zh'

/* ------------------------------------------------------------------ */
/* 界面文案字典：en 与 zh 必须保持同构。组件通过 useI18n().ui 读取。    */
/* ------------------------------------------------------------------ */

const en = {
  langSwitch: { en: 'EN', zh: '中文' },
  nav: { elements: 'Elements', styles: 'Styles' },
  sponsorLine: { label: 'Founding sponsor', link: 'your name here' },

  home: {
    hero: {
      eyebrow: 'the visual dictionary of ui',
      title: 'What’s this called?',
      // {br} 处会被拆成两行；详见 Home.tsx
      sub: 'See the element, learn its real name, and prompt your coding agent with precision.{br}Double-press any word on the site for a plain-English definition.',
      ctaBadge: 'new',
      cta: 'Can’t name the look either? Try Name That Vibe',
      searchPlaceholder: 'the dots you grab to drag…',
      searchHint: 'Describe the thing in your own sloppy words — get the real name, the API symbol, and a paste-ready prompt.',
    },
    featured: {
      eyebrow: 'how an entry works',
      hint: 'Hover a numbered part, or a line below, to locate what it names.',
      parts: [
        { n: 1, label: 'Traffic lights', note: 'close · minimize · zoom' },
        { n: 2, label: 'Title bar', note: 'drag the window by it' },
        { n: 3, label: 'Sidebar (source list)', note: 'translucent navigation' },
        { n: 4, label: 'Content view', note: 'the document area' },
      ],
    },
    dict: {
      title: 'The dictionary',
      filterAll: 'all',
      filterWeb: 'web',
      filterMac: 'macOS',
      emptyTitle: 'Nothing by that name — yet.',
      emptyHint: 'Try sloppier words. “the circle that spins”, “red number on the icon”…',
    },
    table: {
      title: 'Say it to your agent',
      sub: 'Plain words in, platform symbols out. The same thing, named four ways.',
      placeholder: 'filter the table…',
      headers: ['you’d say', 'web', 'AppKit', 'SwiftUI'],
      // 每行：[你会怎么说, web, AppKit, SwiftUI] —— 后三列为代码符号，保持不变
      rows: [
        ['the three-line menu button', '<button aria-expanded>', '—', 'Menu { }'],
        ['on/off flip', 'role="switch"', 'NSSwitch', 'Toggle'],
        ['type-or-pick field', 'role="combobox"', 'NSComboBox', '—'],
        ['expanding sections', '<details>', 'NSOutlineView', 'DisclosureGroup'],
        ['slide-down alert on a window', '<dialog>', 'NSWindow.beginSheet', '.sheet'],
        ['translucent side nav', 'aside', 'NSSplitViewController', 'NavigationSplitView'],
        ['right-click menu', 'contextmenu', 'NSMenu', '.contextMenu'],
        ['draggable value track', '<input type="range">', 'NSSlider', 'Slider'],
        ['window with red/yellow/green dots', '—', 'NSWindow', 'WindowGroup'],
        ['loading outline of content', 'aria-busy + skeleton', '—', '.redacted(reason:.placeholder)'],
        ['⌘K action launcher', '⌘K + fuzzy list', '—', 'CommandMenu'],
        ['red count on the icon', 'badge', 'NSDockTile.badgeLabel', '.badge(_:)'],
      ],
    },
  },

  styles: {
    eyebrow: 'name that vibe',
    title: 'Can’t name the look either?',
    sub: 'The companion atlas of visual styles. See the aesthetic, learn its name, and steal a paste-ready prompt for your coding agent.',
  },

  methodology: {
    eyebrow: 'index · methodology',
    title: 'see it · verify it · name it',
    intro:
      'Every entry starts with a thing someone can point at but cannot name. We identify the pixel first, then check the candidate term against platform documentation, accessibility standards, and shipping APIs before it earns a place in the dictionary.',
    howTitle: 'How a term gets in',
    steps: [
      ['Start with the pixels.', 'A term has to point at something visible and genuinely hard to describe. Nothing gets added just because it sounds useful.'],
      ['Check the platform.', 'The user-facing name is verified in platform guidance, the code name in framework documentation, and the behavior in the relevant accessibility standard.'],
      ['Make the difference visible.', 'The demo, the anatomy, and the plain-language explanation must tell the term apart from its nearest look-alikes — no prior vocabulary required.'],
    ],
    sourcesTitle: 'Sources we consult',
    sourcesSub:
      'The source depends on the claim. A design guide can name a visible pattern; a specification defines its semantics; framework documentation supplies the exact symbol a developer can use.',
    card1Title: 'Accessible web patterns',
    card1Body: 'Roles and properties, established widget patterns, keyboard interaction, and accessibility requirements.',
    card2Title: 'The web platform',
    card2Body: 'Native HTML semantics and behavior, browser APIs, implementation context, and compatibility notes.',
    realTitle: 'What real searches teach us',
    realBody:
      'Documentation tells us what a thing is called. Real searches tell us what people call it before they know the name. Aggregate misses, confirmed answers, and corrections shape the sloppy phrases that lead to each entry — that language improves findability; it never overrules a standard or invents a component name.',
    disagreeTitle: 'When names disagree',
    disagreeBody:
      'The same-looking element can carry different names on the web and macOS — or even in AppKit and SwiftUI. We keep the platform attached to the term, prefer the platform owner’s wording for its own APIs, and list useful alternates instead of pretending there is one universal vocabulary.',
    disclaimer:
      'Name That UI is independently researched, built, and maintained. It is not affiliated with or endorsed by the publishers referenced above.',
  },

  sponsor: {
    eyebrow: 'sponsorship',
    title: 'One of the fastest-growing vibe-coding references on the web.',
    sub:
      'Three founding slots on one quiet line above the header, on every page of the site — read by designers and developers at the exact moment they’re telling a coding agent what to build.',
    liveAudience: 'live audience',
    liveAudienceNote: 'pageviews since launch · first-party analytics, no cookies',
    globalReach: 'global reach',
    globalReachNote: 'countries reached · launched July 12, 2026',
    startedTitle: 'It started with one post',
    quote:
      'introducing namethatui.com — a dictionary for ui things you can see but can’t name. made it because i’m primarily a designer, and my biggest resistance was always knowing what things are called when prompting my agents.',
    statViews: '755k views',
    statLikes: '6.7k likes',
    statBookmarks: '9.5k bookmarks',
    statReplies: '201 replies',
    startedNote: 'Bookmarked more than it was liked — 9.5k people saved it to come back.',
    waysTitle: 'Two ways in',
    foundingTitle: 'Founding sponsor',
    foundingPrice: '$1,000',
    foundingUnit: 'per month · three slots, ever',
    foundingBody:
      'Your linked name on the quiet line above the header, on every page. Billed monthly, the slot stays yours until you cancel. Renewals are non-refundable.',
    supporterTitle: 'Supporter',
    supporterPrice: '$250',
    supporterUnit: 'per month · up to three',
    supporterBody:
      'The smaller thank-you: one linked name in the footer of every page. Up to three supporters take gentle turns in the same quiet spot.',
    whatYouGetTitle: 'What you get',
    whatYouGetBody:
      'A linked name and destination, confirmed over email before anything goes live. Brands that don’t fit the audience are declined.',
    whatStaysTitle: 'What stays out, on purpose',
    whatStays: [
      'No tracking pixels and no third-party scripts; the link carries rel=“sponsored”.',
      'No influence over entries, definitions, or search rankings — the dictionary stays editorial.',
      'No guaranteed clicks or conversions; you’re backing a young, fast-growing reference.',
    ],
    ctaTitle: 'Want a slot?',
    ctaBody:
      'Say who you are and what you make. We’ll confirm the linked name and destination over email — if the fit is right, you can be live the same day.',
  },

  footer: {
    tagline: 'the visual dictionary of ui',
    followTitle: 'Follow & Support',
    wechatLabel: 'WeChat',
    wechatNote: 'follow the official account',
    rewardLabel: 'Buy me a coffee',
    rewardNote: 'support the project',
    rssNote: 'New terms ship often — follow by RSS',
    poweredBy: 'Powered by',
    sourceNote:
      'Bilingual replica of namethatui.com for learning. Original content © its author.',
    slogan: 'see it · verify it · name it',
    doublePress: 'double-press any word for a definition',
    placeholder: 'Wang Ruofeng',
  },

  detail: {
    realName: 'the real name',
    findByTyping: 'people find this by typing',
    promptLabel: 'paste-ready prompt',
    copy: 'copy',
    copied: 'copied ✓',
    esc: 'esc',
    parts: 'the parts',
    partsHint: 'Hover a number to locate what it names.',
  },

  entryCard: {
    badgeNew: 'new',
    platformWeb: 'web',
    platformMac: 'macOS',
    copy: 'copy',
    copied: '✓',
  },
}

const zh: typeof en = {
  langSwitch: { en: 'EN', zh: '中文' },
  nav: { elements: '元素', styles: '风格' },
  sponsorLine: { label: '创始赞助', link: '你的名字' },

  home: {
    hero: {
      eyebrow: 'UI 视觉词典',
      title: '这个叫什么？',
      sub: '看到元素，学会它的真名，精准地把需求讲给你的编程代理。{br}双击站内任意词，即可查看通俗释义。',
      ctaBadge: '新',
      cta: '也叫不出那种观感？试试 Name That Vibe',
      searchPlaceholder: '你拖动时抓的那几个点…',
      searchHint: '用你自己的大白话描述这个东西 —— 拿到真名、API 符号，以及一段可直接粘贴的 prompt。',
    },
    featured: {
      eyebrow: '一个词条如何构成',
      hint: '悬停编号或下方某行，定位它指代的部位。',
      parts: [
        { n: 1, label: '红绿灯', note: '关闭 · 最小化 · 缩放' },
        { n: 2, label: '标题栏', note: '拖动它来移动窗口' },
        { n: 3, label: '侧边栏（来源列表）', note: '半透明导航' },
        { n: 4, label: '内容视图', note: '文档区域' },
      ],
    },
    dict: {
      title: '词典',
      filterAll: '全部',
      filterWeb: 'web',
      filterMac: 'macOS',
      emptyTitle: '还没有叫这个名字的。',
      emptyHint: '换个大白话试试。「会转的圆圈」「图标上的红数字」…',
    },
    table: {
      title: '跟你的代理说',
      sub: '大白话进，平台符号出。同一件东西，四种叫法。',
      placeholder: '过滤表格…',
      headers: ['你会说', 'web', 'AppKit', 'SwiftUI'],
      rows: [
        ['三横线菜单按钮', '<button aria-expanded>', '—', 'Menu { }'],
        ['开关拨动', 'role="switch"', 'NSSwitch', 'Toggle'],
        ['能打字也能选的输入框', 'role="combobox"', 'NSComboBox', '—'],
        ['可展开的小节', '<details>', 'NSOutlineView', 'DisclosureGroup'],
        ['窗口上滑下来的提示', '<dialog>', 'NSWindow.beginSheet', '.sheet'],
        ['半透明侧边导航', 'aside', 'NSSplitViewController', 'NavigationSplitView'],
        ['右键菜单', 'contextmenu', 'NSMenu', '.contextMenu'],
        ['可拖动的数值滑轨', '<input type="range">', 'NSSlider', 'Slider'],
        ['带红黄绿圆点的窗口', '—', 'NSWindow', 'WindowGroup'],
        ['加载时的内容骨架', 'aria-busy + skeleton', '—', '.redacted(reason:.placeholder)'],
        ['⌘K 快捷启动器', '⌘K + fuzzy list', '—', 'CommandMenu'],
        ['图标上的红色数字', 'badge', 'NSDockTile.badgeLabel', '.badge(_:)'],
      ],
    },
  },

  styles: {
    eyebrow: '命名那种观感',
    title: '也叫不出这种观感？',
    sub: '视觉风格的配套图鉴。看到这种观感，学会它的名字，再偷一段可直接粘贴的 prompt 给你的编程代理。',
  },

  methodology: {
    eyebrow: '索引 · 方法论',
    title: '看到它 · 核实它 · 命名它',
    intro:
      '每个词条都始于一个能指认、却说不出名字的东西。我们先定位像素，再把候选术语拿到平台文档、无障碍标准和已发布的 API 里核实，通过后才能进入词典。',
    howTitle: '一个术语如何入选',
    steps: [
      ['从像素开始。', '一个术语必须指向某个可见、且确实难以描述的东西。不会因为「听起来有用」就收录。'],
      ['核实平台。', '用户面名称在平台指南里核实，代码名称在框架文档里核实，行为在对应的无障碍标准里核实。'],
      ['让差异可见。', '演示、解剖图和通俗解释必须能把术语和它最像的近邻区分开 —— 不需要任何前置词汇。'],
    ],
    sourcesTitle: '我们参考的来源',
    sourcesSub:
      '来源取决于要核实什么。一份设计指南能命名可见的模式；一份规范定义它的语义；框架文档提供开发者可用的精确符号。',
    card1Title: '无障碍 Web 模式',
    card1Body: '角色与属性、成熟的控件模式、键盘交互，以及无障碍要求。',
    card2Title: 'Web 平台',
    card2Body: '原生 HTML 语义与行为、浏览器 API、实现上下文，以及兼容性说明。',
    realTitle: '真实搜索教会我们的事',
    realBody:
      '文档告诉我们一个东西叫什么。真实搜索告诉我们，人们在不认识名字之前怎么叫它。汇总的未命中、确认的回答和更正，塑造了通往每个词条的大白话 —— 这些语言提升可发现性，但绝不凌驾于标准之上，也不会凭空发明控件名。',
    disagreeTitle: '当名字不一致时',
    disagreeBody:
      '看起来一样的元素，在 Web 和 macOS 上可能叫不同的名字 —— 甚至在 AppKit 和 SwiftUI 里都不一样。我们把平台附着在术语上，优先采用平台拥有者对自己 API 的措辞，并列出有用的别名，而不是假装存在一套通用词汇。',
    disclaimer:
      'Name That UI 独立研究、构建和维护，与上述引用的出版方无任何附属或背书关系。',
  },

  sponsor: {
    eyebrow: '赞助',
    title: '全网增长最快的 vibe-coding 参考站之一。',
    sub:
      'header 上方那行安静的创始赞助位，全站每页可见，最多三个 —— 在设计师和开发者正给编程代理下达指令的那一刻，被他们读到。',
    liveAudience: '实时受众',
    liveAudienceNote: '上线以来的浏览量 · 自有统计，无 cookie',
    globalReach: '全球覆盖',
    globalReachNote: '触达国家数 · 2026 年 7 月 12 日上线',
    startedTitle: '始于一条推文',
    quote:
      '介绍 namethatui.com —— 一部给「看得到、却说不出名字」的 UI 东西准备的词典。做它，是因为我主要是个设计师，而给代理下 prompt 时最大的阻力，一直是不知道这些东西到底叫什么。',
    statViews: '75.5 万浏览',
    statLikes: '6.7k 赞',
    statBookmarks: '9.5k 收藏',
    statReplies: '201 回复',
    startedNote: '收藏多于点赞 —— 9.5k 人存下来打算回头看。',
    waysTitle: '两种参与方式',
    foundingTitle: '创始赞助',
    foundingPrice: '$1,000',
    foundingUnit: '每月 · 三个名额，长期',
    foundingBody:
      '你的带链名字挂在 header 上方那行安静的赞助位，全站每页可见。按月计费，名额一直是你的，直到你取消。续费不退款。',
    supporterTitle: '支持者',
    supporterPrice: '$250',
    supporterUnit: '每月 · 最多三位',
    supporterBody:
      '小一点的致谢：在每页 footer 放一个带链名字。最多三位支持者在同一处安静的位置轮流出镜。',
    whatYouGetTitle: '你能得到什么',
    whatYouGetBody:
      '一个带链名字和目标地址，上线前先经邮件确认。不符合受众调性的品牌会被婉拒。',
    whatStaysTitle: '哪些东西，刻意不碰',
    whatStays: [
      '不放追踪像素，不放第三方脚本；链接带 rel=“sponsored”。',
      '不影响词条、定义或搜索排序 —— 词典保持编辑独立性。',
      '不保证点击或转化；你赞助的是一个年轻、快速增长的参考站。',
    ],
    ctaTitle: '想要一个名额？',
    ctaBody:
      '说说你是谁、你做什么。我们会通过邮件确认带链名字和目标地址 —— 如果合适，当天就能上线。',
  },

  footer: {
    tagline: 'UI 视觉词典',
    followTitle: '关注与支持',
    wechatLabel: '微信',
    wechatNote: '关注公众号',
    rewardLabel: '请作者喝杯咖啡',
    rewardNote: '打赏支持',
    rssNote: '新词条持续上线 —— RSS 订阅',
    poweredBy: 'Powered by',
    sourceNote:
      'namethatui.com 的中英双语学习复刻版。原内容版权归原作者所有。',
    slogan: '看到它 · 核实它 · 命名它',
    doublePress: '双击任意词查看释义',
    placeholder: '王若风',
  },

  detail: {
    realName: '真名',
    findByTyping: '人们这样搜到它',
    promptLabel: '可直接粘贴的 prompt',
    copy: '复制',
    copied: '已复制 ✓',
    esc: 'esc',
    parts: '部位',
    partsHint: '悬停编号，定位它指代的部位。',
  },

  entryCard: {
    badgeNew: '新',
    platformWeb: 'web',
    platformMac: 'macOS',
    copy: '复制',
    copied: '✓',
  },
}

export const UI: Record<Lang, typeof en> = { en, zh }

/* 将含 {br} 的字符串拆为段落数组，供组件换行渲染 */
export function splitBr(s: string): string[] {
  return s.split('{br}')
}
