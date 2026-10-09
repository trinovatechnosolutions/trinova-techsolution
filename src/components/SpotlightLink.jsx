import React from 'react'
import { Link } from 'react-router-dom'

// A router Link whose background glow follows the cursor.
export default function SpotlightLink({ className = '', children, ...props }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Link className={`card spotlight ${className}`.trim()} onMouseMove={onMove} {...props}>
      {children}
    </Link>
  )
}
