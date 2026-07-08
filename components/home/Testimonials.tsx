'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'SAGE COUTURE helped me find the perfect wedding lehenga. The quality and craftsmanship are unmatched!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali Patel',
    text: 'Finally, authentic Indian luxury fashion at my doorstep in NYC. Love the curation!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    text: 'The personal styling consultation was incredible. The team really understands luxury fashion.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="luxury-section bg-white py-24">
      <div className="text-center mb-16">
        <h2 className="luxury-heading">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-ivory-50 p-8 rounded-lg"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-champagne-600 text-champagne-600" />
              ))}
            </div>
            <p className="text-warm-beige-800 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
            <p className="font-semibold text-black">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
