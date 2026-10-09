import React from 'react'

export const Icon = ({ children, className = 'icon', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {children}
  </svg>
)

export const CheckIcon = () => (
  <Icon><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.4 2.4L16 10" /></Icon>
)
export const ArrowIcon = () => (<Icon><path d="M5 12h14M13 6l6 6-6 6" /></Icon>)
export const ChevronDown = () => (<Icon className="icon caret"><path d="M6 9l6 6 6-6" /></Icon>)
export const SunIcon = () => (
  <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>
)
export const MoonIcon = () => (<Icon><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></Icon>)
export const MenuIcon = () => (<Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>)
export const CloseIcon = () => (<Icon><path d="M6 6l12 12M18 6L6 18" /></Icon>)
export const UpIcon = () => (<Icon><path d="M12 19V5M6 11l6-6 6 6" /></Icon>)
export const PinIcon = () => (
  <Icon><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></Icon>
)
export const MailIcon = () => (<Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icon>)
export const PhoneIcon = () => (
  <Icon><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L7.9 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.9 2.2z" /></Icon>
)
export const ChipIcon = () => (
  <Icon><rect x="8" y="8" width="8" height="8" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></Icon>
)
export const PanelIcon = () => (
  <Icon><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M5 8v3a2 2 0 002 2h3M19 8v3a2 2 0 01-2 2h-3M12 13v3" /></Icon>
)
export const RobotIcon = () => (
  <Icon><rect x="5" y="9" width="14" height="11" rx="2" /><path d="M9 9V6a3 3 0 116 0v3M9 14h.01M15 14h.01" /></Icon>
)
export const CodeIcon = () => (<Icon><path d="M8 6L2 12l6 6M16 6l6 6-6 6M13 4l-2 16" /></Icon>)
export const MonitorIcon = () => (<Icon><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></Icon>)
export const CloudIcon = () => (<Icon><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18H7z" /></Icon>)
export const BoltIcon = () => (<Icon><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></Icon>)
export const WrenchIcon = () => (<Icon><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" /></Icon>)
export const DocIcon = () => (<Icon><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></Icon>)
