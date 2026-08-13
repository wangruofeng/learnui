import { useEffect, useState } from 'react'

const THRESHOLD = 320 // px scrolled before the button appears

/**
* 右下角「回到顶部」按钮。
 * 滚动超过一定距离后淡入，点击平滑回顶。仅一个上箭头，保留轻量背景。
*/
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="回到顶部"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-white text-[hsl(var(--ink))] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-hairline-dark ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 6v12M6.5 11.5 12 6l5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
