# Common Tasks - Quick Reference

Quick commands and procedures for managing your DMD Gold application.

---

## 🔧 Development

### Start Development Server
```bash
cd "/Users/dmdgoldprosperity/Documents/DMD Project-web/DMD GOLD/dmdgold"
npm run dev
```
Open: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server Locally
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

---

## 🗄️ Database Operations

### Generate Prisma Client
```bash
npx prisma generate
```

### View Database in Browser
```bash
npx prisma studio
```
Opens: http://localhost:5555

### Run Migrations
```bash
# Create new migration
npx prisma migrate dev --name description-of-change

# Deploy to production
npx prisma migrate deploy
```

### Seed Database
```bash
npm run prisma:seed
```

### Reset Database (⚠️ Deletes all data!)
```bash
npx prisma migrate reset
```

### Pull Schema from Database
```bash
npx prisma db pull
```

### Check Database Connection
```bash
npx prisma db execute --stdin <<< "SELECT 1"
```

---

## 💳 Payment Testing

### Test Razorpay (Test Mode)

**Test Cards:**
- **Success:** 4111 1111 1111 1111
- **Failure:** 4000 0000 0000 0002
- **CVV:** Any 3 digits
- **Expiry:** Any future date

**Test UPI:**
- **Success:** success@razorpay
- **Failure:** failure@razorpay

### View Razorpay Logs
1. Login: https://dashboard.razorpay.com
2. Go to: Logs → Payment Logs
3. Filter by date/status

### Test Webhook Locally
```bash
# Install Razorpay CLI
npm install -g razorpay-cli

# Forward webhooks to localhost
razorpay webhooks forward http://localhost:3000/api/webhooks/razorpay
```

---

## 📧 Email Testing

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "message": "Test message"
  }'
```

### Check Gmail Sent Emails
- Login to: poppy12332109@gmail.com
- Go to: Sent folder

---

## 🤖 AI Chatbot

### Test Chatbot API
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is DMD Gold?"
  }'
```

### Update Knowledge Base
1. Edit: `data/usp_and_demo_pitch.md`
2. Run seed script (if needed)
3. Restart dev server

---

## 🔐 Environment Variables

### View Current Environment
```bash
cat .env.local
```

### Add New Variable
1. Edit `.env.local`
2. Add: `NEW_VAR=value`
3. Restart dev server

### Production Variables (Vercel)
1. Go to: https://vercel.com/dashboard
2. Select project → Settings → Environment Variables
3. Add/Edit variables
4. Redeploy project

---

## 🚀 Deployment

### Deploy to Vercel (Auto)
```bash
git add .
git commit -m "Your changes"
git push origin main
# Vercel auto-deploys!
```

### Manual Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### View Deployment Logs
1. Go to: https://vercel.com/dashboard
2. Select project → Deployments
3. Click on latest deployment
4. View "Building" and "Functions" logs

### Rollback Deployment
1. Go to: Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## 🔍 Debugging

### View Application Logs (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# View logs
vercel logs [deployment-url]
```

### Check Build Errors
```bash
npm run build 2>&1 | tee build-log.txt
```

### Debug API Route
Add to API route:
```typescript
console.log('Request:', request.method, request.url);
console.log('Body:', await request.json());
```

View in:
- Local: Terminal where `npm run dev` is running
- Production: Vercel Dashboard → Functions logs

---

## 📊 Analytics

### View Real-Time Traffic
1. Google Analytics: https://analytics.google.com
2. Go to: Reports → Realtime

### Check Page Performance
```bash
# Install Lighthouse CLI
npm i -g lighthouse

# Run audit
lighthouse https://dmdgold.com --view
```

### View Search Console Data
1. https://search.google.com/search-console
2. Select property: dmdgold.com
3. View: Performance, Coverage, Enhancements

---

## 🔒 Security

### Check for Vulnerabilities
```bash
npm audit

# Fix automatically
npm audit fix
```

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all
npm update

# Update specific package
npm install package-name@latest
```

### Test Security Headers
```bash
curl -I https://dmdgold.com
# Check for: X-Frame-Options, X-Content-Type-Options, etc.
```

---

## 📁 File Operations

### Find Large Files
```bash
find . -type f -size +1M -not -path "./node_modules/*" -not -path "./.next/*"
```

### Clean Up
```bash
# Remove node_modules
rm -rf node_modules package-lock.json

# Remove build files
rm -rf .next

# Reinstall
npm install
```

### Backup Database
```bash
# Export schema
npx prisma db pull --print > backup-schema.prisma

# Export data (requires pg_dump)
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql
```

---

## 🧪 Testing

### Run Tests (when implemented)
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

### Manual Testing Checklist
- [ ] Home page loads
- [ ] All navigation works
- [ ] Forms submit correctly
- [ ] Payment flow works
- [ ] Mobile responsive
- [ ] No console errors

---

## 🌐 Domain & DNS

### Check DNS Propagation
```bash
# Check A record
dig dmdgold.com

# Check CNAME
dig www.dmdgold.com

# Online tool
# https://www.whatsmydns.net
```

### Flush DNS Cache (Local)
```bash
# macOS
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# Windows
ipconfig /flushdns
```

---

## 📱 Mobile Testing

### Test on Different Devices (Chrome DevTools)
1. Open Chrome DevTools (Cmd+Option+I)
2. Click device icon (Cmd+Shift+M)
3. Select device: iPhone, iPad, etc.

### Test Actual Device
1. Get local IP:
   ```bash
   ipconfig getifaddr en0  # macOS
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open on mobile: `http://YOUR_IP:3000`

---

## 🔄 Git Operations

### Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### Commit Changes
```bash
git add .
git commit -m "Description of changes"
```

### Push to GitHub
```bash
git push origin main
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### View Commit History
```bash
git log --oneline --graph
```

---

## 🆘 Emergency Procedures

### Site Down - Quick Checks
```bash
# 1. Check if site responds
curl -I https://dmdgold.com

# 2. Check Vercel status
# Visit: https://www.vercel-status.com

# 3. Check database
npx prisma db execute --stdin <<< "SELECT 1"

# 4. Check recent deployments
# Vercel Dashboard → Deployments
```

### Database Connection Issues
```bash
# Test connection
npx prisma db pull

# If fails, check:
# 1. DATABASE_URL is correct
# 2. Neon database is running (console.neon.tech)
# 3. IP whitelist includes Vercel IPs
```

### Payment Gateway Down
```bash
# 1. Check Razorpay status
# Visit: https://status.razorpay.com

# 2. Check API keys are correct
# 3. View Razorpay logs in dashboard
```

---

## 📞 Quick Links

**Development:**
- Local: http://localhost:3000
- Prisma Studio: http://localhost:5555

**Production:**
- Website: https://dmdgold.com
- Vercel Dashboard: https://vercel.com/dashboard

**Services:**
- Razorpay: https://dashboard.razorpay.com
- Neon: https://console.neon.tech
- Google Analytics: https://analytics.google.com
- Search Console: https://search.google.com/search-console

**Documentation:**
- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
- Razorpay: https://razorpay.com/docs
- Vercel: https://vercel.com/docs

---

## 💡 Pro Tips

1. **Always test locally before deploying**
   ```bash
   npm run build && npm start
   ```

2. **Use Vercel preview deployments for testing**
   - Push to any branch
   - Get preview URL
   - Test before merging to main

3. **Monitor logs during high traffic**
   ```bash
   vercel logs --follow
   ```

4. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

5. **Backup before major changes**
   - Export database
   - Tag release in git
   - Create Vercel deployment snapshot

---

**Last Updated:** January 2025
