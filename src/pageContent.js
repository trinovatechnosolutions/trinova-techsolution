// Single source of truth for site content (taken from the client brochure, 2026).
// Menu, home sections, footer and detail pages are all generated from this file.
// Images: add src/assets/pages/<slug>.jpg (or .png/.webp) and it shows on that page automatically.

export const site = {
  name: 'Trinova Technosolutions',
  tagline: 'Future of Industrial Automation',
  slogan: 'Engineering Innovation. Automating Possibilities.',
  email: 'info@trinovatechnosolutions.com',
  phone: '+91 9970212022',
  location: 'Apostrophe Next, Datta Mandir Road, Pune-411057, Maharashtra, India',
  // Paste your Formspree endpoint here (https://formspree.io/f/xxxxxxxx) to send real emails.
  // While empty, the form falls back to opening the visitor's email app.
  formEndpoint: '',
  // website and registered office are blank in the brochure: add them here when the client confirms
}

const industry = (slug, label) => ({
  slug,
  label,
  text: `Integrated automation, software, electrical engineering and documentation solutions for the ${label.toLowerCase()} sector.`,
  pointsTitle: 'How we can help',
  points: ['Industrial automation', 'Electrical engineering', 'Digital solutions', 'Documentation'],
})

export const sections = [
  {
    title: 'Capabilities',
    base: '/capabilities',
    items: [
      { slug: 'plc-control', label: 'PLC & Control', text: 'PLC programming, sequencing, integration and diagnostics for industrial machines and processes.', pointsTitle: 'Scope', points: ['PLC programming', 'Sequencing', 'Integration', 'Diagnostics'] },
      { slug: 'hmi-scada', label: 'HMI & SCADA', text: 'Operator-focused visualisation, alarms, monitoring and supervisory control for equipment and processes.', pointsTitle: 'Scope', points: ['Visualisation', 'Alarms', 'Monitoring', 'Supervisory control'] },
      {
        slug: 'automation-software',
        label: 'Automation Software',
        text: 'Beyond control logic, we build software that turns industrial data into useful operational information. Our solutions can support data acquisition, process monitoring, reporting, remote visibility and digitalisation.',
        pointsTitle: 'What we build',
        points: [
          { t: 'LabVIEW', d: 'Custom industrial applications, data acquisition and engineering workflows.' },
          { t: 'SCADA', d: 'Supervisory monitoring, alarms, visualisation and process information.' },
          { t: 'HMI', d: 'Operator-focused interfaces for equipment status, control and diagnostics.' },
          { t: 'Data & Reporting', d: 'Process information, customised reporting and operational visibility.' },
          { t: 'Cloud Monitoring', d: 'Remote monitoring concepts for connected industrial assets.' },
          { t: 'IIoT Integration', d: 'Industrial connectivity and digitalisation for connected operations.' },
        ],
      },
      { slug: 'iiot-digital', label: 'IIoT & Digital', text: 'Connected systems, cloud monitoring and industrial data for connected operations.', pointsTitle: 'Scope', points: ['Connected systems', 'Cloud monitoring', 'Industrial data'] },
      { slug: 'electrical-engineering', label: 'Electrical Engineering', text: 'Electrical engineering for industrial automation, from control panels and MCC to field wiring and retrofits.', pointsTitle: 'Scope', points: ['Control panels', 'MCC', 'Field wiring', 'Retrofits'] },
      { slug: 'commissioning', label: 'Commissioning', text: 'Commissioning support from testing and start-up through troubleshooting and site support.', pointsTitle: 'Scope', points: ['Testing', 'Start-up', 'Troubleshooting', 'Site support'] },
    ],
  },
  {
    title: 'Services',
    base: '/services',
    items: [
      { slug: 'industrial-automation', label: 'Industrial Automation', text: 'Industrial automation services from PLC programming and integration to control-system upgrades and diagnostics.', pointsTitle: 'Delivery scope', points: ['PLC programming and integration', 'HMI', 'SCADA', 'Control-system upgrades', 'Commissioning', 'Diagnostics'] },
      { slug: 'electrical-engineering', label: 'Electrical Engineering', text: 'Control-system design and electrical build, from panels to field wiring and start-up.', pointsTitle: 'Delivery scope', points: ['Control-system design', 'PLC / MCC / control panels', 'Panel assembly', 'Field wiring', 'Start-up'] },
      { slug: 'digital-solutions', label: 'Digital Solutions', text: 'Digital solutions that turn plant data into operational visibility.', pointsTitle: 'Delivery scope', points: ['LabVIEW', 'Data acquisition', 'IIoT', 'Cloud monitoring', 'Analytics', 'Customised reporting'] },
      { slug: 'documentation', label: 'Documentation', text: 'Technical documentation that supports design, validation, operation and handover.', pointsTitle: 'Delivery scope', points: ['FDS', 'DDS', 'Electrical drawings', 'O&M manuals', 'Validation documents', 'As-built records'] },
    ],
  },
  {
    title: 'Industries',
    base: '/industries',
    items: [
      industry('automotive', 'Automotive'),
      industry('pharmaceutical', 'Pharmaceutical'),
      industry('oil-gas', 'Oil & Gas'),
      industry('water-wastewater', 'Water & Wastewater'),
      industry('brewery-beverage', 'Brewery & Beverage'),
      industry('general-manufacturing', 'General Manufacturing'),
    ],
  },
  {
    title: 'Company',
    base: '/company',
    items: [
      {
        slug: 'who-we-are',
        label: 'Who We Are',
        text: 'Trinova Technosolutions is a technology-driven industrial automation and engineering company established in 2026. We deliver integrated automation, electrical engineering, automation software, industrial digitalisation, cloud-based monitoring and technical documentation solutions.',
        extra: 'Our focus is simple: understand the industrial challenge, engineer the right solution, integrate it effectively and support the system throughout its lifecycle.',
        pointsTitle: 'Our approach',
        points: ['Understand', 'Engineer', 'Integrate', 'Support'],
      },
      {
        slug: 'why-trinova',
        label: 'Why Trinova',
        text: 'One engineering partner for automation, software, electrical engineering and documentation.',
        pointsTitle: 'What sets us apart',
        points: [
          { t: 'One Engineering Partner', d: 'Automation, software, electrical engineering and documentation integrated under one roof.' },
          { t: 'Industrial + Software Mindset', d: 'We connect plant-floor automation with data, applications and digital visibility.' },
          { t: 'Project Lifecycle Support', d: 'From requirements and engineering to testing, commissioning and handover.' },
          { t: 'Reliability by Design', d: 'Focus on maintainability, diagnostics, safety and dependable operation.' },
          { t: 'Scalable Architecture', d: 'Solutions designed for current requirements with future expansion in mind.' },
          { t: 'Responsive Support', d: 'Practical technical support for project, site and operational requirements.' },
        ],
      },
      {
        slug: 'project-delivery',
        label: 'Project Delivery',
        text: 'A clear six-stage path from the first requirement to long-term lifecycle support.',
        pointsTitle: 'Delivery stages',
        points: ['Requirement Understanding', 'System & Software Engineering', 'Integration & Testing', 'Commissioning & Start-Up', 'Documentation & Handover', 'Lifecycle Support & Upgrades'],
      },
      {
        slug: 'our-commitment',
        label: 'Our Commitment',
        text: 'We are committed to delivering innovative, dependable and cost-effective engineering solutions that enhance productivity, product quality, workplace safety and operational efficiency.',
        pointsTitle: 'Our values',
        points: ['Reliable', 'Responsive', 'Scalable', 'Practical'],
      },
    ],
  },
]

export const getSection = (base) => sections.find((s) => s.base === base)
export const getPage = (section, slug) =>
  getSection(`/${section}`)?.items.find((i) => i.slug === slug)
