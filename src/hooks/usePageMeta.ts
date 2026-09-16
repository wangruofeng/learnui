import { useEffect } from 'react'
import { useLocation } from 'react-router'

type PageMeta = {
  title: string
  description: string
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

/**
 * 按路由 + 语言更新 title / description / canonical / OG / Twitter。
 * 静态兜底值在 index.html；无 JS 的爬虫也能拿到首页基本信息。
 * canonical 用 origin + pathname（自动适配部署域名），og:image 相对
 * document.baseURI 解析（兼容 GitHub Pages 子路径）。
 */
export function usePageMeta({ title, description }: PageMeta) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    const canonicalUrl = window.location.origin + pathname
    const ogImage = new URL('og-image.png', document.baseURI).href

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl
  }, [title, description, pathname])
}
