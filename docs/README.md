# Hof & Gut Jesteburg – Dokumentation

## Projekt-Übersicht

Website für Hof & Gut Jesteburg – ein Hofrestaurant mit eigener Aubrac-Rinderzucht in der Lüneburger Heide.

## Design-Philosophie

### Modern Rustic Elegance
- Referenz: The Pig Hotel (UK)
- Warm, einladend, sophisticated
- Nicht kitschig, sondern authentisch

### UX-Prinzipien
1. **Endless Scroll Storytelling** – Jede Seite erzählt eine Geschichte
2. **Smart CTAs** – Erscheinen kontextabhängig, nie doppelt
3. **Mobile First** – Touch-optimiert, schnelle Ladezeiten

## Farbpalette

```css
--hof-forest: #003F2E;     /* Header, Footer */
--hof-bordeaux: #5E1A1A;   /* CTAs, Akzente */
--hof-cream: #FAF9F6;      /* Hintergründe */
--hof-gold: #C4A35A;       /* Highlights */
--hof-sage: #E8EDE9;       /* Sections */
```

## Komponenten

### Navbar
- Transparent auf Hero, Cream beim Scrollen
- CTAs erscheinen smooth nach 60% Scroll
- Mobile: Slide-in Panel von rechts

### Footer
- Two-Tone Design: Cream oben, Forest unten
- Reservation Modal statt Link

### Sections
- Full-viewport Heroes mit Parallax
- Alternating Backgrounds (Cream/Sage)
- Motion-Animationen beim Scrollen

## Seiten-Architektur

| Route | Inhalt |
|-------|--------|
| `/` | Hero + Teaser-Sections |
| `/restaurant` | Events → Kalender → Koch Portrait → Teaser |
| `/aubrac` | Rinder-Story mit Timeline |
| `/hof` | Geschichte → Philosophie → Reitschule |
| `/hofladen` | Fleischpakete + Bestellung |
| `/kontakt` | Formular + Karte + Anfahrt |
| `/speisekarte` | Küchenphilosophie + Gerichte |

## Tech Stack

- **React 18** + TypeScript
- **Vite** (Build)
- **Tailwind CSS v4** (Styling)
- **Framer Motion** (Animationen)
- **Lucide React** (Icons)
- **Netlify** (Hosting)

## Deployment

### Netlify
- Auto-Deploy bei Push auf `main`
- Build: `npm run build`
- Publish: `dist/`

### Lokale Entwicklung
```bash
npm install
npm run dev     # localhost:5173
npm run build
npm run preview # localhost:4173
```

---

**Adaptify Labs** – adaptify-labs.de
