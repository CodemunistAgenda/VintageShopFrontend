// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "@/app/providers/Providers";
import ToastProvider from "@/app/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Retroy – Vintage neu entdecken",
  description: "Handverlesene Vintage-Schätze und nachhaltige Kollektionen für einen bewussten Lebensstil.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Handverlesene Vintage-Schätze und nachhaltige Kollektionen für einen bewussten Lebensstil."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <main>{children}</main>
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}

