// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/routing/ProtectedRoute";
import Layout from "./components/layout/Layout";

// Seiten
import Home from "./pages/Home/Home";
import DashboardPage from "./pages/Admin/DashboardPage";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Search from "./pages/Search/Search";
import Wishlist from "./pages/Wish/Wishlist";
import Cart from "./pages/Cart/Cart";
import NotFound from "./components/layout/NotFound";
import Sustainability from "./pages/Sustainability/Sustainability";
import Faq from "./pages/FAQ/Faq";

// Shop
import ProductList from "./pages/Product/ProductList";
import ProductDetail from "./pages/Product/ProductDetail";
import ProductStories from "./pages/Product/ProductStories";
import StoryDetail from "./pages/Product/StoryDetail";
import ShopCategoryPage from "./pages/Shop/ShopCategoryPage";

// Kollektionen
import CollectionPage from "./pages/Collection/CollectionPage";



import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Startseite */}
          <Route path="/" element={<Home />} />

          {/* Admin Panel (geschützt) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Auth & Benutzer */}
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          {/* Über uns */}
          <Route path="/about" element={<About />} />

          {/* Shop & Produkte */}
          <Route path="/shop" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/stories" element={<ProductStories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/shop/:category" element={<ShopCategoryPage />} />

          {/* Kollektionen */}
          <Route path="/collections/decades/:decade" element={<CollectionPage />} />

          {/* Sonstiges */}
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* Toast-Benachrichtigung */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;


