# Amina Sheikh — Personal Portfolio

Modern, AI-powered developer portfolio built with React + Vite. Includes full instructions for running locally, pushing to GitHub, and deploying on Vercel.

---

## 🚀 Quick Start (Run Locally)

### Step 1 — Install Node.js
Download and install from: https://nodejs.org (choose LTS version)

### Step 2 — Open project in VS Code
1. Extract/open the `amina-portfolio` folder
2. Open VS Code → File → Open Folder → select `amina-portfolio`

### Step 3 — Install dependencies
Open terminal in VS Code (Ctrl + ` ) and run:
```bash
npm install
```

### Step 4 — Run development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser ✅

---

## 📁 Project Structure

```
amina-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── vercel.json
├── .gitignore
└── Amina_Sheikh_CV.html   ← Your CV (open in browser, print as PDF)
```

---

## 📤 Push to GitHub

### Step 1 — Create GitHub account (if you don't have one)
Go to https://github.com and sign up

### Step 2 — Create a new repository
1. Click the **+** button → **New repository**
2. Name it: `amina-portfolio`
3. Keep it **Public**
4. Do NOT check "Add README" (we already have one)
5. Click **Create repository**

### Step 3 — Push your code
In VS Code terminal, run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit: Amina Sheikh portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amina-portfolio.git
git push -u origin main
```

> ⚠️ Replace `YOUR_USERNAME` with your actual GitHub username

---

## ▲ Deploy on Vercel (Free)

### Option A — Deploy via Vercel website (easiest)
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New → Project**
3. Select your `amina-portfolio` repository
4. Vercel will auto-detect Vite settings
5. Click **Deploy** — done! 🎉

Your site will be live at: `https://amina-portfolio.vercel.app`

### Option B — Deploy via terminal
```bash
npm install -g vercel
vercel
```
Follow the prompts — it will deploy automatically.

---

## ✏️ How to Customize

| What to change | File to edit |
|---|---|
| Your name, bio, description | `src/sections/Hero.jsx` and `src/sections/About.jsx` |
| Projects | `src/sections/Projects.jsx` → edit the `projects` array |
| Skills & percentages | `src/sections/Skills.jsx` → edit `skillGroups` array |
| Contact info & social links | `src/sections/Contact.jsx` and `src/components/Footer.jsx` |
| Colors | `src/index.css` → edit the `:root` variables |
| Profile photo | Add your photo to `public/` folder, then use `<img src="/your-photo.jpg">` in Hero.jsx |

---

## 📧 Enable Real Contact Form (Optional)

The contact form currently simulates sending. To receive real emails:

1. Go to https://formspree.io → create free account
2. Create a form → copy your form ID (looks like `xpznkqwd`)
3. In `src/sections/Contact.jsx`, replace the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setLoading(false);
  if (res.ok) setSent(true);
};
```

---

## 📄 CV Instructions

Your CV is in `Amina_Sheikh_CV.html`:

1. Open it in Chrome or Edge
2. Press **Ctrl + P** (Print)
3. Set destination to **Save as PDF**
4. Set margins to **None** or **Minimal**
5. Enable **Background graphics**
6. Save as `Amina_Sheikh_CV.pdf`

> Remember to update your email, GitHub link, and portfolio URL in the CV before saving!

---

## 🛠 Build for Production

```bash
npm run build
```
Output will be in the `dist/` folder. Vercel handles this automatically.

---

Built with ❤️ — React, Vite, Lucide Icons, Google Fonts (Syne + DM Sans)
