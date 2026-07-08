# SAGE COUTURE USA - Complete Installation Guide

This guide provides step-by-step instructions to set up and deploy SAGE COUTURE USA locally and in production.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Database Setup](#database-setup)
4. [Environment Configuration](#environment-configuration)
5. [Running the Application](#running-the-application)
6. [Production Deployment](#production-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- **Node.js**: 18.x or higher ([Download](https://nodejs.org))
- **npm**: 9.x or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com))

### Required Accounts
1. **Supabase Account** - https://supabase.com (FREE tier available)
2. **Stripe Account** - https://stripe.com (FREE to start)
3. **Vercel Account** (Optional) - https://vercel.com (for deployment)

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/sage-couture-usa.git
cd sage-couture-usa
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### Step 3: Create Environment File

Copy the example environment file:

```bash
cp .env.example .env.local
```

Do NOT commit `.env.local` to version control!

---

## Database Setup

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in project details:
   - **Name**: sage-couture-usa
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your location
4. Wait for project creation (2-3 minutes)

### Step 2: Get Supabase Credentials

1. Go to Project Settings → API
2. Copy these values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the entire contents of `supabase/schema.sql`
4. Paste into the query editor
5. Click **Run**
6. Wait for success message

### Step 4: Seed Sample Data

```bash
npm run db:seed
```

This populates the database with:
- 10 luxury designers
- 100 products across categories
- Inventory data with sizes and colors
- Product categories

**Expected output:**
```
✅ Added 10 designers
✅ Added 100 products
✅ Added 600 inventory items
✅ Added 8 categories
🎉 Database seeding completed successfully!
```

---

## Environment Configuration

### Step 1: Supabase Credentials

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 2: Stripe Setup

1. Go to https://stripe.com/dashboard
2. Go to **Developers** → **API keys**
3. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

Update `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51234567890...
STRIPE_SECRET_KEY=sk_test_1234567890...
```

### Step 3: Complete .env.local

Your final `.env.local` should look like:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51234567890...
STRIPE_SECRET_KEY=sk_test_1234567890...
STRIPE_WEBHOOK_SECRET=whsec_test_1234567890...

# API
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### Access Points

- **Home**: http://localhost:3000
- **Shop**: http://localhost:3000/shop
- **Admin Dashboard**: http://localhost:3000/admin
- **Styling Appointments**: http://localhost:3000/styling-appointments

### Test Credentials

**Stripe Test Cards:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits (e.g., 123)

---

## Production Deployment

### Option 1: Vercel (Recommended)

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Deploy**
```bash
vercel
```

**Step 3: Set Environment Variables**
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
```

### Option 2: Docker Deployment

**Build Docker Image:**
```bash
docker build -t sage-couture:latest .
```

**Run Container:**
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  -e SUPABASE_SERVICE_ROLE_KEY=your_key \
  -e NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key \
  -e STRIPE_SECRET_KEY=your_key \
  sage-couture:latest
```

### Option 3: Self-Hosted (VPS/AWS)

**1. Connect to your server:**
```bash
ssh user@your-server.com
```

**2. Install dependencies:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**3. Clone repository:**
```bash
git clone https://github.com/yourusername/sage-couture-usa.git
cd sage-couture-usa
```

**4. Install and build:**
```bash
npm install
npm run build
```

**5. Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start "npm start" --name "sage-couture"
pm2 save
```

**6. Setup Nginx reverse proxy:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Post-Deployment Configuration

### 1. Update Stripe Webhook

**Local Testing:**
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

**Production:**
1. Go to Stripe Dashboard → **Webhooks**
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events: `charge.succeeded`, `charge.failed`
4. Copy webhook secret → `STRIPE_WEBHOOK_SECRET`

### 2. Configure CORS

Update Supabase project settings for your domain.

### 3. Setup Email Notifications

Add SendGrid API key to `.env.local` for order confirmations.

---

## Troubleshooting

### Common Issues

**Issue: "Supabase connection failed"**
- Verify credentials in `.env.local`
- Check internet connection
- Ensure Supabase project is running

**Issue: "Stripe key invalid"**
- Verify you're using test keys in development
- Check key format (pk_test_ or sk_test_)
- Regenerate keys if needed

**Issue: "Port 3000 already in use"**
```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

**Issue: "Build fails"**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Debug Mode

Enable Next.js debug logs:
```bash
DEBUG=* npm run dev
```

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server
npm run type-check       # TypeScript validation
npm run lint             # ESLint checking

# Database
npm run db:seed          # Seed initial data

# Deployment
vercel deploy           # Deploy to Vercel
docker build -t sage-couture . # Build Docker image
```

---

## Project Structure Quick Reference

```
sage-couture-usa/
├── app/                  # Next.js app directory
├── components/           # React components
├── lib/                  # Utilities & helpers
├── store/                # State management (Zustand)
├── types/                # TypeScript types
├── supabase/             # Database schema
├── scripts/              # Utility scripts
├── public/               # Static assets
├── .env.example          # Environment template
├── package.json          # Dependencies
└── README.md             # Main documentation
```

---

## Support & Resources

- **Documentation**: See `README.md`
- **Supabase Docs**: https://supabase.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## Next Steps

After successful setup:

1. ✅ Customize brand colors in `tailwind.config.ts`
2. ✅ Update company information in components
3. ✅ Add real product images
4. ✅ Configure email notifications
5. ✅ Set up monitoring (e.g., Sentry)
6. ✅ Create admin accounts
7. ✅ Go live!

---

**Happy building! 🚀**

For questions or issues, please create an issue on GitHub or contact support@sagecouture.com
