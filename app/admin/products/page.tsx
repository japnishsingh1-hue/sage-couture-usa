'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, ChevronLeft } from 'lucide-react'
import { toast } from 'react-toastify'

interface Product {
  id: string
  name: string
  designer: string
  sku: string
  price: number
  stock: number
  category: string
  status: 'active' | 'draft'
}

export default function ProductManagementPage() {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Embroidered Lehenga', designer: 'Sabyasachi', sku: 'SAB001', price: 3500, stock: 5, category: 'Lehenga', status: 'active' },
    { id: '2', name: 'Silk Saree', designer: 'Manish Malhotra', sku: 'MAN001', price: 2200, stock: 12, category: 'Saree', status: 'active' },
  ])

  const [formData, setFormData] = useState({
    name: '',
    designer: '',
    sku: '',
    category: '',
    gender: 'women',
    mrp: '',
    sellingPrice: '',
    costPrice: '',
    stock: '',
    description: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.designer || !formData.sku || !formData.sellingPrice) {
      toast.error('Please fill in all required fields')
      return
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      designer: formData.designer,
      sku: formData.sku,
      price: parseFloat(formData.sellingPrice),
      stock: parseInt(formData.stock) || 0,
      category: formData.category,
      status: 'active',
    }

    setProducts([...products, newProduct])
    toast.success('Product added successfully!')
    setShowForm(false)
    setFormData({
      name: '',
      designer: '',
      sku: '',
      category: '',
      gender: 'women',
      mrp: '',
      sellingPrice: '',
      costPrice: '',
      stock: '',
      description: '',
    })
  }

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure?')) {
      setProducts(products.filter((p) => p.id !== id))
      toast.success('Product deleted')
    }
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header */}
      <div className="bg-black text-ivory-50 px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:bg-warm-beige-900 p-2 rounded">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <h1 className="font-display text-3xl font-bold">Product Management</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-luxury bg-champagne-500 text-black flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Add Product Form */}
        {showForm && (
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <h2 className="font-display font-bold text-2xl mb-6">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-luxury"
                required
              />
              <select
                name="designer"
                value={formData.designer}
                onChange={handleInputChange}
                className="input-luxury"
                required
              >
                <option value="">Select Designer</option>
                <option value="Sabyasachi">Sabyasachi</option>
                <option value="Manish Malhotra">Manish Malhotra</option>
                <option value="Tarun Tahiliani">Tarun Tahiliani</option>
              </select>

              <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={formData.sku}
                onChange={handleInputChange}
                className="input-luxury"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="input-luxury"
              >
                <option value="">Select Category</option>
                <option value="Lehenga">Lehenga</option>
                <option value="Saree">Saree</option>
                <option value="Suit">Suit</option>
              </select>

              <input
                type="number"
                name="mrp"
                placeholder="MRP (Original Price)"
                value={formData.mrp}
                onChange={handleInputChange}
                className="input-luxury"
              />
              <input
                type="number"
                name="sellingPrice"
                placeholder="Selling Price"
                value={formData.sellingPrice}
                onChange={handleInputChange}
                className="input-luxury"
                required
              />

              <input
                type="number"
                name="costPrice"
                placeholder="Cost Price"
                value={formData.costPrice}
                onChange={handleInputChange}
                className="input-luxury"
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                value={formData.stock}
                onChange={handleInputChange}
                className="input-luxury"
              />

              <textarea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="input-luxury md:col-span-2 resize-none"
              />

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 btn-luxury-secondary border-2 border-black py-3 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ivory-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Product Name</th>
                  <th className="text-left py-4 px-6 font-semibold">Designer</th>
                  <th className="text-left py-4 px-6 font-semibold">SKU</th>
                  <th className="text-left py-4 px-6 font-semibold">Price</th>
                  <th className="text-left py-4 px-6 font-semibold">Stock</th>
                  <th className="text-left py-4 px-6 font-semibold">Status</th>
                  <th className="text-left py-4 px-6 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-ivory-100 hover:bg-ivory-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{product.name}</td>
                    <td className="py-4 px-6">{product.designer}</td>
                    <td className="py-4 px-6 font-mono text-xs">{product.sku}</td>
                    <td className="py-4 px-6 font-semibold">${product.price}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${product.stock > 5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button className="p-2 hover:bg-ivory-200 rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 hover:bg-red-100 rounded transition-colors text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
