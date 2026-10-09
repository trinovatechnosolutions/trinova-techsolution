import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const content = {
  // Industry Solutions
  'industrial-automation': { title: 'Industrial Automation', text: 'Complete PLC, HMI and SCADA programming and integration for automated manufacturing systems.' },
  'control-panel-designing': { title: 'Control Panel Designing', text: 'Custom electrical layout design, panel wiring and testing following strict safety standards.' },
  'robotics-integration': { title: 'Robotics Integration', text: 'Deployment of robotic arms and AGVs to optimize production lines.' },
  'custom-software-iot': { title: 'Custom Software & IoT', text: 'Real-time monitoring dashboards and Industrial IoT solutions.' },

  // Expertise
  'rubber-mixing-automation': { title: 'Rubber Mixing Automation', text: 'Automation of rubber mixing processes for consistent batches, recipe control and reduced wastage.' },
  'leak-testing': { title: 'Leak Testing', text: 'Precision leak testing machines for quality assurance in manufacturing.' },
  'plastic-welding': { title: 'Plastic Welding', text: 'Plastic welding machines and automation for strong, repeatable joints.' },
  'vision-inspection-machine': { title: 'Vision Inspection Machine', text: 'Camera-based inspection systems that detect defects and verify parts in real time.' },
  'industrial-control-solutions': { title: 'Industrial Control Solutions', text: 'Reliable control systems tailored to your plant and process requirements.' },
  'thermoforming-machine': { title: 'Thermoforming Machine', text: 'Thermoforming machines and controls for efficient plastic sheet forming.' },

  // Company
  'our-company': { title: 'Our Company', text: 'Trinova Tech Solution delivers industrial automation and IT services for modern manufacturers.' },
  'vision': { title: 'Vision', text: 'To be a trusted partner in industrial innovation and smart manufacturing.' },
  'mission': { title: 'Mission', text: 'To deliver reliable, high-quality automation solutions that improve our clients\' productivity.' },
  'technology-infrastructure': { title: 'Technology & Infrastructure', text: 'Our tools, facilities and technology stack that support design, build and testing.' },
  'quality-policy-certification': { title: 'Quality Policy & Certification', text: 'Our commitment to quality standards and the certifications we hold.' },
}

export default function DetailPage() {
  const { slug } = useParams()
  const page = content[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!page) {
    return (
      <section style={{ padding: '120px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2>Page not found</h2>
        <Link to="/">← Back to Home</Link>
      </section>
    )
  }

  return (
    <section style={{ padding: '120px 24px', maxWidth: 900, margin: '0 auto' }}>
      <h1>{page.title}</h1>
      <p>{page.text}</p>
      <Link to="/">← Back to Home</Link>
    </section>
  )
}
