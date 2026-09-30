# Vishnupriya Saravanar: Portfolio

Next.js + Tailwind, exported as a static site and hosted free on Vercel.

## Before you push (2 small things)

1. **Resume:** already added as `public/resume.pdf` (the combined Product Manager resume). To update it, replace that file.
2. **Screenshots:** already added in `public/work/`. To update one, replace the file and keep the same name, e.g.:
   - `public/work/catalyst.png`
   - `public/work/ungal-kural.png`
   - `public/work/kidq.png`

   Landscape images (about 1600×1000) look best.

**Photo:** already added (`public/me.png` and `public/me-avatar.png`). To change it, replace those files.

## Change any text

All the words on the site are in **`content/site.ts`**. Edit that file and save. You don't need to touch anything else.

## See it on your computer (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Push to GitHub from the terminal

1. First, create an **empty** repo on github.com named `portfolio`. Don't add a README, .gitignore or licence.
2. Then run these in this folder:

```bash
git init
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/Priyas-hub/portfolio.git
git push -u origin main
```

If git asks you to log in, use your GitHub username. For the password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Tokens), not your account password.

**Later updates:**

```bash
git add .
git commit -m "Update text"
git push
```

Each push updates the live site automatically.

## Deploy on Vercel (free)

1. Go to vercel.com and click **Add New → Project**.
2. Import `Priyas-hub/portfolio`, leave all settings as they are, and click **Deploy**.
3. In Settings → Domains, change the domain to `vishnupriya-saravanar.vercel.app` (if it's free).
4. In the Analytics tab, click **Enable**. It's free.
