# LearnUI 内容平台技术设计

> 对应 PRD：`docs/product/content-platform-prd.md`

## 1. 技术原则

- 内容优先：词条是数据，页面是数据的多个视图。
- 静态优先：优先构建期生成可索引 HTML，不因 SEO 需求立即引入后端。
- 渐进增强：收藏、历史和分享在无登录条件下可用。
- 单一事实源：计数、sitemap、关联推荐均由内容数据派生。
- 可校验：内容错误在 CI 阶段失败，而不是上线后发现。

## 2. 内容模型

建议将当前大文件逐步迁移为按领域拆分的内容文件，最终形态可为 `content/{domain}/{slug}.json` 或 Markdown + frontmatter。首期 TypeScript 类型如下：

```ts
type Domain = 'ui' | 'product' | 'stack' | 'style' | 'ai' | 'git'

interface TermEntry {
  id: string
  slug: string
  domain: Domain
  category: string
  status: 'draft' | 'published' | 'deprecated'
  name: string
  aliases: string[]
  plainQueries: string[]
  summary: string
  body: string
  promptExamples: Array<{
    title: string
    scenario: string
    request: string
    acceptance: string[]
  }>
  tags: string[]
  relatedIds: string[]
  sources: Array<{ title: string; url: string }>
  featuredRank?: number
  createdAt: string
  updatedAt: string
}
```

英文为基础内容，中文按 `id` 提供同构覆盖。构建时校验每个 `published` 词条的必填字段和翻译状态。

## 3. 路由与渲染方案

目标路由：

- `/en/:domain/:slug`
- `/zh/:domain/:slug`
- `/:lang/:domain` 分类列表
- `/:lang/popular` 热门榜单
- `/:lang/history` 最近浏览
- `/contribute` 贡献说明与 GitHub 入口

当前 Vite SPA 无法天然为每个词条生成独立 HTML。建议分两阶段：

1. Phase 1：React Router 增加独立路由，使用 `react-helmet-async` 管理页面元数据，并由部署平台配置 SPA fallback。
2. Phase 2：引入 Vite SSG 插件或迁移至 Astro/React 静态路由，为所有 published 词条生成 HTML。是否迁移以索引效果与维护成本评估为准。

不建议仅依赖客户端修改 `<title>` 作为最终 SEO 方案。

## 4. 派生索引

构建脚本生成：

- `dist/content-index.json`：轻量搜索索引。
- `dist/domain-counts.json`：领域与分类计数。
- `dist/related-index.json`：每个词条的相关推荐 ID。
- `dist/sitemap.xml`：中英文词条 URL。
- `dist/feed.xml`：最新发布词条。

相关推荐打分：

```text
score = explicitRelation * 100
      + sameCategory * 20
      + sharedTagCount * 5
      + normalizedPopularity * 2
```

显式关联始终优先；不足 3 条时才用算法结果补齐。同一推荐列表不重复、不推荐当前词条、不包含 draft。

## 5. 客户端状态

继续使用 localStorage，并统一加版本：

```ts
interface LocalLibraryV1 {
  version: 1
  favorites: string[]
  recent: Array<{ id: string; viewedAt: string }>
}
```

- 最近浏览最多 20 条，写入时去重。
- 遇到已删除 ID 时读取阶段自动过滤。
- storage 解析失败时安全回退为空数据。
- 为未来账号同步保留导入、导出函数边界。

## 6. 热门数据

首选现有隐私友好分析平台提供的聚合页面浏览量；不具备 API 时，可通过 Cloudflare Worker + Analytics Engine/D1 接收只含 `entryId`、日期桶的事件。

事件字段最小化：`entryId`、`referrerType`、`locale`。不采集搜索原文、IP 持久标识和浏览历史。API 失败时前端忽略并使用 `featuredRank`。

## 7. 社区贡献工程流

新增：

- `.github/ISSUE_TEMPLATE/term.yml`
- `.github/ISSUE_TEMPLATE/correction.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/content-check.yml`
- `scripts/validate-content.ts`

CI 校验：schema、ID/slug 唯一性、领域和分类枚举、关联 ID 存在、来源 URL 格式、日期格式、必需翻译、正文最小长度。外链可用性检查应允许重试，且与确定性 schema 校验拆分，避免网络波动阻塞所有内容 PR。

## 8. SEO 与结构化数据

词条页输出 `DefinedTerm` JSON-LD，知识集合页输出 `DefinedTermSet`。每个词条需要：

- 唯一标题：`{term} 是什么？示例与 AI 提示词 | LearnUI`
- 120–160 字符 description。
- canonical 和 `en` / `zh-CN` hreflang。
- 稳定的 OG 图片；可在构建期生成带领域色和词条名称的图片。
- slug redirect 映射文件，禁止静默改 URL。

## 9. 测试策略

- 单元测试：搜索评分、计数、相关推荐、localStorage 迁移。
- 内容测试：schema、双语、重复、悬空关系、slug 规范。
- 路由测试：直达、刷新、语言切换、404、历史前进后退。
- E2E：复制需求示例、收藏、最近浏览、分享链接、贡献跳转。
- SEO 快照：title、canonical、hreflang、JSON-LD、sitemap。

## 10. 主要风险

| 风险 | 应对 |
| --- | --- |
| 内容扩张导致质量下降 | 小批量发布、引用来源、编辑审核清单 |
| SPA 词条无法稳定收录 | 独立路由先行，SSG 作为正式 SEO 门槛 |
| 推荐变成热门内容垄断 | 显式关联与同分类优先，热门只补位 |
| GitHub 贡献门槛仍偏高 | 表单化 Issue、自动校验、示例模板 |
| 双语维护成本翻倍 | schema 同构、CI 检测缺失翻译、允许标记待翻译 |

