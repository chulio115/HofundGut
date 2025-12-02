# 🎨 Design System – Hof & Gut Jesteburg

> **Stil:** Modern Rustic Elegance – Sophisticated, warm, einladend

---

## 🎯 Design-Philosophie

```
VOM HOF AUF DEN TELLER.
BODENSTÄNDIG TRIFFT ELEGANZ.
EINLADEND, NICHT EXKLUSIV.
```

Wir bauen eine **digitale Hofbesuch-Erfahrung** – warm, modern, konvertierend.

### Was wir SIND:
- 🍷 **Sophisticated & Warm** – wie ein gutes Abendessen mit Freunden
- 🌿 **Modern Rustic** – zeitgemäß mit Charakter
- 🏡 **Einladend & Nahbar** – familiär, aber nicht kitschig
- ✨ **Above & Beyond** – Adaptify-Qualität mit Hof-DNA

### Was wir NICHT sind:
- ❌ Baukasten-Templates oder billige Preisboxen
- ❌ Übertrieben rustikal/Country-Kitsch
- ❌ Kalt-minimalistisch ohne Seele
- ❌ 2015 Parallax-Overload

### Referenzen:
- **[The Pig Hotel](https://www.thepighotel.com/)** – Britisch, rustikal-elegant, warm
- **[Pasture Norfolk](https://pasturenorfolk.com/)** – Farm-to-table, modern ohne Kitsch
- **[Farmstead LB](https://farmsteadlb.com/)** – Clean aber warm

---

## 🎨 Farbpalette – "Modern Rustic Elegance"

### Primärfarben

| Name | Hex | CSS Variable | Verwendung |
|------|-----|--------------|------------|
| **Forest Green** | `#1a3d2e` | `--hof-forest` | Header, Footer, Dark Sections |
| **Bordeaux** | `#722F37` | `--hof-bordeaux` | CTAs, Hover, Highlights |
| **Warm Cream** | `#faf8f5` | `--hof-cream` | Light Backgrounds |

### Akzentfarben

| Name | Hex | CSS Variable | Verwendung |
|------|-----|--------------|------------|
| **Dark Gold** | `#b8860b` | `--hof-gold` | Subtle Akzente, Badges |
| **Soft Black** | `#2d2d2d` | `--hof-charcoal` | Text (nicht hartes Schwarz) |
| **Light Sage** | `#e8ede9` | `--hof-sage` | Alternate Light Sections |

### Farbverteilung (60/30/10)
- **60% Neutral** – Cream, Weiß, Sage (Backgrounds)
- **30% Forest Green** – Header, Footer, Akzent-Sections
- **10% Bordeaux** – CTAs, Hover, Highlights

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

**Primary (Bordeaux)**
```tsx
className="bg-hof-bordeaux text-white px-6 py-3 rounded-full font-medium hover:bg-hof-bordeaux-light transition-all"
// Mit Gradient:
style={{ background: 'linear-gradient(135deg, #722F37 0%, #8b3a44 100%)' }}
```

**Secondary (Forest)**
```tsx
className="bg-hof-forest text-white px-6 py-3 rounded-full font-medium hover:bg-hof-forest-light transition-colors"
```

**Ghost**
```tsx
className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
```

### Cards

```tsx
className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
```

### Section Header

```tsx
<span className="text-hof-bordeaux font-medium text-sm uppercase tracking-[0.2em]">
  Tagline
</span>
<h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mt-4">
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
