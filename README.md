# ❄️ Whiteout Survival — Tools & Guides Hub

A fast, modern, and accessible toolkit for **Whiteout Survival** players.

A centralized hub for **tools, guides, hero information, event walkthroughs, upgrade calculators, and curated community resources** — designed for both new and veteran Whiteout Survival players.

---

## 🔗 Live Website
👉 [https://www.wosrewards.com/](https://www.wosrewards.com/)

---

## 🧵 Overview

**Whiteout Survival Tools** is an all-in-one resource center focused on clarity, organization, and fast access. Use it to:

- Plan building upgrades  
- Track requirements  
- Read guides & walkthroughs  
- Watch recommended videos  
- Discover hidden mechanics  
- Access calculators  
- Explore fan resources  

Built with **performance, accessibility, and long-term scalability** in mind.

---

## ✨ Features

### 1. 📚 Searchable Guides Library
- Instant live search  
- Categories (events, heroes, pets, timelines, videos, and more)  
- Supports YouTube, articles, official links  
- Priority/featured content sorting  
- Clean card-based UI  

### 2. 🗂 Organized & Expandable Data System
- All guide content stored in `/data/guides.ts`  
- Easy to add new categories or resources  
- Scalable format (tags, filters, future tools)  

### 3. 🎨 Clean, Component-Based UI
- Built with React + TailwindCSS  
- Fully responsive on all devices  
- Reusable components:  
  - `SearchBox`  
  - `GuideSection`  
  - `GuideCard`  
  - `GuideResource`  
  - `PageCard`  
  - `Navbar`  
  - `UpgradesCalculator`  
- Smooth hover states & transitions  
- Transparent/glass UI elements  
- Dark theme optimized  

### 4. 🛠 Player Tools
- Upgrade prerequisite calculator  
- Building requirement explorer  
- Strategy resources  
- Helpful external links:  
  - [Official Reward Redeemer](https://example.com)  
  - [WOS Wiki](https://example.com)  
  - [OutOf.Games](https://example.com)  
  - [OneChilledGamer](https://example.com)  

### 5. ❄️ Snow Visual Effects System
- Lightweight visual layer on major pages  
- Falling snow animation (multiple layers)  
- Responsive snowdrift at bottom of page  
- Randomized snowflake density, timing, and speed  
- Non-intrusive (pointer-events-none)  
- Optimized keyframes for smooth performance  
- Runs on Home, About, Guides, Upgrades pages  
- **CSS:** `/app/globals.css`  
- **Markup:** Included at bottom of each page  

### ♿ Accessibility (WCAG)
- Semantic HTML sections  
- `aria-labelledby` + `sr-only` headings  
- Keyboard-friendly focus states (`focus-visible`)  
- Color contrast tuned for dark mode  
- Large touch targets on mobile  
- No moving animations interfere with input  
- External links use `aria-label="opens in new tab"`  

**Planned improvements:**  
- Reduced-motion mode for snow  
- Underline-on-focus link mode  
- ARIA roles for card components  
- Contrast auto-check system  

---

## 🧱 Tech Stack

**Frontend:**  
- Next.js (App Router)  
- React  
- TypeScript  
- TailwindCSS  
- Lucide Icons  

**Tooling:**  
- ESLint  
- Prettier  
- Git & GitHub  
- Vercel (recommended hosting)  

---

## 📁 Project Structure
```
/
├── app/
│ ├── about/
│ ├── guides/
│ ├── upgrades/
│ └── page.tsx
│
├── components/
│ ├── Navbar/
│ ├── Guides/
│ │ ├── GuidesPage.tsx
│ │ ├── GuideSection.tsx
│ │ ├── GuideCard.tsx
│ │ ├── GuideResource.tsx
│ │ └── SearchBox.tsx
│ ├── Home/
│ ├── Calculator/
│
├── data/
│ └── guides.ts
│
└── public/
├── logos/
└── images/
```

---

## 🛠️ Usage

1. **Clone the repo:**

```bash
git clone <repository-url>
cd wos-tools
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the dev server**
```bash
npm run dev
```

4. **Open in Browser**
[text](http://localhost:3000)

---

## 📌 Upgrade Prerequisite Tool

The following building prerequisites are fully entered:

- Sawmill
- Shelter 1
- Shelter 3
- Coal Mine
- Iron Mine
- Hunter’s Hut
- Infantry Camp
- Marksman Camp
- Lancer Camp
- Embassy
- Infirmary
- Command Centre
- Research Center
- Hero Hall

**Status:**

- ✔ Data complete
- ⬜ UI improvements
- ⬜ Add building icons
- ⬜ WCAG upgrades
- ⬜ Add all building data

---

## 🗺 Roadmap

- Tag filters & sorting for guides
- Favorites system
- Onboarding for new players
- YouTube modal player
- Multi-language support
- Offline caching (PWA)
- Hero & troop calculators
- Event trackers
- Advanced building calculator

---

## 🤝 Contributing

PRs, suggestions, bug fixes, and improvements are welcome.  
Feel free to open:

- Issues
- Feature requests
- Documentation improvements

**Contribution Guidelines:**

1. Fork the repo  
2. Create a feature branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Add feature"`  
4. Push to the branch: `git push origin feature-name`  
5. Open a Pull Request  

---

## 🧼 Code Style Guide

This project follows:

- Airbnb JavaScript Style Guide
- Prettier formatting
- ESLint strict mode
- TailwindCSS component naming conventions


## ⚡ Quick Deployment to Vercel(Incase of 404 error here is how I solved it)

---

## 🛠️ Deploying Whiteout Survival to Vercel

### Problem

Deployments sometimes show a 404 error even when the build completes successfully. This usually happens when your Next.js app is in a **subdirectory** of your repository rather than at the root.

---

### Step 1: Verify Project Structure

Your repository should look like this:

```lua
repository-root/
└── wos-tools/          ← Your Next.js app
    ├── package.json
    ├── next.config.ts
    ├── vercel.json      ← will add in next step
    ├── app/
    │   └── page.tsx
    └── ...
```

> All pages (`/`, `/about`, `/guides`, `/upgrades`) must exist under `app/`.

---

### Step 2: Create `vercel.json`

In the root of your Next.js app (`wos-tools/`), create a file named `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

> This rewrites all routes to work with Vercel’s routing system.

---

### Step 3: Test Local Build

1. Run the production build:

```bash
npm run build
```

2. Start the serve

```bash
npm start
```

3. Verify locally that all pages load:

- `/` → homepage  
- `/about` → about page  
- `/guides` → guides page  
- `/upgrades` → upgrades page

---

### Step 4: Set Root Directory in Vercel

1. Go to your Vercel dashboard → **Project → Settings → General**  
2. Scroll to **Root Directory**  
3. Enter the name of your subdirectory (e.g., `wos-tools`)  
4. Save changes

---

### Step 5: Redeploy

- Trigger a redeploy in Vercel.  
- The build should now complete successfully.

---

### Step 6: Verification

1. Visit your production URL  
2. Confirm:  
   - Homepage loads without a 404  
   - All sub-routes (`/about`, `/guides`, `/upgrades`) are accessible  
   - Build logs show Next.js compiling successfully

---