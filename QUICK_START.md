# ⚡ Quick Start - 3 Steps to Deploy

## 1. Get Gemini API Key (2 minutes)
→ https://aistudio.google.com/app/apikey
→ Click "Create API Key"
→ Copy the key (starts with AIza...)

## 2. Add to Vercel (1 minute)
→ https://vercel.com/dashboard
→ Your Project → Settings → Environment Variables
→ Add: `GEMINI_API_KEY` = your key
→ Save

## 3. Push to GitHub (30 seconds)
```bash
git add .
git commit -m "Switch to free Gemini API"
git push origin main
```

## ✅ Done!
Vercel will auto-deploy. Test the chat widget in 2 minutes.

---

**Need help?** See DEPLOYMENT_GUIDE.md for detailed instructions.
