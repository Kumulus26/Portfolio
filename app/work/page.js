'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Work() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Weather Website",
      category: "Web App", 
      type: "Personal Project",
      image: "/img/projet1meteo.png",
      href: "https://github.com/Kumulus26/Weather",
      target: '_blank'
    },
    {
      id: 2,
      title: "SQL Twitch Database",
      category: "Database",
      type: "TD", 
      image: "/img/bdd.png",
      href: "https://github.com/Kumulus26/BDD_Twitch.git",
      target: '_blank'
    },
    {
      id: 3,
      title: "Cigarette Calculator",
      category: "Web App",
      type: "Personal",
      image: "/img/calculator.png", 
      href: "https://github.com/Kumulus26/Website-Cigarette.git",
      target: '_blank'
    },
    {
      id: 4,
      title: "DevAtHome",
      category: "Web App",
      type: "Personal Project",
      image: "/img/image.png",
      href: "https://dev-at-home.vercel.app",
      target: '_blank'
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <AnimatePresence>
        {isLoaded && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h1 className="text-[5rem] text-orange-600 mb-6 leading-tight" style={{ fontFamily: 'vercetti, sans-serif' }}>
                my projects
              </h1>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                A collection of my personal and academic projects
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={project.href} target={project.target}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                            {project.title}
                          </h3>
                          <div className="flex justify-between text-gray-600">
                            <span className="flex items-center">
                              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                              {project.category}
                            </span>
                            <span className="text-gray-500">{project.type}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
