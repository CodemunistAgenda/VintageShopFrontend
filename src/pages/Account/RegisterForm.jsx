import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearRegisterMessage, clearError } from "@/store/slices/authSlice";
import { toast } from "react-toastify";
import "./RegisterForm.scss";

const RegisterForm = ({ switchTab }) => {
  const dispatch = useDispatch();
  const { loading, error, registerMessage } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  // Erfolgsmeldung bei erfolgreicher Registrierung
  useEffect(() => {
    if (registerMessage) {
      toast.success(registerMessage);
      dispatch(clearRegisterMessage());
      setTimeout(() => switchTab("login"), 1500);
    }
  }, [registerMessage, dispatch, switchTab]);

  // Fehlermeldung anzeigen
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  // Formularvalidierung
  const validate = () => {
    const errs = {};

    if (!formData.username.trim()) {
      errs.username = "Benutzername ist erforderlich";
    } else if (formData.username.length < 3) {
      errs.username = "Mindestens 3 Zeichen";
    }

    if (!formData.email.trim()) {
      errs.email = "E-Mail ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Ungültige E-Mail-Adresse";
    }

    if (!formData.password) {
      errs.password = "Passwort ist erforderlich";
    } else if (formData.password.length < 8) {
      errs.password = "Mindestens 8 Zeichen";
    } else if (
      !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)
    ) {
      errs.password = "Mind. 1 Großbuchstabe, 1 Zahl, 1 Sonderzeichen";
    }

    if (!formData.confirmPassword) {
      errs.confirmPassword = "Bestätigung erforderlich";
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwörter stimmen nicht überein";
    }

    return errs;
  };

  // Eingabewerte ändern
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Formular absenden
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      await dispatch(register(payload)).unwrap();

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err || "Registrierung fehlgeschlagen.");
      console.error("Frontend Fehler:", err);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {/* Benutzername */}
      <div className="form-group">
        <label htmlFor="register-username">Benutzername</label>
        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input
            type="text"
            id="register-username"
            name="username"
            placeholder="dein_benutzername"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            className={errors.username ? "has-error" : ""}
            disabled={loading}
          />
        </div>
        {errors.username && (
          <div className="error-message">{errors.username}</div>
        )}
      </div>

      {/* E-Mail */}
      <div className="form-group">
        <label htmlFor="register-email">E-Mail</label>
        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            id="register-email"
            name="email"
            placeholder="deine.email@beispiel.de"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={errors.email ? "has-error" : ""}
            disabled={loading}
          />
        </div>
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      {/* Passwort */}
      <div className="form-group">
        <label htmlFor="register-password">Passwort</label>
        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            id="register-password"
            name="password"
            placeholder="Mind. 8 Zeichen, 1 Großbuchstabe, 1 Ziffer, 1 Sonderzeichen"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            className={errors.password ? "has-error" : ""}
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
        {errors.password && (
          <div className="error-message">{errors.password}</div>
        )}
      </div>

      {/* Passwort bestätigen */}
      <div className="form-group">
        <label htmlFor="register-confirm-password">Passwort bestätigen</label>
        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input
            type={showConfirm ? "text" : "password"}
            id="register-confirm-password"
            name="confirmPassword"
            placeholder="Passwort wiederholen"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            className={errors.confirmPassword ? "has-error" : ""}
            disabled={loading}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirm(!showConfirm)}
            disabled={loading}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.confirmPassword && (
          <div className="error-message">{errors.confirmPassword}</div>
        )}
      </div>

      {/* Bedingungen */}
      <div className="terms-privacy">
        <p>
          Mit deiner Registrierung akzeptierst du unsere{" "}
          <Link to="/terms">AGB</Link> und{" "}
          <Link to="/privacy">Datenschutzrichtlinien</Link>.
        </p>
      </div>

      {/* Submit */}
      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? "Registrierung läuft..." : "Registrieren"}
      </button>

      {/* Tab wechseln */}
      <div className="alt-action">
        <p>
          Bereits registriert?{" "}
          <button
            type="button"
            className="switch-tab-link"
            onClick={() => switchTab("login")}
          >
            Jetzt anmelden
          </button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
