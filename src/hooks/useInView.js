import { useEffect, useRef, useState } from 'react'

// Returns [ref, seen]. `seen` flips to true once the element scrolls into view.
export default function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, seen]
}
