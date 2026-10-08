import React from 'react'
import logo from './assets/trinovaLogo.png'

const Icon = ({ children, style, className = 'icon' }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)

const CheckIcon = () => (
  <Icon style={{ color: 'var(--accent-color)' }}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.4 2.4L16 10" />
  </Icon>
)

export default function App() {
  const services = [
    {
      title: 'Industrial Automation',
      desc: 'Complete PLC, HMI, and SCADA programming and integration for automated manufacturing systems.',
      icon: (
        <Icon>
          <rect x="8" y="8" width="8" height="8" rx="1" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </Icon>
      ),
    },
    {
      title: 'Control Panel Designing',
      desc: 'Custom electrical layout design, panel wiring, and testing following strict safety compliance standards.',
      icon: (
        <Icon>
          <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" />
          <path d="M5 8v3a2 2 0 002 2h3M19 8v3a2 2 0 01-2 2h-3M12 13v3" />
        </Icon>
      ),
    },
    {
      title: 'Robotics Integration',
      desc: 'Seamless deployment of robotic arms and automated guided vehicles (AGVs) to optimize production lines.',
      icon: (
        <Icon>
          <rect x="5" y="9" width="14" height="11" rx="2" />
          <path d="M9 9V6a3 3 0 116 0v3M9 14h.01M15 14h.01" />
        </Icon>
      ),
    },
    {
      title: 'Custom Software & IoT',
      desc: 'Real-time data monitoring dashboards, Industrial IoT solutions, and tailored enterprise software.',
      icon: (
        <Icon>
          <path d="M8 6L2 12l6 6M16 6l6 6-6 6M13 4l-2 16" />
        </Icon>
      ),
    },
  ]

  const stats = [
    { n: '100+', l: 'Projects Completed' },
    { n: '50+', l: 'Happy Clients' },
    { n: '10+', l: 'Years Experience' },
    { n: '24/7', l: 'Expert Support' },
  ]

  return (
    <>
      <header>
        <a href="#home" className="logo"> <img src={logo} alt="Trinova Technosolutions" className="logo-img" /> </a>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn-header">Get a Quote</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Next-Gen Industrial Automation & IT Solutions</h1>
          <p>Empowering industries with smart automation, custom engineering, and cutting-edge tech integration.</p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-title">
          <h2>About Trinova Tech Solution</h2>
          <p>Your trusted partner in industrial innovation and technical excellence.</p>
        </div>
        <div className="about-container">
          <div className="about-img">
            <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: 'var(--card-shadow)' }}>
              <rect width="500" height="380" fill="#101820" />
              <rect width="500" height="380" fill="url(#grid)" opacity="0.5" />
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="#1F4B4A" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="60" y="230" width="380" height="90" rx="6" fill="#1a2733" stroke="#2A3340" />
              <circle cx="100" cy="320" r="18" fill="#0D1117" stroke="#D9822B" strokeWidth="4" />
              <circle cx="180" cy="320" r="18" fill="#0D1117" stroke="#D9822B" strokeWidth="4" />
              <circle cx="320" cy="320" r="18" fill="#0D1117" stroke="#1F4B4A" strokeWidth="4" />
              <circle cx="400" cy="320" r="18" fill="#0D1117" stroke="#1F4B4A" strokeWidth="4" />
              <rect x="150" y="120" width="120" height="120" rx="8" fill="#1F4B4A" opacity="0.85" />
              <rect x="175" y="145" width="70" height="70" rx="4" fill="#0D1117" />
              <circle cx="210" cy="180" r="22" fill="none" stroke="#D9822B" strokeWidth="4" />
              <circle cx="210" cy="180" r="6" fill="#D9822B" />
              <rect x="290" y="160" width="90" height="70" rx="6" fill="#2A3340" />
              <rect x="304" y="174" width="62" height="10" rx="2" fill="#D9822B" />
              <rect x="304" y="192" width="40" height="8" rx="2" fill="#5C6570" />
              <rect x="304" y="206" width="52" height="8" rx="2" fill="#5C6570" />
              <path d="M270 180H290" stroke="#D9822B" strokeWidth="3" strokeDasharray="5 6" />
              <path d="M100 230V150M180 230V150M100 150H180" fill="none" stroke="#2A3340" strokeWidth="3" />
              <circle cx="140" cy="150" r="7" fill="#F2C078" />
            </svg>
          </div>
          <div className="about-text">
            <h3>Transforming Traditional Manufacturing into Smart Factories</h3>
            <p>At <strong>Trinova Tech Solution</strong>, we specialize in delivering robust automation and IT services tailored to modern industry standards. From PLC programming and SCADA systems to full-scale software integration, we turn complex challenges into efficient workflows.</p>
            <ul className="about-features">
              <li><CheckIcon /> Advanced Industrial Automation & Robotics</li>
              <li><CheckIcon /> Custom Software & IoT Integration</li>
              <li><CheckIcon /> End-to-End Control Panel Design</li>
              <li><CheckIcon /> 24/7 Technical Maintenance & Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-title">
          <h2>Our Core Solutions</h2>
          <p>High-performance services designed for maximum operational efficiency.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="stats">
        {stats.map((s) => (
          <div className="stat-item" key={s.l}>
            <h3>{s.n}</h3>
            <p>{s.l}</p>
          </div>
        ))}
      </div>

      <section id="contact">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our expert team to discuss your project requirements.</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <Icon>
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </Icon>
              <div><h4>Address</h4><p>Pune, Maharashtra, India</p></div>
            </div>
            <div className="info-box">
              <Icon>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </Icon>
              <div><h4>Email Us</h4><p>info@trinovatechsolutions.com</p></div>
            </div>
            <div className="info-box">
              <Icon>
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L7.9 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.9 2.2z" />
              </Icon>
              <div><h4>Call Us</h4><p>+91 9970212022</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Trinova Tech Solution. All Rights Reserved.</p>
      </footer>
    </>
  )
}
