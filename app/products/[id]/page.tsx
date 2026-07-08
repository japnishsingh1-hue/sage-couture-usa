'use client'

import { useState } from 'react'
import { Heart, Share2, Truck, RotateCcw, MessageCircle } from 'lucide-react'
import { useCart } from '@/store/cart'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const addItem = useCart((state) => state.addItem)

  const product = {
    id: params.id,
    name: 'Embroidered Bridal Lehenga',
    designer: 'Sabyasachi Mukherjee',
    price: 3500,
    mrp: 5000,
    rating: 4.8,
    reviews: 245,
    images: ['/images/products/product1.jpg', '/images/products/product2.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Gold', 'Pink', 'Maroon'],
    description: 'Exquisite hand-embroidered bridal lehenga featuring intricate zardozi work and finest silk. Perfect for your special day.',
    fabric: '100% Pure Silk',
    embroidery: 'Hand-embroidered zardozi, resham, and pearl work',
    careInstructions: 'Dry clean only. Do not bleach. Store in cool, dry place.',
    deliveryDays: 7,
    returnPolicy: '14 days full refund if unworn with original tags',
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color')
      return
    }

    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      product_id: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price,
      product: product as any,
    })
    toast.success('Added to cart!')
  }

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-champagne-200 to-warm-beige-300 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-warm-beige-700 text-center">{product.name}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <button key={i} className="aspect-square bg-ivory-200 rounded-lg hover:ring-2 ring-champagne-500 transition-all">
                  <span className="sr-only">Image {i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-widest text-champagne-600 mb-2">{product.designer}</p>
                  <h1 className="font-display text-4xl font-bold mb-2">{product.name}</h1>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 border border-ivory-300 rounded-lg hover:bg-ivory-100 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${isWishlisted ? 'fill-current text-red-500' : 'text-black'}`}
                  />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-champagne-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-warm-beige-700">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
                <span className="text-xl line-through text-warm-beige-600">{formatPrice(product.mrp)}</span>
                <span className="bg-champagne-600 text-black px-3 py-1 text-sm font-semibold">
                  Save 30%
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="font-semibold mb-3">Select Size</p>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium border-2 rounded transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-ivory-50'
                        : 'border-ivory-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link href="#" className="text-xs text-champagne-600 hover:underline">
                Size Guide
              </Link>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="font-semibold mb-3">Select Color</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border-2 rounded transition-all ${
                      selectedColor === color
                        ? 'border-black bg-black text-ivory-50'
                        : 'border-ivory-300 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-semibold mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-ivory-300 rounded hover:bg-ivory-100"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-ivory-300 rounded hover:bg-ivory-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full btn-luxury bg-black text-ivory-50 py-4 text-lg font-semibold hover:bg-warm-beige-900"
              >
                Add to Cart
              </button>
              <button className="w-full btn-luxury-secondary border-2 border-black py-4 text-lg font-semibold">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t border-ivory-200 pt-6">
              <div className="flex gap-4">
                <Truck className="w-5 h-5 text-champagne-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-warm-beige-700">Ships within {product.deliveryDays} days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <RotateCcw className="w-5 h-5 text-champagne-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-warm-beige-700">{product.returnPolicy}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="w-5 h-5 text-champagne-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Expert Consultation</p>
                  <Link href="#" className="text-champagne-600 hover:underline">Book a styling appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg p-8">
          <div className="flex gap-8 mb-8 border-b border-ivory-200">
            {['description', 'fabric', 'care', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-black border-b-2 border-black'
                    : 'text-warm-beige-700 hover:text-black'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div className="prose prose-sm max-w-none">
              <p>{product.description}</p>
            </div>
          )}

          {activeTab === 'fabric' && (
            <div>
              <p><strong>Material:</strong> {product.fabric}</p>
              <p className="mt-4"><strong>Embroidery:</strong> {product.embroidery}</p>
            </div>
          )}

          {activeTab === 'care' && (
            <p>{product.careInstructions}</p>
          )}

          {activeTab === 'shipping' && (
            <div>
              <p><strong>Delivery Time:</strong> {product.deliveryDays} business days</p>
              <p className="mt-4"><strong>Return Policy:</strong> {product.returnPolicy}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
