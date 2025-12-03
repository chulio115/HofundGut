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

Aktuelle Definition (siehe `src/index.css` – Tailwind `@theme`):

```css
--color-hof-forest: #14322A;       /* Primary Dark – Hero, dunkle Sektionen, CTAs */
--color-hof-forest-light: #1B4035; /* Hover / leichte Bereiche */

--color-hof-bordeaux: #4A2C2A;     /* Kastanien-Bordeaux – Footer, Reservierungs-CTAs */
--color-hof-bordeaux-light: #5D3835;

--color-hof-cream: #F5EFE6;        /* Main Background */
--color-hof-cream-dark: #EBE4D8;   /* Karten auf hellem Hintergrund */
--color-hof-cream-light: #F8F3EB;  /* Inputs, Formularflächen */

--color-hof-gold: #C9A962;         /* Icons, Badges, Primary-Buttons auf dunkel */
--color-hof-gold-light: #D4B87A;

--color-hof-sage: #E5DED3;         /* Alternate Sections / Info-Bänder */
--color-hof-charcoal: #2C2C2C;     /* Textfarbe auf hellen Hintergründen */
```

## Design Guidelines

### Hintergründe & Ebenen

- **Seiten-Hintergrund (Page)**
  - Standard: `bg-hof-cream`
  - Alternate Sections (z.B. Infobänder, Qualitäten): `bg-hof-sage`
  - Dunkle Story-Bereiche / Hero: `bg-hof-forest` oder Bild + Forest-Overlay

