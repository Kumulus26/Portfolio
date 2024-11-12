'use client'
import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Title from './components/title'
import TextHomePage from './components/textHomePage'
import Loader from './components/loader'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="relative">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start h-screen">
          <Title />
          <TextHomePage />
        </div>
      </div>
    </main>
  )
}
