# 🏆 Landing Page Vision – Hof & Gut Jesteburg

> **Ziel:** Eine Website, die lokale Konkurrenz in die Tasche steckt.
> **Standard:** Kein Baukasten, kein 2010-Design. Wir sind 2025.
> **Fokus:** Restaurant im Zentrum, Aubrac als USP, Philosophie als Fundament.
> 
> ## ⚠️ WICHTIG: Design-Stil

### Hof & Gut Jesteburg = WARM & FAMILIÄR

**NICHT:** Premium-clean, minimal, steril (das ist für das Schwester-Restaurant später)

**SONDERN:** 
- 🏡 **Warm Modern Farmhouse** – wie "Founding Farmers"
- 🪵 **Rustikale Texturen** – Holz, warme Töne, authentisch
- 👨‍👩‍👧‍👦 **Familiär & Nahbar** – Geschichte, Menschen, Tiere
- 🌾 **Farm-to-Table Story** – vom Hof auf den Teller
- ☕ **Gemütlich, nicht steril** – einladend, nicht kühl

### Farben für Hof & Gut:
- Warmes Creme (`hof-cream`)
- Erdiges Forest Green (`hof-forest`) – aber warm eingesetzt
- Terracotta als Akzent (`hof-terracotta`)
- Holz-Brauntöne in Bildern

### Später: Schwester-Restaurant = PREMIUM CLEAN
- Adaptify-Style
- Viel Whitespace
- Minimal, elegant
- Das kommt in einem eigenen Projekt!

---

## 🎯 Aktuelle Struktur (Dezember 2024)

### Navbar
```
Speisekarte (★) | Aubrac Rinder | Der Hof | Übernachten | Kontakt | [Reservieren]
```

### Landing Page Flow
```
HERO
├── "Speisen am Hof · Jesteburg"
├── "Hof & Gut"
├── "Vom eigenen Feld auf Ihren Teller"
└── [Tisch reservieren] [Speisekarte →]
        ↓
PHILOSOPHIE
├── Bild: Historischer Hof
├── "Vom Hof auf den Teller"
├── Kurze Erklärung der Werte
└── → Mehr über den Hof
        ↓
RESTAURANT
├── "Speisen am Hof"
├── "Die Stub'n"
├── Koch-Zitat
├── Öffnungszeiten
└── → Speisekarte
        ↓
AUBRAC (USP)
├── "Unser Qualitätsversprechen"
├── "Aubrac Rinder"
├── Bullet Points: 3 Jahre, Freiland, Dry Aged
└── → Mehr über unsere Rinder
        ↓
CTA
├── "Wir freuen uns auf Ihren Besuch"
└── [Tisch reservieren] [Telefon]
        ↓
FOOTER
```

### Was NICHT auf der Landing Page ist:
- Hofladen (→ auf /hof oder /hofladen)
- Reitbetrieb (→ auf /hof)
- Detaillierte Historie (→ auf /hof)
- Übernachten (→ eigene Seite)
- Preise (→ /speisekarte)

---

## 🎯 Die Strategie

### Was die Konkurrenz macht (falsch):
- Templates von WordPress/Jimdo/Wix
- Stock-Fotos überall
- Zu viel Information auf einmal
- Keine Storytelling
- Langsam, nicht mobile-first
- "Herzlich Willkommen" als Headline 🙄

### Was wir machen (richtig):
- **Custom Design** – kein Template erkennbar
- **Authentische Bilder** – echte Fotos vom Hof
- **Full-Viewport Sections** – wie ein Film, nicht wie ein Flyer
- **Storytelling** – jede Section erzählt ein Kapitel
- **Premium Interactions** – smooth, nicht billig
- **Mobile-First** – 70% der Besucher sind mobil

---

## 🖼️ Authentische Bilder (der Gamechanger)

### Warum das entscheidend ist:
- Stock-Fotos = "Die könnten überall sein"
- Echte Fotos = "Das ist nur hier"

