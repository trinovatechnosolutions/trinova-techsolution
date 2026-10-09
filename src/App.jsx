import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ScrollManager, ScrollUI } from './components/ScrollUI'
import Home from './pages/Home'

// Code-splitting: these pages are downloaded only when first visited
const DetailPage = lazy(() => import('./pages/DetailPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollManager />
      <ScrollUI />
      <Header />
      <main key={location.pathname} className="page-fade">
        <Suspense fallback={<div className="loader" role="status" aria-label="Loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:section/:slug" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
