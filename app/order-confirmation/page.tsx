'use client'

import Link from 'next/link'
import { CheckCircle, Package, Truck, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OrderConfirmationPage() {
  const orderNumber = 'SC234999'
  const email = 'priya@example.com'

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <CheckCircle className="w-20 h-20 text-green-600" />
          </motion.div>

          {/* Message */}
          <h1 className="font-display text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-lg text-warm-beige-700 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order Number */}
          <div className="bg-ivory-50 rounded-lg p-6 mb-8">
            <p className="text-sm uppercase tracking-widest text-warm-beige-700 mb-2">Order Number</p>
            <p className="font-mono text-2xl font-bold text-black">{orderNumber}</p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-ivory-50 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-champagne-600 mx-auto mb-4" />
              <p className="text-sm font-semibold mb-2">Confirmation Email</p>
              <p className="text-xs text-warm-beige-700">Sent to {email}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-ivory-50 p-6 rounded-lg">
              <Package className="w-8 h-8 text-champagne-600 mx-auto mb-4" />
              <p className="text-sm font-semibold mb-2">Order Processing</p>
              <p className="text-xs text-warm-beige-700">Typically ships within 2-3 days</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-ivory-50 p-6 rounded-lg">
              <Truck className="w-8 h-8 text-champagne-600 mx-auto mb-4" />
              <p className="text-sm font-semibold mb-2">Tracking Available</p>
              <p className="text-xs text-warm-beige-700">Once your order ships</p>
            </motion.div>
          </div>

          {/* Next Steps */}
          <div className="bg-champagne-100 border border-champagne-300 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-black mb-4">What's Next?</h3>
            <ul className="space-y-3 text-sm text-warm-beige-800">
              <li>✓ Check your email for confirmation and order details</li>
              <li>✓ Track your order in your account dashboard</li>
              <li>✓ Receive shipping confirmation with tracking number</li>
              <li>✓ Enjoy free returns within 14 days</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/account" className="btn-luxury bg-black text-ivory-50 px-8 py-4 font-semibold hover:bg-warm-beige-900">
              View Order Details
            </Link>
            <Link href="/shop" className="btn-luxury-secondary border-2 border-black px-8 py-4 font-semibold">
              Continue Shopping
            </Link>
          </div>

          {/* Help Text */}
          <p className="text-xs text-warm-beige-600 mt-8">
            Questions? Contact our customer service at{' '}
            <a href="mailto:support@sagecouture.com" className="text-champagne-600 hover:underline">
              support@sagecouture.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
