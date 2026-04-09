import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './ThemeSwitcher.css'

export default function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme, themes, currentTypography, setCurrentTypography, typographies } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('color')

  const themeList = Object.entries(themes)
  const typographyList = Object.entries(typographies)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: 10,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
    },
  }

  return (
    <div className="theme-switcher-container">
      <motion.button
        className="theme-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Toggle Theme & Typography"
      >
        <span className="theme-button-icon">🎨</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="theme-menu-tabs">
              <button
                className={`tab-button ${activeTab === 'color' ? 'active' : ''}`}
                onClick={() => setActiveTab('color')}
              >
                🎨 Colors
              </button>
              <button
                className={`tab-button ${activeTab === 'text' ? 'active' : ''}`}
                onClick={() => setActiveTab('text')}
              >
                ✍️ Text
              </button>
            </div>

            {activeTab === 'color' && (
              <div className="theme-menu-content">
                <div className="theme-menu-header">
                  <span className="theme-menu-title">Color Themes</span>
                </div>

                <div className="theme-options">
                  {themeList.map(([key, theme]) => (
                    <motion.button
                      key={key}
                      className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentTheme(key)
                        setIsOpen(false)
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      title={theme.name}
                    >
                      <div className="theme-preview">
                        <div className="theme-color" style={{ backgroundColor: theme.cyan }} />
                        <div className="theme-color" style={{ backgroundColor: theme.blue }} />
                        <div className="theme-color" style={{ backgroundColor: theme.purple }} />
                      </div>
                      <span className="theme-name">{theme.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'text' && (
              <div className="theme-menu-content">
                <div className="theme-menu-header">
                  <span className="theme-menu-title">Text Styles</span>
                </div>

                <div className="typography-options">
                  {typographyList.map(([key, typography]) => (
                    <motion.button
                      key={key}
                      className={`typography-option ${currentTypography === key ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentTypography(key)
                        setIsOpen(false)
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      title={typography.name}
                    >
                      <span className="typography-preview" style={{ fontFamily: typography.family }}>
                        Ag
                      </span>
                      <span className="typography-name">{typography.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
