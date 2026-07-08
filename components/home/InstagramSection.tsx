'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const instaPosts = Array(6).fill(null).map((_, i) => ({ id: i + 1 }))

export default function InstagramSection() {
  return (
    <section className="luxury-section py-24">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">Follow Us</h2>
        <p className="luxury-subheading">@sagecoutureusa</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {instaPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-br from-champagne-200 to-warm-beige-300 rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="w-full h-full flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-300">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury-gold px-8 py-3 inline-flex items-center gap-2"
        >
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </Link>
      </div>
    </section>
  )
}
