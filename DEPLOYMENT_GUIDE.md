# 🚀 SAGE COUTURE - Complete Deployment Guide

## Quick Start (5 minutes)

### Option 1: Vercel (Easiest - FREE)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts and get your live URL!
```

### Option 2: Docker (Local Server)
```bash
# 1. Build image
docker build -t sage-couture .

# 2. Run container
docker run -p 3000:3000 sage-couture

# 3. Visit http://localhost:3000
```

### Option 3: Traditional Server (AWS, Digital Ocean, etc.)
```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Clone repo
git clone https://github.com/yourusername/sage-couture-usa.git
cd sage-couture-usa

# 3. Install & build
npm install
npm run build

# 4. Start with PM2
npm install -g pm2
pm2 start "npm start"
pm2 save

# 5. Setup Nginx reverse proxy
# Point domain to localhost:3000
```

---

## Environment Setup

### Required Services (All FREE tier available)

1. **Supabase** (Database)
   - Sign up: https://supabase.com
   - Create project
   - Copy credentials to `.env.local`

2. **Stripe** (Payments)
   - Sign up: https://stripe.com
   - Get test keys
   - Add to `.env.local`

3. **Vercel/GitHub** (Hosting)
   - Push to GitHub
   - Connect to Vercel
   - Auto-deploy on push

### Environment Variables (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

---

## Features Included

✅ **10+ Real Products** from your Shopify store
✅ **Beautiful Homepage** with Instagram feed & reviews
✅ **Product Categories** - Lehengas, Suits, Co-ord Sets, etc.
✅ **Shopping Cart** with persistent storage
✅ **Checkout Flow** with Stripe integration
✅ **Admin Dashboard** for managing products
✅ **USD Pricing** converted from your INR prices
✅ **Responsive Design** mobile-first
✅ **Fast Loading** optimized images & code splitting
✅ **SEO Ready** with meta tags and schema

---

## Customization Guide

### Change Brand Colors
Edit `tailwind.config.ts`:
- `ivory`, `champagne`, `warm-beige` color palettes
- Change to your brand colors

### Update Contact Info
Edit `components/layout/Footer.tsx`:
- Email, phone, address
- Social media links

### Add More Products
Edit `lib/shopify.ts`:
- Add products from your Shopify store
- Update images and pricing

### Customize Homepage
Edit `app/page.tsx`:
- Reorder sections
- Add/remove components
- Update copy

---

## Deployment Checklist

- [ ] Update `.env.local` with real credentials
- [ ] Test locally: `npm run dev`
- [ ] Check all pages load correctly
- [ ] Test shopping cart
- [ ] Test Stripe checkout (use test card: 4242 4242 4242 4242)
- [ ] Push to GitHub
- [ ] Deploy to Vercel/hosting
- [ ] Test live site
- [ ] Setup custom domain
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Monitor performance

---

## Cost Breakdown (Monthly)

| Service | Cost | Notes |
|---------|------|-------|
| Hosting (Vercel) | FREE | Up to 100GB/month |
| Database (Supabase) | FREE | Up to 500MB storage |
| Payments (Stripe) | 2.9% + $0.30 | Per transaction |
| Domain | $10-15 | Annual/yearly |
| **Total** | **Minimal** | **Pay only on sales** |

---

## Performance Tips

1. **Images**: Automatically optimized by Next.js
2. **Caching**: Browser & CDN caching enabled
3. **Database**: Indexed for fast queries
4. **Code**: Minified & split automatically

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **Vercel Docs**: https://vercel.com/docs

---

## Troubleshooting

### "npm not found"
- Install Node.js from https://nodejs.org
- Restart terminal

### "Stripe key invalid"
- Use TEST keys (pk_test_, sk_test_) in development
- Use LIVE keys (pk_live_, sk_live_) in production

### "Images not loading"
- Check Shopify URLs are accessible
- Verify CORS settings

### "Database connection error"
- Verify Supabase credentials
- Check network connection
- Ensure database is active in Supabase

---

## Live Examples

- **Homepage**: Shows hero, products, Instagram, reviews
- **Shop**: Browse all categories
- **Products**: Real images from your store
- **Cart**: Add/remove items, persistent storage
- **Checkout**: Full payment flow with Stripe
- **Admin**: Manage products and orders

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start locally: `npm run dev`
3. ✅ Visit: http://localhost:3000
4. ✅ Create Supabase & Stripe accounts
5. ✅ Add credentials to `.env.local`
6. ✅ Deploy to Vercel
7. ✅ Configure custom domain
8. ✅ Enable analytics
9. ✅ Setup email notifications
10. ✅ Launch! 🎉

---

**Ready to go live?** Follow the quick start above!

For detailed questions, check the README.md or INSTALLATION_GUIDE.md
