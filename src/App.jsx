import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scene3D from './components/Scene3D'
import ThemeSwitcher from './components/ThemeSwitcher'

function AppContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#0a0a0f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: 60,
                height: 60,
                background: 'linear-gradient(135deg, #00f5d4, #00bbf9)',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Scene3D />
        <Header />
        <main style={{ position: 'relative', zIndex: 2 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer style={{ position: 'relative', zIndex: 3 }} />
      </div>

      <ThemeSwitcher />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
