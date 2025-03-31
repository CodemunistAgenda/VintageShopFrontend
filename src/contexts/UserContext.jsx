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

  // Beim Laden prüfen, ob ein Token im localStorage ist
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('auth_token');
        
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
      
      // In einer echten Anwendung würde hier ein API-Call erfolgen
      // Beispiel: const response = await api.post('/auth/login', { email, password });
      
      // Dummy-Implementation für die Demo
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userData = { id: 1, username: 'testuser', email };
      const token = 'dummy_token_123';
      
      // Token speichern (bei rememberMe evtl. mit längerer Ablaufzeit)
      if (rememberMe) {
        localStorage.setItem('auth_token', token);
      } else {
        sessionStorage.setItem('auth_token', token);
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
      
      // In einer echten Anwendung würde hier ein API-Call erfolgen
      // Beispiel: const response = await api.post('/auth/register', { username, email, password });
      
      // Dummy-Implementation für die Demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = { id: 1, username, email };
      
      // Hier würde normalerweise direkt ein Login erfolgen
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
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Passwort-Reset-Funktion (Dummy-Implementation)
  const requestPasswordReset = async (email) => {
    try {
      setLoading(true);
      setError(null);
      
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