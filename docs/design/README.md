# 🎨 Design System – Hof & Gut Jesteburg

> **Stil:** Warm Modern Farmhouse – Nicht premium-clean, sondern familiär & einladend

---

## 🎯 Design-Philosophie

```
WÄRME STATT KÄLTE.
AUTHENTISCH STATT PERFEKT.
EINLADEND STATT EXKLUSIV.
```

Wir bauen ein **digitales Zuhause** für ein Familienrestaurant mit Geschichte.

### Was wir SIND:
- 🏡 **Warm & Einladend** – wie ein Besuch bei Freunden auf dem Land
- 🪵 **Authentisch** – echte Bilder, echte Geschichte, echte Menschen
- 🌾 **Bodenständig** – Farm-to-Table, keine Hochglanz-Perfektion
- ☕ **Modern, aber gemütlich** – 2025, aber nicht steril

### Was wir NICHT sind:
- ❌ Premium-clean wie Fine Dining
- ❌ Minimalistisch-steril wie Tech-Startups
- ❌ Adaptify-Style (das ist für das Schwester-Restaurant später)

### Referenzen:
- [Founding Farmers](https://www.wearefoundingfarmers.com/) – Warm farmhouse, farm-to-table
- Rustikale Landgasthöfe mit modernem Twist
- Familiengeführte Höfe mit Geschichte

---

## 🎨 Farbpalette

### Primärfarben

| Name | Hex | CSS Variable | Verwendung |
|------|-----|--------------|------------|
| **Forest** | `#1a3d2e` | `--hof-forest` | Primäre Akzentfarbe |
| **Terracotta** | `#8B4513` | `--hof-terracotta` | CTAs, Aktions-Buttons |
| **Cream** | `#faf8f5` | `--hof-cream` | Light Mode Background |
| **Charcoal** | `#1a1a1a` | `--hof-charcoal` | Dark Mode Background |

### Akzentfarben

| Name | Hex | CSS Variable | Verwendung |
|------|-----|--------------|------------|
| **Gold** | `#c9a227` | `--hof-gold` | Premium-Highlights, Gradient |
| **Cream Dark** | `#f5f0e8` | `--hof-cream-dark` | Alternate Sections |

### Gradients

```css
/* Hero Gradient Text */
--gradient-gold: linear-gradient(135deg, #c9a227 0%, #8B4513 100%);

/* Glow Effect */
--glow-forest: radial-gradient(ellipse at center, rgba(26,61,46,0.3) 0%, transparent 70%);
--glow-gold: radial-gradient(ellipse at center, rgba(201,162,39,0.2) 0%, transparent 70%);
```

---

## ✍️ Typografie

### Font Stack

| Font | Verwendung | Quelle |
|------|------------|--------|
| **Playfair Display** | Headlines, Display | Google Fonts |
| **Inter** | Body, UI, Navigation | Google Fonts |

### Größen – GROSS denken!

```css
/* Mobile */
--hero-title: clamp(2.5rem, 8vw, 5rem);
--section-title: clamp(2rem, 5vw, 3.5rem);
--body-large: 1.125rem;

/* Desktop */
--hero-title: 5rem;      /* 80px - GROSS! */
--section-title: 3.5rem; /* 56px */
--body-large: 1.25rem;   /* 20px */
```

### Zeilenabstände

```css
--leading-tight: 1.1;    /* Headlines */
--leading-normal: 1.6;   /* Body */
--leading-relaxed: 1.8;  /* Große Absätze */
```

---

## 🎬 Animationen

### Typewriter Effect

Headlines werden "getippt" – ein Wort nach dem anderen.

```tsx
// Beispiel: "Regionale Küche. Historisches Ambiente. Seit 1500."
// Wird Zeile für Zeile eingetippt
```

### Scroll Animations

| Element | Animation |
|---------|-----------|
| **Headlines** | Fade up + slight scale |
| **Cards** | Stagger fade in |
| **Images** | Parallax + reveal |
| **Stats** | Count up |

### Micro-Interactions

```css
/* Button Hover */
transform: translateY(-2px);
box-shadow: 0 10px 40px rgba(139,69,19,0.3);

/* Card Hover */
transform: translateY(-4px);
box-shadow: 0 20px 60px rgba(0,0,0,0.1);

/* Link Hover */
background: linear-gradient(90deg, currentColor 100%, transparent 100%);
background-size: 0% 2px;
/* → grows to 100% on hover */
```

### Timing

```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 📐 Layout-Prinzipien

### Whitespace

```css
/* Section Padding */
--section-y: clamp(4rem, 10vw, 8rem); /* Viel Raum! */

/* Content Max-Width */
--content-narrow: 42rem;  /* 672px - für Text */
--content-medium: 56rem;  /* 896px - für Cards */
--content-wide: 80rem;    /* 1280px - für Grids */
```

### Grid System

```css
/* Bento Grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 1.5rem;
```

### Hero Layout

```
┌────────────────────────────────────────┐
│                                        │
│         [Pill Badge]                   │
│                                        │
│      Headline mit                      │
│      Gradient Text                     │
│                                        │
│      Subline - kurz und klar           │
│                                        │
│      [CTA Primary] [CTA Secondary]     │
│                                        │
│                                        │
│              ↓ Scroll                  │
└────────────────────────────────────────┘
```

---

## 🧩 Komponenten

### Buttons

**Primary (Terracotta)**
```tsx
className="bg-hof-terracotta text-hof-cream px-6 py-3 rounded-full font-medium hover:bg-hof-terracotta-light transition-colors"
```

**Secondary (Forest)**
```tsx
className="bg-hof-forest text-hof-cream px-6 py-3 rounded-full font-medium hover:bg-hof-forest-light transition-colors"
```

**Ghost**
```tsx
className="bg-transparent border border-hof-cream/30 text-hof-cream px-6 py-3 rounded-full font-medium hover:bg-hof-cream/10 transition-colors"
```

### Cards

```tsx
className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
```

### Section Header

```tsx
<span className="text-hof-terracotta font-medium text-sm uppercase tracking-wider mb-4">
  Tagline
</span>
<h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
  Headline mit <span className="text-hof-forest">Akzent</span>
</h2>
```

## 📱 Breakpoints

| Breakpoint | Min-Width | Verwendung |
|------------|-----------|------------|
| `sm` | 640px | Mobile Landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large Desktop |
| `2xl` | 1536px | Extra Large |

## 🖼️ Bildsprache

- **Authentische Fotos** vom Hof (wenn verfügbar)
- **Hochwertige Stock-Fotos** als Platzhalter
- **Warme Farbtemperatur** – passend zur Marke
- **Keine überladenen Composings**
- **Fokus:** Food, Restaurant-Ambiente, Natur (keine Kühe auf Landingpage)
