# Quick Deploy Reference - DMD Gold

## 🚀 Deploy to Vercel (5 Minutes)

### Step 1: Prepare Code
```bash
# In your project directory
cd "/Users/dmdgoldprosperity/Documents/DMD Project-web/DMD GOLD/dmdgold"

# Build test
npm run build

# If successful, commit
git add .
git commit -m "Production deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. **Go to:** https://vercel.com/new
2. **Click:** "Import Git Repository"
3. **Select:** Your GitHub repository
4. **Configure:**
   - Framework: Next.js ✅ (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Install Command: `npm install`

### Step 3: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```env
DATABASE_URL=postgresql://neondb_owner:npg_Q7Y1HphSzbyK@ep-purple-tree-aovs1ja8.c-2.ap-southeast-1.aws.neon.tech/neondb?uselibpqcompat=true&sslmode=require

EMAIL_USER=poppy12332109@gmail.com
EMAIL_PASS=pfyz krif gzmd bvmr
CONTACT_EMAIL=dmdgold369@gmail.com

RAZORPAY_KEY_ID=rzp_test_TBkD228fkLHjoX
RAZORPAY_KEY_SECRET=Lh54001sxABFdXYV8Xp4XNCK
RAZORPAY_WEBHOOK_SECRET=dmdgold_secret_12345
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_TBkD228fkLHjoX
```

⚠️ **Note:** These are TEST credentials. Replace with LIVE Razorpay keys before production!

### Step 4: Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Your site will be live at: `https://your-project.vercel.app`

### Step 5: Add Custom Domain
1. Go to Project Settings → Domains
2. Add: `dmdgold.com` and `www.dmdgold.com`
3. Update your domain's DNS settings (Vercel provides instructions)

---

## 🔄 Update After Changes

```bash
# Make your changes, then:
git add .
git commit -m "Your update message"
git push origin main

# Vercel auto-deploys on push!
```

---

## ⚠️ CRITICAL: Before Going LIVE

### 1. Switch Razorpay to LIVE Mode
- Login to Razorpay Dashboard
- Switch from "Test Mode" to "Live Mode"
- Generate new API keys
- Update environment variables in Vercel:
  ```
  RAZORPAY_KEY_ID=rzp_live_XXXXXXXXX
  RAZORPAY_KEY_SECRET=your_live_secret
  NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXX
  ```

### 2. Configure Razorpay Webhooks
- URL: `https://dmdgold.com/api/webhooks/razorpay`
- Events: `payment.authorized`, `payment.captured`, `payment.failed`
- Secret: Your webhook secret from env

### 3. Test Payment Flow
- Make a Rs. 1 test payment
- Verify webhook triggers
- Check database for payment record

---

## 🔍 Post-Deployment Testing

Visit these URLs and verify:
- [ ] https://dmdgold.com → Home page loads
- [ ] https://dmdgold.com/plans → Pricing displays
- [ ] https://dmdgold.com/checkout → Checkout works
- [ ] Make a test payment → Success flow
- [ ] Contact form → Email received
- [ ] Chatbot → AI responds

---

## 📊 Monitoring

### Vercel Dashboard
- **Deployments:** View build logs
- **Analytics:** Page views and performance
- **Logs:** Runtime errors and API calls

### Key Metrics to Watch:
- Build time: Should be < 2 minutes
- Page load: < 3 seconds
- Error rate: < 1%

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Check locally first
npm run build

# Fix errors, then redeploy
git push origin main
```

### Environment Variables Missing
- Go to Vercel → Settings → Environment Variables
- Add missing variables
- Redeploy (Settings → Deployments → Redeploy)

### Database Connection Error
- Verify DATABASE_URL is correct
- Check Neon dashboard for database status
- Ensure IP allowlist includes Vercel IPs (or use "Allow all")

### Payment Not Working
- Check Razorpay dashboard for API key status
- Verify webhook URL is correct
- Check Vercel logs for errors

---

## 🎯 Your Deployment URLs

After deployment, you'll have:
- **Vercel URL:** `https://dmdgold.vercel.app` (auto-generated)
- **Custom Domain:** `https://dmdgold.com` (after DNS setup)
- **API Base:** `https://dmdgold.com/api`

---

## 📞 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Razorpay Dashboard:** https://dashboard.razorpay.com
- **Neon Database:** https://console.neon.tech
- **Google Analytics:** https://analytics.google.com

---

**That's it! Your application is now live. 🎉**
