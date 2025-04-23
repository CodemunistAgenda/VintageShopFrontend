// src/components/Layout/Footer/Footer.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaPinterest, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../../assets/images/RetroyLogo.webp';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLogo = styled.img`
  height: 50px;
  width: auto;
`;

const LogoSlogan = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const Divider = styled.hr`
  margin: 2rem 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Link to="/">
            <FooterLogo src={Logo} alt="Retroy" />
          </Link>
          <LogoSlogan>Vintage • Upcycled • Design</LogoSlogan>
        </LogoSection>
        
        <FooterColumn>
          <ColumnTitle>Entdecken</ColumnTitle>
          <FooterLink to="/shop/vintage">Vintage-Schätze</FooterLink>
          <FooterLink to="/shop/upcycled">Upcycling-Produkte</FooterLink>
          <FooterLink to="/shop/designer">Designer-Kollektionen</FooterLink>
          <FooterLink to="/shop/limited">Limitierte Editionen</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Informationen</ColumnTitle>
          <FooterLink to="/ueber-uns">Über uns</FooterLink>
          <FooterLink to="/nachhaltigkeit">Nachhaltigkeit</FooterLink>
          <FooterLink to="/produktgeschichten">Produktgeschichten</FooterLink>
          <FooterLink to="/haeufige-fragen">Häufige Fragen</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Service</ColumnTitle>
          <FooterLink to="/versand-lieferung">Versand & Lieferung</FooterLink>
          <FooterLink to="/rueckgabe-erstattung">Rückgabe & Erstattung</FooterLink>
          <FooterLink to="/pflegehinweise">Pflegehinweise</FooterLink>
          <FooterLink to="/kontakt">Kontakt</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Kontakt</ColumnTitle>
          <ContactItem>
            <FaEnvelope />
            <a href="mailto:hello@retroy.de">hello@retroy.de</a>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <a href="tel:+4912345678">+49 123 456 78</a>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Vintage Straße 42, 10115 Berlin</span>
          </ContactItem>
          
          <SocialLinks>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterest />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
      </FooterContent>
      
      <Divider />
      
      <BottomBar>
        <LegalLinks>
          <FooterLink to="/agb">AGB</FooterLink>
          <FooterLink to="/datenschutz">Datenschutz</FooterLink>
          <FooterLink to="/impressum">Impressum</FooterLink>
        </LegalLinks>
        <Copyright>© {new Date().getFullYear()} Retroy. Alle Rechte vorbehalten.</Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;