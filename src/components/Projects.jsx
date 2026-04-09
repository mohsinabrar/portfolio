import { motion } from 'framer-motion'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'CIFAR-10 Image Classification',
      description: 'Built a CNN deep learning model for 10-class image classification on 60,000 images with data preprocessing, batch normalization, and dropout techniques. Achieved 75%+ validation accuracy.',
      tags: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'CNN'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a fully responsive e-commerce platform featuring product listing with filters, shopping cart functionality, and multi-step checkout process. Optimized UX with clean navigation.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-Commerce'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
    {
      title: 'House Price Prediction Model',
      description: 'Trained a machine learning regression model with advanced feature engineering and cross-validation techniques. Achieved R-squared score of 0.82 on housing dataset with comprehensive data preprocessing.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'ML'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
    {
      title: 'Hotel Management Website',
      description: 'Designed an interactive hotel booking interface with real-time room availability, dynamic pricing display, and streamlined reservation flow. Reduced booking steps by 30% with intuitive navigation.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Booking System'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
    {
      title: 'Medicine Information Portal',
      description: 'Built a structured medical database portal for browsing and managing medicine information with comprehensive details, organized by categories. Clean UI with efficient search and navigation.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Database', 'Web Portal'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
    {
      title: 'Bridal Website',
      description: 'Shipped a fully responsive bridal showcase frontend in under 48 hours using AI-assisted development tools. Demonstrated 3x faster delivery compared to traditional workflow using Cursor AI and Lovable.',
      tags: ['Cursor AI', 'Lovable', 'HTML5', 'CSS3', 'AI Development'],
      link: 'https://github.com/mohsinabrar',
      year: '2024',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.year && <span className="project-year">{project.year}</span>}
              </div>

              <motion.a
                href={project.link}
                className="project-link"
                whileHover={{ x: 5 }}
                whileTap={{ x: 0 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
