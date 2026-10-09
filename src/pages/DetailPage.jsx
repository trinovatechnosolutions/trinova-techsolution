import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPage, getSection } from '../pageContent'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import { ArrowIcon, CheckIcon } from '../components/Icons'

// Picks up every image in src/assets/pages automatically (named <slug>.jpg|png|webp)
const images = import.meta.glob('../assets/pages/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const getImage = (slug) => Object.entries(images).find(([path]) => path.includes(`/${slug}.`))?.[1]

export default function DetailPage() {
  const { section, slug } = useParams()
  const group = getSection(`/${section}`)
  const page = getPage(section, slug)
  if (!page || !group) return <NotFound />

  const image = getImage(slug)
  const related = group.items.filter((i) => i.slug !== slug)
  const detailed = page.points?.some((p) => typeof p === 'object')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>{group.title}</span> <span>/</span> <strong>{page.label}</strong>
          </nav>
          <h1>{page.label}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="detail">
        <div className="container detail-grid">
          <Reveal className="detail-main">
            {image && <img className="detail-img" src={image} alt={page.label} />}
            {page.extra && <p className="lead">{page.extra}</p>}
            {page.points && (
              <>
                <h2>{page.pointsTitle || 'Overview'}</h2>
                {detailed ? (
                  <ul className="detail-points">
                    {page.points.map((p) => (
                      <li key={p.t}><CheckIcon /><div><strong>{p.t}</strong><span>{p.d}</span></div></li>
                    ))}
                  </ul>
                ) : (
                  <ul className="check-list">
                    {page.points.map((p) => (
                      <li key={p}><CheckIcon /> {p}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
            <Link to="/" state={{ scrollTo: 'contact' }} className="btn btn-primary">
              Request a Quote <ArrowIcon />
            </Link>
          </Reveal>

          <Reveal as="aside" className="detail-aside" delay={120}>
            <h3>More in {group.title}</h3>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={`${group.base}/${item.slug}`}>{item.label} <ArrowIcon /></Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
