'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Lehengas', href: '/shop/lehengas', description: 'Bridal & Festive' },
  { name: 'Indo Western', href: '/shop/indo-western', description: 'Fusion Fashion' },
  { name: 'Mens Wear', href: '/shop/mens-wear', description: 'For Him' },
  { name: 'Suits', href: '/shop/suits', description: 'Ethnic Elegance' },
  { name: 'Co-ord Sets', href: '/shop/coord-sets', description: 'Ready to Wear' },
  { name: 'Drapes & Sarees', href: '/shop/drapes', description: 'Traditional' },
  { name: 'Gowns', href: '/shop/gowns', description: 'Evening Wear' },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold mb-4">Shop SAGE COUTURE</h1>
          <p className="text-lg text-warm-beige-700">Browse our exclusive collections</p>
        </div>

        {/* Promotion Banner */}
        <div className="bg-black text-ivory-50 p-8 rounded-lg mb-16 text-center">
          <h2 className="font-display text-3xl font-bold mb-2">FLAT 50% OFF</h2>
          <p>Limited time offer on selected items!</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={cat.href}>
                <div className="bg-white p-8 rounded-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
                  <div className="w-20 h-20 bg-gradient-to-br from-champagne-200 to-warm-beige-300 rounded-full mx-auto mb-4 group-hover:from-champagne-300 group-hover:to-warm-beige-400 transition-all"></div>
                  <h3 className="font-display text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm text-warm-beige-700">{cat.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white p-8 rounded-lg text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Why SAGE COUTURE?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-bold mb-2">🚚 Free Pan-India Shipping</p>
              <p className="text-warm-beige-700">On all orders</p>
            </div>
            <div>
              <p className="font-bold mb-2">💬 24/7 Support</p>
              <p className="text-warm-beige-700">We're always here to help</p>
            </div>
            <div>
              <p className="font-bold mb-2">🔒 Secure Payment</p>
              <p className="text-warm-beige-700">Safe transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
