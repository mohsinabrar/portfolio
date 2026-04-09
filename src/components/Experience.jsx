import { motion } from 'framer-motion'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      role: 'Backend Developer Intern',
      company: 'Prodesk',
      period: '2024 · 1 Month',
      description: 'Developed backend fundamentals including API handling, routing, and server-side logic using Node.js and Express.js. Automated internal workflows using n8n, reducing manual effort by ~40%.',
    },
    {
      role: 'Machine Learning Intern',
      company: 'MIT Trainers (College Program)',
      period: '2024',
      description: 'Completed hands-on ML training covering model building, data preprocessing, and evaluation. Built a CNN image classifier on CIFAR-10 achieving 75%+ validation accuracy using Keras and TensorFlow.',
    },
    {
      role: 'B.Tech CSE Student',
      company: 'AKTU, Lucknow',
      period: '2022 - 2026',
      description: 'Pursuing Computer Science & Engineering with focus on web development, machine learning, and AI applications. Developed 6+ real-world projects across different domains.',
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              className="experience-item"
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-marker" />
              <div className="experience-content glass">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
