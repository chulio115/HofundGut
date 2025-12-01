# Hof & Gut Jesteburg 🌾

Eine moderne, animierte Website für [Hof & Gut Jesteburg](https://hof-und-gut.de) – ein historischer Hof aus dem 16. Jahrhundert mit eigener Aubrac-Rinderzucht, Restaurant und Gästezimmern in der Lüneburger Heide.

## ✨ Features

- **Hero mit Wow-Effekt** – Animierte Landingpage mit Parallax-Effekten
- **Aubrac-Rinder Story** – Interaktive "Vom Hof auf den Teller"-Timeline
- **Restaurant-Sektion** – Speisekarten-Preview mit Öffnungszeiten
- **Fleischverkauf** – Pakete und Bestellmöglichkeiten
- **Hotel-Bereich** – Zimmerübersicht mit Booking.com-Integration
- **Kontaktformular** – Mit Betreff-Auswahl und Bestätigung
- **Responsive Design** – Mobile-first, alle Breakpoints
- **SEO-optimiert** – Meta-Tags, Open Graph, Structured Data

## 🛠️ Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS v4** – Utility-first Styling
- **Framer Motion** – Scroll-Animationen
- **Lucide Icons** – Moderne Icon-Library

## 🎨 Design System

| Token | Wert | Verwendung |
|-------|------|------------|
| `hof-forest` | `#1a3d2e` | Primärfarbe, Header, Buttons |
| `hof-terracotta` | `#8B4513` | Akzente, CTAs |
| `hof-cream` | `#faf8f5` | Hintergrund |
| `hof-gold` | `#c9a227` | Highlights |
| `hof-charcoal` | `#2c2c2c` | Text |

**Fonts:** Playfair Display (Headlines) + Inter (Body)

## 🚀 Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── AubracSection.tsx
│       ├── RestaurantSection.tsx
│       ├── FleischSection.tsx
│       ├── HotelSection.tsx
│       └── ContactSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 📝 TODO

- [ ] Echte Bilder vom Hof einbinden
- [ ] Google Maps Embed mit korrekten Koordinaten
- [ ] PDF-Upload für Speisekarte (Admin-Bereich)
- [ ] Netlify Forms Integration
- [ ] Cookie-Banner (DSGVO)
- [ ] Impressum & Datenschutz Seiten

## 👥 Credits

Entwickelt von **[Adaptify Labs](https://adaptify-labs.de)** – Digitalisierung für KMUs.

---

© 2024 Hof & Gut Jesteburg. Alle Rechte vorbehalten.
