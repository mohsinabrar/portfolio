import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer({ style }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" style={style}>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="gradient-text">Mohd Mohsin</h3>
              <p className="footer-description">
                B.Tech CSE Student | Web Developer | ML & AI Enthusiast. Building innovative solutions with modern technologies.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                  {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li>
                    <a href="mailto:mohdmohsinabrar6@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="https://github.com/mohsinabrar" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li>
                    <a href="tel:7652061770">Call</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} Mohd Mohsin. All rights reserved.</p>
            <p className="footer-credit">
              Built with <span className="gradient-text">React</span>, <span className="gradient-text">Vite</span> & <span className="gradient-text">Framer Motion</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
