import React, { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getSection, getPage, site } from '../pageContent'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import SpotlightLink from '../components/SpotlightLink'
import {
  ArrowIcon, BoltIcon, ChipIcon, CheckIcon, CloudIcon, CodeIcon, DocIcon, MailIcon,
  MonitorIcon, PhoneIcon, PinIcon, WrenchIcon,
} from '../components/Icons'

const capabilities = getSection('/capabilities')
const services = getSection('/services')
const industries = getSection('/industries')
const software = getPage('capabilities', 'automation-software')
const why = getPage('company', 'why-trinova')
const delivery = getPage('company', 'project-delivery')
const commitment = getPage('company', 'our-commitment')
const approach = getPage('company', 'who-we-are')

const icons = {
  'plc-control': <ChipIcon />, 'hmi-scada': <MonitorIcon />, 'automation-software': <CodeIcon />,
  'iiot-digital': <CloudIcon />, 'electrical-engineering': <BoltIcon />, commissioning: <WrenchIcon />,
  'industrial-automation': <ChipIcon />, 'digital-solutions': <CloudIcon />, documentation: <DocIcon />,
}

// Counts come straight from the content data, so they are always accurate
const stats = [
  { to: capabilities.items.length, label: 'Core Capabilities' },
  { to: services.items.length, label: 'Engineering Service Areas' },
  { to: industries.items.length, label: 'Industry Sectors' },
  { to: delivery.points.length, label: 'Project Delivery Stages' },
]

const ticker = ['PLC', 'HMI', 'SCADA', 'LabVIEW', 'IIoT', 'Cloud Monitoring', 'Control Panels', 'MCC', 'Commissioning', 'Documentation']

const scrollToId = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ContactForm() {
  const uid = useId()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error | mailto
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()

    // Fallback while no form service is configured: open the visitor's email app
    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`Quote request from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    // Real send (works on GitHub Pages, no backend needed)
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Website enquiry from ${form.name}` }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="card contact-form" onSubmit={onSubmit}>
      <h3>Send us a message</h3>
      <label htmlFor={`${uid}-name`}>Your name</label>
      <input id={`${uid}-name`} required value={form.name} onChange={set('name')} autoComplete="name" />
      <label htmlFor={`${uid}-email`}>Email</label>
      <input id={`${uid}-email`} type="email" required value={form.email} onChange={set('email')} autoComplete="email" />
      <label htmlFor={`${uid}-msg`}>Project details</label>
      <textarea id={`${uid}-msg`} rows="4" required value={form.message} onChange={set('message')} />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : <>Send message <ArrowIcon /></>}
      </button>
      {status === 'success' && <p className="form-note" role="status">Thank you! Your message has been sent. We will get back to you soon.</p>}
      {status === 'error' && <p className="form-note error" role="alert">Sorry, something went wrong. Please email us at {site.email}.</p>}
      {status === 'mailto' && <p className="form-note" role="status">Opening your email app. If nothing happens, write to {site.email}.</p>}
    </form>
  )
}

export default function Home() {
  const location = useLocation()

  // "Get a Quote" from other pages asks us to scroll to a section
  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
  }, [location])

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="blob blob-1" /><div className="blob blob-2" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i className="dot" /> Industrial Automation &bull; Digital Engineering</span>
            <h1>Future of <span className="gradient-text">Industrial Automation</span></h1>
            <p className="hero-slogan">{site.slogan}</p>
            <p>{site.name} delivers integrated automation, electrical engineering, automation software and digital solutions from Pune, India.</p>
            <div className="hero-btns">
              <a href="#capabilities" onClick={scrollToId('capabilities')} className="btn btn-primary">Our Capabilities <ArrowIcon /></a>
              <a href="#contact" onClick={scrollToId('contact')} className="btn btn-ghost">Contact Us</a>
            </div>
            <div className="tag-row">
              <span>Automation</span><span>Software</span><span>Digital Engineering</span>
            </div>
          </div>

          <div className="status-card">
            <div className="status-head"><span>Our Focus</span></div>
            <ol className="pillars">
              {approach.points.map((p, i) => (
                <li key={p}><span>{String(i + 1).padStart(2, '0')}</span><strong>{p}</strong></li>
              ))}
            </ol>
            <div className="status-foot">Supporting the system throughout its lifecycle</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Who we are</span>
            <h2>Technology-Driven Engineering</h2>
            <p>Understand the challenge. Engineer the solution. Integrate it. Support it.</p>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-img">
