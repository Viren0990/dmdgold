# DMD Gold - Deployment Guide

## 🎯 Pre-Launch Checklist

### ✅ Project Overview
- **Name:** DMD Gold Jewellery Software
- **Tech Stack:** Next.js 16.1.1, React 19, TypeScript, Prisma, PostgreSQL
- **Database:** Neon PostgreSQL (Serverless)
- **Payment Gateway:** Razorpay
- **AI Features:** Google Gemini AI chatbot
- **Email:** Nodemailer (Gmail SMTP)

---

## 📋 Deep Review - Production Readiness

### ✅ **1. Environment Variables (CRITICAL)**

Your `.env.local` contains sensitive data. For production:

#### Required Environment Variables:
```env
# Database
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]?sslmode=require

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=dmdgold369@gmail.com

# Razorpay (TEST vs PRODUCTION)
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=your-production-secret
RAZORPAY_WEBHOOK_SECRET=your-webhook-secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXXXXX

# Google AI (if using)
GOOGLE_GENERATIVE_AI_API_KEY=your-api-key
```

#### ⚠️ **ACTION REQUIRED:**
1. **Switch Razorpay from TEST to LIVE mode:**
   - Current: `rzp_test_TBkD228fkLHjoX`
   - Production: Get live keys from Razorpay Dashboard
   - Enable production webhooks

2. **Secure your credentials:**
   - Never commit `.env.local` to git
   - Use platform-specific environment variables

---

### ✅ **2. Database (Neon PostgreSQL)**

#### Current Setup:
- ✅ Using Neon serverless PostgreSQL
- ✅ SSL enabled (`sslmode=require`)
- ✅ Prisma schema properly configured with vector extension

#### Pre-Launch Database Tasks:

```bash
# 1. Verify database connection
npx prisma db pull

# 2. Run migrations (if any)
npx prisma migrate deploy

# 3. Seed initial data
npm run prisma:seed
```

#### ⚠️ **Production Database Checklist:**
- [ ] Backup current database
- [ ] Set up automated backups in Neon
- [ ] Configure connection pooling (Neon handles this)
- [ ] Test database performance under load
- [ ] Verify all indexes are created

---

### ✅ **3. Payment Gateway (Razorpay)**

#### Current Implementation Status:
- ✅ Order creation endpoint: `/api/payments/create-order`
- ✅ Payment verification: `/api/payments/verify`
- ✅ Webhook handler: `/api/webhooks/razorpay`
- ✅ Test mode configured

#### ⚠️ **CRITICAL - Switch to Production:**

1. **Get Live Credentials:**
   - Login to Razorpay Dashboard
   - Switch from "Test Mode" to "Live Mode"
   - Generate new API keys
   - Update `.env` with `rzp_live_*` keys

2. **Configure Webhooks:**
   - Go to Settings → Webhooks in Razorpay Dashboard
   - Add webhook URL: `https://yourdomain.com/api/webhooks/razorpay`
   - Select events:
     - `payment.authorized`
     - `payment.captured`
     - `payment.failed`
     - `order.paid`
   - Set webhook secret and update in env

3. **Test Payment Flow:**
   ```bash
   # Test endpoints locally first
   curl -X POST http://localhost:3000/api/payments/create-order \
     -H "Content-Type: application/json" \
     -d '{"amount":10000,"currency":"INR","planId":"uuid"}'
   ```

---

### ✅ **4. Security Review**

