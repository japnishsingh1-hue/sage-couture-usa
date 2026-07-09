# 📤 Upload to GitHub & Share

## Step 1: Create GitHub Account
1. Go to https://github.com/signup
2. Sign up with email
3. Verify email

## Step 2: Create New Repository

1. Go to https://github.com/new
2. **Repository name**: `sage-couture-usa`
3. **Description**: "Premium Indian luxury fashion e-commerce marketplace"
4. **Public** (so anyone can see it)
5. Click **Create Repository**

## Step 3: Push Code to GitHub

### On Windows PowerShell:

```bash
# Navigate to project
cd C:\Users\SAGE\.claude\sage-couture-usa

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete SAGE COUTURE marketplace with Shopify integration"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/sage-couture-usa.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 4: Share with Your Team

### Give Everyone Access
1. Go to GitHub repo settings
2. Click **Collaborators**
3. Add team member emails
4. They get access!

### Share via Links
- **Website source code**: `https://github.com/YOUR_USERNAME/sage-couture-usa`
- **Clone command**: 
  ```bash
  git clone https://github.com/YOUR_USERNAME/sage-couture-usa.git
  ```

---

## Step 5: Deploy to Vercel

### Easy Deployment:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **Import Project**
4. Select your `sage-couture-usa` repo
5. Add environment variables (from `.env.local`)
6. Click **Deploy**
7. Get live URL: `https://sage-couture-usa.vercel.app`

### Custom Domain:

1. In Vercel settings
2. Click **Domains**
3. Add your domain (`sagecouture.com`)
4. Follow DNS setup
5. Done! 🎉

---

## Share Your Live Site

Once deployed, share this link:
```
https://sage-couture-usa.vercel.app
```

Or with custom domain:
```
https://sagecouture.com
```

---

## Team Collaboration

### For Designers/Marketers:
- Browse `/public` folder for image management
- Edit homepage copy in components
- No coding needed!

### For Developers:
- Clone the repo
- Create a new branch: `git checkout -b feature/your-feature`
- Make changes
- Push: `git push origin feature/your-feature`
- Create Pull Request on GitHub

---

## File Structure to Share

```
sage-couture-usa/
├── README.md (Start here!)
├── INSTALLATION_GUIDE.md (Setup instructions)
├── DEPLOYMENT_GUIDE.md (Deploy guide)
├── GITHUB_SETUP.md (This file)
├── app/ (All pages)
├── components/ (Reusable components)
├── lib/ (Utilities & data)
├── public/ (Images)
├── .env.example (Copy to .env.local)
└── package.json (Dependencies)
```

---

## Quick Commands for Team

```bash
# Clone project
git clone https://github.com/YOUR_USERNAME/sage-couture-usa.git
cd sage-couture-usa

# Install dependencies
npm install

# Start local development
npm run dev

# Build for production
npm run build
npm run start

# Create new feature branch
git checkout -b feature/my-feature

# Push changes
git push origin feature/my-feature
```

---

## Sharing Checklist

- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] Team members invited
- [ ] Vercel connected
- [ ] Environment variables added
- [ ] Site deployed live
- [ ] Custom domain configured
- [ ] Share URLs with team
- [ ] Documentation read by team
- [ ] First feature developed! 🎉

---

## Support Links

- **GitHub Help**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Git Tutorial**: https://git-scm.com/book/en/v2

---

## Your Live URLs

Once ready, share these:

📱 **Website**: `https://sagecouture.com`
💻 **GitHub**: `https://github.com/YOUR_USERNAME/sage-couture-usa`
🚀 **Vercel**: `https://sage-couture-usa.vercel.app`

---

## Done! 🎊

Your project is now:
- ✅ Version controlled on GitHub
- ✅ Accessible to your team
- ✅ Live on the internet
- ✅ Ready for collaboration

Start building together!
