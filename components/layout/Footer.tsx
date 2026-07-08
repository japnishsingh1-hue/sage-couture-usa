'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-ivory-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              SAGE
              <br />
              <span className="text-champagne-400">COUTURE</span>
            </h3>
            <p className="text-sm text-ivory-300 leading-relaxed">
              Curating India's finest luxury designers for the discerning customer.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold font-display mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop/women" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/shop/men" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/designers" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/shop?occasion=wedding" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Wedding
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold font-display mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-display mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-champagne-400" />
                <a href="mailto:hello@sagecouture.com" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  hello@sagecouture.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-champagne-400" />
                <a href="tel:+1234567890" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-champagne-400 mt-1 flex-shrink-0" />
                <span className="text-ivory-300">
                  New York, NY
                  <br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-ivory-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <a href="#" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-ivory-300 hover:text-champagne-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs text-ivory-400">
              <Link href="/privacy" className="hover:text-champagne-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-champagne-400 transition-colors">
                Terms of Service
              </Link>
              <span>&copy; 2024 SAGE COUTURE USA. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
