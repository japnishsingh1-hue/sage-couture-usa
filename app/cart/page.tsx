'use client'

import Link from 'next/link'
import { useCart } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { Trash2, Plus, Minus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CartPage() {
  const cartItems = useCart((state) => state.items)
  const removeItem = useCart((state) => state.removeItem)
  const updateQuantity = useCart((state) => state.updateQuantity)
  const getTotal = useCart((state) => state.getTotal)

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const shipping = subtotal > 1000 ? 0 : 100
  const total = subtotal + tax + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-ivory-50 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-warm-beige-700 mb-8">Explore our collections and find something beautiful.</p>
          <Link href="/shop" className="btn-luxury bg-black text-ivory-50 inline-block px-8 py-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white p-6 rounded-lg"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-ivory-200 rounded-lg flex-shrink-0"></div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1">{item.product.name}</h3>
                    <p className="text-sm text-warm-beige-700 mb-2">{item.product.designer}</p>
                    <p className="text-xs text-warm-beige-600 mb-4">
                      Size: {item.size} | Color: {item.color}
                    </p>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 border border-ivory-300 rounded hover:bg-ivory-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-ivory-300 rounded hover:bg-ivory-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right flex flex-col items-end justify-between">
                    <div>
                      <p className="font-semibold text-lg">{formatPrice(item.price * item.quantity)}</p>
                      <p className="text-xs text-warm-beige-600">{formatPrice(item.price)} each</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coupon */}
            <div className="mt-8 p-6 bg-white rounded-lg">
              <h3 className="font-semibold mb-4">Apply Coupon Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="input-luxury flex-1 bg-ivory-50"
                />
                <button className="btn-luxury bg-black text-ivory-50 px-6">Apply</button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg sticky top-24">
              <h2 className="font-display font-bold text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-ivory-200">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Tax (8%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
              </div>

              <div className="flex justify-between font-display font-bold text-2xl mb-8">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full btn-luxury bg-black text-ivory-50 py-4 block text-center font-semibold hover:bg-warm-beige-900"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="w-full mt-3 btn-luxury-secondary border-2 border-black py-4 block text-center font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
