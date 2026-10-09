import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../menuData'
import { site } from '../pageContent'
import logo from '../assets/trinovaLogoLight.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo"><img src={logo} alt={site.name} className="logo-img" /></span>
          <p>{site.slogan}</p>
          <p className="footer-contact">{site.email}<br />{site.phone}<br />{site.location}</p>
        </div>
        {menu.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item.slug}><Link to={`${group.base}/${item.slug}`}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
