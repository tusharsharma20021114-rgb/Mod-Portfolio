# 📝 Commands to Run (Copy & Paste)

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

Wait for it to finish (might take 1-2 minutes).

---

## Step 2: Test Locally (Optional)

```bash
npm run dev
```

Then open: http://localhost:3000

Press `Ctrl+C` to stop the server when done.

---

## Step 3: Push to GitHub

Run these commands one by one:

```bash
git add .
```

```bash
git commit -m "Fix 404 error and add API configuration"
```

```bash
git push origin main
```

---

## ✅ Done!

Wait 2-3 minutes, then check your Vercel URL. Your site should be live!

---

## 🔑 After Site is Live

Add these API keys to Vercel (see DEPLOYMENT_GUIDE.md for details):

1. Get Gemini API key: https://aistudio.google.com/app/apikey
2. Get Resend API key: https://resend.com/signup
3. Add both to Vercel → Settings → Environment Variables

---

## 🆘 If Something Goes Wrong

**npm install fails?**
- Make sure you have Node.js installed
- Try: `npm install --legacy-peer-deps`

**git push fails?**
- Make sure you're in the right folder
- Check if you're logged into GitHub: `git config user.name`

**Still getting 404?**
- Check Vercel deployment logs
- Make sure the build succeeded
- See FIXED_404_ISSUE.md for troubleshooting
