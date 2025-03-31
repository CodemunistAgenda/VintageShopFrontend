import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.scss';
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext';
import { useUser } from '../../contexts/UserContext';

const AccountPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useAppContext();
  const { login, register, isAuthenticated, loading, error: authError } = useUser();
  
  // Zustand für aktiven Tab (Login/Registrieren)
  const [activeTab, setActiveTab] = useState('login');
  
  // Login-Formularstatus
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Registrierungs-Formularstatus
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // Passwort-Sichtbarkeit
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Fehlerzustände
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  
  // Erfolgsmeldungen
  const [loginSuccess, setLoginSuccess] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  
  // Weiterleiten, wenn der Benutzer bereits angemeldet ist
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  // Autofokus bei Tab-Wechsel oder beim ersten Laden der Komponente
  useEffect(() => {
    if (activeTab === 'login') {
      document.getElementById('login-email')?.focus();
    } else {
      document.getElementById('register-username')?.focus();
    }
  }, [activeTab]);
  
  // Globale Fehlermeldungen verarbeiten
  useEffect(() => {
    if (authError) {
      if (activeTab === 'login') {
        setLoginErrors({ general: authError });
      } else {
        setRegisterErrors({ general: authError });
      }
    }
  }, [authError, activeTab]);
  
  // Tab wechseln
  const switchTab = useCallback((tab) => {
    setActiveTab(tab);
    setLoginErrors({});
    setRegisterErrors({});
    setLoginSuccess('');
    setRegisterSuccess('');
  }, []);
  
  // Login-Form Handler
  const handleLoginChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Fehler löschen, wenn Benutzer Daten ändert
    setLoginErrors(prev => {
      if (prev[name]) {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return prev;
    });
  }, []);
  
  // Registrierungs-Form Handler
  const handleRegisterChange = useCallback((e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Fehler löschen, wenn Benutzer Daten ändert
    setRegisterErrors(prev => {
      if (prev[name]) {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return prev;
    });
  }, []);
  
  // Login-Validierung
  const validateLoginForm = useCallback(() => {
    const errors = {};
    
    if (!loginData.email.trim()) {
      errors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein';
    }
    
    if (!loginData.password) {
      errors.password = 'Passwort ist erforderlich';
    } else if (loginData.password.length < 8) {
      errors.password = 'Das Passwort muss mindestens 8 Zeichen lang sein';
    }
    
    return errors;
  }, [loginData]);
  
  // Registrierungs-Validierung
  const validateRegisterForm = useCallback(() => {
    const errors = {};
    
    if (!registerData.username.trim()) {
      errors.username = 'Benutzername ist erforderlich';
    } else if (registerData.username.length < 3) {
      errors.username = 'Der Benutzername muss mindestens 3 Zeichen lang sein';
    }
    
    if (!registerData.email.trim()) {
      errors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein';
    }
    
    if (!registerData.password) {
      errors.password = 'Passwort ist erforderlich';
    } else if (registerData.password.length < 8) {
      errors.password = 'Das Passwort muss mindestens 8 Zeichen lang sein';
    } else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(registerData.password)) {
      errors.password = 'Das Passwort muss mindestens einen Großbuchstaben, eine Ziffer und ein Sonderzeichen enthalten';
    }
    
    if (!registerData.confirmPassword) {
      errors.confirmPassword = 'Bitte bestätige dein Passwort';
    } else if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = 'Die Passwörter stimmen nicht überein';
    }
    
    return errors;
  }, [registerData]);
  
  // Login-Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Formular validieren
    const errors = validateLoginForm();
    
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
    
    // Login-Logik hier
    try {
      await login(loginData.email, loginData.password, loginData.rememberMe);
      setLoginSuccess('Du wurdest erfolgreich eingeloggt! Weiterleitung...');
      setLoginErrors({});
      
      // Weiterleitung erfolgt automatisch durch den useEffect oben
    } catch (error) {
      setLoginErrors({ general: 'Login fehlgeschlagen. Bitte überprüfe deine Anmeldedaten.' });
    }
  };
  
  // Registrierungs-Handler
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Formular validieren
    const errors = validateRegisterForm();
    
    if (Object.keys(errors).length > 0) {
      setRegisterErrors(errors);
      return;
    }
    
    // Registrierungs-Logik hier
    try {
      await register(registerData.username, registerData.email, registerData.password);
      setRegisterSuccess('Dein Konto wurde erfolgreich erstellt! Du kannst dich jetzt anmelden.');
      setRegisterErrors({});
      
      // Zurücksetzen des Formulars nach erfolgreicher Registrierung
      setRegisterData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      
      // Nach kurzer Zeit zum Login-Tab wechseln
      setTimeout(() => switchTab('login'), 3000);
    } catch (error) {
      setRegisterErrors({ general: 'Registrierung fehlgeschlagen. Bitte versuche es erneut.' });
    }
  };
  
  // Zeigt Ladeindikator wenn der Authentifizierungsprozess läuft
  if (loading) {
    return (
      <div className="account-page">
        <div className="account-container">
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Bitte warten...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="account-page">
      <div className="account-container">
        <h1 className="page-title">Mein Konto</h1>
        
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`} 
            onClick={() => switchTab('login')}
          >
            Anmelden
          </button>
          <button 
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`} 
            onClick={() => switchTab('register')}
          >
            Registrieren
          </button>
        </div>
        
        {/* Login Formular */}
        <div className={`form-container ${activeTab === 'login' ? 'active' : ''}`}>
          {loginSuccess && (
            <div className="success-message">
              <FaCheck /> {loginSuccess}
            </div>
          )}
          
          {loginErrors.general && (
            <div className="error-message general-error">
              <FaExclamationTriangle /> {loginErrors.general}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label htmlFor="login-email">E-Mail</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="deine.email@beispiel.de"
                  className={loginErrors.email ? 'has-error' : ''}
                  autoFocus
                  disabled={loading}
                />
              </div>
              {loginErrors.email && <div className="error-message">{loginErrors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="login-password">Passwort</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showLoginPassword ? "text" : "password"}
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Mindestens 8 Zeichen"
                  className={loginErrors.password ? 'has-error' : ''}
                  disabled={loading}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  aria-label={showLoginPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  disabled={loading}
                >
                  {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {loginErrors.password && <div className="error-message">{loginErrors.password}</div>}
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  disabled={loading}
                />
                <label htmlFor="remember-me">Angemeldet bleiben</label>
              </div>
              <Link to="/forgot-password" className="forgot-password" tabIndex={loading ? -1 : 0}>
                Passwort vergessen?
              </Link>
            </div>
            
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Wird angemeldet...' : 'Anmelden'}
            </button>
          </form>
          
          <div className="alt-action">
            <p>
              Noch kein Konto? 
              <button 
                onClick={() => switchTab('register')} 
                className="switch-tab-link" 
                disabled={loading}
              >
                Jetzt registrieren
              </button>
            </p>
          </div>
        </div>
        
        {/* Registrierung Formular */}
        <div className={`form-container ${activeTab === 'register' ? 'active' : ''}`}>
          {registerSuccess && (
            <div className="success-message">
              <FaCheck /> {registerSuccess}
            </div>
          )}
          
          {registerErrors.general && (
            <div className="error-message general-error">
              <FaExclamationTriangle /> {registerErrors.general}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="auth-form">
            <div className="form-group">
              <label htmlFor="register-username">Benutzername</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="register-username"
                  name="username"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  placeholder="dein_benutzername"
                  className={registerErrors.username ? 'has-error' : ''}
                  disabled={loading}
                />
              </div>
              {registerErrors.username && <div className="error-message">{registerErrors.username}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="register-email">E-Mail</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="deine.email@beispiel.de"
                  className={registerErrors.email ? 'has-error' : ''}
                  disabled={loading}
                />
              </div>
              {registerErrors.email && <div className="error-message">{registerErrors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="register-password">Passwort</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  id="register-password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="Mind. 8 Zeichen, 1 Großbuchstabe, 1 Ziffer, 1 Sonderzeichen"
                  className={registerErrors.password ? 'has-error' : ''}
                  disabled={loading}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  aria-label={showRegisterPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  disabled={loading}
                >
                  {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {registerErrors.password && <div className="error-message">{registerErrors.password}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="register-confirm-password">Passwort bestätigen</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="register-confirm-password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  placeholder="Passwort wiederholen"
                  className={registerErrors.confirmPassword ? 'has-error' : ''}
                  disabled={loading}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  disabled={loading}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {registerErrors.confirmPassword && (
                <div className="error-message">{registerErrors.confirmPassword}</div>
              )}
            </div>
            
            <div className="terms-privacy">
              <p>
                Mit deiner Registrierung akzeptierst du unsere{' '}
                <Link to="/terms" tabIndex={loading ? -1 : 0}>AGB</Link> und{' '}
                <Link to="/privacy" tabIndex={loading ? -1 : 0}>Datenschutzrichtlinien</Link>.
              </p>
            </div>
            
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Registrierung läuft...' : 'Registrieren'}
            </button>
          </form>
          
          <div className="alt-action">
            <p>
              Bereits registriert?{' '}
              <button 
                onClick={() => switchTab('login')} 
                className="switch-tab-link"
                disabled={loading}
              >
                Jetzt anmelden
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;