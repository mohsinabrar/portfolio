'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Loader2, Layers } from 'lucide-react'
import { Github } from './SocialIcons'
import { getGithubRepos } from '@/lib/github'

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  language: string
}

const fallbackProjects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with cart functionality, payment integration, and admin dashboard.',
    html_url: 'https://github.com/mohsinabrar/ecommerce',
    homepage: 'https://ecommerce-demo.vercel.app',
    topics: ['react', 'node.js', 'mongodb'],
    language: 'JavaScript',
  },
  {
    id: 2,
    name: 'Hotel Management Website',
    description: 'Comprehensive hotel management system with booking, room allocation, and billing features.',
    html_url: 'https://github.com/mohsinabrar/hotel-management',
    homepage: null,
    topics: ['html', 'css', 'javascript'],
    language: 'JavaScript',
  },
  {
    id: 3,
    name: 'CIFAR-10 Image Classifier',
    description: 'Deep learning CNN model for image classification on CIFAR-10 dataset with 85% accuracy.',
    html_url: 'https://github.com/mohsinabrar/cifar10-classifier',
    homepage: null,
    topics: ['tensorflow', 'keras', 'cnn'],
    language: 'Python',
  },
  {
    id: 4,
    name: 'House Price Prediction',
    description: 'Machine learning model to predict house prices using regression algorithms.',
    html_url: 'https://github.com/mohsinabrar/house-price-prediction',
    homepage: 'https://house-price-ml.vercel.app',
    topics: ['scikit-learn', 'pandas', 'flask'],
    language: 'Python',
  },
  {
    id: 5,
    name: 'Medicine Info Website',
    description: 'Web application providing detailed information about medicines, interactions, and side effects.',
    html_url: 'https://github.com/mohsinabrar/medicine-info',
    homepage: 'https://medicine-info.vercel.app',
    topics: ['react', 'api', 'node.js'],
    language: 'JavaScript',
  },
  {
    id: 6,
    name: 'Bridal Website',
    description: 'Beautiful wedding website with RSVP, gallery, and event scheduling features.',
    html_url: 'https://github.com/mohsinabrar/bridal-website',
    homepage: 'https://wedding-demo.vercel.app',
    topics: ['next.js', 'tailwind', 'animations'],
    language: 'TypeScript',
  },
]

const projectKeywords = ['ecommerce', 'hotel', 'cifar', 'house', 'medicine', 'bridal', 'wedding']

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const repos = await getGithubRepos('mohsinabrar')

        if (repos.length === 0) {
          setProjects(fallbackProjects)
          setLoading(false)
          return
        }

        // Filter repos that match our project keywords
        const filtered = repos.filter((repo: any) =>
          projectKeywords.some((keyword) =>
            repo.name.toLowerCase().includes(keyword) ||
            repo.description?.toLowerCase().includes(keyword)
          )
        )

        // If we found matching repos from GitHub, use them
        // Otherwise fall back to static data
        if (filtered.length >= 3) {
          setProjects(filtered.slice(0, 6))
        } else {
          setProjects(fallbackProjects)
        }
      } catch (err) {
        setProjects(fallbackProjects)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and AI/ML
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-gray-400">Loading projects from GitHub...</span>
          </div>
        )}

        {/* Error Banner (using fallback) */}
        {error && !loading && (
          <div className="text-center mb-8">
            <span className="px-4 py-2 glass rounded-full text-sm text-gray-400">
              Showing curated projects
            </span>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer transition-all hover:glow-primary"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description || 'A showcase project demonstrating modern development practices.'}
                  </p>

                  {/* Topics/Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.topics || []).slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs glass rounded-md text-gray-300"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.language && (
                      <span className="px-2 py-1 text-xs glass rounded-md text-gray-300">
                        {project.language}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        )}

        {/* View More */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mohsinabrar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all border border-white/20"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
