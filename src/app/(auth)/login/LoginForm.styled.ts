import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 1.5rem;
  padding: 2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--dark-color);
  }
`;

export const InputWrapper = styled.div<{ hasError?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(210, 180, 140, 0.3);
  transition: 0.3s ease;

  &:focus-within {
    border-color: #d2b48c;
    box-shadow: 0 0 0 3px rgba(210, 180, 140, 0.1);
    border-bottom-color: #c29a6a;
  }
`;

export const Icon = styled.div`
  margin-left: 1rem;
  color: var(--dark-color);
  opacity: 0.5;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  background: none;
  font-size: 1rem;
  color: var(--dark-color);

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-style: italic;
    font-size: 0.875rem;
  }

  &:focus {
    outline: none;
  }
`;

export const TogglePassword = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    color: #c29a6a;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--accent-color);
`;

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 1.1rem;
    height: 1.1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    appearance: none;
    position: relative;
    cursor: pointer;

    &:checked {
      background-color: #d2b48c;
      border-color: #c29a6a;

      &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 5px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(210, 180, 140, 0.1);
    }
  }

  label {
    cursor: pointer;
  }
`;

export const ForgotPassword = styled.a`
  color: #c29a6a;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #d2b48c;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background-color: #c29a6a;
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AltAction = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`;

export const SwitchTabLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #c29a6a;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
