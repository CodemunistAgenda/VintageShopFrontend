import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { 
  FaLeaf, 
  FaRegClock, 
  FaStar, 
  FaArrowRight,
  FaSearch
} from "react-icons/fa";
import { 
  GiVintageRobot, 
  GiRecycle, 
  GiNotebook, 
  GiDiamondTrophy 
} from "react-icons/gi";

const Home = () => {
  return (
    <div className="home-container">
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-vintage">Vintage</span> neu entdecken
            </h1>
            <p className="hero-description">
              Einzigartige Schätze und zeitlose Designs für einen nachhaltigen Lebensstil.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary">
                Kollektionen entdecken
                <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/stories" className="btn btn-outline">
                Unsere Geschichte
              </Link>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-square"></div>
          </div>
        </section>

        {/* Kategorien-Übersicht */}
        <section className="categories-section">
          <div className="section-header">
            <h2 className="section-title">Unsere Kollektionen</h2>
            <p className="section-subtitle">Entdecke unsere sorgfältig kuratierten Kollektionen</p>
          </div>

          <div className="categories-grid">
            <Link to="/shop/vintage" className="category-card">
              <div className="category-icon">
                <GiVintageRobot />
              </div>
              <h3 className="category-title">Vintage-Schätze</h3>
              <p className="category-description">
                Handverlesene Stücke mit Geschichte und Charakter
              </p>
              <span className="category-link">
                Entdecken <FaArrowRight />
              </span>
            </Link>

            <Link to="/shop/upcycled" className="category-card">
              <div className="category-icon">
                <GiRecycle />
              </div>
              <h3 className="category-title">Upcycling-Produkte</h3>
              <p className="category-description">
                Kreativ wiederbelebte Materialien mit neuer Bestimmung
              </p>
              <span className="category-link">
                Entdecken <FaArrowRight />
              </span>
            </Link>

            <Link to="/shop/designer" className="category-card">
              <div className="category-icon">
                <GiNotebook />
              </div>
              <h3 className="category-title">Designer-Kollektionen</h3>
              <p className="category-description">
                Vintage-inspirierte Kreationen unabhängiger Designer
              </p>
              <span className="category-link">
                Entdecken <FaArrowRight />
              </span>
            </Link>

            <Link to="/shop/limited" className="category-card">
              <div className="category-icon">
                <GiDiamondTrophy />
              </div>
              <h3 className="category-title">Limitierte Editionen</h3>
              <p className="category-description">
                Exklusive Sammlerstücke in begrenzter Auflage
              </p>
              <span className="category-link">
                Entdecken <FaArrowRight />
              </span>
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-section">
          <div className="section-header">
            <h2 className="section-title">Ausgewählte Highlights</h2>
            <p className="section-subtitle">Unsere beliebtesten Fundstücke dieser Woche</p>
          </div>

          <div className="featured-grid">
            {/* Beispiel-Produkte - Kann später mit dynamischen Daten ersetzt werden */}
            <div className="product-card">
              <div className="product-image-container">
                <div className="product-image" style={{ backgroundColor: '#e6e6e6' }}>
                  {/* Platzhalter für Produktbild */}
                  <FaSearch className="placeholder-icon" />
                </div>
                <div className="product-badge">Neu</div>
              </div>
              <div className="product-info">
                <div className="product-category">Vintage-Möbel</div>
                <h3 className="product-title">Dänischer Sessel, 1960er Jahre</h3>
                <div className="product-price">
                  <span className="current-price">€349,00</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <div className="product-image" style={{ backgroundColor: '#e6e6e6' }}>
                  {/* Platzhalter für Produktbild */}
                  <FaSearch className="placeholder-icon" />
                </div>
                <div className="product-badge">Bestseller</div>
              </div>
              <div className="product-info">
                <div className="product-category">Upcycling</div>
                <h3 className="product-title">Handtasche aus Vintage-Vinyl</h3>
                <div className="product-price">
                  <span className="current-price">€89,00</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <div className="product-image" style={{ backgroundColor: '#e6e6e6' }}>
                  {/* Platzhalter für Produktbild */}
                  <FaSearch className="placeholder-icon" />
                </div>
                <div className="product-badge">Limitiert</div>
              </div>
              <div className="product-info">
                <div className="product-category">Accessoires</div>
                <h3 className="product-title">Art Deco Brosche, vergoldet</h3>
                <div className="product-price">
                  <span className="current-price">€129,00</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <div className="product-image" style={{ backgroundColor: '#e6e6e6' }}>
                  {/* Platzhalter für Produktbild */}
                  <FaSearch className="placeholder-icon" />
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">Designer-Kollektionen</div>
                <h3 className="product-title">Retro-inspirierte Lampe "Aurora"</h3>
                <div className="product-price">
                  <span className="current-price">€199,00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="featured-action">
            <Link to="/shop" className="btn btn-secondary">
              Alle Produkte ansehen
            </Link>
          </div>
        </section>

        {/* Werte-Sektion */}
        <section className="values-section">
          <div className="section-header">
            <h2 className="section-title">Unsere Werte</h2>
            <p className="section-subtitle">Was Retroy besonders macht</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3 className="value-title">Nachhaltigkeit</h3>
              <p className="value-description">
                Wir setzen auf Wiederverwendung und ressourcenschonende Praktiken, um die Umweltbelastung zu reduzieren.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaStar />
              </div>
              <h3 className="value-title">Qualität</h3>
              <p className="value-description">
                Jedes Stück wird sorgfältig geprüft, um langlebige und zeitlose Produkte zu garantieren.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaRegClock />
              </div>
              <h3 className="value-title">Geschichte</h3>
              <p className="value-description">
                Unsere Produkte erzählen Geschichten aus verschiedenen Epochen und bewahren kulturelles Erbe.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter-Anmeldung (optional, falls nicht bereits im Footer vorhanden) */}
        <section className="newsletter-banner">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Vintage-Inspiration direkt in dein Postfach</h2>
            <p className="newsletter-text">
              Melde dich für unseren Newsletter an und erhalte exklusive Angebote, Styling-Tipps und Nachrichten über neue Schätze.
            </p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Deine E-Mail-Adresse" className="newsletter-input" required />
            <button type="submit" className="btn btn-primary newsletter-button">Anmelden</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;