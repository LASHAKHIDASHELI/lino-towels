# Lino Towels Website - Setup Instructions

## Quick Start

### Step 1: Create Project Structure
Once Node.js is working, run these commands in your terminal:

```bash
cd "C:\Users\User\Desktop\AI Automation\lino-towels"
npm create vite@latest . -- --template react
npm install
npm install gsap lucide-react react-router-dom
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Copy Configuration Files
Replace the files in your project with the versions provided in this folder:
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `src/App.jsx`
- `src/index.css`
- `index.html`

### Step 3: Start Development Server
```bash
npm run dev
```

Your site will be live at `http://localhost:5173`

### Step 4: Build for Production
```bash
npm run build
```

---

## File Structure

After setup, your folder should look like:

```
lino-towels/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── App.jsx (Main website component)
│   ├── index.css (Tailwind styles)
│   └── main.jsx
├── public/
└── dist/ (Created after build)
```

---

## Troubleshooting

### Node.js not found?
1. Make sure Node.js is installed: https://nodejs.org/ (download LTS)
2. **Close and reopen your terminal** after installation
3. Verify with: `node --version` and `npm --version`

### Port 5173 already in use?
Edit `vite.config.js` and change the port:
```javascript
server: {
  port: 3000  // Change to different number
}
```

### Missing dependencies?
Run: `npm install`

---

## Deployment Options

Once built, deploy your `dist/` folder to:

1. **Vercel** (recommended for React):
   - Sign up at vercel.com
   - Connect your GitHub repo
   - Deploy with one click

2. **Netlify**:
   - Sign up at netlify.com
   - Drag and drop the `dist/` folder

3. **Traditional Hosting**:
   - Upload `dist/` folder to your web host via FTP

---

## Customization Guide

### Change Colors
Edit `tailwind.config.js` and update the color values:
```javascript
colors: {
  forest: '#2D5A3D',      // Change here
  cream: '#F5F1E8',       // Change here
  // ... other colors
}
```

### Change Text
Open `src/App.jsx` and find the sections to edit text content.

### Change Images
Replace image URLs in `src/App.jsx` with your product photos or new Unsplash links.

### Add Products
Duplicate product card code and update with new towel details.

---

## Performance Tips

1. **Optimize Images**: Use compressed images from Unsplash or optimize your own
2. **Lazy Loading**: Images load as user scrolls
3. **Production Build**: Always use `npm run build` for deployment (faster than dev server)

---

## Next Steps After Setup

1. ✅ Set up Node.js and create project
2. ✅ Copy configuration files
3. ✅ Replace images with your own product photos
4. ✅ Update contact information (phone, email)
5. ✅ Test on mobile (375px width)
6. ✅ Test on tablet (768px width)
7. ✅ Build and deploy

---

**Questions?** Check PROJECT_BRIEF.md for detailed design decisions.
