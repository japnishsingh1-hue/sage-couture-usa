'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WeddingEdit() {
  return (
    <section className="luxury-section bg-white py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="aspect-square bg-gradient-to-br from-champagne-100 to-warm-beige-200 rounded-lg"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-widest text-champagne-600 mb-4 block">Wedding Collection</span>
          <h2 className="font-display text-5xl font-bold mb-6 text-black">Celebrate Your Special Day</h2>
          <p className="text-lg text-warm-beige-700 mb-8 leading-relaxed">
            Discover our exclusive wedding collection featuring India's most celebrated designers. From bridal lehengas to groom wear, find the perfect ensemble for your special moments.
          </p>
          <Link href="/shop?occasion=wedding" className="btn-luxury bg-black text-ivory-50 inline-block px-8 py-4">
            Explore Wedding Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
