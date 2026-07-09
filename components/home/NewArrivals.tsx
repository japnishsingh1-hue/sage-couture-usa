'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'
import { getProductImageUrl } from '@/lib/images'

const newProducts = [
  {
    id: '1',
    name: 'Lehnga With Cape',
    designer: 'SAGE COUTURE',
    price: 16000,
    mrp: 32000,
    image: getProductImageUrl('Lehnga With Cape', 'Lehengas', 0),
  },
  {
    id: '2',
    name: 'Printed Blazer with Sharara',
    designer: 'SAGE COUTURE',
    price: 16000,
    mrp: 32000,
    image: getProductImageUrl('Printed Blazer with Sharara', 'Indo Western', 0),
  },
  {
    id: '3',
    name: 'Multicolour Cape Lehnga Set',
    designer: 'SAGE COUTURE',
    price: 12500,
    mrp: 25000,
    image: getProductImageUrl('Multicolour Cape Lehnga Set', 'Lehengas', 1),
  },
  {
    id: '4',
    name: 'Hand-Embroidered Drape Saree',
    designer: 'SAGE COUTURE',
    price: 21000,
    mrp: 42000,
    image: getProductImageUrl('Hand-Embroidered Drape Saree', 'Drapes', 0),
  },
]

export default function NewArrivals() {
  return (
    <section className="luxury-section bg-white">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">New Arrivals</h2>
        <p className="luxury-subheading">Latest additions to our curated collections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/shop?sort=newest" className="btn-luxury bg-black text-ivory-50 px-8 py-3">
          Shop All New Arrivals
        </Link>
      </div>
    </section>
  )
}
