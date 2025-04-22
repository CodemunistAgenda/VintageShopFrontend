# 📦 Projektstruktur Übersicht – Retroy Shop (v1.0)

Diese Dokumentation erklärt die aktuelle Ordnerstruktur des Projekts. Ziel ist eine klare, modulare Trennung zwischen Layout, Logik und Features – vorbereitet auf Erweiterbarkeit, ohne Beispielcode oder unnötige Dateien.

---

## 📁 Root-Verzeichnis

| Pfad           | Beschreibung |
|----------------|--------------|
| `index.html`   | Einstiegspunkt für Vite, wird von `main.tsx` genutzt |
| `vite.config.ts` | Konfiguration für Vite (Build, Aliase, Plugins) |
| `tsconfig*.json` | TypeScript-Konfiguration (Basis, App, Node) |
| `.gitignore`   | Ignorierte Dateien für Git |
| `package.json` | Abhängigkeiten, Scripts, Projektinfo |
| `Docs/`        | Dokumentation des Projekts (Phasen, Struktur, Notizen) |

---

## 📁 src/ – Hauptquellcode

### 🔧 Konfigurationsbereiche

| Pfad         | Beschreibung |
|--------------|--------------|
| `src/main.tsx` | Einstieg in die React-App |
| `src/index.scss` | Globales SCSS-Setup |
| `src/vite-env.d.ts` | Typdefinitionen für Vite |
| `src/assets/` | Bilder, SVGs, Logos, Fonts |
| `src/styles/` | Globales Styling: Mixins, Themes, Reset etc. |

---

### 🧱 Architekturstruktur

| Pfad               | Beschreibung |
|--------------------|--------------|
| `src/pages/`        | Alle Seiten (Routen) der App, z. B. `Home`, `Shop`, `Legal` etc. Jede Seite hat eigene SCSS und Struktur |
| `src/components/`   | Wiederverwendbare UI-Komponenten |
| `src/components/Layout/` | Haupt-Layoutstruktur (Header, Footer, Main) |
| `src/components/shared/` | Generische Komponenten wie Buttons, SEO etc. |
| `src/components/shop/` | Shop-spezifische Komponenten (z. B. Sidebar, Produktliste) |

---

### 🧩 Logikstruktur

| Pfad               | Beschreibung |
|--------------------|--------------|
| `src/routes/`       | Zentrale Routen-Definitionen der App (`index.ts`) |
| `src/services/`     | Schnittstellen zu externen APIs (z. B. Axios-Konfiguration) |
| `src/store/`        | Globaler State über Redux Toolkit (aktuell vorbereitet) |
| `src/hooks/`        | Eigene React-Hooks, z. B. `useFetch`, `useToggle` |
| `src/utils/`        | Hilfsfunktionen, z. B. Formatierungen, Validatoren |
| `src/types/`        | Globale TypeScript-Typdefinitionen |

---

### 📦 Features (vorbereitet für Skalierung)

| Pfad             | Beschreibung |
|------------------|--------------|
| `src/features/`   | Modularisierung der Fachlogik (z. B. Authentifizierung, Warenkorb). Jeder Subordner enthält Store-Slices, Logik, Hooks. Noch leer, aber vorbereitet. |

Beispielstruktur (nur Vorbereitung, keine Inhalte):

```
features/
├── auth/         → Später: Login, Token, Benutzerstatus
├── cart/         → Später: Warenkorb-Handling
```

---

## 📁 Tests

| Pfad         | Beschreibung |
|--------------|--------------|
| `src/tests/`  | Vorbereitung für Unit-/Integrationstests mit Jest etc. (aktuell leer) |

---

## 🔚 Fazit

Die Struktur folgt klaren Best Practices (Atomic Design + Feature-basiert) und ist darauf ausgelegt, ohne Beispielcode direkt in Produktion zu gehen. Skalierung ist durch vorbereitete leere Strukturen möglich, ohne Unübersichtlichkeit zu erzeugen.
