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
      title: "How Data Lakehouses Improve Generative AI Accuracy",
      date: "May 07, 2025",
      category: "Artificial Intelligence, Data",
      image: "/img/ai-code.png",
      summary: "Data lakehouses combine the strengths of data lakes and data warehouses, enabling organizations to efficiently manage and analyze their enterprise data. They enhance AI application accuracy by integrating up-to-date domain and industry information, using retrieval augmented generation (RAG) to provide precise answers based on current data. This approach improves AI performance and customization, driving innovation and efficient decision-making.",
      link: "https://www.youtube.com/watch?v=0S7zbkTCYbs&ab_channel=IBMTechnology",
      readTime: "4 min watch"
    },
    {
      id: 2,
      title: "Top 10 Best Practices for Effective Data Protection",
      date: "May 16, 2025",
      category: "Data Protection",
      image: "/img/data-protection.png",
      summary: "Implementing effective data protection involves defining data goals, automating data classification, adopting zero trust security, and centralizing data loss prevention. Organizations should address key data loss channels, maintain compliance, strategize for BYOD, and control cloud security posture. Training employees and automating incident management are crucial steps in building a strong data protection framework.",
      link: "https://thehackernews.com/2025/05/top-10-best-practices-for-effective.html",
      readTime: "9 min read"
    },
    {
      id: 3,
      title: "This will finally change in Python 3.14",
      date: "April 20, 2025",
      category: "Development",
      image: "/img/python-3.14.png",
      summary: "PEP 765 will be introduced in Python 3.14, disallowing return, break, and continue statements from exiting a finally block, thereby preventing potential bugs. The finally block ensures execution regardless of any raised exceptions. This change aims to enhance code reliability and prevent misused statements that could lead to bugs.",
      link: "https://www.youtube.com/watch?v=dXz9Wqg3FMQ&ab_channel=Indently",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Why Are There So Many Databases ?",
      date: "May 17, 2025",
      category: "Data",
      image: "/img/databases.png",
      summary: "The post is an opinionated guide on modern database architectures, categorizing them into nine types including data warehouses, data lakes, transactional databases, and more. It discusses their strengths, weaknesses, and appropriate use cases, emphasizing that PostgreSQL suits most applications while advising caution against trendy but unnecessary solutions. Beginners should focus on understanding broad categories rather than becoming experts in every new offering.",
      link: "https://blog.det.life/why-are-there-so-many-databases-87d334c5dce6",
      readTime: "13 min read"
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
