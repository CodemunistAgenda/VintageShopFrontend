import React from "react";
import Navigation from "./Navigation";
import "./styles/Header.scss";
import { useAppContext } from "../../contexts/AppContext";

const Header = () => {
  // Hole die relevanten Zustände aus dem AppContext
  const { scrolled, transparent } = useAppContext();
  
  // Erstelle die Klassenbezeichnung basierend auf den Zuständen
  const headerClasses = `site-header ${scrolled ? "scrolled" : ""} ${transparent ? "transparent" : ""}`;
  
  return (
    <header className={headerClasses}>
      <Navigation />
    </header>
  );
};

export default Header;