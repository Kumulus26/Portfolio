'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

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
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              const searchQuery = e.target.search.value
              if (searchQuery.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
              }
            }}
            className="flex items-center"
          >
            <input
              type="text"
              name="search"
              placeholder="SEARCH..."
              className="text-sm text-black hover:border hover:border-black p-2 transition-colors bg-transparent outline-none"
            />
            <button type="submit">
              <svg className="w-5 h-5 ml-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          <Link href="/about" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            ABOUT
          </Link>
          <Link href="/work" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            WORK
          </Link>
          <Link href="/" className="text-sm text-black hover:border hover:border-black p-2 transition-colors">
            RESUME
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  const searchQuery = e.target.search.value
                  if (searchQuery.trim()) {
                    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
                    setIsMenuOpen(false)
                  }
                }}
                className="flex items-center"
              >
                <input
                  type="text"
                  name="search"
                  placeholder="SEARCH..."
                  className="w-full text-sm text-black hover:border hover:border-black p-2 transition-colors bg-transparent outline-none"
                />
                <button type="submit">
                  <svg className="w-5 h-5 ml-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
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
                href="/" 
                className="text-sm text-black hover:border hover:border-black p-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RESUME
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
