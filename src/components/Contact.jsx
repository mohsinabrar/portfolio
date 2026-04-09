import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <div className="contact-links">
              {[
                { label: 'Email', value: 'mohdmohsinabrar6@gmail.com', href: 'mailto:mohdmohsinabrar6@gmail.com' },
                { label: 'Phone', value: '7652061770', href: 'tel:7652061770' },
                { label: 'GitHub', value: 'github.com/mohsinabrar', href: 'https://github.com/mohsinabrar' },
              ].map((link) => (
                <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="link-label">{link.label}</span>
                  <span className="link-value">{link.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="contact-form glass" variants={itemVariants}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            {isSubmitted && (
              <motion.p className="form-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
