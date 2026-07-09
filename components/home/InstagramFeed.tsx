'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

const instagramPosts = [
  {
    id: 1,
    title: 'Teal Blue Lehenga',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/EFA0F34C-7CD9-45E9-B003-D0F86ED1F7B0.jpg',
    likes: '2.5K',
    comments: '340',
    caption: '✨ Teal Blue Embroidered Lehenga - Pure magic in every stitch. #SageCouture #BridalLehenga'
  },
  {
    id: 2,
    title: 'Plum Floral Lehenga',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/98F43E1B-2B86-44AA-B8FA-1406E5B22614.jpg',
    likes: '1.8K',
    comments: '215',
    caption: '🌟 Embroidered Plum Floral - Modern meets Traditional. #FusionFashion #IndoWestern'
  },
  {
    id: 3,
    title: 'Navy Blue Lehenga',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/54334330-0C7F-40C0-BD20-9ED12852F6A6.jpg',
    likes: '2.1K',
    comments: '268',
    caption: '👑 Navy Blue Shimmer - Timeless elegance & glamour. #SareeStyle #HandEmbroidered'
  },
  {
    id: 4,
    title: 'Purple Embroidered Suit',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/2501A81C-EE93-4F66-A4F2-746943C90C24.jpg',
    likes: '1.6K',
    comments: '198',
    caption: '💎 Royal Purple - Sophistication personified. #MensWear #SageStyle'
  },
  {
    id: 5,
    title: 'Blush Embroidered Lehenga',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/AE2FA22E-584E-4DD6-8088-DFFFA1F52885.jpg',
    likes: '3.2K',
    comments: '412',
    caption: '✨ Blush Ivory Silk - Red carpet ready. #EveningWear #Glamour'
  },
  {
    id: 6,
    title: 'Yellow Sharara Suit',
    image: 'https://cdn.shopify.com/s/files/1/0664/8263/5037/files/E0980783-7266-4621-8448-1B2F4ABFC668.jpg',
    likes: '2.3K',
    comments: '289',
    caption: '🎀 Yellow Floral - Perfectly paired elegance. #CoordSet #ReadyToWear'
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8" />
            <h2 className="font-display text-4xl font-bold">Follow @sage_couture</h2>
          </div>
          <p className="text-lg text-warm-beige-700">Join our Instagram community for daily inspiration</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-ivory-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm max-w-xs">{post.caption}</p>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <p className="font-semibold">{post.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://instagram.com/sage_couture"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 inline-flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
