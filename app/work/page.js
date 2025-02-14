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
          <section className="px-12 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h1 className="text-[4rem] text-orange-600 mb-4" style={{ fontFamily: 'vercetti, sans-serif' }}>
                projects
              </h1>
              <p className="text-gray-600 text-lg mb-16">
                projects, from personal and studies
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={project.href}>
                    <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-gray-100 rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-1 text-orange-600">{project.title}</h3>
                    <div className="flex justify-between text-gray-600">
                      <span>{project.category}</span>
                      <span>{project.type}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </AnimatePresence>
    </main>
  )
}
