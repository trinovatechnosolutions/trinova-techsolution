import React from 'react'
import useInView from '../hooks/useInView'

// Fades/slides children in when they scroll into view.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal${seen ? ' in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
