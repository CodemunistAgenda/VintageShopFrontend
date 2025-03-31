import React, { createContext, useContext, useState, useEffect } from "react";

// Context erstellen
const UserContext = createContext();

// Provider-Komponente
export function UserProvider({ children }) {
  // Benutzerzustände
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Beim Laden prüfen, ob ein Token im localStorage oder sessionStorage ist
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setLoading(true);
        // Prüfe sowohl localStorage als auch sessionStorage
        const persistentToken = localStorage.getItem('auth_token');
        const sessionToken = sessionStorage.getItem('auth_token');
        const token = persistentToken || sessionToken;
        
        if (token) {
          // Hier könnte ein API-Aufruf zur Validierung des Tokens erfolgen
          const userData = await validateToken(token);
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Authentifizierungsfehler:", err);
        // Bei Fehler Token entfernen
        localStorage.removeItem('auth_token');
        sessionStorage.removeItem('auth_token');
        setError("Sitzung abgelaufen. Bitte erneut anmelden.");
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Hilfsfunktion zur Token-Validierung (Dummy-Implementation)
  const validateToken = async (token) => {
    // In einer echten Anwendung würde hier ein API-Call erfolgen
    // Beispiel: return await api.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } });
    
    // Dummy-Implementierung für die Demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, username: "testuser", email: "test@example.com" });
      }, 500);
    });
  };

  // Login-Funktion
  const login = async (email, password, rememberMe = false) => {
    try {
      setLoading(true);
      setError(null);
      
      // Sicherheitsmaßnahmen: Überprüfen Sie die Eingaben auf Client-Seite
      if (!email || !password) {
        throw new Error("E-Mail und Passwort sind erforderlich");
      }
      
      // In einer echten Anwendung würde hier ein API-Call erfolgen
      // Beispiel: const response = await api.post('/auth/login', { email, password });
      
      // Dummy-Implementation für die Demo
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userData = { id: 1, username: 'testuser', email };
      const token = 'dummy_token_' + Math.random().toString(36).substring(2);
      
      // Token speichern basierend auf rememberMe-Option
      if (rememberMe) {
        localStorage.setItem('auth_token', token);
        // Aus Sicherheitsgründen: Entferne session token, wenn persistent token gesetzt wird
        sessionStorage.removeItem('auth_token');
      } else {
        // Wenn nicht "angemeldet bleiben", dann nur im sessionStorage speichern
        sessionStorage.setItem('auth_token', token);
        localStorage.removeItem('auth_token');
      }
      
      setUser(userData);
      setIsAuthenticated(true);
      
      return userData;
    } catch (err) {
      console.error("Login-Fehler:", err);
      setError(err.message || "Login fehlgeschlagen. Bitte überprüfe deine Anmeldedaten.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Registrierungs-Funktion
  const register = async (username, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // Sicherheitsmaßnahmen: Überprüfen Sie die Eingaben auf Client-Seite
      if (!username || !email || !password) {
        throw new Error("Alle Felder sind erforderlich");
      }
      
      // Passwortrichtlinien hier noch einmal überprüfen
      if (password.length < 8 || 
          !/(?=.*[A-Z])/.test(password) || 
          !/(?=.*[0-9])/.test(password) ||
          !/(?=.*[!@#$%^&*])/.test(password)) {
        throw new Error("Das Passwort erfüllt nicht die Sicherheitsanforderungen");
      }
      
      // In einer echten Anwendung würde hier ein API-Call erfolgen
      // Beispiel: const response = await api.post('/auth/register', { username, email, password });
      
      // Dummy-Implementation für die Demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = { id: 1, username, email };
      
      // Hier würde die Antwort vom Backend verarbeitet,
      // aber wir initiieren keinen automatischen Login nach der Registrierung
      
      return userData;
    } catch (err) {
      console.error("Registrierungsfehler:", err);
      setError(err.message || "Registrierung fehlgeschlagen. Bitte versuche es erneut.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout-Funktion
  const logout = () => {
    // Token aus beiden Speichern entfernen
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
    
    // Benutzerdaten zurücksetzen
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  // Passwort-Reset-Funktion (Dummy-Implementation)
  const requestPasswordReset = async (email) => {
    try {
      setLoading(true);
      setError(null);
      
      if (!email) {
        throw new Error("E-Mail-Adresse ist erforderlich");
      }
      
      // In einer echten Anwendung würde hier ein API-Call erfolgen
      // Beispiel: await api.post('/auth/reset-password', { email });
      
      // Dummy-Implementation für die Demo
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return true;
    } catch (err) {
      console.error("Fehler beim Passwort-Reset:", err);
      setError(err.message || "Passwort-Reset fehlgeschlagen. Bitte versuche es später erneut.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Context-Wert
  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    requestPasswordReset,
    setError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom Hook für einfachen Zugriff
export function useUser() {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  
  return context;
}