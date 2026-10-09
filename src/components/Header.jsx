import React, { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu } from '../menuData'
import logoDark from '../assets/trinovaLogo.png'
import logoLight from '../assets/trinovaLogoLight.png'
import { useTheme } from '../context/ThemeContext'
import { ChevronDown, CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const navId = useId()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  // Shrink / add shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on outside click / Escape
  useEffect(() => {
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Close everything when the route changes
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.key])

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Trinova Technosolutions home">
          <img src={theme === 'dark' ? logoLight : logoDark} alt="Trinova Technosolutions" className="logo-img" />
        </Link>

        <nav id={navId} className={`nav${mobileOpen ? ' open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {menu.map((group) => {
              const isOpen = openMenu === group.title
              return (
                <li
                  key={group.title}
                  className={`has-dropdown${isOpen ? ' open' : ''}`}
                  onMouseLeave={() => setOpenMenu((cur) => (cur === group.title ? null : cur))}
                >
                  <button
                    type="button"
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : group.title)}
                  >
                    {group.title} <ChevronDown />
                  </button>
                  <ul className="dropdown">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link to={`${group.base}/${item.slug}`}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
            <li className="nav-cta">
              <Link to="/" state={{ scrollTo: 'contact' }} className="btn btn-primary btn-sm">
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls={navId}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
