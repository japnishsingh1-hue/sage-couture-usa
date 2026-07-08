'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LuxuryPret() {
  return (
    <section className="luxury-section py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
          <span className="text-xs uppercase tracking-widest text-champagne-600 mb-4 block">Ready To Wear</span>
          <h2 className="font-display text-5xl font-bold mb-6 text-black">Luxury Pret Collection</h2>
          <p className="text-lg text-warm-beige-700 mb-8 leading-relaxed">
            Effortless elegance for everyday occasions. Our luxury pret collection combines the artistry of Indian craftsmanship with modern comfort and wearability.
          </p>
          <Link href="/shop?category=pret" className="btn-luxury-secondary border-2 border-black px-8 py-4 inline-block">
            Shop Pret
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
          <div className="aspect-square bg-gradient-to-br from-warm-beige-100 to-champagne-200 rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  )
}
