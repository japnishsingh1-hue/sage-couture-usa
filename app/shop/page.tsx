'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductGrid from '@/components/shop/ProductGrid'
import SortDropdown from '@/components/shop/SortDropdown'

export default function ShopPage() {
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState('newest')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call - replace with actual Supabase call
    setIsLoading(true)
    setTimeout(() => {
      setProducts(
        Array(20).fill(null).map((_, i) => ({
          id: `${i + 1}`,
          name: `Designer Product ${i + 1}`,
          designer: 'Designer Name',
          price: Math.random() * 4000 + 500,
          mrp: Math.random() * 5000 + 1500,
          image: `/images/products/product${(i % 4) + 1}.jpg`,
          category: ['Women', 'Men'][Math.floor(Math.random() * 2)],
          occasion: ['Wedding', 'Party', 'Casual'][Math.floor(Math.random() * 3)],
        }))
      )
      setIsLoading(false)
    }, 500)
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-display text-4xl font-bold mb-8">Shop</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar onFiltersChange={setFilters} />

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-warm-beige-200">
              <p className="text-sm text-warm-beige-700">
                Showing {products.length} products
              </p>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <p className="text-warm-beige-600">Loading products...</p>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
