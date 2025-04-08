"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  clearRegisterMessage,
  clearError,
} from "@/store/user/authSlice";
import { toast } from "react-toastify";
import { RootState } from "@/store";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";

const Form = styled.form`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  border-bottom: 2px solid rgba(210, 180, 140, 0.3);

  &:focus-within {
    border-color: #d2b48c;
    box-shadow: 0 0 0 3px rgba(210, 180, 140, 0.1);
    border-bottom-color: #c29a6a;
  }
`;

const InputIcon = styled.span`
  margin-left: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  background: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  font-family: inherit;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.875rem;
    font-style: italic;
  }

  &:focus {
    outline: none;
  }

  border-color: ${({ $hasError }) => ($hasError ? "red" : "initial")};
`;

const TogglePassword = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: #c29a6a;
  }
`;

const ErrorText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: red;
`;

const Terms = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #d2b48c;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #c29a6a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const AltAction = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);

  button {
    background: none;
    border: none;
    color: #c29a6a;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function RegisterForm({
  switchTab,
}: {
  switchTab: (tab: string) => void;
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { loading, error, registerMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (registerMessage) {
      toast.success(registerMessage);
      dispatch(clearRegisterMessage());
      switchTab("login");
    }
  }, [registerMessage, dispatch, switchTab]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const validate = () => {
    const errs: any = {};
    if (!form.username.trim()) errs.username = t("register.errors.username");
    if (!form.email.trim()) errs.email = t("register.errors.email");
    if (!form.password) errs.password = t("register.errors.password");
    if (form.password !== form.confirmPassword)
      errs.confirmPassword = t("register.errors.confirmPassword");
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev: any) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const payload = {
        username: form.username,
        email: form.email,
        password: form.password,
      };
      await dispatch(register(payload) as any).unwrap();
    } catch (err) {
      toast.error(err || t("register.error"));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Username */}
      <FormGroup>
        <Label htmlFor="username">Benutzername</Label>
        <InputWrapper>
          <InputIcon>
            <FaUser />
          </InputIcon>
          <Input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="dein_benutzername"
            $hasError={!!errors.username}
          />
        </InputWrapper>
        {errors.username && <ErrorText>{errors.username}</ErrorText>}
      </FormGroup>

      {/* Email */}
      <FormGroup>
        <Label htmlFor="email">E-Mail</Label>
        <InputWrapper>
          <InputIcon>
            <FaEnvelope />
          </InputIcon>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="deine.email@beispiel.de"
            className={errors.email ? "has-error" : ""}
          />
        </InputWrapper>
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FormGroup>

      {/* Password */}
      <FormGroup>
        <Label htmlFor="password">Passwort</Label>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mind. 8 Zeichen"
            className={errors.password ? "has-error" : ""}
          />
          <TogglePassword
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </TogglePassword>
        </InputWrapper>
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
      </FormGroup>

      {/* Confirm Password */}
      <FormGroup>
        <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
        <InputWrapper>
          <InputIcon>
            <FaLock />
          </InputIcon>
          <Input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Passwort wiederholen"
            className={errors.confirmPassword ? "has-error" : ""}
          />
          <TogglePassword
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </TogglePassword>
        </InputWrapper>
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword}</ErrorText>
        )}
      </FormGroup>

      <Terms>
        Mit deiner Registrierung akzeptierst du unsere{" "}
        <Link href="/terms">AGB</Link> und{" "}
        <Link href="/privacy">Datenschutzrichtlinien</Link>.
      </Terms>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Registrierung läuft..." : "Registrieren"}
      </SubmitButton>

      <AltAction>
        <p>
          Bereits registriert?{" "}
          <button onClick={() => switchTab("login")}>Jetzt anmelden</button>
        </p>
      </AltAction>
    </Form>
  );
}
