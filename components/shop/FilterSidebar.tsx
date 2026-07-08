'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FilterSidebarProps {
  onFiltersChange: (filters: any) => void
}

export default function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    designer: true,
    category: true,
    price: false,
    color: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const designers = ['Sabyasachi', 'Manish Malhotra', 'Tarun Tahiliani', 'Anita Dongre', 'Payal Singhal']
  const categories = ['Lehenga', 'Saree', 'Suit', 'Gown', 'Pret']
  const colors = ['Red', 'Gold', 'Pink', 'Green', 'Blue', 'Maroon', 'Cream']
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="w-64 bg-white p-6 rounded-lg h-fit sticky top-24">
      {/* Designer */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection('designer')}
          className="flex justify-between items-center w-full mb-4 font-semibold text-black"
        >
          Designer
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.designer ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.designer && (
          <div className="space-y-3">
            {designers.map((designer) => (
              <label key={designer} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" onChange={() => onFiltersChange({})} />
                <span className="text-sm text-warm-beige-700">{designer}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full mb-4 font-semibold text-black"
        >
          Category
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.category ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.category && (
          <div className="space-y-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" onChange={() => onFiltersChange({})} />
                <span className="text-sm text-warm-beige-700">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full mb-4 font-semibold text-black"
        >
          Price Range
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            <input type="range" min="0" max="10000" className="w-full" onChange={() => onFiltersChange({})} />
            <div className="flex justify-between text-xs text-warm-beige-600">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>
        )}
      </div>

      {/* Color */}
      <div className="mb-8">
        <button
          onClick={() => toggleSection('color')}
          className="flex justify-between items-center w-full mb-4 font-semibold text-black"
        >
          Color
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.color ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.color && (
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer text-xs">
                <input type="checkbox" className="rounded" onChange={() => onFiltersChange({})} />
                {color}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div>
        <p className="font-semibold text-black mb-3">Size</p>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <label key={size} className="flex items-center justify-center border border-ivory-200 p-2 cursor-pointer hover:bg-ivory-50">
              <input type="checkbox" className="sr-only" onChange={() => onFiltersChange({})} />
              <span className="text-sm font-medium">{size}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
