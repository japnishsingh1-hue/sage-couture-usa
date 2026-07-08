'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const designers = [
  { id: 1, name: 'Tarun Tahiliani', image: '/images/designers/tarun.jpg' },
  { id: 2, name: 'Sabyasachi Mukherjee', image: '/images/designers/sabyasachi.jpg' },
  { id: 3, name: 'Manish Malhotra', image: '/images/designers/manish.jpg' },
  { id: 4, name: 'Anita Dongre', image: '/images/designers/anita.jpg' },
  { id: 5, name: 'Payal Singhal', image: '/images/designers/payal.jpg' },
  { id: 6, name: 'Amit Aggarwal', image: '/images/designers/amit.jpg' },
]

export default function FeaturedDesigners() {
  return (
    <section className="luxury-section">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">Featured Designers</h2>
        <p className="luxury-subheading">Handpicked collections from India's most acclaimed creators</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designers.map((designer, index) => (
          <motion.div
            key={designer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/designers/${designer.id}`}>
              <div className="group relative overflow-hidden rounded-lg aspect-square bg-ivory-100">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-champagne-200 to-warm-beige-300 flex items-center justify-center">
                  <span className="text-center font-display text-lg text-warm-beige-700">{designer.name}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory-50 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-2xl font-semibold mb-2">{designer.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">View Collection</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/designers" className="btn-luxury-secondary border-2 border-black px-8 py-3 inline-block">
          View All Designers
        </Link>
      </div>
    </section>
  )
}
