'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingBag, Calendar, MapPin, LogOut } from 'lucide-react'
import { formatPrice, formatDate } from '@/lib/utils'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('orders')
  const [user] = useState({
    id: '1',
    email: 'priya@example.com',
    fullName: 'Priya Sharma',
    phone: '+1 (555) 123-4567',
    avatar: 'PS',
  })

  const [orders] = useState([
    {
      id: '1',
      orderNumber: 'SC234123',
      date: '2024-01-15',
      total: 3500,
      status: 'Delivered',
      items: 2,
    },
    {
      id: '2',
      orderNumber: 'SC234122',
      date: '2024-01-10',
      total: 2200,
      status: 'Shipped',
      items: 1,
    },
  ])

  const [wishlist] = useState([
    { id: '1', name: 'Embroidered Lehenga', designer: 'Sabyasachi', price: 4500 },
    { id: '2', name: 'Silk Saree', designer: 'Manish Malhotra', price: 2200 },
  ])

  const [appointments] = useState([
    {
      id: '1',
      occasion: 'Wedding',
      date: '2024-02-15',
      time: '2:00 PM',
      status: 'Confirmed',
    },
  ])

  const [addresses] = useState([
    {
      id: '1',
      fullName: 'Priya Sharma',
      street: '123 Park Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true,
    },
  ])

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ]

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-champagne-500 rounded-full flex items-center justify-center text-2xl font-bold">
              {user.avatar}
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">{user.fullName}</h1>
              <p className="text-warm-beige-700">{user.email}</p>
            </div>
          </div>
          <button className="p-3 hover:bg-white rounded-lg transition-colors">
            <LogOut className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-ivory-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 px-4 whitespace-nowrap font-semibold transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-warm-beige-700 hover:text-black'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-8">
          {/* My Orders */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">Order History</h2>
              {orders.length === 0 ? (
                <p className="text-warm-beige-700 text-center py-12">No orders yet</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-ivory-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-mono text-xs text-warm-beige-600 mb-1">{order.orderNumber}</p>
                          <p className="font-display font-semibold text-lg">{formatPrice(order.total)}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-warm-beige-700 mb-4">
                        {formatDate(order.date)} • {order.items} item{order.items !== 1 ? 's' : ''}
                      </p>
                      <Link href={`/orders/${order.id}`} className="text-champagne-600 hover:underline text-sm font-semibold">
                        View Details →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Wishlist */}
          {activeTab === 'wishlist' && (
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">My Wishlist</h2>
              {wishlist.length === 0 ? (
                <p className="text-warm-beige-700 text-center py-12">Your wishlist is empty</p>
              ) : (
                <div className="space-y-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border border-ivory-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-1">{item.designer}</p>
                        <p className="font-display font-semibold text-lg">{item.name}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-lg">{formatPrice(item.price)}</p>
                        <button className="btn-luxury bg-black text-ivory-50 px-6 py-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Appointments */}
          {activeTab === 'appointments' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display font-bold text-2xl">My Appointments</h2>
                <Link href="/styling-appointments" className="btn-luxury-secondary border-2 border-black px-4 py-2 text-sm">
                  Book New
                </Link>
              </div>
              {appointments.length === 0 ? (
                <p className="text-warm-beige-700 text-center py-12">No appointments scheduled</p>
              ) : (
                <div className="space-y-4">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="border border-ivory-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-display font-bold text-lg mb-2">{apt.occasion}</p>
                          <p className="text-sm text-warm-beige-700">
                            {formatDate(apt.date)} at {apt.time}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                          {apt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Addresses */}
          {activeTab === 'addresses' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display font-bold text-2xl">Saved Addresses</h2>
                <button className="btn-luxury-secondary border-2 border-black px-4 py-2 text-sm">
                  Add New
                </button>
              </div>
              {addresses.length === 0 ? (
                <p className="text-warm-beige-700 text-center py-12">No saved addresses</p>
              ) : (
                <div className="space-y-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="border border-ivory-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-display font-bold text-lg mb-2">{addr.fullName}</p>
                          <p className="text-sm text-warm-beige-700">
                            {addr.street}
                            <br />
                            {addr.city}, {addr.state} {addr.zipCode}
                          </p>
                        </div>
                        {addr.isDefault && (
                          <span className="px-2 py-1 bg-champagne-200 text-champagne-800 text-xs font-semibold rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="text-sm text-champagne-600 hover:underline">Edit</button>
                        <span className="text-warm-beige-400">•</span>
                        <button className="text-sm text-red-600 hover:underline">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
