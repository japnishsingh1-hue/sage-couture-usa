import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedDesigners from '@/components/home/FeaturedDesigners'
import NewArrivals from '@/components/home/NewArrivals'
import TrendingNow from '@/components/home/TrendingNow'
import WeddingEdit from '@/components/home/WeddingEdit'
import LuxuryPret from '@/components/home/LuxuryPret'
import CelebInspired from '@/components/home/CelebInspired'
import Exclusives from '@/components/home/Exclusives'
import Testimonials from '@/components/home/Testimonials'
import InstagramSection from '@/components/home/InstagramSection'

export const metadata: Metadata = {
  title: 'SAGE COUTURE USA - Luxury Indian Fashion Marketplace',
  description:
    'Discover India\'s finest designers at SAGE COUTURE USA. Premium multi-designer marketplace for luxury Indian fashion.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDesigners />
      <NewArrivals />
      <TrendingNow />
      <WeddingEdit />
      <LuxuryPret />
      <CelebInspired />
      <Exclusives />
      <Testimonials />
      <InstagramSection />
    </>
  )
}
