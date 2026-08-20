# docs 目录组织约定

需求文档按**版本**组织：一个版本（一个需求批次）对应 `versions/` 下的一个目录，目录内再按文档类型分为 `product/` 与 `technical/`。同一版本的产品与技术文档放在一起，方便对照阅读。

```
docs/
├── README.md                          # 本文件：组织约定 + 版本索引
├── versions/                          # 各版本需求文档
│   └── 2026-08-content-platform/      # 目录名：<年份-月份>-<主题 slug>
│       ├── product/                   # 产品文档（PRD、Roadmap、指南）
│       │   ├── prd.md
│       │   ├── roadmap.md
│       │   └── contribution-guide.md
│       └── technical/                 # 技术文档（技术设计、方案）
│           └── design.md
└── superpowers/specs/                 # superpowers 工作流产出的设计稿（历史，原样保留）
```

## 约定

- **新增版本**：在 `versions/` 下新建 `<YYYY-MM>-<主题>.md` 命名的目录，如 `2026-10-search-revamp/`，内部沿用 `product/`、`technical/` 结构；文档较多时可再加子目录。
- **版本内的命名**：目录名已含主题，文件名不必再重复主题前缀，用 `prd.md`、`design.md` 等通用名即可。
- **文档内部引用**：跨文档引用一律用相对路径（如 `../product/prd.md`），不要写从仓库根算起的绝对路径，避免目录调整时失效。
- **不做历史版本快照**：文档修订直接在原文件上改（文档头部的 `状态 / 版本 / 日期` 字段更新），历史版本交给 git，不保留 `prd-v1.1.md` 之类的副本。
- **版本定稿或上线后**：目录原样保留作为该版本的需求存档；如果其中的指南类文档需要长期维护（如贡献指南），再考虑提升到 `docs/` 顶层，不要默默改动已归档版本的内容。

## 版本索引

| 版本目录 | 主题 | 状态 |
| --- | --- | --- |
| [`2026-08-content-platform/`](./versions/2026-08-content-platform/) | 内容平台化：领域扩展、独立 URL 与 SEO、AI 需求示例、贡献流程 | 进行中（PRD v1.0 Draft，2026-08-18） |
