'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Letstalk() {
  return (
    <main className="bg-orange-500 min-h-screen">
      <Navbar />
      {/* Main Content */}
      <section className="px-12 pt-24 max-w-6xl mx-auto text-white">
        {/* Titre principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5rem] mb-12 text-center"
          style={{ fontFamily: 'dot, sans-serif' }}
        >
          Better Together
        </motion.h1>

        {/* Section contenu et formulaire */}
        <div className="grid grid-cols-2 gap-32 mt-24">
          {/* Colonne de gauche - Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl mb-8">
              I enjoy working with dedicated creatives from businesses that make the world beautiful.
            </p>
            <p className="text-xl mb-12">
              We can do so much together. Let's talk.
            </p>
            
            <div className="space-y-4 text-lg">
              <p>If you want mail: axel.lussert@gmail.com</p>
              <p>If you want to be influenced: @axel__mk4</p>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://github.com/kumulus26" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors duration-300"
                >
                  <FaGithub size={30} />
                </a>
                <a 
                  href="https://linkedin.com/in/axel-lussert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Colonne de droite - Formulaire */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Type your message here..."
              rows={6}
              className="w-full bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 mt-6 hover:bg-white hover:text-black transition-colors duration-300"
            >
              SUBMIT
            </button>
          </motion.form>
        </div>
        <br></br>
      </section>
    </main>
  )
}