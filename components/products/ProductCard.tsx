'use client'

import Link from 'next/link'
import { Heart, Eye } from 'lucide-react'
import { useState } from 'react'
import { formatPrice, calculateDiscount } from '@/lib/utils'

interface ProductCardProps {
  product: {
    id: string
    name: string
    designer: string
    price: number
    mrp?: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = product.mrp ? calculateDiscount(product.mrp, product.price) : 0

  return (
    <div className="card-luxury">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-ivory-100 aspect-square group">
        {/* Placeholder Image */}
        <div className="w-full h-full bg-gradient-to-br from-champagne-200 to-warm-beige-200 flex items-center justify-center">
          <span className="text-warm-beige-600 text-center text-sm">{product.name}</span>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-champagne-600 text-black px-3 py-1 rounded-none text-xs font-semibold">
            -{discount}%
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-end justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pb-4">
          <Link
            href={`/products/${product.id}`}
            className="bg-black text-ivory-50 px-6 py-2 rounded-none font-medium flex items-center gap-2 hover:bg-warm-beige-900 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </Link>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-none border border-black transition-all ${
              isWishlisted ? 'bg-black text-ivory-50' : 'bg-transparent text-black hover:bg-ivory-200'
            }`}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">{product.designer}</p>
        <h3 className="font-display font-semibold text-lg mb-3 line-clamp-2">{product.name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-lg">{formatPrice(product.price)}</span>
          {product.mrp && (
            <span className="text-xs line-through text-warm-beige-600">{formatPrice(product.mrp)}</span>
          )}
        </div>

        <Link
          href={`/products/${product.id}`}
          className="w-full py-2 text-center text-sm font-medium text-black border border-black hover:bg-black hover:text-ivory-50 transition-all duration-300"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  )
}
