# 🚀 DMD Gold - Launch Checklist

**Target Launch Date:** _________  
**Deployment Platform:** Vercel  
**Domain:** dmdgold.com

---

## 📋 Pre-Launch (Complete Before Deployment)

### Day -7: Code Preparation

- [ ] **1. Build Test**
  ```bash
  cd "/Users/dmdgoldprosperity/Documents/DMD Project-web/DMD GOLD/dmdgold"
  npm run build
  ```
  Expected: ✓ Compiled successfully

- [ ] **2. Remove Test Pages**
  - Delete `/src/app/test-payment` folder (or make it admin-only)

- [ ] **3. Update Environment Variables**
  - Create `.env.production` with LIVE credentials
  - Verify all required vars are present

- [ ] **4. Database Migration**
  ```bash
  npx prisma migrate deploy
  npx prisma generate
  npm run prisma:seed  # If needed
  ```

- [ ] **5. Git Cleanup**
  ```bash
  git status
  # Ensure no .env files are tracked
  git add .
  git commit -m "Production ready"
  git push origin main
  ```

---

### Day -3: Payment Gateway Setup

- [ ] **1. Razorpay Live Mode**
  - Login: https://dashboard.razorpay.com
  - Switch from "Test Mode" to "Live Mode"
  - Generate Live API keys
  - **Save these keys securely!**
    ```
    Live Key ID: rzp_live_________________
    Live Key Secret: ______________________
    ```

- [ ] **2. Razorpay Settings**
  - Enable Payment Methods: Cards, UPI, Netbanking, Wallets
  - Set up bank account for settlements
  - Configure auto-refunds (optional)

- [ ] **3. Webhook Configuration**
  - URL: `https://dmdgold.com/api/webhooks/razorpay`
  - Events to enable:
    - [x] payment.authorized
    - [x] payment.captured
    - [x] payment.failed
    - [x] order.paid
  - Generate webhook secret
  - Test webhook with Razorpay's test tool

---

### Day -2: Security Hardening

- [ ] **1. Review Security Headers**
  - Verify in `next.config.ts`:
    - X-Frame-Options: DENY ✓
    - X-Content-Type-Options: nosniff ✓
    - Referrer-Policy ✓

- [ ] **2. Rate Limiting (Optional but Recommended)**
  ```bash
  npm install @upstash/ratelimit @upstash/redis
  ```
  - Add to API routes (especially payment endpoints)

- [ ] **3. Validate Environment**
  - Create `src/lib/env.ts`:
    ```typescript
    const requiredEnvVars = [
      'DATABASE_URL',
      'RAZORPAY_KEY_ID',
      'RAZORPAY_KEY_SECRET',
    ];
    
    requiredEnvVars.forEach((envVar) => {
      if (!process.env[envVar]) {
        throw new Error(`Missing ${envVar}`);
      }
    });
    ```

---

### Day -1: Domain & DNS Setup

- [ ] **1. Purchase Domain** (if not done)
  - Provider: GoDaddy, Namecheap, or Google Domains
  - Domain: dmdgold.com

- [ ] **2. DNS Configuration**
  - You'll get these from Vercel after deployment
  - Type: CNAME
  - Name: www
  - Value: cname.vercel-dns.com
  
  - Type: A
  - Name: @
  - Value: 76.76.21.21

- [ ] **3. SSL Certificate**
  - Vercel handles this automatically
  - Just verify HTTPS works after deployment

---

## 🚀 Launch Day: Deployment

### Step 1: Deploy to Vercel (30 minutes)

- [ ] **1. Go to Vercel**
  - URL: https://vercel.com/new
  - Login with GitHub

- [ ] **2. Import Repository**
  - Click "Import Git Repository"
  - Select: dmdgold repository
  - Click "Import"

- [ ] **3. Configure Project**
  - Framework Preset: Next.js (auto-detected)
  - Root Directory: `./`
  - Build Command: `npm run build`
  - Output Directory: `.next`
  - Install Command: `npm install`

- [ ] **4. Add Environment Variables**
  - Click "Environment Variables"
  - Add Production variables:
    ```
    DATABASE_URL=[your-neon-url]
    EMAIL_USER=[your-email]
    EMAIL_PASS=[your-app-password]
    CONTACT_EMAIL=dmdgold369@gmail.com
    RAZORPAY_KEY_ID=rzp_live_XXXXXXXX
    RAZORPAY_KEY_SECRET=[live-secret]
    RAZORPAY_WEBHOOK_SECRET=[webhook-secret]
    NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXX
    ```

- [ ] **5. Deploy**
  - Click "Deploy"
  - Wait 2-3 minutes
  - Note your deployment URL: `https://dmdgold-XXXX.vercel.app`

---

### Step 2: Configure Custom Domain (15 minutes)

- [ ] **1. Add Domain in Vercel**
  - Go to Project Settings → Domains
  - Add `dmdgold.com`
  - Add `www.dmdgold.com`

- [ ] **2. Update DNS Records**
  - Copy DNS settings from Vercel
  - Add to your domain registrar
  - Wait for DNS propagation (5 minutes - 48 hours)

- [ ] **3. Verify HTTPS**
  - Visit https://dmdgold.com
  - Check for padlock icon in browser
  - Verify certificate is valid

---

### Step 3: Post-Deployment Testing (1 hour)