#### Current Security Measures:
- ✅ Security headers configured (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ SSL/HTTPS ready
- ✅ Password hashing in schema
- ✅ Razorpay signature verification

#### ⚠️ **Additional Security Hardening:**

1. **Add Rate Limiting:**
   ```typescript
   // Install: npm install @upstash/ratelimit @upstash/redis
   // Add to API routes to prevent abuse
   ```

2. **CORS Configuration:**
   ```typescript
   // next.config.ts - add if needed
   async headers() {
     return [
       {
         source: '/api/:path*',
         headers: [
           { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
         ],
       },
     ];
   }
   ```

3. **Environment Variable Validation:**
   ```typescript
   // Create src/lib/env.ts
   if (!process.env.RAZORPAY_KEY_SECRET) {
     throw new Error('Missing RAZORPAY_KEY_SECRET');
   }
   ```

4. **CSP Headers (Content Security Policy):**
   - Consider adding CSP headers for XSS protection

---

### ✅ **5. Performance Optimization**

#### Current Optimizations:
- ✅ Image optimization configured (AVIF, WebP)
- ✅ Static page generation for content pages
- ✅ Server components where appropriate

#### ⚠️ **Pre-Launch Performance Tasks:**

1. **Analyze Bundle Size:**
   ```bash
   npm run build
   # Check output for large bundles
   ```

2. **Test Core Web Vitals:**
   - Use Lighthouse in Chrome DevTools
   - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

3. **Database Query Optimization:**
   - Add indexes for frequently queried fields
   - Use `prisma.$queryRaw` for complex queries

4. **CDN for Static Assets:**
   - Images, fonts, and static files should be on CDN
   - Vercel handles this automatically

---

### ✅ **6. Monitoring & Analytics**

#### Current Tracking:
- ✅ Google Tag Manager (GTM-P8NJD65X)
- ✅ Google Analytics (G-YJ83ECFN0Z)
- ✅ Meta Pixel (1004810829136849)

#### ⚠️ **Additional Monitoring:**

1. **Error Tracking:**
   ```bash
   # Recommended: Sentry
   npm install @sentry/nextjs
   npx @sentry/wizard@latest -i nextjs
   ```

2. **Application Performance Monitoring:**
   - Vercel Analytics (free with Vercel)
   - Or use Datadog, New Relic

3. **Uptime Monitoring:**
   - UptimeRobot (free)
   - Pingdom
   - Set up alerts for downtime

---

### ✅ **7. SEO & Marketing**

#### Current SEO Setup:
- ✅ Comprehensive metadata
- ✅ Schema.org structured data (Organization, LocalBusiness, SoftwareApplication)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap and robots.txt

#### ⚠️ **Pre-Launch SEO Checklist:**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify all meta descriptions are unique
- [ ] Test social media sharing (Facebook, LinkedIn, Twitter)
- [ ] Set up Google Business Profile

---

### ✅ **8. Email Configuration**

#### Current Setup:
- ✅ Nodemailer configured
- ✅ Gmail SMTP with app password

#### ⚠️ **Production Email Recommendations:**

1. **Transactional Email Service (Better Deliverability):**
   - **Resend** (easiest): https://resend.com
   - **SendGrid**: https://sendgrid.com
   - **AWS SES**: https://aws.amazon.com/ses/

2. **Current Gmail Setup Issues:**
   - Gmail has sending limits (500 emails/day)
   - Lower deliverability than dedicated services
   - Risk of being marked as spam

3. **Migration to Resend (Recommended):**
   ```bash
   npm install resend
   ```
   ```typescript
   // src/lib/email.ts
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   ```

---

### ✅ **9. Testing Checklist**

#### Manual Testing Required:

**Critical User Flows:**
- [ ] Home page loads correctly
- [ ] Plan selection and checkout flow
- [ ] Razorpay payment (test mode first, then live)
- [ ] Payment success → database updated
- [ ] Payment failure → proper error handling
- [ ] Contact form submission
- [ ] AI Chatbot functionality
- [ ] Demo modal booking
- [ ] All navigation links work
- [ ] Mobile responsiveness (all pages)
- [ ] Form validation works

**Browser Testing:**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Performance Testing:**
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Test page load speed on slow 3G
- [ ] Test with browser cache disabled

---

### ✅ **10. Legal & Compliance**

#### Current Pages:
- ✅ Privacy Policy
- ✅ Terms and Conditions

#### ⚠️ **Review Required:**
- [ ] Privacy policy mentions data collection (analytics, cookies)
- [ ] Terms mention payment refund policy
- [ ] GDPR compliance (if targeting EU users)
- [ ] Cookie consent banner (if using analytics)
- [ ] GST/tax information in T&C

---

## 🚀 Deployment Options

### **Option 1: Vercel (Recommended - Easiest)**

#### Why Vercel?
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

#### Deployment Steps:

1. **Prepare Repository:**
   ```bash
   # Ensure .gitignore includes:
   .env.local
   .env
   .next/
   node_modules/
   
   # Commit and push to GitHub
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "Import Project"
   - Connect GitHub account
   - Select your repository
   - Configure:
     - **Framework:** Next.js (auto-detected)
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`

3. **Set Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`:
     ```
     DATABASE_URL
     EMAIL_USER
     EMAIL_PASS
     CONTACT_EMAIL
     RAZORPAY_KEY_ID (LIVE)
     RAZORPAY_KEY_SECRET (LIVE)
     RAZORPAY_WEBHOOK_SECRET
     NEXT_PUBLIC_RAZORPAY_KEY_ID (LIVE)
     GOOGLE_GENERATIVE_AI_API_KEY
     ```

4. **Custom Domain:**
   - Go to Project Settings → Domains
   - Add `dmdgold.com` and `www.dmdgold.com`
   - Update DNS records (provided by Vercel)

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Production URL: https://dmdgold.com

---

### **Option 2: Railway**

#### Steps:
1. Go to https://railway.app
2. Click "Deploy from GitHub"
3. Select repository
4. Add environment variables
5. Deploy

**Cost:** ~$5-20/month

---

### **Option 3: AWS / DigitalOcean (Advanced)**

For more control, deploy to:
- **AWS:** EC2 + RDS + CloudFront
- **DigitalOcean:** App Platform or Droplet

**Complexity:** High
**Cost:** ~$20-50/month

---

## 🔧 Post-Deployment Tasks

### Immediate (Day 1):

1. **Verify Production Environment:**
   ```bash
   # Test all critical endpoints
   curl https://dmdgold.com/api/health
   ```

2. **Test Payment Flow:**
   - Make a real Rs. 1 test payment
   - Verify webhook receives notification
   - Check database for payment record

3. **Monitor Errors:**
   - Check Vercel logs for errors
   - Set up error alerts

4. **Update DNS:**
   - Point domain to Vercel
   - Wait for DNS propagation (24-48 hours)

5. **SSL Certificate:**
   - Verify HTTPS works (Vercel handles automatically)

### Week 1:

1. **Monitor Analytics:**
   - Check Google Analytics for traffic
   - Verify all tracking pixels fire correctly

2. **Performance Review:**
   - Run Lighthouse audits
   - Optimize any slow pages

3. **User Testing:**
   - Have team members test all flows
   - Fix any reported bugs

4. **Backup Strategy:**
   - Verify Neon automated backups are running
   - Test database restore process

### Month 1:

1. **Review Metrics:**
   - Conversion rates
   - Page load times
   - Error rates
   - User feedback

2. **SEO:**
   - Submit to search engines
   - Track keyword rankings
   - Build backlinks

3. **Scale Preparation:**
   - Review database performance
   - Optimize slow queries
   - Consider caching strategy (Redis)

---

## 🔍 Final Pre-Launch Checklist

### Code & Configuration:
- [ ] All TODO comments addressed
- [ ] Test mode variables removed
- [ ] Production environment variables set
- [ ] .env.local not committed to git
- [ ] Build succeeds without warnings
- [ ] No console.log in production code

### Functionality:
- [ ] All pages load correctly
- [ ] Payment flow works end-to-end
- [ ] Email sending works
- [ ] Forms validate properly
- [ ] Error pages (404, 500) styled
- [ ] Chatbot responds correctly

### Performance:
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Bundle size < 200KB (initial load)
- [ ] No unused dependencies

### Security:
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Webhook signatures verified
- [ ] SQL injection protection (Prisma handles)
- [ ] XSS protection in place

### SEO & Analytics:
- [ ] Meta tags on all pages
- [ ] Structured data valid
- [ ] Analytics tracking works
- [ ] Sitemap accessible
- [ ] robots.txt correct

### Legal:
- [ ] Privacy policy updated
- [ ] Terms and conditions reviewed
- [ ] Cookie consent (if needed)
- [ ] Contact information correct

---

## 📞 Support & Maintenance

### Monitoring Checklist:
- Daily: Check error logs
- Weekly: Review analytics and performance
- Monthly: Database optimization, security updates

### Emergency Contacts:
- Vercel Support: support@vercel.com
- Razorpay Support: support@razorpay.com
- Neon Support: support@neon.tech

---

## 🎉 Go Live!

Once all checklist items are complete:

1. **Final Build:**
   ```bash
   npm run build
   npm start # Test locally one more time
   ```

2. **Push to Production:**
   ```bash
   git push origin main
   ```

3. **Monitor:**
   - Watch Vercel deployment logs
   - Test production URL
   - Verify all functionality

4. **Announce:**
   - Update social media
   - Notify customers
   - Press release (if applicable)

---

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Razorpay Production Checklist](https://razorpay.com/docs/payments/production-checklist/)
- [Prisma Production Best Practices](https://www.prisma.io/docs/guides/performance-and-optimization)

---

**🚀 Your DMD Gold application is production-ready! Good luck with your launch!**
