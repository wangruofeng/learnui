# LearnUI 内容平台 Roadmap

## 实施顺序

顺序遵循“先建立内容底座，再增加流量入口，最后放大内容供给”。每个阶段都必须可以独立上线。

### Phase 0：内容底座与校验（1 周）

- 定义统一 `TermEntry` schema 和领域/分类枚举。
- 建立内容校验脚本、计数派生和关联完整性检查。
- 迁移现有数据时保持旧 ID 与现有页面可用。
- 输出首批领域词条清单和内容写作指南。

退出标准：现有内容全部通过新 schema；计数无需手写；CI 能阻止重复 slug 和悬空关系。

### Phase 1：独立 URL 与分类导航（1–2 周）

- 建立语言、领域、slug 路由。
- 将详情弹窗升级为可直达详情页或路由驱动 Modal。
- 导航显示领域/分类数量。
- 增加页面元数据、canonical、hreflang、404、sitemap。

退出标准：全部已发布词条都有稳定 URL，可刷新与分享；SEO 自动检查通过。

### Phase 2：AI 需求示例与个人学习轨迹（1 周）

- 每个词条增加结构化真实需求示例。
- 增加复制完整需求与反馈。
- 增加最近浏览列表、清空入口和本地数据版本迁移。
- 详情页增加相关推荐。

退出标准：100% published 词条至少一个需求示例；相关推荐无悬空或重复。

### Phase 3：内容扩展 MVP（2–3 周）

- 产品、技术栈、AI、Git 各发布至少 15 条原创词条。
- 设计风格与现有 Styles 数据统一进入领域模型。
- 首页增加跨领域浏览和全站搜索。
- 对 Preview 领域明确标记，避免空分类。

退出标准：新增领域内容通过编辑审核；搜索可以跨领域命中名称、别名和大白话描述。

### Phase 4：社区贡献闭环（1 周）

- 上线 GitHub Issue Forms、贡献指南和 PR 模板。
- 自动执行内容 schema、重复、双语、来源和关联检查。
- 建立标签状态机和维护者审核清单。
- 在贡献者同意后展示贡献署名。

退出标准：使用文档中的示例贡献完整演练一次，从 Issue 到合并发布全流程成功。

### Phase 5：热门榜单与数据优化（1–2 周）

- 接入隐私友好的词条浏览聚合。
- 上线 7 日 / 30 日榜单与无数据降级策略。
- 建立搜索无结果、示例复制、相关推荐点击指标。
- 根据数据调整搜索别名和关联关系，不自动改写正式定义。

退出标准：统计失败不影响主流程；热门榜单有明确时间窗；数据不包含搜索原文或用户标识。

## 优先级

| 能力 | 用户价值 | 前置依赖 | 优先级 |
| --- | --- | --- | --- |
| 内容 schema 与校验 | 高 | 无 | P0 |
| 独立 URL / SEO | 高 | 内容 schema | P0 |
| 分类数量 | 中 | 内容 schema | P0 |
| AI 真实需求示例 | 高 | 内容 schema | P0 |
| 最近浏览 / 相关推荐 | 中高 | 独立 URL | P1 |
| 新领域批量内容 | 高 | schema、导航 | P1 |
| 社区贡献 | 中高 | 内容校验 | P1 |
| 热门榜单 | 中 | 数据采集 | P2 |

## 建议拆分的实现 PR

1. `refactor: introduce unified term schema and validation`
2. `feat: add domain navigation and generated counts`
3. `feat: add addressable term detail routes and SEO metadata`
4. `feat: add structured AI request examples`
5. `feat: add recent history and related recommendations`
6. `content: seed product stack AI and Git domains`
7. `chore: add community contribution workflow`
8. `feat: add privacy-friendly popular rankings`

