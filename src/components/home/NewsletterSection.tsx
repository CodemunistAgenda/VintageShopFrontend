// src/components/Home/NewsletterSection.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: #343a40;
  color: white;
  padding: 4rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white !important;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter-Anmeldung hier implementieren
    console.log('Newsletter-Anmeldung für:', email);
    setEmail('');
    // Zeige eine Erfolgsmeldung o.ä.
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <div>
          <Title>Vintage-Inspiration direkt in dein Postfach</Title>
          <Description>
            Melde dich für unseren Newsletter an und erhalte exklusive Angebote, 
            Styling-Tipps und Nachrichten über neuste Schätze.
          </Description>
        </div>
        
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <Input 
              type="email" 
              placeholder="Deine E-Mail-Adresse" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubmitButton type="submit">Anmelden</SubmitButton>
          </FormContainer>
        </form>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default NewsletterSection;