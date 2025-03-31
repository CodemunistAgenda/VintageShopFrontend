import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import { toast } from 'react-toastify';
import './LoginForm.scss';

const LoginForm = ({ switchTab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

 
  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Willkommen zurück!');
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);


  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.password) {
      errs.password = 'Passwort ist erforderlich';
    } else if (formData.password.length < 8) {
      errs.password = 'Mindestens 8 Zeichen';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await dispatch(login(formData)).unwrap();
    } catch (err) {
      toast.error(err, 'Anmeldung fehlgeschlagen.');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-email">E-Mail</label>
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder="deine.email@beispiel.de"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'has-error' : ''}
            disabled={loading}
          />
        </div>
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="login-password">Passwort</label>
        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            id="login-password"
            name="password"
            placeholder="Mindestens 8 Zeichen"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'has-error' : ''}
            disabled={loading}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>

      <div className="form-options">
        <div className="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            disabled={loading}
          />
          <label htmlFor="remember-me">Angemeldet bleiben</label>
        </div>
        <Link to="/forgot-password" className="forgot-password">
          Passwort vergessen?
        </Link>
      </div>

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? 'Wird angemeldet...' : 'Anmelden'}
      </button>

      <div className="alt-action">
        <p>
          Noch kein Konto?{' '}
          <button type="button" className="switch-tab-link" onClick={() => switchTab('register')}>
            Jetzt registrieren
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
