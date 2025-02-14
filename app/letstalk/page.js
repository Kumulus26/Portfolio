'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

export default function Letstalk() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          message: ''
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <main className="bg-orange-500 min-h-screen">
      <Navbar />
      <section className="px-12 pt-24 max-w-6xl mx-auto text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5rem] mb-12 text-center"
          style={{ fontFamily: 'dot, sans-serif' }}
        >
          better together
        </motion.h1>

        <div className="grid grid-cols-2 gap-32 mt-24">
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
              <p>If you want to mail me: <span className="relative group">
                <a href="mailto:axel.lussert75@gmail.com?subject=Hello%20Axel%20-%20I%20want%20to%20discuss%20with%20you" className="relative">axel.lussert75@gmail.com</a>
                <span className="absolute right-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full origin-right"></span>
              </span></p>
              <p>If you want to be influenced: <span className="relative group">
                <a href="https://www.instagram.com/axel.onfilm/" target="_blank" className="relative">@axel.onfilm</a>
                <span className="absolute right-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full origin-right"></span>
              </span></p>
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows={6}
              className="w-full bg-transparent border-b border-white p-2 placeholder-white/80 focus:outline-none"
              required
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