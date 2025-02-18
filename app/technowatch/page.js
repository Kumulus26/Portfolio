'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Technowatch() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const articles = [
    {
      id: 1,
      title: "The 'First AI Software Engineer' Is Bungling the Vast Majority of Tasks It's Asked to Do",
      date: "January 24, 2025",
      category: "Artificial Intelligence",
      image: "/img/ai-code.jpg",
      summary: "Cognition AI’s Devin, marketed as an autonomous coding assistant, struggles with fundamental tasks, often hallucinating solutions and working slower than human coders. Researchers highlight the gap between AI hype and reality, questioning whether such tools can truly replace software engineers.",
      link: "https://futurism.com/first-ai-software-engineer-devin-bungling-tasks",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Oracle justified its JavaScript trademark with Node.js—now it wants that ignored",
      date: "February 04, 2025",
      category: "Web Development",
      image: "/img/oracle-js.png",
      summary: "Oracle is stalling and avoiding accountability in response to Deno’s petition to cancel its “JavaScript” trademark, despite having no role in the language’s development. It previously renewed the trademark using a misleading Node.js screenshot and now argues it doesn’t matter. This raises concerns about corporate trademark abuse, fueling calls to challenge Oracle’s claim.",
      link: "https://www.theregister.com/2025/02/04/oracle_deno_javascript_trademark/",
      readTime: "9 min read"
    },
    {
      id: 3,
      title: "Silicon Valley Software Engineers Horrified as They Can't Easily Find Jobs Anymore",
      date: "February 13, 2025",
      category: "Web Development",
      image: "/img/silicon-valley.jpg",
      summary: "Silicon Valley software engineers are in panic mode as they struggle to find new jobs. The market is flooded with candidates, and employers are demanding more experience and skills than ever before.",
      link: "https://futurism.com/silicon-valley-engineers-jobs",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "L'IA est en train de s'empoisonner elle-même",
      date: "February 14, 2025",
      category: "Artificial Intelligence",
      image: "/img/ai-micode.jpg",
      summary: "Trained on its own outputs, AI regurgitates errors, dulls creativity, and traps itself in an echo chamber.",
      link: "https://www.youtube.com/watch?v=AfgAEIK9F8c",
      readTime: "30 min watch"
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
                technowatch
              </h1>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Staying updated with the latest in technology and development
              </p>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-orange-600 text-sm">{article.category}</span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <a 
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 transition-colors duration-300 flex items-center gap-2"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
