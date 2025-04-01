'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import { useState, useEffect } from 'react'

export default function BTS() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skills = [
    { category: "Programming", items: ["Java", "Python", "JavaScript", "PHP", "SQL"] },
    { category: "Web Development", items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Tools & Methods", items: ["Git", "VS Code", "Docker", "APIs"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"] }
  ]

  const handleDownload = () => {
    window.open('/E4-BTS-SIO-2024.pdf', '_blank')
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <AnimatePresence>
        {isLoaded && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h1 className="text-[5rem] text-orange-600 mb-6 leading-tight" style={{ fontFamily: 'vercetti, sans-serif' }}>
                BTS SIO SLAM
              </h1>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Services Informatiques aux Organisations - 
                Solutions Logicielles et Applications Métiers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-16 mb-24"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Program Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The BTS SIO SLAM is a two-year technical degree focused on software development and business solutions. 
                  This program provides comprehensive training in both theoretical and practical aspects of IT, 
                  preparing students for professional roles in software development and IT services.
                </p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-orange-600 mb-6">Key Focus Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Software Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Database Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Web Applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    IT Project Management
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-semibold text-orange-600 mb-12 text-center">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300"
                  >
                    <h3 className="text-xl font-medium text-orange-600 mb-6">{skillGroup.category}</h3>
                    <ul className="space-y-3">
                      {skillGroup.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12"
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-6">Want to learn more?</h2>
              <p className="text-gray-700 mb-8">Download my E5 file for detailed information about my studies</p>
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-700 transform hover:-translate-y-1 shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Download E5 File
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
