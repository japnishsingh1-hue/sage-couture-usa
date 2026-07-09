import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Posters from '@/components/home/Posters'
import NewArrivals from '@/components/home/NewArrivals'
import TrendingNow from '@/components/home/TrendingNow'
import WeddingEdit from '@/components/home/WeddingEdit'
import LuxuryPret from '@/components/home/LuxuryPret'
import InstagramFeed from '@/components/home/InstagramFeed'
import Reviews from '@/components/home/Reviews'
import CelebInspired from '@/components/home/CelebInspired'
import Exclusives from '@/components/home/Exclusives'

export const metadata: Metadata = {
  title: 'SAGE COUTURE - Premium Indian Fashion & Luxury Wear',
  description:
    'Discover exquisite Indian haute couture, bridal collections, and designer wear. Premium quality, fast shipping, 24/7 support.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Posters />
      <NewArrivals />
      <TrendingNow />
      <WeddingEdit />
      <LuxuryPret />
      <CelebInspired />
      <InstagramFeed />
      <Reviews />
      <Exclusives />
    </>
  )
}
