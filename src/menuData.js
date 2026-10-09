// Navigation menu, generated from pageContent.js (edit content there).
import { sections } from './pageContent'

export const menu = sections.map(({ title, base, items }) => ({
  title,
  base,
  items: items.map(({ slug, label }) => ({ slug, label })),
}))
