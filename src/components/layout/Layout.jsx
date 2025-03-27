import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./styles/layout.scss";

const Layout = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [transparent, setTransparent] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
     
      // Bestimme Scroll-Richtung
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      
      // Transparenz beim Scrollen
      if (currentScrollY > 200) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
     
      setPrevScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  
  return (
    <div className="layout-container">
      <Header 
        className={`header ${scrollDirection === "down" ? "hidden" : ""} ${transparent ? "transparent" : ""}`} 
      />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;