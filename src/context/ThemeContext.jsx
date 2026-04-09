import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const themes = {
  dark: {
    name: 'Dark',
    cyan: '#00f5d4',
    blue: '#00bbf9',
    purple: '#9b5de5',
    pink: '#f15bb5',
    yellow: '#fee440',
    bgDark: '#0a0a0f',
    bgCard: 'rgba(255, 255, 255, 0.03)',
    textPrimary: '#ffffff',
    textSecondary: '#8b8b9b',
  },
  neon: {
    name: 'Neon',
    cyan: '#00ff88',
    blue: '#00d9ff',
    purple: '#ff006e',
    pink: '#fb5607',
    yellow: '#ffbe0b',
    bgDark: '#0a0a15',
    bgCard: 'rgba(0, 255, 136, 0.05)',
    textPrimary: '#ffffff',
    textSecondary: '#a0a0b0',
  },
  ocean: {
    name: 'Ocean',
    cyan: '#0ee7b7',
    blue: '#00d4ff',
    purple: '#1a4d7d',
    pink: '#00c9a7',
    yellow: '#5de8e9',
    bgDark: '#081d2b',
    bgCard: 'rgba(0, 200, 255, 0.05)',
    textPrimary: '#e0f7ff',
    textSecondary: '#7eb3cc',
  },
  sunset: {
    name: 'Sunset',
    cyan: '#ff6b6b',
    blue: '#ff8c42',
    purple: '#ffa500',
    pink: '#ff69b4',
    yellow: '#ffd700',
    bgDark: '#1a0f0f',
    bgCard: 'rgba(255, 100, 100, 0.05)',
    textPrimary: '#ffe4e1',
    textSecondary: '#daa520',
  },
  forest: {
    name: 'Forest',
    cyan: '#2ecc71',
    blue: '#3498db',
    purple: '#9b59b6',
    pink: '#1abc9c',
    yellow: '#f39c12',
    bgDark: '#0d1b0f',
    bgCard: 'rgba(46, 204, 113, 0.05)',
    textPrimary: '#ecf0f1',
    textSecondary: '#95a5a6',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    cyan: '#00ff41',
    blue: '#0080ff',
    purple: '#ff006e',
    pink: '#ff10f0',
    yellow: '#ffff00',
    bgDark: '#0d0221',
    bgCard: 'rgba(0, 255, 65, 0.08)',
    textPrimary: '#e0ff00',
    textSecondary: '#ff006e',
  },
}

const typographies = {
  modern: {
    name: 'Modern',
    family: "'Space Grotesk', 'Segoe UI', sans-serif",
    code: 'Modern',
  },
  elegant: {
    name: 'Elegant',
    family: "'Playfair Display', 'Georgia', serif",
    code: 'Elegant',
  },
  geometric: {
    name: 'Geometric',
    family: "'Inter', 'Helvetica Neue', sans-serif",
    code: 'Geometric',
  },
  monospace: {
    name: 'Monospace',
    family: "'JetBrains Mono', 'Courier New', monospace",
    code: 'Monospace',
  },
  tech: {
    name: 'Tech',
    family: "'IBM Plex Mono', 'Inconsolata', monospace",
    code: 'Tech',
  },
}

const textOptions = {
  casual: {
    name: 'Casual',
    heading: 'Your Name',
    subheading: 'Full-stack developer & ML enthusiast',
    about: 'Passionate about creating innovative solutions',
  },
  professional: {
    name: 'Professional',
    heading: 'Mohd Mohsin',
    subheading: 'B.Tech CSE | Web Developer | AI & ML Specialist',
    about: 'Dedicated to delivering excellence through technology',
  },
  creative: {
    name: 'Creative',
    heading: '[ Mohd Mohsin ]',
    subheading: '✨ Crafting digital experiences with code & creativity',
    about: 'Building the future, one project at a time',
  },
  minimal: {
    name: 'Minimal',
    heading: 'mohd mohsin',
    subheading: 'developer',
    about: 'Creating with code',
  },
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [currentTypography, setCurrentTypography] = useState('modern')
  const [currentTextOption, setCurrentTextOption] = useState('professional')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme')
    const savedTypography = localStorage.getItem('portfolioTypography')
    const savedTextOption = localStorage.getItem('portfolioTextOption')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
    if (savedTypography && typographies[savedTypography]) {
      setCurrentTypography(savedTypography)
    }
    if (savedTextOption && textOptions[savedTextOption]) {
      setCurrentTextOption(savedTextOption)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolioTheme', currentTheme)
    localStorage.setItem('portfolioTypography', currentTypography)
    localStorage.setItem('portfolioTextOption', currentTextOption)
    applyTheme(currentTheme)
    applyTypography(currentTypography)
  }, [currentTheme, currentTypography, currentTextOption])

  const applyTheme = (themeName) => {
    const theme = themes[themeName]
    const root = document.documentElement
    
    Object.entries(theme).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      root.style.setProperty(cssVarName, value)
    })
  }

  const applyTypography = (typographyName) => {
    const typography = typographies[typographyName]
    const root = document.documentElement
    root.style.setProperty('--font-family', typography.family)
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        currentTheme, 
        setCurrentTheme, 
        themes, 
        applyTheme,
        currentTypography,
        setCurrentTypography,
        typographies,
        applyTypography,
        currentTextOption,
        setCurrentTextOption,
        textOptions,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
