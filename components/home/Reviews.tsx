'use client'

import { motion } from 'framer-motion'
import { Star, CheckCircle } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'New York, USA',
    rating: 5,
    title: 'Absolutely Stunning!',
    text: 'The quality of the lehenga exceeded all my expectations. The craftsmanship is impeccable and the customer service was outstanding. Highly recommend SAGE COUTURE!',
    verified: true,
    image: '👰'
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Los Angeles, USA',
    rating: 5,
    title: 'Perfect for My Engagement',
    text: 'I ordered the Indo-western fusion outfit for my engagement and I felt like a queen! The fit was perfect and the embroidery work is just magnificent. Worth every penny!',
    verified: true,
    image: '💎'
  },
  {
    id: 3,
    name: 'Meera Kapoor',
    location: 'San Francisco, USA',
    rating: 5,
    title: 'Best Wedding Shopping Experience',
    text: 'From the moment I browsed their collection to the delivery of my bridal set, everything was seamless. The team helped me select the perfect pieces. Couldn\'t be happier!',
    verified: true,
    image: '👑'
  },
  {
    id: 4,
    name: 'Kavya Singh',
    location: 'Chicago, USA',
    rating: 5,
    title: 'Premium Quality & Fast Delivery',
    text: 'Ordered a saree and it arrived in perfect condition within the promised timeframe. The packaging was luxurious and protective. Definitely ordering again!',
    verified: true,
    image: '✨'
  },
]

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-warm-beige-700">Join thousands of satisfied customers worldwide</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Happy Customers', value: '5000+' },
            { label: 'Average Rating', value: '4.9★' },
            { label: 'Countries Served', value: '15+' },
            { label: 'Years in Business', value: '7' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-ivory-50 rounded-lg"
            >
              <p className="font-display text-3xl font-bold text-champagne-600 mb-2">{stat.value}</p>
              <p className="text-warm-beige-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ivory-50 to-champagne-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-champagne-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-4xl">{review.image}</p>
                    <div>
                      <p className="font-semibold text-black">{review.name}</p>
                      <p className="text-xs text-warm-beige-700">{review.location}</p>
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne-600 text-champagne-600" />
                ))}
              </div>

              {/* Title & Text */}
              <h4 className="font-bold text-black mb-2">{review.title}</h4>
              <p className="text-warm-beige-800 text-sm leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Badge */}
              <div className="mt-4 pt-4 border-t border-champagne-300">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  ✓ Verified Purchase
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
