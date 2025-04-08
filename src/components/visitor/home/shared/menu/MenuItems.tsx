// components/visitor/shared/menu/MenuItems.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  MenuItem,
  MenuLink,
  DropdownContainer,
  DropdownContent,
  MobileMenuLink,
} from "./NavbarStyles";

interface MenuItemsProps {
  isMobile?: boolean;
  isDropdown?: boolean;
  onClose?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isMobile, isDropdown, onClose }) => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const renderLink = (href: string, label: string | React.ReactNode) =>
    isMobile ? (
      <MobileMenuLink href={href} onClick={onClose}>{label}</MobileMenuLink>
    ) : (
      <MenuLink href={href}>{label}</MenuLink>
    );

  const renderDropdown = (
    key: string,
    label: string,
    links: { href: string; labelKey: string }[]
  ) => (
    <MenuItem>
      <DropdownContainer onClick={() => handleToggle(key)}>
        {label} <FaChevronDown style={{ marginLeft: "4px" }} />
      </DropdownContainer>
      {openDropdown === key && (
        <DropdownContent>
          {links.map((link) => (
            <li key={link.href} onClick={onClose}>
              <Link href={link.href}>{t(link.labelKey)}</Link>
            </li>
          ))}
        </DropdownContent>
      )}
    </MenuItem>
  );

  return (
    <>
      <MenuItem>{renderLink("/", t("navbar.home"))}</MenuItem>

      {renderDropdown("shop", t("navbar.shop"), [
        { href: "/visitor/shop/vintage", labelKey: "navbar.shopVintage" },
        { href: "/visitor/shop/upcycled", labelKey: "navbar.shopUpcycled" },
        { href: "/visitor/shop/designer", labelKey: "navbar.shopDesigner" },
        { href: "/visitor/shop/limited", labelKey: "navbar.shopLimitierte" },
      ])}

      {renderDropdown("categories", t("navbar.categories"), [
        { href: "/visitor/categories/mode", labelKey: "navbar.categoryFashion" },
        { href: "/visitor/categories/moebel", labelKey: "navbar.categoryFurniture" },
      ])}

      {renderDropdown("collections", t("navbar.collections"), [
        { href: "/visitor/collections/decades/60s", labelKey: "navbar.collection60s" },
        { href: "/visitor/collections/decades/70s", labelKey: "navbar.collection70s" },
        { href: "/visitor/collections/decades/80s", labelKey: "navbar.collection80s" },
        { href: "/visitor/collections/decades/90s", labelKey: "navbar.collection90s" },
        { href: "/visitor/collections/decades/all", labelKey: "navbar.collectionAll" },
      ])}

      <MenuItem>{renderLink("/visitor/storie", t("navbar.storie"))}</MenuItem>
      <MenuItem>{renderLink("/visitor/sustainability", t("navbar.sustainability"))}</MenuItem>
      <MenuItem>{renderLink("/visitor/about", t("navbar.about"))}</MenuItem>
    </>
  );
};

export default MenuItems;
