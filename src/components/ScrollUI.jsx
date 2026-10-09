import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UpIcon } from './Icons'

// Resets scroll on page change (unless the link asked to scroll to a section).
export function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (location.state?.scrollTo) return
    window.scrollTo(0, 0)
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

// Thin progress bar at the top + floating "back to top" button.
export function ScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
      setShowTop(window.scrollY > 600)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <button
        type="button"
        className={`to-top${showTop ? ' show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <UpIcon />
      </button>
    </>
  )
}
