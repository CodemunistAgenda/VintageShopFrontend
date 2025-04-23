// src/pages/Contact/Contact.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.space[8]};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.space[2]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.base};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.space[2]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.base};
  min-height: 150px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[3]};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die API-Anfrage sein
    console.log('Formular gesendet:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <ContactTitle>Kontakt</ContactTitle>
      
      <ContactInfo>
        <Paragraph>
          Haben Sie Fragen zu unseren Produkten oder benötigen Sie Unterstützung? Wir sind für Sie da. Füllen Sie einfach das untenstehende Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.
        </Paragraph>
      </ContactInfo>

      <FormContainer>
        {submitted && (
          <SuccessMessage>
            Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
          </SuccessMessage>
        )}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Nachricht</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Nachricht senden</SubmitButton>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;