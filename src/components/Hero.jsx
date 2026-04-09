import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './Hero.css'

export default function Hero() {
  const { textOptions, currentTextOption } = useTheme()
  const textContent = textOptions[currentTextOption]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{textContent.heading}</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-subtitle">
            {textContent.subheading}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="hero-buttons"
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-scroll"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="scroll-icon">
              <span />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
