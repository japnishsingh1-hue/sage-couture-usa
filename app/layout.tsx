import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'SAGE COUTURE USA - Luxury Indian Fashion',
  description:
    'Discover India\'s finest luxury designers. Premium multi-designer marketplace for Indian fashion in the USA.',
  keywords:
    'luxury fashion, Indian designers, Indian couture, wedding wear, pret wear',
  openGraph: {
    title: 'SAGE COUTURE USA - Luxury Indian Fashion',
    description:
      'Premium multi-designer marketplace for Indian luxury fashion in the USA',
    url: 'https://sagecouture.com',
    siteName: 'SAGE COUTURE USA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-ivory-50 text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