### Bilder die wir haben/brauchen:

| Bild | Sektion | Status |
|------|---------|--------|
| Historisches Hof-Foto (Sepia) | Historie | ✅ Vorhanden |
| Aubrac Rinder (freundlich) | Rinder USP | ✅ Vorhanden |
| Frank Schiffner (Koch) | Koch Portrait | ❓ Benötigt |
| Restaurant Innenraum | Hero/CTA | ❓ Benötigt |
| Gericht / Teller | Optional | ❓ Benötigt |

**TODO:** Authentische Fotos vom Kunden anfragen!

---

## 📐 Full-Viewport Section Design

### Das Prinzip:
```css
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Warum 100vh pro Section:
1. **Fokus** – eine Message pro Screen
2. **Kino-Feeling** – wie Slides, nicht wie Zeitung
3. **Mobile-friendly** – swipe-natürlich
4. **Premium** – Luxusmarken machen das auch

### Scroll-Verhalten:
- **Smooth Scroll** – `scroll-behavior: smooth`
- **Snap Points** (optional) – `scroll-snap-type: y mandatory`
- **Reveal Animations** – Elemente faden ein beim Scrollen

---

## 🎬 Die 4 Sektionen

### Sektion 1: HISTORIE
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│        ┌─────────────────────────┐                          │
│        │                         │                          │
│        │   [Historisches Bild]   │                          │
│        │   Hof im Sepia-Look     │                          │
│        │                         │                          │
│        └─────────────────────────┘                          │
│                                                             │
│                  SEIT 1500                                  │
│                                                             │
│        "Ein denkmalgeschützter Hof in der                   │
│         Lüneburger Heide. 500 Jahre Geschichte              │
│         unter einem Reetdach."                              │
│                                                             │
│              Mehr erfahren →                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Design:
- Bild: Leicht versetzt, mit Schatten
- Vintage-Filter beibehalten (authentisch!)
- Text: Links oder rechts vom Bild
- CTA: Dezent, führt zu /ueber-uns oder ähnlich
```

### Sektion 2: AUBRAC RINDER
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   UNSER QUALITÄTSVERSPRECHEN                                │
│                                                             │
│   Aubrac Rinder.                                            │
│   Drei Jahre Zeit.                                          │
│                                                             │
│        ┌─────────────────────────────────────────┐          │
│        │                                         │          │
│        │   [Echtes Bild: Aubrac Rinder]          │          │
│        │   Die freundlichen Kühe vom Hof         │          │
│        │                                         │          │
│        └─────────────────────────────────────────┘          │
│                                                             │
│   "Französische Edelrinder, aufgewachsen auf                │
│    unseren bio-zertifizierten Weiden."                      │
│                                                             │
│              Unsere Rinder →                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Design:
- Bild: Groß, dominant, freundlich
- Text: Kurz und knackig
- USP klar kommuniziert
```

### Sektion 3: DER KOCH
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│   ┌─────────────────┐                                       │
│   │                 │       DIE KÜCHE                       │
│   │  [Portrait]     │                                       │
│   │  Frank          │       "Unsere Küche erzählt          │
│   │  Schiffner      │        die Geschichte unseres        │
│   │                 │        Hofes – vom Feld auf          │
│   │                 │        den Teller."                  │
│   └─────────────────┘                                       │
│                             — Frank Schiffner               │
│                               Küchenchef                    │
│                                                             │
│                       Zur Speisekarte →                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Design:
- Portrait-Foto: Authentisch, nicht gestellt
- Zitat: Persönlich, nahbar
- Warme Töne
```

