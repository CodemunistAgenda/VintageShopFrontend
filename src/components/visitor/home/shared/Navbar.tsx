"use client";
import { renderLink } from "@/utils/renderLink";
import { useState, useContext, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "@/app/providers/ThemeProviderWrapper";
import { AnimatePresence } from "framer-motion";
import {
  TopBar,
  SocialLinks,
  NavbarWrapper,
  CenterSection,
  LogoWrapper,
  LogoImage,
  LogoTextWrapper,
  LogoText,
  LogoText2,
  RightControls,
  LangSelect,
  ThemeToggle,
  Hamburger,
  DesktopMenu,
  MenuBar,
  StickyMenu,
  MobileMenu,
  MenuItem1,
  MenuTop,
} from "./menu/NavbarStyles";

import MenuItems from "./menu/MenuItems";

export default function Navbar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { toggle, isDark } = useContext(ThemeContext);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setShowStickyMenu(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const logoSrc = isDark ? "/navbar/logo-dark.png" : "/navbar/logo-light.png";

  return (
    <>
      <AnimatePresence>
        {showStickyMenu && (
          <StickyMenu
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LogoWrapper href="/">
              <LogoImage src={logoSrc} alt="Logo" width={40} height={40} />
              <LogoTextWrapper>
                <LogoText>Retroy</LogoText>
                <LogoText2>{t("navbar.slogan")}</LogoText2>
              </LogoTextWrapper>
            </LogoWrapper>

            <DesktopMenu>
              <MenuItems isDropdown />
            </DesktopMenu>

            <RightControls>
              <Hamburger onClick={() => setMobileOpen((prev) => !prev)}>
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </Hamburger>
            </RightControls>

            <AnimatePresence>
              {mobileOpen && (
                <MobileMenu
                  isOpen={mobileOpen}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItems isMobile onClose={() => setMobileOpen(false)} />
                </MobileMenu>
              )}
            </AnimatePresence>
          </StickyMenu>
        )}
      </AnimatePresence>

      <NavbarWrapper>
        <TopBar>
          <SocialLinks>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </SocialLinks>
                         
          <MenuTop>
            <MenuItem1>{renderLink("/search", <FaSearch />)}</MenuItem1>
            <MenuItem1>{renderLink("/login", t("navbar.login"))}</MenuItem1>
            <MenuItem1>
              {renderLink("/register", t("navbar.register"))}
            </MenuItem1>
          </MenuTop>
        </TopBar>

        <CenterSection>
          <LogoWrapper href="/">
            <LogoImage src={logoSrc} alt="Logo" width={60} height={60} />
            <LogoTextWrapper>
              <LogoText>Retroy</LogoText>
              <LogoText2>{t("navbar.slogan")}</LogoText2>
            </LogoTextWrapper>
          </LogoWrapper>

          <RightControls>
            <ThemeToggle onClick={toggle}>
              {isDark ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
            <LangSelect value={i18n.language} onChange={handleLangChange}>
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </LangSelect>
            <Hamburger onClick={() => setMobileOpen((prev) => !prev)}>
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </Hamburger>
          </RightControls>
        </CenterSection>

        <MenuBar>
          <DesktopMenu>
            <MenuItems isDropdown />
          </DesktopMenu>
        </MenuBar>

        <AnimatePresence>
          {mobileOpen && (
            <MobileMenu
              isOpen={mobileOpen}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MenuItems isMobile onClose={() => setMobileOpen(false)} />
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarWrapper>
    </>
  );
}
