'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'
import { getProductImageUrl } from '@/lib/images'

const trendingProducts = [
  { id: '5', name: 'Bridal Lehenga Set', designer: 'SAGE COUTURE', price: 22000, mrp: 42000, image: getProductImageUrl('Bridal Lehenga Set', 'Lehengas', 0) },
  { id: '6', name: 'Party Wear Saree', designer: 'SAGE COUTURE', price: 16000, mrp: 32000, image: getProductImageUrl('Party Wear Saree', 'Drapes', 0) },
  { id: '7', name: 'Designer Sharara', designer: 'SAGE COUTURE', price: 18000, mrp: 30000, image: getProductImageUrl('Designer Sharara', 'Indo Western', 0) },
  { id: '8', name: 'Anarkali Suit', designer: 'SAGE COUTURE', price: 12000, mrp: 24000, image: getProductImageUrl('Anarkali Suit', 'Suits', 0) },
]

export default function TrendingNow() {
  return (
    <section className="luxury-section">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">Trending Now</h2>
        <p className="luxury-subheading">Most loved by our customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingProducts.map((product, index) => (
          <motion.div key={product.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
