'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock } from 'lucide-react'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }

    setIsLoading(true)
    try {
      // Simulate auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Logged in successfully!')
      window.location.href = '/account'
    } catch (error) {
      toast.error('Failed to login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-ivory-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-warm-beige-700">Sign in to your SAGE COUTURE account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-warm-beige-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-luxury pl-10 w-full"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold">Password</label>
              <Link href="/forgot-password" className="text-xs text-champagne-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-warm-beige-600" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-luxury pl-10 w-full"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900 disabled:opacity-50"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-warm-beige-700">
          Don't have an account?{' '}
          <Link href="/signup" className="text-champagne-600 font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
