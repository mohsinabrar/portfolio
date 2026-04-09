import { useState } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="header glass">
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Portfolio</span>
          </motion.div>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <motion.nav
            className={`nav ${isOpen ? 'active' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                className="nav-link"
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </header>
  )
}
