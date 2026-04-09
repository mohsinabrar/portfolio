import { motion } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C', 'HTML5', 'CSS3'] },
    { category: 'Web Development', items: ['React', 'Node.js', 'Express.js', 'REST APIs', 'Bootstrap', 'Responsive Design'] },
    { category: 'Machine Learning & AI', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'CNN', 'LangChain'] },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'VS Code', 'Cursor AI'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Skills & Tools</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              className="skill-card glass"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 245, 212, 0.2)' }}
              custom={idx}
            >
              <h3 className="skill-category gradient-text">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
