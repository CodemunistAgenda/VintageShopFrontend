import React, { createContext, useContext, useState, useEffect } from 'react';

// Context erstellen
const UserContext = createContext();

// Provider-Komponente
export function UserProvider({ children }) {
  // Benutzerzustände
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  
  // Benutzer aus localStorage laden (beim ersten Laden)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedWishlist = localStorage.getItem('wishlist');
    
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
      }
    }
    
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage', error);
      }
    }
    
    setLoading(false);
  }, []);
  
  // Benutzer in localStorage speichern (bei Änderungen)
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
  // Wunschliste in localStorage speichern (bei Änderungen)
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  
  // Login/Logout-Funktionen
  const login = async (email, password) => {
    try {
      // In Produktion: API-Aufruf zur Authentifizierung
      // const response = await fetch('/api/login', { ... });
      // const data = await response.json();
      
      // Dummy-Login für Beispiel
      const userData = {
        id: 1,
        name: 'Max Mustermann',
        email: email,
        role: 'customer'
      };
      
      setUser(userData);
      return { success: true };
    } catch (error) {
      console.error('Login failed', error);
      return { success: false, error: 'Login fehlgeschlagen' };
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  // Wunschlisten-Funktionen
  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };
  
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };
  
  // Prüfen, ob ein Produkt auf der Wunschliste ist
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };
  
  // Context-Wert
  const value = {
    // Daten
    user,
    wishlist,
    loading,
    isLoggedIn: !!user,
    
    // Funktionen
    login,
    logout,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Custom Hook für einfachen Zugriff
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}