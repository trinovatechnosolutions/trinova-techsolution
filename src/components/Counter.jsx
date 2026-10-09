import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

// Counts from 0 to `to` once visible. Respects reduced-motion.
export default function Counter({ to, suffix = '', duration = 1600 }) {
  const [ref, seen] = useInView({ threshold: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!seen) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])

  return <span ref={ref}>{value}{suffix}</span>
}
