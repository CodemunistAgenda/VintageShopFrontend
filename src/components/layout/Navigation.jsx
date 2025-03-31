import React from "react";
import { Link } from "react-router-dom";
import "../layout/styles/Navigation.scss";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import {
  GiVintageRobot,
  GiRecycle,
  GiNotebook,
  GiDiamondTrophy,
} from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, toggleDropdown } from "@/store/slices/uiSlice"; // ✅ Redux'taki UI slice

const Navigation = () => {
  const dispatch = useDispatch();
  const { isMenuOpen, activeDropdown, scrolled, transparent, isMobile } =
    useSelector((state) => state.ui);

  const cartItemCount = useSelector((state) => state.cart.totalCount);
  const wishlistItemCount = useSelector((state) => state.wishlist.items.length);

  const hasCartItems = cartItemCount > 0;
  const hasWishlistItems = wishlistItemCount > 0;

  return (
    <nav
      className={`navigation-header ${scrolled ? "scrolled" : ""} ${
        transparent ? "transparent" : ""
      }`}
    >
      <div className="navigation-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" className="site-logo" />
          </Link>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => dispatch(toggleMenu())}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${
                activeDropdown === "shop" ? "active" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => dispatch(toggleDropdown("shop"))}
                aria-expanded={activeDropdown === "shop"}
              >
                Shop
                <FaChevronDown className="dropdown-icon" />
              </button>

              <ul className="dropdown-menu">
                <li className="category-title">Kategorien</li>
                <li className="dropdown-item">
                  <Link to="/shop/vintage" className="dropdown-link">
                    <GiVintageRobot className="link-icon" />
                    Vintage-Schätze
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/shop/upcycled" className="dropdown-link">
                    <GiRecycle className="link-icon" />
                    Upcycling-Produkte
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/shop/designer" className="dropdown-link">
                    <GiNotebook className="link-icon" />
                    Designer-Kollektionen
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/shop/limited" className="dropdown-link">
                    <GiDiamondTrophy className="link-icon" />
                    Limitierte Editionen
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`nav-item dropdown ${
                activeDropdown === "collections" ? "active" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => dispatch(toggleDropdown("collections"))}
                aria-expanded={activeDropdown === "collections"}
              >
                Kollektionen
                <FaChevronDown className="dropdown-icon" />
              </button>

              <ul className="dropdown-menu">
                <li className="category-title">Kuratierte Auswahl</li>
                <li className="dropdown-item">
                  <Link to="/collections/decades/60s" className="dropdown-link">
                    60er Jahre Revival
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/collections/decades/70s" className="dropdown-link">
                    70er Boho-Chic
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/collections/decades/80s" className="dropdown-link">
                    80er Nostalgie
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/collections/decades/90s" className="dropdown-link">
                    90er Comeback
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item">
                  <Link
                    to="/collections/all"
                    className="dropdown-link view-all"
                  >
                    Alle Kollektionen ansehen
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/stories" className="nav-link">
                Produktgeschichten
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sustainability" className="nav-link">
                Nachhaltigkeit
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Über uns
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link
              to="/search"
              className="action-button search-button"
              aria-label="Suche"
            >
              <FaSearch />
            </Link>
            <Link
              to="/account"
              className="action-button account-button"
              aria-label="Konto"
            >
              <FaUser />
            </Link>
            <Link
              to="/wishlist"
              className={`action-button wishlist-button ${
                !hasWishlistItems ? "disabled" : ""
              }`}
              aria-label="Wunschliste"
              onClick={(e) => !hasWishlistItems && e.preventDefault()}
            >
              <FaHeart />
              {hasWishlistItems && (
                <span className="badge">{wishlistItemCount}</span>
              )}
            </Link>
            <Link
              to="/cart"
              className={`action-button cart-button ${
                !hasCartItems ? "disabled" : ""
              }`}
              aria-label="Warenkorb"
              onClick={(e) => !hasCartItems && e.preventDefault()}
            >
              <FaShoppingCart />
              {hasCartItems && <span className="badge">{cartItemCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
