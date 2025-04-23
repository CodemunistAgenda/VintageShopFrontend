// src/components/Layout/Header/Header.tsx
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaAngleDown, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../../styles/ThemeProvider';
import Logo from '../../../assets/images/RetroyLogo.webp';

const HeaderContainer = styled.header<{ scrolled?: boolean }>`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 2rem;
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease, padding 0.3s ease;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 1080px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownIcon = styled(FaAngleDown)`
  margin-left: 5px;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 1080px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 77px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  
  @media (min-width: 1081px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Link to="/">
        <LogoImage src={Logo} alt="Retroy" />
      </Link>
      
      <Navigation>
        <NavItem>
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink to="/shop">SHOP</NavLink>
          <DropdownIcon />
        </NavItem>
        
        <NavItem>
          <NavLink to="/kollektionen">KOLLEKTIONEN</NavLink>
          <DropdownIcon />
        </NavItem>
        
        <NavItem>
          <NavLink to="/produktgeschichten">PRODUKTGESCHICHTEN</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink to="/nachhaltigkeit">NACHHALTIGKEIT</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink to="/ueber-uns">ÜBER UNS</NavLink>
        </NavItem>
      </Navigation>
      
      <IconGroup>
        <IconLink to="/suche" aria-label="Suche">
          <FaSearch />
        </IconLink>
        <IconLink to="/konto" aria-label="Mein Konto">
          <FaUser />
        </IconLink>
        <IconLink to="/wunschliste" aria-label="Wunschliste">
          <FaHeart />
        </IconLink>
        <IconLink to="/warenkorb" aria-label="Warenkorb">
          <FaShoppingCart />
        </IconLink>
        <ThemeToggle onClick={toggle} aria-label="Theme wechseln">
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>
      </IconGroup>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavItem>
          <NavLink to="/">HOME</NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink to="/shop">SHOP</NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink to="/kollektionen">KOLLEKTIONEN</NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink to="/produktgeschichten">PRODUKTGESCHICHTEN</NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink to="/nachhaltigkeit">NACHHALTIGKEIT</NavLink>
        </MobileNavItem>
        <MobileNavItem>
          <NavLink to="/ueber-uns">ÜBER UNS</NavLink>
        </MobileNavItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;