'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory-50 via-champagne-100 to-warm-beige-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-champagne-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-warm-beige-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-ivory-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
            Premium Indian
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-600 via-warm-beige-700 to-champagne-600">
              Luxury Fashion
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-warm-beige-800 max-w-2xl mx-auto font-light"
          >
            Exquisite bridal collections, indo-western fusion, and haute couture exclusively for you.
            <br />
            <span className="text-champagne-600 font-semibold">Free Pan-USA Shipping • 24/7 Support</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="/shop/lehengas"
              className="btn-luxury bg-black text-ivory-50 px-8 py-4 text-lg font-semibold hover:bg-warm-beige-900 transition-all duration-300"
            >
              Shop Lehengas
            </Link>
            <Link
              href="/shop/indo-western"
              className="btn-luxury-secondary border-2 border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-ivory-50 transition-all duration-300"
            >
              Indo Western
            </Link>
            <Link
              href="/shop"
              className="btn-luxury-gold px-8 py-4 text-lg font-semibold hover:bg-champagne-600 transition-all duration-300"
            >
              Flat 50% Off Sale
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-champagne-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
