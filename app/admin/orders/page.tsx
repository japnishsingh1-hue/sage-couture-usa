'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Eye, MoreVertical } from 'lucide-react'

interface Order {
  id: string
  orderNumber: string
  customer: string
  amount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'completed' | 'failed'
  date: string
}

export default function OrderManagementPage() {
  const [orders, setOrders] = useState<Order[]>([
    { id: '1', orderNumber: 'SC234123', customer: 'Priya Sharma', amount: 3500, status: 'processing', paymentStatus: 'completed', date: '2024-01-15' },
    { id: '2', orderNumber: 'SC234122', customer: 'Anjali Patel', amount: 2200, status: 'shipped', paymentStatus: 'completed', date: '2024-01-14' },
    { id: '3', orderNumber: 'SC234121', customer: 'Meera Kapoor', amount: 4500, status: 'delivered', paymentStatus: 'completed', date: '2024-01-13' },
    { id: '4', orderNumber: 'SC234120', customer: 'Kavya Singh', amount: 1800, status: 'pending', paymentStatus: 'pending', date: '2024-01-12' },
  ])

  const [filterStatus, setFilterStatus] = useState<string | null>(null)

  const filteredOrders = filterStatus ? orders.filter((o) => o.status === filterStatus) : orders

  const statusColor: Record<string, string> = {
    pending: 'bg-gray-100 text-gray-800',
    processing: 'bg-yellow-100 text-yellow-800',
    shipped: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  }

  const paymentColor: Record<string, string> = {
    pending: 'bg-gray-100 text-gray-800',
    completed: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header */}
      <div className="bg-black text-ivory-50 px-8 py-8">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:bg-warm-beige-900 p-2 rounded">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-display text-3xl font-bold">Order Management</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilterStatus(null)}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
              filterStatus === null ? 'bg-black text-ivory-50' : 'bg-white text-black border border-ivory-300'
            }`}
          >
            All Orders
          </button>
          {(['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded text-sm font-semibold transition-colors capitalize ${
                filterStatus === status ? 'bg-black text-ivory-50' : 'bg-white text-black border border-ivory-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ivory-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold">Customer</th>
                  <th className="text-left py-4 px-6 font-semibold">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold">Status</th>
                  <th className="text-left py-4 px-6 font-semibold">Payment</th>
                  <th className="text-left py-4 px-6 font-semibold">Date</th>
                  <th className="text-left py-4 px-6 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-ivory-100 hover:bg-ivory-50 transition-colors">
                    <td className="py-4 px-6 font-mono text-xs font-semibold">{order.orderNumber}</td>
                    <td className="py-4 px-6">{order.customer}</td>
                    <td className="py-4 px-6 font-semibold">${order.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded text-xs font-semibold capitalize ${statusColor[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded text-xs font-semibold capitalize ${paymentColor[order.paymentStatus]}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-warm-beige-700">{order.date}</td>
                    <td className="py-4 px-6">
                      <button className="p-2 hover:bg-ivory-200 rounded transition-colors inline-block">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-warm-beige-600">No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
