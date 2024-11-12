'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Weather Website",
      category: "Web App",
      type: "Personnel",
      image: "/img/projet1meteo.png",
      href: "https://github.com/Kumulus26/Weather",
    },
    {
      id: 2,
      title: "Projet 2",
      category: "Site Web",
      type: "Client",
      image: "/img/projects/projet2.jpg",
      href: "/projects/projet2"
    },
    {
      id: 3,
      title: "Projet 3",
      category: "Application",
      type: "Personnel",
      image: "/img/projects/projet3.jpg",
      href: "/projects/projet3"
    },
    {
      id: 4,
      title: "Projet 4",
      category: "Web App",
      type: "Client",
      image: "/img/projects/projet4.jpg",
      href: "/projects/projet4"
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
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
            projects, from personal and clients
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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

      {/* Dark/Light Mode Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 left-8 p-2 rounded-full bg-gray-100"
        aria-label="Toggle dark mode"
      >
        🌙
      </motion.button>

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 right-8 text-2xl"
        aria-label="Close"
      >
        ✕
      </motion.button>
    </main>
  )
}
