import React, { createContext, useContext, useState, useEffect } from 'react';

// Context erstellen
const AppContext = createContext();

// Provider-Komponente
export function AppProvider({ children }) {
  // UI-Zustände für Navigation/Header
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  
  // Responsive/Scroll-Handler
  useEffect(() => {
    // Prüfe ob Mobilansicht
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1440);
    };
    
    // Scroll-Handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Beim Runterscrollen Dropdown schließen (nur im Desktop-Modus)
      if (currentScrollY > prevScrollY && !isMobile) {
        if (activeDropdown !== null) {
          setActiveDropdown(null);
        }
      }
      
      // Scrolled-Zustand setzen (für Navigationsstil)
      setScrolled(currentScrollY > 20);
      
      // Transparenz-Zustand setzen
      setTransparent(currentScrollY > 200);
      
      setPrevScrollY(currentScrollY);
    };
    
    // Initial prüfen
    checkIfMobile();
    
    // Event-Listener registrieren
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('scroll', handleScroll);
    
    // Aufräumen
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeDropdown, prevScrollY, isMobile]);
  
  // Navigation-Funktionen
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };
  
  // Context-Wert
  const value = {
    // Header/Navigation-Zustände
    isMenuOpen,
    activeDropdown,
    scrolled,
    transparent,
    isMobile,
    
    // Funktionen
    toggleMenu,
    toggleDropdown,
    setIsMenuOpen,
    setActiveDropdown
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook für einfachen Zugriff
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}