### Sektion 4: CTA (Restaurant)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                   INTERESSE GEWECKT?                        │
│                                                             │
│              Wir freuen uns auf Ihren Besuch.               │
│                                                             │
│                                                             │
│        [Tisch reservieren]     [Speisekarte]                │
│                                                             │
│                                                             │
│        Mo, Do–So ab 17:30 · Jesteburg · 04181 9199500        │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Design:
- Hintergrund: Warme Farbe (Forest Green oder Charcoal)
- CTAs: Beide gleichwertig prominent
- Kontaktinfo: Dezent darunter
```

---

## 🎛️ Hero Header (Detail)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Hof & Gut                    [Nav Items] [CTA]      │
│                                                             │
│                                                             │
│                                                             │
│                      RESTAURANT · JESTEBURG                 │
│                                                             │
│                        Hof & Gut                            │
│                                                             │
│               Regionale Hofküche.                           │
│               Historisches Ambiente.                        │
│               Seit 1500.                                    │
│                                                             │
│                                                             │
│        [🗓 Tisch reservieren]     [Speisekarte →]           │
│                                                             │
│                                                             │
│                                                             │
│                                                             │
│                          🖱️                                 │
│                         ↓                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Reservierungs-Button öffnet Modal:
- Kalender-Auswahl
- Personenanzahl
- Uhrzeit
- Kontaktdaten
- DSGVO-Checkbox
- → Sendet E-Mail oder wird später mit Backend verbunden

---

## 🔧 Technische Umsetzung

### Scroll Animations
```typescript
// Framer Motion - Reveal on Scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-10%" }}
  transition={{ duration: 0.8 }}
>
```

### Mouse Scroll Indicator
```typescript
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  <Mouse />
</motion.div>
```

### Snap Scrolling (Optional)
```css
html {
  scroll-snap-type: y proximity;
}

.section {
  scroll-snap-align: start;
}
```

### Reservation Modal
- React Modal/Dialog
- Date Picker (react-day-picker oder custom)
- Form Validation
- E-Mail via Formspree/Resend (kostenlos)

---

## 📱 Mobile Considerations

- Full-viewport sections funktionieren auch mobil
- Touch-friendly CTAs (min 48px)
- Bilder: object-fit: cover, responsive
- Navigation: Hamburger menu
- Reservation Modal: Full-screen auf Mobile

---

## 🎨 Premium Details

### Was uns von Baukasten unterscheidet:

| Baukasten | Wir |
|-----------|-----|
| Generische Fonts | Playfair Display + Inter |
| #000 und #fff | Custom Farbpalette |
| Stock Photos | Echte Hof-Fotos |
| Instant load | Elegante Reveal-Animationen |
| Statische Elemente | Subtle Hover & Scroll Effects |
| Template-Header | Custom Hero mit Typewriter |
| Kontaktformular | Reservierungs-Modal |

---

## 📋 Nächste Schritte

1. **Bilder sammeln:**
   - [ ] Koch-Portrait (von Kunde)
   - [ ] Restaurant Innenraum (von Kunde)
   - [x] Historisches Hof-Bild (vorhanden)
   - [x] Aubrac Rinder (vorhanden)

2. **Hero implementieren:**
   - [ ] Navbar Scroll-Verhalten
   - [ ] Reservation Modal
   - [ ] Mouse Scroll Indicator

3. **Sections implementieren:**
   - [ ] 100vh Full-viewport Layout
   - [ ] Historie Section
   - [ ] Rinder Section
   - [ ] Koch Section
   - [ ] CTA Section

4. **Polish:**
   - [ ] Scroll Animations
   - [ ] Mobile Testing
   - [ ] Performance Optimierung

---

## 🏁 Definition of Done

Die Landing Page ist fertig wenn:

- [ ] Jede Section füllt 100vh
- [ ] Keine Stock-Fotos (wo möglich)
- [ ] Reservation Modal funktioniert
- [ ] Smooth Scroll zwischen Sections
- [ ] Mobile-first responsive
- [ ] Lighthouse Score > 90
- [ ] Kein erkennbarer Template-Look
- [ ] User sagt "WOW"

---

*Erstellt: Dezember 2024*
*Adaptify Labs – Above and Beyond*
