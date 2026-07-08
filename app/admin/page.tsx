'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  ShoppingBag,
  Users,
  TrendingUp,
  Package,
  Eye,
  ChevronRight,
} from 'lucide-react'

interface DashboardStats {
  totalSales: number
  totalOrders: number
  totalCustomers: number
  inventoryValue: number
  totalAppointments: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalSales: 125000,
    totalOrders: 342,
    totalCustomers: 856,
    inventoryValue: 450000,
    totalAppointments: 24,
  })

  const [recentOrders, setRecentOrders] = useState([
    { id: 'SC234123', customer: 'Priya Sharma', amount: 3500, status: 'Processing' },
    { id: 'SC234122', customer: 'Anjali Patel', amount: 2200, status: 'Shipped' },
    { id: 'SC234121', customer: 'Meera Kapoor', amount: 4500, status: 'Delivered' },
  ])

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header */}
      <div className="bg-black text-ivory-50 px-8 py-12">
        <h1 className="font-display text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-ivory-300 mt-2">Welcome back! Here's your business overview.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {/* Total Sales */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">Total Sales</p>
                <p className="font-display font-bold text-3xl text-black">${(stats.totalSales / 1000).toFixed(0)}K</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12% from last month
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-champagne-600" />
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">Total Orders</p>
                <p className="font-display font-bold text-3xl text-black">{stats.totalOrders}</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 8 new today
                </p>
              </div>
              <ShoppingBag className="w-8 h-8 text-champagne-600" />
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">Total Customers</p>
                <p className="font-display font-bold text-3xl text-black">{stats.totalCustomers}</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 24 new this week
                </p>
              </div>
              <Users className="w-8 h-8 text-champagne-600" />
            </div>
          </div>

          {/* Inventory Value */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">Inventory Value</p>
                <p className="font-display font-bold text-3xl text-black">${(stats.inventoryValue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-orange-600 mt-2">4 low stock items</p>
              </div>
              <Package className="w-8 h-8 text-champagne-600" />
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-beige-700 mb-2">Appointments</p>
                <p className="font-display font-bold text-3xl text-black">{stats.totalAppointments}</p>
                <p className="text-xs text-purple-600 mt-2">6 pending approval</p>
              </div>
              <Eye className="w-8 h-8 text-champagne-600" />
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Product Management */}
          <Link href="/admin/products" className="group">
            <div className="bg-white rounded-lg p-8 shadow-sm group-hover:shadow-lg transition-all hover:-translate-y-1">
              <Package className="w-12 h-12 text-champagne-600 mb-4" />
              <h2 className="font-display font-bold text-2xl mb-2">Product Management</h2>
              <p className="text-warm-beige-700 mb-6">Add, edit, and manage all products</p>
              <div className="flex items-center text-champagne-600 group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Manage Products</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Order Management */}
          <Link href="/admin/orders" className="group">
            <div className="bg-white rounded-lg p-8 shadow-sm group-hover:shadow-lg transition-all hover:-translate-y-1">
              <ShoppingBag className="w-12 h-12 text-champagne-600 mb-4" />
              <h2 className="font-display font-bold text-2xl mb-2">Order Management</h2>
              <p className="text-warm-beige-700 mb-6">Track and manage all orders</p>
              <div className="flex items-center text-champagne-600 group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">View Orders</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Designer Management */}
          <Link href="/admin/designers" className="group">
            <div className="bg-white rounded-lg p-8 shadow-sm group-hover:shadow-lg transition-all hover:-translate-y-1">
              <Users className="w-12 h-12 text-champagne-600 mb-4" />
              <h2 className="font-display font-bold text-2xl mb-2">Designer Management</h2>
              <p className="text-warm-beige-700 mb-6">Manage designer profiles and commissions</p>
              <div className="flex items-center text-champagne-600 group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Manage Designers</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display font-bold text-2xl">Recent Orders</h2>
            <Link href="/admin/orders" className="text-champagne-600 hover:underline text-sm font-semibold">
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ivory-200">
                  <th className="text-left py-4 px-4 font-semibold">Order ID</th>
                  <th className="text-left py-4 px-4 font-semibold">Customer</th>
                  <th className="text-left py-4 px-4 font-semibold">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-ivory-100 hover:bg-ivory-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-xs">{order.id}</td>
                    <td className="py-4 px-4">{order.customer}</td>
                    <td className="py-4 px-4 font-semibold">${order.amount}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-semibold ${
                          order.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {order.status}
                      </span>
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
