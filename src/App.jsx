import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AreasAtuacao from './pages/AreasAtuacao'
import QuemSomos from './pages/QuemSomos'
import Unidades from './pages/Unidades'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Services />
            <Contact />
          </motion.div>
        } />
        <Route path="/areas-atuacao" element={<AreasAtuacao />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}