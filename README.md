# Hof & Gut Jesteburg

> Hofrestaurant in der Lüneburger Heide – Website entwickelt von Adaptify Labs

## 🌐 Live

**Production:** [https://hof-und-gut.netlify.app](https://hof-und-gut.netlify.app)

## ✨ Features

- **Endless Scroll Storytelling** – Moderne, immersive Seitenerlebnisse
- **Smart Header CTAs** – Erscheinen erst beim Scrollen (kein doppeltes UI)
- **Reservation Modal** – Buchung ohne Seitenwechsel
- **Responsive Design** – Optimiert für alle Geräte
- **Mobile-First** – Touch-optimiert, Safe Area Support

## 🎨 Design System

**Stil:** Modern Rustic Elegance (inspiriert von The Pig Hotel)

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Forest Green | `#003F2E` | Header, Footer, Dark Sections |
| Bordeaux | `#5E1A1A` | CTAs, Highlights |
| Warm Cream | `#FAF9F6` | Backgrounds |
| Gold | `#C4A35A` | Akzente |
| Sage | `#E8EDE9` | Alternate Sections |

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Netlify

## 📂 Seitenstruktur

```
/              → Home (Hero + Teaser)
/restaurant    → Endless Scroll: Events → Kalender → Koch Frank
/aubrac        → Die Aubrac Rinder
/hof           → Endless Scroll: Geschichte → Philosophie → Reitschule
/hofladen      → Fleischpakete
/kontakt       → Anfahrt & Kontaktformular
/speisekarte   → Küchenphilosophie + Gerichte
```

## 🚀 Development

```bash
# Install
npm install

# Dev Server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## �� Deploy

Automatisches Deployment via Netlify bei Push auf `main`.

```bash
# Commit & Push
git add .
git commit -m "Update"
git push origin main
```

## 📄 Netlify Config

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **SPA Redirects:** `_redirects` file

---

**Entwickelt mit ❤️ von [Adaptify Labs](https://adaptify-labs.de)**
