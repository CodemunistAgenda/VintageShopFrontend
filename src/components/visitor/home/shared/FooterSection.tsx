"use client";

import Link from "next/link";
import styled from "styled-components";
import {
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";



export default function FooterSection() {
  return (
    <Footer>
      <Container>
        <Top>
          <Logo>
            <Link href="/">
              <LogoImage src="/logo-dark.png" alt="Logo" />
            </Link>
            <Slogan>Vintage • Upcycled • Design</Slogan>
          </Logo>

          <Sections>
            <Section>
              <Heading>Entdecken</Heading>
              <List>
                <ListItem><StyledLink href="/shop/vintage">Vintage-Schätze</StyledLink></ListItem>
                <ListItem><StyledLink href="/shop/upcycled">Upcycling-Produkte</StyledLink></ListItem>
                <ListItem><StyledLink href="/shop/designer">Designer-Kollektionen</StyledLink></ListItem>
                <ListItem><StyledLink href="/shop/limited">Limitierte Editionen</StyledLink></ListItem>
              </List>
            </Section>

            <Section>
              <Heading>Informationen</Heading>
              <List>
                <ListItem><StyledLink href="/about">Über uns</StyledLink></ListItem>
                <ListItem><StyledLink href="/sustainability">Nachhaltigkeit</StyledLink></ListItem>
                <ListItem><StyledLink href="/stories">Produktgeschichten</StyledLink></ListItem>
                <ListItem><StyledLink href="/faq">Häufige Fragen</StyledLink></ListItem>
              </List>
            </Section>

            <Section>
              <Heading>Service</Heading>
              <List>
                <ListItem><StyledLink href="/shipping">Versand & Lieferung</StyledLink></ListItem>
                <ListItem><StyledLink href="/returns">Rückgabe & Erstattung</StyledLink></ListItem>
                <ListItem><StyledLink href="/care">Pflegehinweise</StyledLink></ListItem>
                <ListItem><StyledLink href="/contact">Kontakt</StyledLink></ListItem>
              </List>
            </Section>

            <Section>
              <Heading>Kontakt</Heading>
              <List>
                <ListItem>
                  <ContactIcon><FaEnvelope /></ContactIcon>
                  <ContactLink href="mailto:hello@retroy.de">hello@retroy.de</ContactLink>
                </ListItem>
                <ListItem>
                  <ContactIcon><FaPhone /></ContactIcon>
                  <ContactLink href="tel:+4912345678">+49 123 456 78</ContactLink>
                </ListItem>
                <ListItem>
                  <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                  <address>Vintage Straße 42, 10115 Berlin</address>
                </ListItem>
              </List>

              <SocialLinks>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok />
                </SocialLink>
                <SocialLink href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <FaPinterestP />
                </SocialLink>
              </SocialLinks>
            </Section>
          </Sections>
        </Top>

        <Bottom>
          <BottomLinks>
            <StyledLink href="/terms">AGB</StyledLink>
            <StyledLink href="/privacy">Datenschutz</StyledLink>
            <StyledLink href="/imprint">Impressum</StyledLink>
          </BottomLinks>
          <Copyright>
            &copy; {new Date().getFullYear()} Retroy. Alle Rechte vorbehalten.
          </Copyright>
        </Bottom>
      </Container>
      <DecorativeLine />
    </Footer>
  );
}


const Footer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.sectionPaddingLarge} ${({ theme }) => theme.containerPadding} 2rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Logo = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  width: 140px;
`;

const Slogan = styled.p`
  margin-top: 1rem;
  font-style: italic;
  color: ${({ theme }) => theme.textSecondary};
`;

const Sections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Section = styled.div``;

const Heading = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Bottom = styled.div`
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding-top: 1.5rem;
  text-align: center;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const DecorativeLine = styled.div`
  margin-top: 2rem;
  height: 4px;
  background: linear-gradient(to right, #b08968, #d6c1a9);
  border-radius: 2px;
`;
