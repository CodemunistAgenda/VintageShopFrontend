# 🚀 React Projekt Konfiguration - Überblick

<style>
body {
    background-color: #121212;
    color: #e0e0e0;
}
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1e1e1e;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}
th {
    background-color: #2c2c2c;
    color: #ff4d4d;
    border: 1px solid #3c3c3c;
}
td {
    border: 1px solid #3c3c3c;
    color: #bbbbbb;
}
code {
    background-color: #2c2c2c;
    color: #ff4d4d;
    padding: 2px 4px;
    border-radius: 4px;
}
</style>

## 📜 Projekt-Skripte

| Skript | Befehl | Beschreibung |
|:---:|:---:|:---:|
| `dev` | Lokale Entwicklung | Startet Vite Entwicklungs-Server |
| `build` | Produktions-Build | Erstellt TypeScript & Produktions-Build |
| `lint` | Code-Qualität | Führt ESLint aus |
| `preview` | Lokale Vorschau | Vorschau des Builds |

## 🧱 Basis-Projektkonfiguration

| Schlüssel | Wert | Zweck |
|:---:|:---:|:---:|
| `"private"` | `true` | Verhindert versehentliches Veröffentlichen |
| `"type"` | `"module"` | Aktiviert ESModules (import/export) |
| `"version"` | `"0.0.0"` | Projektversion |
| `"name"` | `"react"` | Projektname |

## 📦 Kern-Abhängigkeiten

| Kategorie | Pakete | Zweck |
|:---:|:---:|:---:|
| UI / React | `react`, `react-dom` | React-Kernbibliothek |
| Routing | `react-router`, `react-router-dom` | Client-seitiges Routing |
| State Management | `@reduxjs/toolkit` | Vereinfachtes Redux Toolkit |
| API | `axios` | HTTP-Anfragen |
| Formulare | `react-hook-form` | React-Formularsteuerung mit Hooks |
| Lokalisierung | `i18next`, `react-i18next` | Mehrsprachige Unterstützung |
| Authentifizierung | `jsonwebtoken`, `cookie-parser` | JWT & Cookie-Verarbeitung |
| UI-Helfer | `lucide-react`, `react-icons` | Icons & UI-Elemente |
| SEO | `react-helmet` | Meta-Tag-Management |
| Lazy Loading | `react-lazyload` | Komponenten verzögert laden |
| Beobachter | `react-intersection-observer` | Sichtbarkeits-Trigger |

## 🛠 Entwicklungs-Abhängigkeiten

| Kategorie | Pakete | Zweck |
|:---:|:---:|:---:|
| Testing | `jest`, `@testing-library/react`, `jest-dom` | Komponenten-Tests |
| Linting | `eslint` & Plugins | Code-Qualität & Hook-Regeln |
| Typen | `@types/*` | TypeScript-Typdefinitionen |
| Build-Tools | `vite`, `swc plugin` | Build & HMR mit Vite + SWC |
| Styles | `sass` | SCSS-Stylesheets |

## 💡 Merknotizen

| Thema | Eselsbrücke / Merkspruch |
|:---:|:---:|
| **dependencies** | Laufzeit – was du **im Code brauchst** |
| **devDependencies** | Nur zur **Entwicklung** (Tests, Lint, Build) |
| **vite** | 🏎️ Superschneller Entwicklungs-Server |
| **SWC** | 🔥 Ultraleicht wie TypeScript auf Nitro |
| **react-hook-form** | Formularsteuerung wie ein **Cockpit** |
| **i18next** | "Internationalization" – Sprache & Übersetzung |