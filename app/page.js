'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Link from 'next/link'
import Image from 'next/image'
import Loader from './components/loader'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Show loader for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <AnimatePresence>
        {isLoaded && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 text-xl mb-4"
                  >
                    Hello, I'm
                  </motion.h2>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[5rem] text-orange-600 leading-tight"
                    style={{ fontFamily: 'vercetti, sans-serif' }}
                  >
                    axel lussert
                  </motion.h1>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6"
                >
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A passionate developer and student in BTS SIO SLAM, 
                    focused on creating elegant solutions through code.
                  </p>
                  <div className="flex space-x-6">
                    <Link 
                      href="/work"
                      className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                      View My Work
                    </Link>
                    <Link 
                      href="/letstalk"
                      className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Let's Talk
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image/Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-orange-200 rounded-3xl transform -rotate-6"></div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/img/profile.jpg" // Add your profile image
                      alt="Axel Lussert"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-8">Technologies I Work With</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['React', 'Next.js', 'JavaScript', 'Python', 'Java', 'SQL', 'Git', 'Tailwind CSS'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-orange-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="text-gray-700">{skill}</p>
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