- [ ] **1. Smoke Test - Critical Paths**
  - [ ] Home page loads: https://dmdgold.com
  - [ ] Pricing page: https://dmdgold.com/plans
  - [ ] Checkout flow: https://dmdgold.com/checkout?plan=retailer
  - [ ] Contact form: https://dmdgold.com/#contact
  - [ ] All navigation links work

- [ ] **2. Payment Flow Test**
  - [ ] Select a plan
  - [ ] Fill checkout form
  - [ ] **Make a Rs. 1 live test payment**
  - [ ] Verify payment success page
  - [ ] Check database for payment record:
    ```sql
    SELECT * FROM "Payment" ORDER BY "createdAt" DESC LIMIT 1;
    ```
  - [ ] Check Razorpay dashboard for payment

- [ ] **3. Webhook Test**
  - Go to Razorpay Dashboard → Webhooks
  - Check webhook logs
  - Verify webhook was received successfully
  - Status should be: 200 OK

- [ ] **4. Email Test**
  - Submit contact form
  - Verify email received at dmdgold369@gmail.com
  - Check spam folder if not in inbox

- [ ] **5. Chatbot Test**
  - Open chatbot widget
  - Send test message
  - Verify AI responds correctly

- [ ] **6. Mobile Testing**
  - Open on mobile device (or Chrome DevTools mobile view)
  - Test all pages
  - Verify responsive design
  - Test payment on mobile

---

### Step 4: Analytics & Monitoring Setup (30 minutes)

- [ ] **1. Google Analytics**
  - Login: https://analytics.google.com
  - Property: DMD Gold
  - Verify tracking code fires
  - Check Real-Time reports

- [ ] **2. Google Search Console**
  - URL: https://search.google.com/search-console
  - Add property: https://dmdgold.com
  - Verify ownership (Vercel makes this easy)
  - Submit sitemap: https://dmdgold.com/sitemap.xml

- [ ] **3. Bing Webmaster Tools**
  - URL: https://www.bing.com/webmasters
  - Add site
  - Submit sitemap

- [ ] **4. Meta Pixel Verification**
  - Go to Facebook Events Manager
  - Check if PageView events are firing
  - Test with Meta Pixel Helper (Chrome extension)

- [ ] **5. Error Monitoring (Recommended)**
  ```bash
  npm install @sentry/nextjs
  npx @sentry/wizard@latest -i nextjs
  ```
  - Set up Sentry account
  - Configure DSN in environment variables
  - Test error reporting

- [ ] **6. Uptime Monitoring**
  - Sign up: https://uptimerobot.com
  - Add monitor: https://dmdgold.com
  - Set up email/SMS alerts
  - Check interval: 5 minutes

---

## 📊 Launch Day Monitoring (First 24 Hours)

### Hour 1-6: Active Monitoring

- [ ] **Every Hour:**
  - Check Vercel logs for errors
  - Monitor Razorpay dashboard for payments
  - Check Google Analytics real-time
  - Verify email delivery
  - Test random pages

### Hour 6-24: Periodic Checks

- [ ] **Every 3 Hours:**
  - Review error logs
  - Check conversion rates
  - Monitor page load times
  - Verify uptime

---

## 🔍 Post-Launch Checklist (Week 1)

### Day 2:

- [ ] Review analytics data
- [ ] Check for any error patterns
- [ ] Verify all payments processed correctly
- [ ] Collect user feedback
- [ ] Fix any critical bugs

### Day 3:

- [ ] Run Lighthouse audit on all pages
- [ ] Optimize any performance issues
- [ ] Review SEO performance in Search Console
- [ ] Check backlink profile

### Day 7:

- [ ] Weekly analytics review
- [ ] Database performance check
- [ ] Security audit
- [ ] Customer feedback analysis
- [ ] Plan next iteration

---

## 🆘 Emergency Rollback Plan

If something goes critically wrong:

### Option 1: Revert Deployment (Vercel)
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Takes effect immediately

### Option 2: Pause Traffic
1. Change DNS to maintenance page
2. Fix issues locally
3. Deploy fixed version
4. Restore DNS

### Option 3: Disable Features
- Turn off payment processing temporarily
- Add maintenance banner
- Fix and redeploy

---

## 📞 Emergency Contacts

**Platform Support:**
- Vercel: support@vercel.com
- Razorpay: support@razorpay.com | +91-8971093997
- Neon: support@neon.tech
- Google Cloud: support.google.com

**Internal:**
- Developer: [Your contact]
- Business Owner: [Contact]
- IT Support: [Contact]

---

## ✅ Final Sign-Off

Before marking launch as complete:

- [ ] All checklist items completed
- [ ] No critical errors in logs
- [ ] Payment flow working 100%
- [ ] Analytics tracking verified
- [ ] Monitoring alerts configured
- [ ] Team notified of launch
- [ ] Social media announcement scheduled

---

**Launch Completed By:** __________________  
**Date:** __________________  
**Time:** __________________  
**Status:** 🎉 **LIVE**

---

## 📈 Success Metrics (Track These)

**Week 1 Targets:**
- Uptime: 99.9%+
- Page Load: < 3 seconds
- Payment Success Rate: > 95%
- Bounce Rate: < 60%
- Conversion Rate: > 2%

**Month 1 Targets:**
- Organic Traffic: 1,000+ visitors
- Sign-ups: 50+ customers
- Revenue: 10+ paid licenses
- SEO Rankings: Top 10 for target keywords

---

**Good luck with your launch! 🚀**
