# Trinova Techsolution — React (Vite)

100% offline: कुठलाही CDN नाही — फॉन्ट (Poppins, Sora) npm पॅकेज म्हणून bundle होतात, आणि सगळे icons/illustrations inline SVG आहेत.

## Local वर चालवायचं कसं
```bash
npm install
npm run dev
```
ब्राउझरमध्ये `http://localhost:5173` उघडेल.

## Production build
```bash
npm run build
```
`dist/` फोल्डरमध्ये तयार static फाईल्स मिळतील — कोणत्याही होस्टिंगवर (Netlify, Vercel, GitHub Pages) अपलोड करता येतील.

## GitHub वर टाकायचं कसं
```bash
git init
git add .
git commit -m "Trinova Techsolution website"
git branch -M main
git remote add origin https://github.com/<तुमचं-username>/<repo-name>.git
git push -u origin main
```

## GitHub Pages वर live करायचं (ऐच्छिक)
1. `npm install -D gh-pages`
2. `package.json` मध्ये `"homepage": "https://<username>.github.io/<repo-name>"` आणि scripts मध्ये `"predeploy": "npm run build", "deploy": "gh-pages -d dist"` जोडा.
3. `npm run deploy` चालवा.

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
