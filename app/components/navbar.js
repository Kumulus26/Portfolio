'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-4 h-16 flex items-center justify-between relative">
        <div className="flex items-center space-x-8"
          style={{ fontFamily: 'dot, sans-serif' }}>
          <Link href="/letstalk" className="text-sm font-medium text-black">➡️ LET'S TALK</Link>
        </div>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <h1 className="text-2xl font-bold text-orange-500">PORTFOLIO©</h1>
        </Link>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            ABOUT
          </Link>
          <Link href="/work" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            WORK
          </Link>
          <Link href="/bts" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            BTS
          </Link>
          <Link href="/technowatch" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            TECHNOWATCH
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                href="/about" 
                className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/work" 
                className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                WORK
              </Link>
              <Link 
                href="/bts" 
                className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BTS
              </Link>
              <Link 
                href="/technowatch" 
                className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                TECHNOWATCH
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

