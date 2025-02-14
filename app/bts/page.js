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
    // Add download logic here when file is ready
    // window.open('/path-to-your-file.pdf', '_blank')
  }

  return (
    <main className="bg-white min-h-screen pb-16">
      <Navbar />
      
      <AnimatePresence>
        {isLoaded && (
          <section className="px-12 pt-32">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <h1 className="text-[4rem] text-orange-600 mb-4" style={{ fontFamily: 'vercetti, sans-serif' }}>
                BTS SIO SLAM
              </h1>
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The BTS SIO SLAM is a two-year technical degree focused on software development and business solutions. 
                At the end of the first semester, it offers two specialization options (SISR and SLAM), 
                each delivering an additional skill: system and network administration (SISR) or application design and 
                development (SLAM).
              </p>
            </motion.div>

            {/* Speciality Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-8">My Speciality: SLAM</h2>
              <div className="bg-orange-50 p-8 rounded-xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  The BTS SIO equips students with skills in IT support, cybersecurity, 
                  and application development. They learn to ensure IT service availability, support digital transformation, 
                  and manage incidents. In cybersecurity, they analyze risks, protect data, and secure IT infrastructure. 
                  In development, they design, deploy, and maintain applications while mastering databases and version control.
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-8">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-medium text-orange-600 mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download Button Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="max-w-6xl mx-auto mb-16 text-center"
            >
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-700 transform hover:-translate-y-1"
              >
                <span className="relative flex items-center gap-2">
                  Click here to download my E4 file
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
          </section>
        )}
      </AnimatePresence>
    </main>
  )
}
