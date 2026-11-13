import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// 静态托管不会执行 React Router。为有效路由生成真实入口，避免落入 404.html。
const html = await readFile('dist/index.html', 'utf8')
const app = await readFile('src/App.tsx', 'utf8')
const routes = [...app.matchAll(/<Route path="(\/[^"*:]*)"/g)]
  .map((match) => match[1]).filter((route) => route !== '/')
for (const route of routes) {
  const directory = resolve('dist', route.slice(1))
  const base = '../'.repeat(route.split('/').filter(Boolean).length)
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/index.html`, html.replace('<head>', `<head>\n    <base href="${base}" />`))
}
await writeFile('dist/404.html', html)
console.log(`Generated ${routes.length} static route entries`)
