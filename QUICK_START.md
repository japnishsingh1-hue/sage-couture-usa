# 🚀 SAGE COUTURE USA - Quick Start Guide

## **Get Running in 5 Minutes!**

### **Step 1: Install Dependencies** (1 minute)

```bash
cd C:\Users\SAGE\.claude\sage-couture-usa
npm install
```

Wait for installation to complete (it will take 1-2 minutes).

### **Step 2: Start Development Server** (Instant)

```bash
npm run dev
```

You should see:
```
> sage-couture-usa@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### **Step 3: Open in Browser** (Instant)

Open your browser and go to:

**👉 http://localhost:3000**

---

## 🎯 **What You Can Test**

### **🏠 Home Page**
- Click home logo to see the beautiful luxury homepage
- Scroll through hero, featured designers, products
- See animations and hover effects

### **🛍️ Shopping**
- **Shop** → Browse all products with filters
- **Product Detail** → Click any product to see details
- **Add to Cart** → Add items to shopping cart

### **🛒 Cart & Checkout**
- **Cart** → View your items
- **Checkout** → Go through multi-step checkout
- Use test Stripe card: `4242 4242 4242 4242`

### **👤 User Account**
- **Login** → Test authentication page
- **Signup** → Create account
- **Account** → View orders and wishlist

### **💇 Styling Appointments**
- **Styling Appointments** → Book an appointment

### **🛠️ Admin Dashboard**
- **Admin** → See analytics dashboard
- **Products** → Add/manage products
- **Orders** → View order management
- **Designers** → Manage designers

---

## 🧪 **Test Credentials**

### **Stripe Test Cards**
Use these for checkout testing:

| Card | Number | Status |
|------|--------|--------|
| Success | `4242 4242 4242 4242` | ✅ Approved |
| Decline | `4000 0000 0000 0002` | ❌ Declined |

**Expiry:** Any future date (e.g., `12/25`)
**CVC:** Any 3 digits (e.g., `123`)

### **Test Accounts**
Use these for login/signup:
- **Email:** `test@sagecouture.com`
- **Password:** `TestPassword123!`

---

## 📍 **Key Pages to Visit**

| Page | URL | Features |
|------|-----|----------|
| Home | `http://localhost:3000` | Hero, designers, products |
| Shop | `http://localhost:3000/shop` | Filters, sorting |
| Product | `http://localhost:3000/products/1` | Details, gallery |
| Cart | `http://localhost:3000/cart` | Items, calculations |
| Checkout | `http://localhost:3000/checkout` | Payment flow |
| Account | `http://localhost:3000/account` | User profile |
| Admin | `http://localhost:3000/admin` | Dashboard |
| Appointments | `http://localhost:3000/styling-appointments` | Booking |

---

## ✨ **Features Working in Test Mode**

✅ All pages load and are fully interactive
✅ Shopping cart persists in local storage
✅ Product filters work
✅ Checkout form validation
✅ Responsive design (test on mobile!)
✅ Animations and transitions
✅ Navigation between all pages
✅ Admin dashboard with mock data
✅ Form submissions (print to console)
✅ Appointment booking

---

## 🔧 **When Ready to Go Live**

Once you have real **Supabase** and **Stripe** credentials:

1. Update `.env.local` with real credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_real_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_real_key
SUPABASE_SERVICE_ROLE_KEY=your_real_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

2. Run database setup:
```bash
npm run db:seed
```

3. Restart dev server:
```bash
npm run dev
```

That's it! Your app is now connected to real data.

---

## 🐛 **Troubleshooting**

### **"Port 3000 already in use"**
```bash
# Find and kill the process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### **"Module not found" error**
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
npm run dev
```

### **"Next.js won't start"**
```bash
# Clear Next.js cache
rm -r .next
npm run dev
```

---

## 📱 **Test on Mobile**

1. On your phone, open:
   ```
   http://<your-computer-ip>:3000
   ```

2. Find your computer IP:
   ```bash
   ipconfig
   # Look for "IPv4 Address" (e.g., 192.168.1.100)
   ```

3. Navigate to: `http://192.168.1.100:3000`

---

## 🎨 **Customize Branding**

### **Change Colors**
Edit `tailwind.config.ts` and update the color palette

### **Change Logo Text**
Edit `components/layout/Navbar.tsx` - update the "SAGE COUTURE" text

### **Change Company Info**
Edit `components/layout/Footer.tsx` with your contact details

---

## 📊 **View Console Messages**

Open browser dev tools to see:
- Form submissions
- Cart updates
- Navigation logs

Press: `F12` → **Console** tab

---

## 🚀 **Next Steps**

1. ✅ Explore the full site
2. ✅ Test all features
3. ✅ Try on mobile
4. ✅ Review the code
5. ✅ Get Supabase & Stripe credentials
6. ✅ Deploy to production

---

## 💬 **Need Help?**

- Check `README.md` for full documentation
- See `INSTALLATION_GUIDE.md` for deployment
- Review `PROJECT_COMPLETION_SUMMARY.md` for features

---

## ⏱️ **Stop the Dev Server**

In terminal, press: `Ctrl + C`

To restart: `npm run dev`

---

**Happy exploring! 🎉**

Everything works in test mode. Feel free to click around and test all features!
