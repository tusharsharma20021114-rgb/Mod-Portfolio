# 🚀 Deployment Guide - Switch to Free AI & Push to Main

## ✅ Changes Made

Your project has been updated to use **Google Gemini API** (FREE) instead of Anthropic (paid).

---

## 📋 Step-by-Step Instructions

### 1️⃣ Get Your Free Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Copy the API key (starts with `AIza...`)

**Free Tier Limits:**
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per day
- Perfect for a portfolio chat widget!

---

### 2️⃣ Add API Key to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your API key (AIza...)
   - **Environment:** Check all (Production, Preview, Development)
5. Click **Save**

---

### 3️⃣ Add API Key Locally (for testing)

Add this line to your `.env.local` file:

```env
GEMINI_API_KEY=AIzaxxxxxxxxxxxxxxxx
```

Replace with your actual API key.

---

### 4️⃣ Test Locally (Optional)

```bash
npm run dev
```

Open http://localhost:3000 and test the "Ask me anything" chat widget.

---

### 5️⃣ Push to GitHub

```bash
# Check current status
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Switch from Anthropic to free Gemini API"

# Push to main branch
git push origin main
```

---

### 6️⃣ Verify Deployment

1. Vercel will automatically deploy when you push to main
2. Wait 1-2 minutes for deployment to complete
3. Visit your live site
4. Test the chat widget by clicking the 💬 button

---

## 🔧 What Was Changed

| File | Change |
|------|--------|
| `app/api/resume/route.js` | Updated to use Gemini API instead of Anthropic |
| `SETUP.md` | Updated documentation with Gemini instructions |

---

## 🆘 Troubleshooting

**Chat not working?**
- Check that `GEMINI_API_KEY` is set in Vercel environment variables
- Verify the API key is valid at https://aistudio.google.com/app/apikey
- Check browser console for errors (F12)

**Rate limit errors?**
- Free tier: 15 requests/minute, 1,500/day
- If you hit limits, wait a minute or upgrade to paid tier

**Still using Anthropic?**
- Make sure you pushed the changes: `git push origin main`
- Check Vercel deployment logs for errors

---

## 💰 Cost Comparison

| Provider | Free Tier | Cost After Free |
|----------|-----------|-----------------|
| **Gemini** | 1,500 requests/day | $0.075 per 1M tokens |
| Anthropic | None | $0.25 per 1M tokens |

For a portfolio site, you'll likely stay within the free tier! 🎉

---

## 📚 Additional Resources

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Git Push Guide](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
