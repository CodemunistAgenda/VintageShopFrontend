import React from "react";
import Navigation from "./Navigation";
import "./styles/Header.scss";

const Header = ({ className }) => {
  // className enthält nun die Werte "hidden" und "transparent" 
  // basierend auf dem Scroll-Zustand
  return (
    <header className={`site-header ${className || ""}`}>
      <Navigation isTransparent={className && className.includes("transparent")} />
    </header>
  );
};

export default Header;