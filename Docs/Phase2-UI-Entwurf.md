# Phase 2: Finales Design-System für Retroy

## Einführung

Dieses Dokument beschreibt das vollständige Design-System für die Retroy-Plattform. Es definiert alle visuellen Elemente, deren Anwendungsbereiche und technische Spezifikationen zur einheitlichen Implementierung. Das Design-System verkörpert die nostalgische, nachhaltige und hochwertige Positionierung der Marke und stellt sicher, dass alle digitalen Berührungspunkte konsistent gestaltet werden.

## Farbpalette mit Anwendungsbereichen

### CSS-Variablen

```scss
:root {
  // Hauptfarben
  --primary-color: #d9a441; // Gold/Gelb
  --secondary-color: #c2d941; // Grünlich
  --accent-color: #d95841; // Orange/Rot
  
  // Spezielle Farben für Sektionen
  --light-blue: #b2ddea; // Hellblau für Hero-Bereich
  --purple: #5c5294; // Lila/Violett für bestimmte Sektionen
  
  // Neutrale Farben
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  --white-color: #ffffff;
  --black-color: #16171a;
  
  // Transparente Varianten
  --primary-transparent: rgba(217, 164, 65, 0.1);
  --light-blue-transparent: rgba(178, 221, 234, 0.8);
  --purple-transparent: rgba(92, 82, 148, 0.8);
  
  // Layout-Variablen
  --header-height: 100px;
  --header-height-scrolled: 70px;
  
  // Abstände
  --section-padding-large: 4rem;
  --section-padding-medium: 3rem;
  --section-padding-small: 2rem;
  
  // Container-Größen
  --container-width: 1400px;
  --container-padding: 2rem;
  
  // Radiuswerte
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 12px;
  --border-radius-circle: 50%;
  
  // Schattenwerte
  --shadow-light: 0 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 10px rgba(0, 0, 0, 0.1);
  --shadow-strong: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  // Übergangswerte
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.4s ease;
  
  // Schriftfamilien
  --font-family-heading: 'Playfair Display', serif;
  --font-family-body: 'Raleway', sans-serif;
  
  // Schriftgrößen
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
}
```

### SCSS-Variablen (für darken/lighten Funktionen)

```scss
$primary-color: #d9a441;
$secondary-color: #c2d941;
$accent-color: #d95841;
$light-blue: #b2ddea;
$purple: #5c5294;
$light-color: #f8f9fa;
$dark-color: #343a40;
$white-color: #ffffff;
$black-color: #16171a;
```

### Farbverwendung

