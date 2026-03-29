# ✅ Deployment Checklist

Use this checklist to ensure everything is set up correctly before pushing to main.

---

## Pre-Deployment

- [ ] **Code Changes Complete**
  - ✅ Updated `app/api/resume/route.js` to use Gemini
  - ✅ Updated `SETUP.md` documentation
  - ✅ Updated `AGENTS.md` references

---

## Get API Key

- [ ] Visit https://aistudio.google.com/app/apikey
- [ ] Sign in with Google account
- [ ] Click "Create API Key" or "Get API Key"
- [ ] Copy the API key (starts with `AIza...`)
- [ ] Save it somewhere safe (you'll need it in the next step)

---

## Configure Vercel

- [ ] Go to https://vercel.com/dashboard
- [ ] Select your project
- [ ] Navigate to Settings → Environment Variables
- [ ] Click "Add New"
- [ ] Set Name: `GEMINI_API_KEY`
- [ ] Paste your API key as Value
- [ ] Select all environments (Production, Preview, Development)
- [ ] Click Save

---

## Local Testing (Optional but Recommended)

- [ ] Create/update `.env.local` file
- [ ] Add line: `GEMINI_API_KEY=your_actual_key_here`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Click the 💬 chat button
- [ ] Test with a question like "What is Tushar's current role?"
- [ ] Verify you get a response

---

## Push to GitHub

- [ ] Check status: `git status`
- [ ] Stage changes: `git add .`
- [ ] Commit: `git commit -m "Switch to free Gemini API for chat widget"`
- [ ] Push: `git push origin main`

---

## Verify Deployment

- [ ] Wait 1-2 minutes for Vercel to deploy
- [ ] Visit your live site URL
- [ ] Click the 💬 chat widget
- [ ] Test with a question
- [ ] Verify the chat responds correctly

---

## Troubleshooting

If chat doesn't work:

1. **Check Vercel Logs**
   - Dashboard → Deployments → Latest → Functions
   - Look for errors mentioning GEMINI_API_KEY

2. **Verify API Key**
   - Go back to https://aistudio.google.com/app/apikey
   - Make sure the key is active
   - Try creating a new key if needed

3. **Check Environment Variables**
   - Vercel → Settings → Environment Variables
   - Confirm `GEMINI_API_KEY` is set for all environments
   - Redeploy if you just added it

4. **Browser Console**
   - Press F12 on your site
   - Check Console tab for errors
   - Check Network tab for failed API calls

---

## Success Criteria

✅ Chat widget opens when clicking 💬
✅ Can type and send messages
✅ Receives AI responses about Tushar
✅ No console errors
✅ No rate limit errors (within free tier)

---

## Next Steps After Deployment

- Monitor usage at https://aistudio.google.com/app/apikey
- Free tier: 1,500 requests/day (plenty for a portfolio!)
- If you hit limits, consider upgrading or adding rate limiting
- Share your portfolio with recruiters! 🎉

---

**Need Help?**
- Quick guide: `QUICK_START.md`
- Detailed guide: `DEPLOYMENT_GUIDE.md`
- Technical details: `API_MIGRATION_SUMMARY.md`
