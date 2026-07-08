'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

const trendingProducts = [
  { id: '5', name: 'Bridal Lehenga Set', designer: 'Sabyasachi', price: 4500, mrp: 6000, image: '/images/products/trending1.jpg' },
  { id: '6', name: 'Party Wear Saree', designer: 'Manish Malhotra', price: 2200, mrp: 3200, image: '/images/products/trending2.jpg' },
  { id: '7', name: 'Designer Sharara', designer: 'Tarun Tahiliani', price: 3000, mrp: 4200, image: '/images/products/trending3.jpg' },
  { id: '8', name: 'Anarkali Suit', designer: 'Anita Dongre', price: 1600, mrp: 2400, image: '/images/products/trending4.jpg' },
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