| Farbe | Anwendungsbereiche |
|-------|-------------------|
| **Primär Gold/Gelb (#d9a441)** | Buttons, Links, Akzente, Logo-Details |
| **Sekundär Grünlich (#c2d941)** | Nachhaltigkeits-Elemente, Badges |
| **Akzent Orange/Rot (#d95841)** | Call-to-Actions, Preise, Badges |
| **Hellblau (#b2ddea)** | Hero-Bereich, Informationssektionen |
| **Lila/Violett (#5c5294)** | Dekorative Bereiche, Spezielle Sektionen |
| **Neutraltöne** | Text, Hintergründe, Ränder |

## Typografie

### Schriftfamilien und Verwendung

- **Playfair Display**
  - Überschriften (H1-H3)
  - Logo-Text
  - Hervorgehobene Elemente

- **Raleway**
  - Fließtext und Beschreibungen
  - UI-Elemente und Navigation
  - Buttons und Formulare

### Typografische Größen und Gewichte

```scss
// Überschriften
h1, .h1 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark-color);
}

h2, .h2 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark-color);
}

h3, .h3 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  line-height: 1.3;
  color: var(--dark-color);
}

// Text
p, .body-text {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: 400;
  line-height: 1.6;
  color: var(--dark-color);
}

.body-text-sm {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.caption {
  font-family: var(--font-family-body);
  font-size: var(--font-size-xs);
  font-weight: 400;
  line-height: 1.4;
  color: var(--dark-color);
  opacity: 0.8;
}
```

## Layout und Raster

### Grundraster

- **Desktop (≥1440px)**
  - 12-Spalten-Raster
  - Gutters: 24px
  - Margins: 64px
  - Max. Inhaltsbreite: 1400px

- **Tablet (900-1439px)**
  - 8-Spalten-Raster
  - Gutters: 16px
  - Margins: 32px

- **Mobile (320-899px)**
  - 4-Spalten-Raster
  - Gutters: 16px
  - Margins: 16px

### Abstände

- **0.25rem (4px)** - Minimaler Abstand
- **0.5rem (8px)** - Kleiner Abstand
- **1rem (16px)** - Standard-Abstand
- **1.5rem (24px)** - Mittlerer Abstand
- **2rem (32px)** - Großer Abstand
- **3rem (48px)** - Extra großer Abstand
- **4rem (64px)** - Maximaler Abstand

## Komponenten

### Buttons

#### Primäre Buttons
```scss
.btn-primary {
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: var(--border-radius-small);
  font-family: var(--font-family-body);
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: darken($primary-color, 10%);
    transform: translateY(-2px);
  }
}
```

#### Sekundäre Buttons
```scss
.btn-secondary {
  background-color: var(--dark-color);
  color: var(--white-color);
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: var(--border-radius-small);
  font-family: var(--font-family-body);
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: lighten($dark-color, 10%);
    transform: translateY(-2px);
  }
}
```

#### Outline Buttons
```scss
.btn-outline {
  background-color: transparent;
  color: var(--dark-color);
  border: 2px solid var(--dark-color);
  padding: 0.8rem 1.8rem;
  border-radius: var(--border-radius-small);
  font-family: var(--font-family-body);
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: var(--dark-color);
    color: var(--white-color);
    transform: translateY(-2px);
  }
}
```

### Karten

#### Produktkarten
```scss
.product-card {
  background-color: var(--white-color);
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-light);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
  }
  
  .product-image-container {
    position: relative;
    padding-top: 100%; // 1:1 Aspect Ratio
    overflow: hidden;
  }
  
  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: var(--font-size-xs);
    font-weight: 600;
  }
  
  .product-info {
    padding: 1.2rem;
  }
  
  .product-category {
    font-size: var(--font-size-xs);
    color: var(--dark-color);
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  
  .product-title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: var(--dark-color);
  }
  
  .product-price {
    font-weight: 600;
    color: var(--accent-color);
  }
}
```

#### Kategorie-Karten
```scss
.category-card {
  background-color: var(--light-color);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
  text-decoration: none;
  color: var(--dark-color);
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-medium);
  }
  
  .category-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    transition: all var(--transition-normal);
  }
  
  &:hover .category-icon {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
  
  .category-title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: 0.8rem;
    position: relative;
  }
  
  .category-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
  }
  
  .category-description {
    margin-bottom: 1.5rem;
    line-height: 1.5;
    color: var(--dark-color);
    opacity: 0.9;
  }
}
```

### Navigation

Die Navigation verwendet ein responsives Design mit den folgenden Komponenten:

```scss
.navigation-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--white-color);
  border-bottom: 2px solid var(--primary-color);
  height: var(--header-height);
  transition: all 0.4s ease;
  
  // Scrolled-Zustand
  &.scrolled {
    box-shadow: var(--shadow-medium);
  }
  
  // Transparenter Zustand
  &.transparent {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    height: var(--header-height-scrolled);
    border-bottom-color: rgba(217, 164, 65, 0.3);
  }
  
  .navigation-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
```

## Abschnitte und Seitenstrukturen

### Hero-Abschnitt
```scss
.hero-section {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background-color: var(--light-blue);
  padding: var(--section-padding-large) var(--container-padding);
  
  .hero-content {
    max-width: 650px;
    position: relative;
    z-index: 2;
  }
  
  .hero-title {
    font-family: var(--font-family-heading);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--dark-color);
    
    .title-vintage {
      position: relative;
      color: var(--primary-color);
      display: inline-block;
    }
  }
  
  .hero-description {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    color: var(--dark-color);
  }
}
```

### Kategorien-Abschnitt
```scss
.categories-section {
  background-color: var(--white-color);
  padding: var(--section-padding-large) var(--container-padding);
  
  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: var(--container-width);
    margin: 0 auto;
  }
}
```

### Produktliste
```scss
.featured-section {
  background-color: var(--light-color);
  padding: var(--section-padding-large) var(--container-padding);
  
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    max-width: var(--container-width);
    margin: 0 auto 3rem;
  }
  
  .featured-action {
    text-align: center;
    margin-top: 2rem;
  }
}
```

### Newsletter-Bereich
```scss
.newsletter-banner {
  background-color: rgba(217, 164, 65, 0.08);
  padding: var(--section-padding-medium) var(--container-padding);
  
  .newsletter-form {
    display: flex;
    max-width: 500px;
    
    .newsletter-input {
      flex: 1;
      padding: 0.8rem 1.5rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px 0 0 4px;
      font-family: var(--font-family-body);
    }
    
    .newsletter-button {
      padding: 0 1.5rem;
      border-radius: 0 4px 4px 0;
    }
  }
}
```

## Seitenverzeichnis

### Hauptseiten
- `/` - Home
- `/shop` - Hauptshop-Seite
- `/kollektionen` - Kollektionen-Übersicht
- `/produktgeschichten` - Produktgeschichten
- `/nachhaltigkeit` - Nachhaltigkeit
- `/uber-uns` - Über uns

### Shop-Kategorien
- `/shop/vintage` - Vintage-Schätze
- `/shop/upcycled` - Upcycling-Produkte
- `/shop/designer` - Designer-Kollektionen
- `/shop/limited` - Limitierte Editionen

### Kollektionen
- `/collections/decades/60s` - 60er Jahre Revival
- `/collections/decades/70s` - 70er Boho-Chic
- `/collections/decades/80s` - 80er Nostalgie
- `/collections/decades/90s` - 90er Comeback
- `/collections/all` - Alle Kollektionen ansehen

### Utility-Seiten
- `/search` - Suche
- `/account` - Konto/Benutzerprofil
- `/wishlist` - Wunschliste
- `/cart` - Warenkorb

### Informationsseiten
- `/faq` - Häufige Fragen
- `/shipping` - Versand & Lieferung
- `/returns` - Rückgabe & Erstattung
- `/care` - Pflegehinweise
- `/contact` - Kontakt

### Rechtliche Seiten
- `/terms` - AGB
- `/privacy` - Datenschutz
- `/imprint` - Impressum

## Responsive Design

### Desktop (≥1440px)
- Volle 12-Spalten-Nutzung
- Großzügige Produktdarstellung
- Horizontale Navigation

### Tablet (900-1439px)
- Kompaktere 8-Spalten-Anordnung
- Leicht reduzierte Bildgrößen
- Navigation mit angepasstem Platz

### Mobile (<900px)
- Vertikaler Fluss im 4-Spalten-System
- Hamburger-Menü für die Navigation
- Optimierte Darstellung für die einhändige Nutzung

## SCSS-Mixins

```scss
// Responsive Breakpoints Mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == large {
    @media (max-width: 1600px) {
      @content;
    }
  } @else if $breakpoint == medium {
    @media (max-width: 1440px) {
      @content;
    }
  } @else if $breakpoint == small {
    @media (max-width: 600px) {
      @content;
    }
  }
}

// Zentrierte Ausrichtung
@mixin center($type: both) {
  @if $type == horizontal {
    margin-left: auto;
    margin-right: auto;
  } @else if $type == vertical {
    display: flex;
    align-items: center;
  } @else if $type == both {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// Flex-Container
@mixin flex($direction: row, $wrap: nowrap, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  flex-wrap: $wrap;
  justify-content: $justify;
  align-items: $align;
}
```

## Entwicklungsrichtlinien

1. **Komponentenbasierter Ansatz**
   - Jede Komponente sollte so entwickelt werden, dass sie wiederverwendbar ist
   - Komponenten sollten alle Styles enthalten, die sie benötigen

2. **CSS-Variablen verwenden**
   - Alle Farben, Schriften und Abstände sollten über CSS-Variablen definiert werden
   - Keine hartcodierten Werte in den Komponenten

3. **Responsive Design berücksichtigen**
   - Alle Komponenten müssen auf den drei Hauptbreakpoints getestet werden
   - Mobile-First-Ansatz für die Entwicklung

4. **Semantisches HTML**
   - Verwende semantische HTML-Elemente für bessere Zugänglichkeit
   - Achte auf korrekte ARIA-Attribute wo notwendig

5. **Performance-Optimierung**
   - CSS-Dateien minimieren
   - Bilder optimieren
   - Code-Splitting für React-Komponenten

## Nächste Schritte

1. **Entwicklung der verbleibenden Seiten**
   - Priorisierte Entwicklung der Hauptseiten (Shop, Kollektionen)
   - Anschließend Erstellung der Informations- und Rechtsseiten

2. **Implementierung der interaktiven Elemente**
   - Warenkorb-Funktionalität
   - Filtermechanismen für Produktlisten
   - Suchfunktionalität

3. **Usability-Tests**
   - Tests mit Vertretern der Zielgruppen
   - Anpassungen basierend auf Feedback

4. **Performance-Optimierung**
   - Audit der Ladezeiten
   - Implementierung von Lazy-Loading für Bilder
   - Optimierung der Build-Größe