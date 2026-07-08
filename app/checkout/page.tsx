'use client'

import { useState } from 'react'
import { useCart } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { toast } from 'react-toastify'

export default function CheckoutPage() {
  const cartItems = useCart((state) => state.items)
  const getTotal = useCart((state) => state.getTotal)
  const clearCart = useCart((state) => state.clearCart)

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const shipping = subtotal > 1000 ? 0 : 100
  const total = subtotal + tax + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async () => {
    if (Object.values(formData).some((v) => !v)) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      // Simulate order placement
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Order placed successfully!')
      clearCart()
      // Redirect to order confirmation
      window.location.href = '/order-confirmation'
    } catch (error) {
      toast.error('Failed to place order')
    }
  }

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Steps */}
            <div className="flex gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1">
                  <div
                    className={`h-2 rounded-full mb-2 ${
                      s <= step ? 'bg-black' : 'bg-ivory-300'
                    }`}
                  ></div>
                  <p className="text-xs uppercase font-semibold text-warm-beige-700">
                    {s === 1 && 'Shipping'}
                    {s === 2 && 'Payment'}
                    {s === 3 && 'Review'}
                  </p>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6 bg-white p-8 rounded-lg">
                <h2 className="font-display font-bold text-2xl mb-6">Shipping Address</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input-luxury"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="input-luxury"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                />

                <input
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                />

                <div className="grid md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-luxury"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input-luxury"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="input-luxury"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 bg-white p-8 rounded-lg">
                <h2 className="font-display font-bold text-2xl mb-6">Payment Method</h2>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-black rounded-lg cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="mr-4" />
                    <span className="font-semibold">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-ivory-200 rounded-lg cursor-pointer hover:border-black transition-colors">
                    <input type="radio" name="payment" className="mr-4" />
                    <span className="font-semibold">Apple Pay</span>
                  </label>
                  <label className="flex items-center p-4 border border-ivory-200 rounded-lg cursor-pointer hover:border-black transition-colors">
                    <input type="radio" name="payment" className="mr-4" />
                    <span className="font-semibold">Google Pay</span>
                  </label>
                </div>

                <div className="space-y-4 mt-8">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="input-luxury w-full"
                  />
                  <div className="grid md:grid-cols-3 gap-4">
                    <input type="text" placeholder="MM/YY" className="input-luxury" />
                    <input type="text" placeholder="CVC" className="input-luxury" />
                    <input type="text" placeholder="ZIP" className="input-luxury" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 btn-luxury-secondary border-2 border-black py-3 font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 bg-white p-8 rounded-lg">
                <h2 className="font-display font-bold text-2xl mb-6">Review Order</h2>

                <div className="space-y-4 pb-6 border-b border-ivory-200">
                  <div>
                    <p className="font-semibold mb-2">Shipping Address</p>
                    <p className="text-sm text-warm-beige-700">
                      {formData.firstName} {formData.lastName}
                      <br />
                      {formData.street}
                      <br />
                      {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 btn-luxury-secondary border-2 border-black py-3 font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg sticky top-24">
              <h2 className="font-display font-bold text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-ivory-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-warm-beige-700">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-ivory-200">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
                </div>
              </div>

              <div className="flex justify-between font-display font-bold text-2xl">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
