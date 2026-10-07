# Trinova Techsolution — React (Vite)

A fully offline-capable React website for Trinova Techsolution, built with Vite.
No CDN dependencies — fonts (Poppins, Sora) are bundled locally via npm packages, and all icons/illustrations are inline SVG.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Production build

```bash
npm run build
```

This generates optimized static files in the `dist/` folder, ready to be deployed to any hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/trinovatechnosolutions/trinova-techsolution.git
git push -u origin main
```

## Deploy to GitHub Pages

This project is already configured with the `gh-pages` package, and the correct values are already set:

- `vite.config.js` → `base: '/trinova-techsolution/'`
- `package.json` → `"homepage": "https://trinovatechnosolutions.github.io/trinova-techsolution"`

1. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the project and pushes the `dist/` folder contents to the `gh-pages` branch.
4. In your GitHub repo, go to **Settings → Pages** and make sure the source branch is set to `gh-pages`.

## Connecting a custom domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `trinovatechnosolutions.com`) and save.
2. At your domain registrar (e.g. GoDaddy), add these DNS records:
   - **A records** (Name: `@`) pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME record** (Name: `www`) pointing to:
     - `trinovatechnosolutions.github.io`
3. DNS propagation can take anywhere from 15 minutes to 24–48 hours.
4. Once GitHub shows a successful DNS check, enable **Enforce HTTPS**.

## Folder structure

```
trinova-react/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ App.css
```
