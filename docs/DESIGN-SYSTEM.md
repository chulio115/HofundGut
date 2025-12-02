# Hof & Gut Design System v2.0

## Warm Champagne Color Palette

Eine durchgehend warme Farbpalette – **kein kaltes Weiß** mehr.

### Primärfarben

| Name | Hex | RGB | Verwendung |
|------|-----|-----|------------|
| **Forest Green** | `#1B3D2F` | 27, 61, 47 | Header, Footer, Primary CTAs |
| **Forest Light** | `#2A5A45` | 42, 90, 69 | Hover States |
| **Bordeaux** | `#722F37` | 114, 47, 55 | Accent CTAs, Highlights |
| **Bordeaux Light** | `#8B3A44` | 139, 58, 68 | Hover States |

### Hintergründe (Warm Champagne)

| Name | Hex | RGB | Verwendung |
|------|-----|-----|------------|
| **Cream** | `#F5EFE6` | 245, 239, 230 | Haupt-Hintergrund |
| **Cream Dark** | `#EDE7DC` | 237, 231, 220 | Karten, erhöhte Flächen |
| **Cream Light** | `#FAF7F2` | 250, 247, 242 | Inputs, Formulare |
| **Sage/Taupe** | `#E5DED3` | 229, 222, 211 | Alternate Sections |

### Akzente

| Name | Hex | RGB | Verwendung |
|------|-----|-----|------------|
| **Gold** | `#C9A962` | 201, 169, 98 | Highlights, Icons |
| **Gold Light** | `#D4B87A` | 212, 184, 122 | Hover |
| **Charcoal** | `#2C2C2C` | 44, 44, 44 | Text |

---

## Typografie

### Font Families
- **Display:** Playfair Display (Headings)
- **Body:** Inter (Text, UI)

### Hierarchie
```
H1: 5xl-7xl, font-bold, leading-[0.95]
H2: 4xl-6xl, font-bold
H3: 2xl-3xl, font-bold
Body: lg, leading-relaxed
Small: sm, text-charcoal/70
```

---

## Komponenten

### Karten
```jsx
className="bg-hof-cream-dark rounded-2xl p-6 shadow-lg"
// Hover: hover:shadow-xl transition-shadow
```

### Buttons - Primary
```jsx
className="bg-hof-bordeaux text-white px-8 py-4 rounded-full font-semibold 
           hover:bg-hof-bordeaux-light transition-all"
```

### Buttons - Secondary
```jsx
className="bg-hof-forest text-white px-8 py-4 rounded-full font-semibold 
           hover:bg-hof-forest-light transition-all"
```

### Inputs
```jsx
className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 
           rounded-xl focus:ring-2 focus:ring-hof-forest/20 transition-all"
```

### Section Backgrounds
```
Main:      bg-hof-cream
Alternate: bg-hof-sage
Dark:      bg-hof-forest
```

---

## Animationen

### Transitions
- **Standard:** `transition-all duration-300`
- **Smooth:** `transition-all duration-500 ease-out`
- **Premium:** `transition-all duration-700 ease-out`

### Scroll Reveals (Framer Motion)
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

---

## Spacing

| Name | Value | Verwendung |
|------|-------|------------|
| Section Padding | `py-24 lg:py-32` | Zwischen Sections |
| Container Max | `max-w-7xl` | Content Breite |
| Card Padding | `p-6` oder `p-8` | In Karten |
| Gap | `gap-6` bis `gap-16` | Grid/Flex Abstände |

---

## Responsive

- **Mobile First** Approach
- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Touch Targets: `min-height: 44px`
- Safe Areas für iPhone X+

---

**Last Updated:** 2024-12-02
**Version:** 2.0 (Warm Champagne)
