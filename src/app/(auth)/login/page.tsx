"use client";

import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "@/store/user/authSlice";
import { toast } from "react-toastify";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormGroup,
  InputWrapper,
  Input,
  TogglePassword,
  Icon,
  ErrorMessage,
  FormOptions,
  RememberMe,
  ForgotPassword,
  SubmitButton,
  AltAction,
  SwitchTabLink,
} from "./LoginForm.styled";

export default function LoginForm({ switchTab }: { switchTab: (tab: string) => void }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Willkommen zurück!");
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.email.trim()) {
      errs.email = "E-Mail ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Ungültige E-Mail-Adresse";
    }

    if (!form.password) {
      errs.password = "Passwort ist erforderlich";
    } else if (form.password.length < 8) {
      errs.password = "Mindestens 8 Zeichen";
    }

    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await dispatch(login(form) as any).unwrap();
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || "Anmeldung fehlgeschlagen.");
      } else {
        toast.error("Anmeldung fehlgeschlagen.");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="email">E-Mail</label>
        <InputWrapper hasError={!!errors.email}>
          <Icon><FaEnvelope /></Icon>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="deine.email@beispiel.de"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />
        </InputWrapper>
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="password">Passwort</label>
        <InputWrapper hasError={!!errors.password}>
          <Icon><FaLock /></Icon>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Mindestens 8 Zeichen"
            value={form.password}
            onChange={handleChange}
            disabled={loading}
          />
          <TogglePassword type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePassword>
        </InputWrapper>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </FormGroup>

      <FormOptions>
        <RememberMe>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={form.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Angemeldet bleiben</label>
        </RememberMe>
        <ForgotPassword href="/forgot-password">Passwort vergessen?</ForgotPassword>
      </FormOptions>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Wird angemeldet..." : "Anmelden"}
      </SubmitButton>

      <AltAction>
        Noch kein Konto?{" "}
        <SwitchTabLink type="button" onClick={() => switchTab("register")}>
          Jetzt registrieren
        </SwitchTabLink>
      </AltAction>
    </Form>
  );
}
