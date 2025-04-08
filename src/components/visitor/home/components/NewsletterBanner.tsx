"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function NewsletterBanner() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/newsletter", { email });
      toast.success(t("newsletter.success"));
      setEmail("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || t("newsletter.error"));
      } else {
        toast.error(t("newsletter.error"));
      }
    }
    
  };

  return (
    <Banner>
      <Content>
        <Title>{t("newsletter.title")}</Title>
        <Text>{t("newsletter.text")}</Text>
      </Content>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("newsletter.placeholder")}
          required
        />
        <Button type="submit">{t("newsletter.button")}</Button>
      </Form>
    </Banner>
  );
}


const Banner = styled.section`
  background-color: ${({ theme }) => theme.sectionBackground};
  padding: ${({ theme }) => theme.sectionPaddingLarge} ${({ theme }) => theme.containerPadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textSecondary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radii.md};
  flex: 1;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;
