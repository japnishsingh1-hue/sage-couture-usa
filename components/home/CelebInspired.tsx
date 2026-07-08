'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

const celebProducts = [
  { id: '9', name: 'Red Carpet Gown', designer: 'Manish Malhotra', price: 3500, image: '/images/products/celeb1.jpg' },
  { id: '10', name: 'Statement Lehenga', designer: 'Sabyasachi', price: 4000, image: '/images/products/celeb2.jpg' },
]

export default function CelebInspired() {
  return (
    <section className="luxury-section bg-white py-24">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">Celebrity Inspired</h2>
        <p className="luxury-subheading">Looks seen on Bollywood's finest</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {celebProducts.map((product, index) => (
          <motion.div key={product.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
