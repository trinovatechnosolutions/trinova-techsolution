import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { menu } from "./menuData";
import logo from './assets/trinovaLogo.png'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)

  // bahercha click kela ki menu band
  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('pointerdown', handleOutside)
    return () => document.removeEventListener('pointerdown', handleOutside)
  }, [])

  const toggle = (title) => (e) => {
    e.preventDefault()
    setOpenMenu((cur) => (cur === title ? null : title))
  }

  return (
    <header>
      <Link to="/" className="logo" onClick={() => setOpenMenu(null)}>
        <img src={logo} alt="Trinova Technosolutions" className="logo-img" />
      </Link>

      <nav aria-label="Main navigation" ref={navRef}>
        <ul className="nav-list">
          {menu.map((group) => (
            <li
              className={`has-dropdown${openMenu === group.title ? ' open' : ''}`}
              key={group.title}
            >
              <a
                href="#"
                aria-haspopup="true"
                aria-expanded={openMenu === group.title}
                onClick={toggle(group.title)}
              >
                {group.title}
              </a>
              <ul className="dropdown">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`${group.base}/${item.slug}`}
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="btn-header"
              onClick={() => setOpenMenu(null)}
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
