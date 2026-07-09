'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import { getProductsByCategory } from '@/lib/shopify'

const categoryNames: { [key: string]: string } = {
  'lehengas': 'Lehengas',
  'indo-western': 'Indo Western',
  'mens-wear': 'Mens Wear',
  'suits': 'Suits',
  'coord-sets': 'Co-ord Sets',
  'drapes': 'Drapes & Sarees',
  'gowns': 'Gowns',
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const products = getProductsByCategory(params.category)
  const categoryName = categoryNames[params.category] || 'Collection'
  const [cart, setCart] = useState<any[]>([])

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-ivory-50 py-12 text-center">
        <h1 className="font-display text-4xl font-bold">Collection Not Found</h1>
        <Link href="/shop" className="btn-luxury bg-black text-ivory-50 px-8 py-4 mt-6 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = (product: any) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-warm-beige-700">Premium collection from SAGE COUTURE • Handcrafted with care</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="aspect-square bg-ivory-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0e6d3%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22serif%22 font-size=%2224%22 fill=%22%234a3728%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E{product.name}%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                  <span className="line-through text-sm text-warm-beige-600">{formatPrice(product.mrp)}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2 bg-black text-ivory-50 font-medium hover:bg-warm-beige-900 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn-luxury-secondary border-2 border-black px-8 py-3 inline-block">
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </div>
  )
}
