import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// 辅助插件已禁用：inspectAttr() 依赖 @babel/plugin-proposal-decorators，
// 项目未安装（pnpm 严格隔离），会令 src/main.tsx 转换报 500。
// 如需恢复 DOM 检查能力：pnpm add -D @babel/plugin-proposal-decorators，
// 再取消下行注释并把 inspectAttr() 放回 plugins 数组。
// import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
