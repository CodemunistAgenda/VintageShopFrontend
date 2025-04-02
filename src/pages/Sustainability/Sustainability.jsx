import React from "react";
import "./Sustainability.scss"; // stil dosyası varsa

const Sustainability = () => {
  return (
    <div className="sustainability-page">
      <h1>Unsere Verantwortung für Nachhaltigkeit</h1>
      <p className="intro-text">
        Wir glauben an eine Zukunft, in der Stil und Nachhaltigkeit Hand in Hand gehen.
        Deshalb setzen wir auf bewussten Konsum, Recycling und die Wiederverwendung von Materialien.
      </p>

      <section className="sustainability-section">
        <h2>🌿 Wiederverwendung & Upcycling</h2>
        <p>
          Unsere Produkte erzählen Geschichten. Viele Stücke wurden liebevoll restauriert oder kreativ
          upgecycelt, um ihnen ein zweites Leben zu schenken. Das spart Ressourcen und schont die Umwelt.
        </p>
      </section>

      <section className="sustainability-section">
        <h2>♻️ Verpackung & Versand</h2>
        <p>
          Wir verwenden recycelbare Materialien für Verpackungen und achten auf umweltfreundlichen Versand.
          Unsere Partner sind CO₂-neutral zertifiziert.
        </p>
      </section>

      <section className="sustainability-section">
        <h2>🤝 Soziale Verantwortung</h2>
        <p>
          Wir arbeiten mit kleinen Werkstätten, Künstler:innen und Designer:innen zusammen – fair, transparent
          und auf Augenhöhe. Gemeinsam fördern wir lokale Produktion.
        </p>
      </section>

      <section className="sustainability-section">
        <h2>✨ Dein Beitrag zählt</h2>
        <p>
          Mit jedem Kauf unterstützt du nicht nur stilvolle Produkte mit Geschichte, sondern trägst aktiv
          zu einer nachhaltigeren Zukunft bei.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;

