'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

const newProducts = [
  {
    id: '1',
    name: 'Embroidered Lehenga',
    designer: 'Tarun Tahiliani',
    price: 2500,
    mrp: 3500,
    image: '/images/products/product1.jpg',
  },
  {
    id: '2',
    name: 'Silk Saree',
    designer: 'Sabyasachi',
    price: 1800,
    mrp: 2400,
    image: '/images/products/product2.jpg',
  },
  {
    id: '3',
    name: 'Designer Kurta',
    designer: 'Anita Dongre',
    price: 950,
    mrp: 1400,
    image: '/images/products/product3.jpg',
  },
  {
    id: '4',
    name: 'Fusion Jacket',
    designer: 'Manish Malhotra',
    price: 1200,
    mrp: 1800,
    image: '/images/products/product4.jpg',
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
