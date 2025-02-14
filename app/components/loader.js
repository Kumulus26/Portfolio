'use client'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        {/* Main Circle */}
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-orange-100"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Spinning Arc */}
          <motion.div
            className="absolute inset-0.5 border-4 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Pulsing Dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-orange-600 font-medium tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LOADING
        </motion.p>
      </div>
    </div>
  )
}
