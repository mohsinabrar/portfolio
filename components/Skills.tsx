'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 75 },
      { name: 'Java', level: 70 },
    ],
    color: 'from-primary to-blue-500',
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'React.js', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
    color: 'from-secondary to-purple-500',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 75 },
      { name: 'APIs', level: 80 },
      { name: 'REST Services', level: 78 },
    ],
    color: 'from-accent to-cyan-500',
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'TensorFlow', level: 80 },
      { name: 'Keras', level: 78 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'Deep Learning', level: 75 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel', level: 80 },
      { name: 'VS Code', level: 92 },
    ],
    color: 'from-orange-500 to-amber-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My toolkit includes a diverse range of technologies for building complete solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 transition-all hover:glow-primary"
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} progress-glow`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Next.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Figma', 'Linux'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-white transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
