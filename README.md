# SAGE COUTURE USA

A premium, production-ready luxury Indian fashion e-commerce marketplace built with modern web technologies.

**Live Demo**: https://sagecouture.com (coming soon)

## 🎨 Design Philosophy

SAGE COUTURE USA embodies luxury through:
- **Minimalist aesthetic** with premium typography
- **Curated color palette**: Ivory, Champagne Gold, Black, Warm Beige
- **Smooth animations** with Framer Motion
- **Editorial magazine** feeling for luxury fashion
- **Mobile-first responsive design**

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: ShadCN UI + Radix UI
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Notifications**: React Toastify
- **Icons**: Lucide React

## 📋 Features

### Customer Features
- ✅ Luxury home page with hero, featured designers, trending products
- ✅ Product catalog with advanced filtering (designer, category, price, color, size)
- ✅ Product detail pages with gallery, size guides, care instructions
- ✅ Shopping cart with persistent storage
- ✅ Multi-step checkout with Stripe integration
- ✅ User accounts with order history
- ✅ Wishlist functionality
- ✅ Designer profile pages
- ✅ Custom styling appointment booking system
- ✅ Responsive mobile design
- ✅ SEO optimized

### Admin Dashboard
- ✅ Dashboard with real-time analytics
- ✅ Product management (add, edit, delete)
- ✅ Order management with filtering
- ✅ Designer management
- ✅ Customer CRM
- ✅ Appointment management

## 📁 Project Structure

```
sage-couture-usa/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── shop/
│   │   └── page.tsx              # Product listing
│   ├── products/
│   │   └── [id]/page.tsx         # Product detail
│   ├── cart/
│   │   └── page.tsx              # Shopping cart
│   ├── checkout/
│   │   └── page.tsx              # Checkout flow
│   ├── styling-appointments/
│   │   └── page.tsx              # Appointment booking
│   └── admin/
│       ├── page.tsx              # Admin dashboard
│       ├── products/page.tsx      # Product management
│       ├── orders/page.tsx        # Order management
│       └── designers/page.tsx     # Designer management
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedDesigners.tsx
│   │   ├── NewArrivals.tsx
│   │   ├── TrendingNow.tsx
│   │   ├── WeddingEdit.tsx
│   │   ├── LuxuryPret.tsx
│   │   ├── CelebInspired.tsx
│   │   ├── Exclusives.tsx
│   │   ├── Testimonials.tsx
│   │   └── InstagramSection.tsx
│   ├── shop/
│   │   ├── FilterSidebar.tsx
│   │   ├── ProductGrid.tsx
│   │   └── SortDropdown.tsx
│   └── products/
│       └── ProductCard.tsx
├── types/
│   └── index.ts                  # TypeScript types
├── lib/
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Utility functions
├── store/
│   ├── cart.ts                   # Cart state
│   └── auth.ts                   # Auth state
├── supabase/
│   └── schema.sql               # Database schema
├── scripts/
│   └── seed.js                  # Seed data script
├── public/
│   └── images/                  # Image assets
├── .env.example                 # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sage-couture-usa.git
   cd sage-couture-usa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. **Set up Supabase Database**
   
   a. Create a new Supabase project at https://supabase.com
   
   b. Run the schema file:
      ```bash
      # In Supabase dashboard, go to SQL Editor and run:
      # Copy contents of supabase/schema.sql and execute
      ```
   
   c. Seed the database:
      ```bash
      npm run db:seed
      ```

5. **Configure Stripe**
   - Create a Stripe account at https://stripe.com
   - Get your publishable and secret keys from Dashboard
   - Add webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`

6. **Run development server**
   ```bash
   npm run dev
   ```

7. **Open browser**
   Navigate to `http://localhost:3000`

## 📱 Features Breakdown

### Home Page
- Hero section with CTA buttons
- Featured designers carousel
- New arrivals products
- Trending items
- Wedding collection spotlight
- Luxury pret section
- Celebrity inspired looks
- Exclusive SAGE Couture items
- Customer testimonials
- Instagram feed integration

### Product Browsing
- Advanced filtering system
- Multiple sorting options
- Product cards with wishlist
- Quick view functionality
- Responsive grid layout

### Product Detail
- Multiple product images
- Detailed specifications
- Size guide
- Care instructions
- Related products
- Video consultation booking
- Add to cart/Buy now options

### Shopping Experience
- Persistent shopping cart
- Real-time calculations
- Coupon code support
- Multi-step checkout
- Stripe payment integration
- Order confirmation

### Admin Dashboard
- Sales analytics
- Order management
- Product management
- Designer management
- Customer database
- Appointment tracking

## 🔐 Security Features

- Row-level security policies in Supabase
- Secure Stripe payment processing
- Authentication with Supabase Auth
- Protected admin routes
- Input validation with Zod
- CORS configuration

## 📊 Database Schema

### Core Tables
- **users**: Customer profiles
- **designers**: Designer information
- **products**: Product catalog (100+ items)
- **inventory**: Stock management by size/color
- **categories**: Product categories
- **orders**: Order history
- **order_items**: Line items for orders
- **addresses**: Shipping addresses
- **wishlist**: User wishlist items
- **appointments**: Styling appointments

## 🎯 Performance Optimizations

- Image optimization with Next.js
- Code splitting and lazy loading
- CSS-in-JS optimization
- Database query optimization with indexes
- Caching strategies
- Responsive image sizing

## 🌍 Scalability

The architecture supports:
- 100+ designers
- 50,000+ products
- Millions of users
- High traffic loads
- Global CDN distribution

## 📚 API Endpoints (Ready to implement)

### Products
- `GET /api/products`
- `GET /api/products/[id]`
- `POST /api/products` (Admin)
- `PUT /api/products/[id]` (Admin)
- `DELETE /api/products/[id]` (Admin)

### Orders
- `GET /api/orders`
- `POST /api/orders`
- `PUT /api/orders/[id]`

### Designers
- `GET /api/designers`
- `GET /api/designers/[id]`

### Appointments
- `GET /api/appointments`
- `POST /api/appointments`

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t sage-couture .
docker run -p 3000:3000 sage-couture
```

### Environment Setup for Production
- Set up environment variables in production
- Configure Supabase production database
- Set up Stripe production keys
- Enable SSL/HTTPS
- Configure CDN for images
- Set up monitoring and logging

## 📦 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Database seeding
npm run db:seed
```

## 🔧 Configuration

### Tailwind Customization
Edit `tailwind.config.ts` to customize:
- Colors (Ivory, Champagne, Beige)
- Typography (Playfair Display, Inter)
- Spacing scale
- Animation timings

### Stripe Configuration
- Publishable key: Public frontend
- Secret key: Secure backend only
- Webhook events: order.payment_succeeded

## 📞 Support & Contact

- **Email**: hello@sagecouture.com
- **Instagram**: @sagecoutureusa
- **Website**: https://sagecouture.com

## 📄 License

All rights reserved. SAGE COUTURE USA™

## 🙏 Acknowledgments

Inspired by:
- Pernia's Pop-Up Shop
- Farfetch
- Net-a-Porter
- Mytheresa

## 🚦 Roadmap

- [ ] AI personal stylist chatbot
- [ ] Live shopping events
- [ ] Virtual try-on with AR
- [ ] Designer collaboration features
- [ ] Advanced analytics dashboard
- [ ] Mobile app (iOS/Android)
- [ ] Multi-language support
- [ ] Same-day delivery in major cities

---

**Made with ❤️ for luxury fashion enthusiasts** ✨
