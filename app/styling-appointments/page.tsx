'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react'

export default function StylingAppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budgetMin: '',
    budgetMax: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(formData).slice(0, 6).some((v) => !v)) {
      toast.error('Please fill in all required fields')
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Appointment booked successfully! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        occasion: '',
        budgetMin: '',
        budgetMax: '',
        preferredDate: '',
        preferredTime: '',
        notes: '',
      })
    } catch (error) {
      toast.error('Failed to book appointment')
    }
  }

  return (
    <div className="min-h-screen bg-ivory-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Book Your Styling Appointment</h1>
          <p className="text-lg text-warm-beige-700">
            Connect with our expert stylists to find your perfect look. Available for in-person and virtual consultations.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-warm-beige-600" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-luxury pl-10 w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-warm-beige-600" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-luxury pl-10 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-warm-beige-600" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-luxury pl-10 w-full"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h2 className="font-display font-bold text-2xl mb-6">Appointment Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Occasion *</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="input-luxury w-full"
                    required
                  >
                    <option value="">Select an occasion</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="reception">Reception</option>
                    <option value="party">Party/Event</option>
                    <option value="custom">Custom Outfit</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Budget Range - Min *</label>
                    <input
                      type="number"
                      name="budgetMin"
                      value={formData.budgetMin}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000"
                      className="input-luxury w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Budget Range - Max *</label>
                    <input
                      type="number"
                      name="budgetMax"
                      value={formData.budgetMax}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000"
                      className="input-luxury w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="input-luxury w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="input-luxury w-full"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any specific preferences or requirements..."
                    rows={4}
                    className="input-luxury w-full resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-luxury bg-black text-ivory-50 py-4 text-lg font-semibold hover:bg-warm-beige-900 transition-all"
            >
              Book Appointment
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-ivory-50 rounded-lg border border-ivory-200">
            <p className="text-sm text-warm-beige-800">
              <strong>Note:</strong> Our styling team will contact you within 24 hours to confirm your appointment and discuss your preferences in detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