<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Automation line illustration">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="#1C3A8A" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="500" height="380" fill="#060F2B" />
                <rect width="500" height="380" fill="url(#grid)" opacity="0.6" />
                <rect x="60" y="230" width="380" height="90" rx="8" fill="#0F1E4A" stroke="#27407F" />
                {[100, 180, 320, 400].map((x, i) => (
                  <circle key={x} cx={x} cy="320" r="18" fill="#060F2B" stroke={i < 2 ? '#E03B4F' : '#3B63D9'} strokeWidth="4" />
                ))}
                <rect x="150" y="120" width="120" height="120" rx="10" fill="#1B3D9A" opacity="0.9" />
                <rect x="175" y="145" width="70" height="70" rx="6" fill="#060F2B" />
                <circle cx="210" cy="180" r="22" fill="none" stroke="#E03B4F" strokeWidth="4" />
                <circle cx="210" cy="180" r="6" fill="#E03B4F" />
                <rect x="290" y="160" width="90" height="70" rx="8" fill="#16296B" />
                <rect x="304" y="174" width="62" height="10" rx="2" fill="#E03B4F" />
                <rect x="304" y="192" width="40" height="8" rx="2" fill="#5F78C2" />
                <rect x="304" y="206" width="52" height="8" rx="2" fill="#5F78C2" />
                <path d="M270 180H290" stroke="#E03B4F" strokeWidth="3" strokeDasharray="5 6" />
                <path d="M100 230V150M180 230V150M100 150H180" fill="none" stroke="#27407F" strokeWidth="3" />
                <circle cx="140" cy="150" r="7" fill="#9DB7FF" />
              </svg>
            </Reveal>
            <Reveal className="about-text" delay={120}>
              <h3>Integrated automation, software and engineering under one roof</h3>
              <p>{approach.text}</p>
              <p>{approach.extra}</p>
              <ul className="check-list">
                <li><CheckIcon /> Industrial automation &amp; electrical engineering</li>
                <li><CheckIcon /> Automation software &amp; industrial digitalisation</li>
                <li><CheckIcon /> Cloud-based monitoring</li>
                <li><CheckIcon /> Technical documentation solutions</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="alt" id="capabilities">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">What we do</span>
            <h2>Our Core Capabilities</h2>
            <p>From control logic to connected, data-driven operations.</p>
          </Reveal>
          <div className="grid grid-3">
            {capabilities.items.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90}>
                <SpotlightLink to={`${capabilities.base}/${c.slug}`} className="service-card">
                  <div className="icon-box">{icons[c.slug]}</div>
                  <h3>{c.label}</h3>
                  <p>{c.points.map((p) => (typeof p === 'string' ? p : p.t)).join(' \u2022 ')}</p>
                  <span className="more">Learn more <ArrowIcon /></span>
                </SpotlightLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION SOFTWARE */}
      <section id="software">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Automation software</span>
            <h2>Software That Turns Data into Insight</h2>
            <p>Beyond control logic, we build software that turns industrial data into useful operational information.</p>
          </Reveal>
          <div className="grid grid-3">
            {software.points.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 90}>
                <div className="sw-item">
                  <h3><i className="diamond" />{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING SERVICES */}
      <section className="alt" id="services">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Engineering services</span>
            <h2>Delivery Scope</h2>
            <p>Four service areas covering the full life of an automation project.</p>
          </Reveal>
          <div className="grid grid-2">
            {services.items.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <SpotlightLink to={`${services.base}/${s.slug}`} className="service-card">
                  <div className="icon-box">{icons[s.slug]}</div>
                  <h3>{s.label}</h3>
                  <div className="pills">{s.points.map((p) => <span key={p}>{p}</span>)}</div>
                  <span className="more">View scope <ArrowIcon /></span>
                </SpotlightLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Industries</span>
            <h2>Industries We Serve</h2>
          </Reveal>
          <div className="grid grid-3">
            {industries.items.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 90}>
                <Link to={`${industries.base}/${ind.slug}`} className="ind-card">
                  <span>{ind.label}</span><ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRINOVA */}
      <section className="alt" id="why">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Why Trinova</span>
            <h2>Why Choose Trinova</h2>
          </Reveal>
          <div className="grid grid-3">
            {why.points.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 90}>
                <div className="card why-card">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY */}
      <section id="process">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Project delivery</span>
            <h2>From Requirement to Lifecycle Support</h2>
          </Reveal>
          <ol className="steps" style={{ '--cols': delivery.points.length }}>
            {delivery.points.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 80}>
                <span className="step-num">{i + 1}</span>
                <h3>{p}</h3>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong><Counter to={s.to} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT + CTA */}
      <section className="cta-wrap">
        <div className="container">
          <Reveal className="section-title commit">
            <span className="kicker">Our commitment</span>
            <h2>{commitment.points.join(' \u2022 ')}</h2>
            <p>{commitment.text}</p>
          </Reveal>
          <Reveal className="cta">
            <div>
              <h2>Let&apos;s build smarter industrial solutions</h2>
              <p>Connect with {site.name} for automation, software, digitalisation, electrical engineering, commissioning and technical documentation requirements.</p>
            </div>
            <a href="#contact" onClick={scrollToId('contact')} className="btn btn-light">Get a Quote <ArrowIcon /></a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <Reveal className="section-title">
            <span className="kicker">Contact</span>
            <h2>Contact Trinova</h2>
            <p>Get in touch with our team to discuss your project requirements.</p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="info-box"><span className="icon-box"><MailIcon /></span><div><h4>Email</h4><p>{site.email}</p></div></div>
              <div className="info-box"><span className="icon-box"><PhoneIcon /></span><div><h4>Phone</h4><p>{site.phone}</p></div></div>
              <div className="info-box"><span className="icon-box"><PinIcon /></span><div><h4>Location</h4><p>{site.location}</p></div></div>
            </Reveal>
            <Reveal delay={120}><ContactForm /></Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
