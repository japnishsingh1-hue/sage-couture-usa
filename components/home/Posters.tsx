'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posters = [
  {
    id: 1,
    title: 'Summer Collection',
    subtitle: 'Light, breezy, elegant',
    description: 'New arrivals perfect for warm weather celebrations',
    cta: 'Shop Now',
    link: '/shop/indo-western',
    gradient: 'from-pink-100 via-orange-100 to-yellow-100',
    accent: 'text-pink-600'
  },
  {
    id: 2,
    title: 'Bridal Bliss',
    subtitle: 'Your special moment',
    description: 'Exquisite bridal collections for your wedding day',
    cta: 'Explore',
    link: '/shop/lehengas',
    gradient: 'from-purple-100 via-pink-100 to-red-100',
    accent: 'text-purple-600'
  },
  {
    id: 3,
    title: 'Flash Sale',
    subtitle: 'Limited Time Only',
    description: 'Up to 50% off on selected premium pieces',
    cta: 'Shop Sale',
    link: '/shop?sale=true',
    gradient: 'from-red-100 via-orange-100 to-yellow-100',
    accent: 'text-red-600'
  },
]

export default function Posters() {
  return (
    <section className="py-16 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {posters.map((poster, idx) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={poster.link}>
                <div className={`bg-gradient-to-br ${poster.gradient} rounded-2xl p-12 text-center h-full cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Top accent */}
                  <div className="mb-6">
                    <div className="inline-block w-20 h-1 bg-gradient-to-r from-champagne-400 to-champagne-600 rounded-full mb-4"></div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display text-4xl font-bold ${poster.accent} mb-2 transition-all group-hover:text-5xl`}>
                    {poster.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-display text-lg text-warm-beige-700 mb-4 italic">
                    {poster.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-warm-beige-800 mb-8 text-sm leading-relaxed">
                    {poster.description}
                  </p>

                  {/* CTA Button */}
                  <div className="inline-block">
                    <div className={`inline-flex items-center gap-2 ${poster.accent} font-bold group-hover:gap-4 transition-all`}>
                      <span>{poster.cta}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <span className="text-6xl">✨</span>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-10">
                    <span className="text-6xl">💎</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
