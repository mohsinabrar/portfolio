'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Zap, Award } from 'lucide-react'

const stats = [
  { icon: Code2, label: 'Projects Built', value: '6+' },
  { icon: Zap, label: 'Tech Stack', value: 'Full' },
  { icon: Brain, label: 'Internships', value: '2' },
  { icon: Award, label: 'ML Training', value: 'MIT' },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Web Developer & AI/ML Enthusiast
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I&apos;m Mohd Mohsin, a B.Tech Computer Science student at Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow,
                passionate about building web applications and exploring AI tools to create useful applications.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I have worked on projects in web development and machine learning, with expertise in JavaScript, Python, Node.js, and Express.js.
                I enjoy the challenge of solving real-world problems and continuously improving my skills through hands-on, practical work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me building projects, exploring new
                development tools, or improving my problem-solving skills through coding challenges.
              </p>

              {/* Key Points */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-300">Problem Solving</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-gray-300">Fast Learner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-gray-300">Adaptability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-300">AI/ML Interest</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center cursor-pointer transition-all hover:glow-primary"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