- **Karten (Cards)**
  - Auf **Cream**-Hintergrund → Karten in **Weiß** (`bg-white` + dezente Border `border-hof-charcoal/10`)
  - Auf **Sage**-Hintergrund → Karten in **Cream** (`bg-hof-cream` + Border `border-hof-charcoal/5`)
  - Auf **dunklem** Hintergrund (Forest/Bild-Overlay) → Karten/Overlays in **Cream** oder halbtransparentem Dunkel (`bg-hof-charcoal/80`), Text in **Weiß**/**Cream**

- **Formulare**
  - Inputs: `bg-white` mit Border `border-hof-charcoal/15` und Focus-Ring in Forest
  - Flächen um das Formular: `bg-hof-cream`

### Buttons & CTAs

- **Primary (Aktion auslösen)**
  - Auf hellem Hintergrund: 
    - `bg-hof-forest text-white` oder `bg-hof-bordeaux text-hof-cream`
  - Auf dunklem Hintergrund (Hero / Forest / Footer):
    - `bg-hof-gold text-hof-forest` (z.B. Hero, Quick-Reservation, Footer-CTA)

- **Secondary (Alternative Aktion)**
  - Auf dunkel: Border-/Ghost-Buttons mit Weiß (`border-white/40 text-white bg-white/10`)
  - Auf hell: `border-hof-forest text-hof-forest` oder reine Textlinks mit Bordeaux (`text-hof-bordeaux`)

- **Reservieren / Speisekarte**
  - **Reservieren**: immer als Primary-CTA (Bordeaux oder Forest, je nach Kontext)
  - **Speisekarte**: Link oder Secondary-Button, nie konkurrierend neben „Reservieren“.

### Shine Utilities

- **Dunkle Sektionen mit Shine:** `shine-dark` Klasse zusätzlich auf Section/Container setzen.
  - Nutzt linearen und radialen Verlauf, um subtilen Lichtverlauf von oben zu erzeugen.
- **Buttons mit Shine:** `btn-shine` zusätzlich auf den Button geben.
  - Erzeugt einen leichten Glanz-Swipe beim Hover, dezent gehalten.

### Typografie

- **Display-Font** (`font-display`)
  - Headlines, Karten-Titel, Hero-Texte
- **Body-Font** (Standard)
  - Fließtexte, Listen, Beschreibungen
- **Farben**
  - Text auf hell: `text-hof-charcoal` / `text-hof-charcoal/70`
  - Text auf dunkel: `text-white` / `text-white/70` oder `text-hof-cream`

## Komponenten

### Navbar
- Transparent auf Hero, Warm-Cream beim Scrollen (Blur + Shadow)
- Hauptnavigation: `Restaurant`, `Speisekarte`, `Die Rinder`, `Der Hof`, `Hofladen`, `Kontakt`
- Sticky Reservierungs-CTA ("Reservieren") erscheint smooth nach ~60% Scroll
- Mobile: Slide-in Panel von rechts mit denselben Routen

### Footer
- Vollflächiger Bordeaux-Hintergrund (kastanienfarben) mit subtilen Shine-Gradients
- Typografie und Icons in Warm Cream / Gold
- Reservierungs-CTA ("Tisch reservieren") öffnet das gemeinsame `ReservationModal`

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

## Admin / CMS (Decap)

### Überblick

- CMS: **Decap CMS** (ehemals Netlify CMS)
- Admin-Oberfläche: `/admin/` (statisches HTML in `public/admin`)
- Backend: `git-gateway` → schreibt JSON-Dateien direkt ins Repo
- Authentifizierung: **Netlify Identity** + **Git Gateway**

### Konfiguration

- `public/admin/index.html`
  - Lädt Netlify Identity Widget und Decap CMS Script.
- `public/admin/config.yml`
  - `backend: git-gateway`
  - `media_folder: public/uploads`
  - `public_folder: /uploads`
  - Collections:
    - `menu_settings` → `src/content/menu-settings.json`
    - `menu_highlights` → `src/content/menu-highlights.json`

### Collections im Detail

**1. Speisekarte – Einstellungen (`menu_settings`)**

- Datei: `src/content/menu-settings.json`
- Feld:
  - `pdf` (`Speisekarten-PDF`):
    - Datei-Upload (PDF), wird unter `/uploads/...` abgelegt.
    - In `Speisekarte.tsx` wird dieses Feld als `menuPdfUrl` genutzt.
    - Buttons „Zur aktuellen Karte“, „PDF Download“ und „Komplette Karte ansehen“ verlinken immer auf diese URL.

**2. Speisekarte – Highlights (`menu_highlights`)**

- Datei: `src/content/menu-highlights.json`
- Feld `items` (Liste):
  - `category` – z.B. *Signature*, *Saisonal*, *Vegetarisch*.
  - `title` – Gerichtstitel.
  - `desc` – Beschreibungstext.
  - `price` – Preis als String ohne `€`.
  - `badge` – kleines Label wie „Unser Klassiker“.
- In `Speisekarte.tsx` werden diese Items für die 3 Karten unter „Was wir empfehlen“ verwendet.

### Login & Berechtigungen

- In Netlify:
  - **Identity** aktivieren.
  - Unter **Services**: **Git Gateway** aktivieren.
  - Unter **Users**: E-Mail-Adressen der Redakteure einladen (Invite).
- Ein eingeladener User:
  - Klickt auf den Einladungslink → setzt Passwort → Identität ist aktiv.
  - Meldet sich auf der Live-Site unter `/admin/` über das Identity-Widget an.

### Editor-Workflow

**Speisekarte-PDF aktualisieren**

1. `/admin/` öffnen und einloggen.
2. Collection **„Speisekarte – Einstellungen“** öffnen.
3. Im Feld `Speisekarten-PDF` eine neue PDF hochladen.
4. Speichern / Publish → Netlify erstellt Commit und neuen Build.
5. Nach dem Deploy verlinken alle Speisekarten-Buttons auf die neue PDF.

**„Was wir empfehlen“-Karten bearbeiten**

1. `/admin/` → Collection **„Speisekarte – Highlights“**.
2. In der Liste `Gerichte` Einträge bearbeiten oder ergänzen (bis zu 3 nutzen).
3. Bei Bedarf Reihenfolge anpassen.
4. Speichern / Publish → neue Inhalte erscheinen auf `/speisekarte` unter „Was wir empfehlen“.

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
