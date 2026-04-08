'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Prodesk',
    duration: '2024 · 1 Month · Remote',
    location: 'Remote',
    description: 'Developed backend fundamentals including API handling, routing, and server-side logic using Node.js and Express.js.',
    highlights: [
      'Automated repetitive internal data workflows using n8n, reducing manual effort by ~40%',
      'Worked on real-world debugging and backend improvements',
      'Enhanced code maintainability across service modules',
    ],
    color: 'from-primary to-blue-500',
  },
  {
    title: 'Machine Learning Intern',
    company: 'MIT Trainers (College Program)',
    duration: '2024 · Certificate',
    location: 'Remote',
    description: 'Completed hands-on ML training covering model building, data preprocessing, and evaluation techniques.',
    highlights: [
      'Built a CNN image classifier on CIFAR-10 achieving 75%+ validation accuracy',
      'Applied preprocessing, batch normalization, and dropout techniques',
      'Gained exposure to real-world AI/ML workflows including cross-validation',
    ],
    color: 'from-secondary to-purple-500',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary glow-primary" />

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 transition-all hover:glow-primary">
                    {/* Header */}
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-4 text-gray-400 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm text-gray-300 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
