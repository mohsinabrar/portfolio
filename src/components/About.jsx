import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './About.css'

export default function About() {
  const { textOptions, currentTextOption } = useTheme()
  const textContent = textOptions[currentTextOption]

  const aboutVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              {textContent.about}
            </p>
            <p>
              I'm a B.Tech Computer Science student (2026, AKTU) passionate about building innovative solutions with technology. 
              I have hands-on experience in web development, machine learning, and AI tools. With internship experience at Prodesk and MIT Trainers, I've developed expertise in backend development, API design, and ML model building.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {[
              { label: 'Projects Completed', value: '6+' },
              { label: 'Internships Done', value: '2' },
              { label: 'Skills Mastered', value: '20+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat glass"
                custom={i}
                variants={aboutVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
