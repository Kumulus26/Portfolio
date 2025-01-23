'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Image from 'next/image'

export default function About() {
  return (
    <main className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      {/* Main Content */}
      <section className="px-12 pt-24 max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5rem] text-[#1d4044] mb-12"
          style={{ fontFamily: 'vercetti, sans-serif' }}
        >
          about me<span className="text-[orange]">.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[1.75rem] leading-relaxed text-[#1d4044] mb-32"
          style={{ fontFamily: 'vercetti, sans-serif' }}
        >
          I'm a <span className="font-semibold text-orange-500">student developer</span>, <span className="font-semibold text-orange-500">system and network technician</span> and <span className="font-semibold text-orange-500">cloud practitioner</span>. I love the fact that I can create a lot of things with my keyboard.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mb-32"
        >
          <p className="text-[#94a3b8] tracking-[0.25em] text-sm">
            SCROLL
          </p>
          <div className="w-[1px] h-[400px] bg-[#94a3b8]"></div>
        </motion.div>

        {/* Content Section with Image */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-32">
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#1d4044] text-lg leading-relaxed max-w-2xl"
          >
            <p className="mb-8">
              I've had a computer since the age of 4 and grew up immersed in the world of technology. As a teenager, I built my own PC from scratch, assembling every component myself. I've always maintained a strong interest in new technologies and continue to be passionate about their evolution.
            </p>
            <p className="mb-8">
              I am equally passionate about networking and development. However, I chose the path of development because I love creating.
              After working in various fields, I resumed my studies in 2023 with a BTS in an apprenticeship program. I am currently a student at Efrei in the second year of a BTS SIO program, specializing in SLAM (Software Solutions and Applications).
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/img/laptop.png"
                alt="Illustration of a laptop"
                fill
                className="object-contain"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-2/3 aspect-square">
              <Image
                src="/img/cloud.png"
                alt="Illustration of a the cloud"
                fill
                className="object-contain"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </motion.div>
        {/* Text Column */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#1d4044] text-lg leading-relaxed max-w-2xl"
          >
            <p className="mb-8">
            I have been working in an apprenticeship since last year at Kincy as a systems and network technician. I am responsible for managing IT infrastructures for multiple clients, overseeing operational maintenance (MCO), providing remote support as well as on-site assistance. Additionally, I handle infrastructure implementation and conduct audits.            </p>
            <p className="mb-8">
            This year, I developed an interest in Cloud technologies and undertook self-directed learning to prepare for the AWS Cloud Practitioner certification, which I successfully earned in December 2024.
            </p>
          </motion.div>
        
        </div>

        {/* Section Photographie */}
        <div className="mt-32">
          {/* En-tête et texte */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#1d4044] text-lg leading-relaxed max-w-2xl mb-12"
          >
            <h2 className="text-[2.5rem] mb-8" style={{ fontFamily: 'vercetti, sans-serif' }}>
              Photography<span className="text-[orange]">.</span>
            </h2>
            <p className="mb-8">
            Outside of work and studies, I enjoy spending as much time as possible away from my computer, traveling, and walking with my camera. I shoot exclusively with film cameras such as a Canon AE-1 Program, a Pentax K1000, and a recently acquired a Leica M2. My favorite lenses are the 28mm and 35mm. I develop all my films at home.</p>
          </motion.div>

          {/* Grille de photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            {/* Colonne gauche */}
            <div className="flex flex-col gap-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/img/image1.jpg"
                  alt="Photo exemple 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <Image
                  src="/img/photo2.jpg"
                  alt="Photo exemple 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <Image
                  src="/img/image3.jpg"
                  alt="Photo exemple 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/img/photo7.jpg"
                  alt="Photo exemple 7"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <Image
                  src="/img/photo9.jpg"
                  alt="Photo exemple 9"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Colonne droite */}
            <div className="flex flex-col gap-8 pt-24">
              <div className="relative aspect-square">
                <Image
                  src="/img/image2.jpg"
                  alt="Photo exemple 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <Image
                  src="/img/photo5.jpg"
                  alt="Photo exemple 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <Image
                  src="/img/photo6.jpg"
                  alt="Photo exemple 6"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/img/image5.jpg"
                  alt="Photo exemple 8"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bouton Instagram */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-16"
          >
            <a 
              href="https://www.instagram.com/axel__mk4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#1d4044] text-black rounded-full overflow-hidden transition-all duration-300 hover:bg-orange-500"
            >
              <span className="relative z-10 font-medium">
                See more on Instagram
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
        <br></br>
      </section>
    </main>
  )
} 