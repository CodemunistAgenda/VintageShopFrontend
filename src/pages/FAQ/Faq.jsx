import React from 'react'

function Faq() {
  return (
    <div>
        <h1>Häufige Fragen</h1>
        <p className="intro-text">
            Hier findest du Antworten auf häufig gestellte Fragen zu unseren Produkten, Versand und Rückgabe.
        </p>
    
        <div className="faq-section">
            <h2>Wie finde ich das richtige Produkt?</h2>
            <p>
            Unsere Filteroptionen helfen dir, das perfekte Produkt für deinen Stil zu finden. Du kannst nach Kategorie, Preis und Zustand filtern.
            </p>
    
            <h2>Wie funktioniert der Versand?</h2>
            <p>
            Wir bieten weltweiten Versand an. Die Versandkosten werden an der Kasse berechnet.
            </p>
    
            <h2>Kann ich meine Bestellung zurückgeben?</h2>
            <p>
            Ja, du kannst deine Bestellung innerhalb von 14 Tagen nach Erhalt zurückgeben. Bitte beachte unsere Rückgabebedingungen.
            </p>
        </div>
      
    </div>
  )
}

export default Faq
