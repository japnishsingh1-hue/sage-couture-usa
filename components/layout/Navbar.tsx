'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search, Heart, User, ShoppingBag } from 'lucide-react'
import { useCart } from '@/store/cart'
import { useAuth } from '@/store/auth'
import { useRouter } from 'next/navigation'

interface NavbarProps {}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const cartItems = useCart((state) => state.items)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Women', href: '/shop/women' },
    { label: 'Men', href: '/shop/men' },
    { label: 'Designers', href: '/designers' },
    { label: 'Wedding', href: '/shop?occasion=wedding' },
    { label: 'New Arrivals', href: '/shop?sort=newest' },
    { label: 'Ready To Ship', href: '/shop?delivery=fast' },
    { label: 'Sale', href: '/shop?sale=true' },
    { label: 'Appointments', href: '/styling-appointments' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-ivory-50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="font-display text-2xl font-bold text-black">
              SAGE
              <br className="hidden md:block" />
              <span className="text-champagne-600">COUTURE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-black hover:text-champagne-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 hover:bg-ivory-200 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/wishlist" className="p-2 hover:bg-ivory-200 rounded-lg transition-colors">
              <Heart className="w-5 h-5" />
            </Link>

            <Link href="/cart" className="relative p-2 hover:bg-ivory-200 rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-champagne-600 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link href={user ? '/account' : '/login'} className="p-2 hover:bg-ivory-200 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-black hover:bg-ivory-200 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
