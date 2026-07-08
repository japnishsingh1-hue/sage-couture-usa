'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Exclusives() {
  return (
    <section className="luxury-section py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="aspect-square bg-gradient-to-br from-ivory-200 to-champagne-300 rounded-lg"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-widest text-champagne-600 mb-4 block">Exclusive Collection</span>
          <h2 className="font-display text-5xl font-bold mb-6 text-black">SAGE Couture Exclusives</h2>
          <p className="text-lg text-warm-beige-700 mb-8 leading-relaxed">
            Limited edition pieces available only at SAGE COUTURE USA. Collaborate with us to discover custom designs and one-of-a-kind creations from your favorite designers.
          </p>
          <Link href="/exclusives" className="btn-luxury bg-champagne-500 text-black inline-block px-8 py-4">
            View Exclusives
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
