'use client'

import { motion } from 'framer-motion'
import { Award, Code2, GraduationCap, Users } from 'lucide-react'

const achievements = [
  {
    icon: GraduationCap,
    title: 'ML Training',
    subtitle: 'Certificate',
    description: 'Completed comprehensive Machine Learning training program',
    color: 'from-primary to-blue-500',
  },
  {
    icon: Code2,
    title: '6+',
    subtitle: 'Projects Built',
    description: 'Successfully delivered projects in web development and AI/ML',
    color: 'from-secondary to-purple-500',
  },
  {
    icon: Users,
    title: '2',
    subtitle: 'Internships',
    description: 'Professional experience at Prodesk and MIT Trainers',
    color: 'from-accent to-cyan-500',
  },
  {
    icon: Award,
    title: 'AI/ML',
    subtitle: 'Focus Area',
    description: 'Deep expertise in TensorFlow, Keras, and Scikit-learn',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer transition-all hover:glow-primary"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.color} p-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-400 mb-2">{item.subtitle}</p>

              {/* Description */}
              <p className="text-xs text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center gradient-text">More Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Proficient in version control with Git',
              'Experience with Docker containerization',
              'Built CNN models for image classification',
              'Implemented RESTful APIs',
              'Familiar with cloud platforms (Vercel, AWS)',
              'Strong problem-solving skills',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
