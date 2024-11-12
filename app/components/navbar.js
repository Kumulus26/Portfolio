'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Section gauche */}
        <div className="flex items-center space-x-8"
          style={{ fontFamily: 'dot, sans-serif' }}>
          <Link href="/" className="text-sm font-medium text-black">➡️ LET'S TALK</Link>
        </div>

        {/* Logo central */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl font-bold text-orange-500">PORTFOLIO©</h1>
        </Link>

        {/* Section droite */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center"
          >
            <span className="text-sm text-black hover:border hover:border-black p-2 transition-colors">SEARCH...</span>
            <svg className="w-5 h-5 ml-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link 
            href="/about" 
            className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
          >
            ABOUT
          </Link>
          <Link href="/" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">WORK</Link>
          <Link href="/" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">RESUME</Link>
        </div>
      </div>

      {/* Barre de recherche */}
      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4">
          <div className="max-w-[1800px] mx-auto">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
