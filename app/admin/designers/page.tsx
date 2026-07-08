'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Plus, Edit, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'

interface Designer {
  id: string
  name: string
  commission: number
  products: number
  status: 'active' | 'inactive'
}

export default function DesignerManagementPage() {
  const [showForm, setShowForm] = useState(false)
  const [designers, setDesigners] = useState<Designer[]>([
    { id: '1', name: 'Sabyasachi Mukherjee', commission: 12, products: 45, status: 'active' },
    { id: '2', name: 'Manish Malhotra', commission: 15, products: 38, status: 'active' },
    { id: '3', name: 'Tarun Tahiliani', commission: 10, products: 52, status: 'active' },
    { id: '4', name: 'Anita Dongre', commission: 12, products: 41, status: 'active' },
  ])

  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    commission: '',
    website: '',
    instagram: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddDesigner = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.commission) {
      toast.error('Please fill in all required fields')
      return
    }

    const newDesigner: Designer = {
      id: Date.now().toString(),
      name: formData.name,
      commission: parseFloat(formData.commission),
      products: 0,
      status: 'active',
    }

    setDesigners([...designers, newDesigner])
    toast.success('Designer added successfully!')
    setShowForm(false)
    setFormData({ name: '', bio: '', commission: '', website: '', instagram: '' })
  }

  const handleDeleteDesigner = (id: string) => {
    if (window.confirm('Are you sure?')) {
      setDesigners(designers.filter((d) => d.id !== id))
      toast.success('Designer deleted')
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
            <h1 className="font-display text-3xl font-bold">Designer Management</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-luxury bg-champagne-500 text-black flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Designer
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Add Designer Form */}
        {showForm && (
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <h2 className="font-display font-bold text-2xl mb-6">Add New Designer</h2>
            <form onSubmit={handleAddDesigner} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Designer Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-luxury"
                required
              />
              <input
                type="number"
                name="commission"
                placeholder="Commission % (e.g., 12)"
                value={formData.commission}
                onChange={handleInputChange}
                className="input-luxury"
                required
              />

              <textarea
                name="bio"
                placeholder="Designer Bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="input-luxury md:col-span-2 resize-none"
              />

              <input
                type="url"
                name="website"
                placeholder="Website URL"
                value={formData.website}
                onChange={handleInputChange}
                className="input-luxury"
              />

              <input
                type="text"
                name="instagram"
                placeholder="Instagram Handle"
                value={formData.instagram}
                onChange={handleInputChange}
                className="input-luxury"
              />

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-luxury bg-black text-ivory-50 py-3 font-semibold hover:bg-warm-beige-900"
                >
                  Add Designer
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

        {/* Designers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designers.map((designer) => (
            <div key={designer.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{designer.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-warm-beige-700">Designer</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                  {designer.status}
                </span>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-ivory-200">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Commission</span>
                  <span className="font-semibold">{designer.commission}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-beige-700">Products</span>
                  <span className="font-semibold">{designer.products}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 p-2 hover:bg-ivory-200 rounded transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDesigner(designer.id)}
                  className="flex-1 p-2 hover:bg-red-100 rounded transition-colors flex items-center justify-center gap-2 text-sm font-medium text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
