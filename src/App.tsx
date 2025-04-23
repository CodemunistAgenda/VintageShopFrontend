// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './styles/ThemeProvider';
import Layout from './components/Layout/Layout/Layout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/warenkorb" element={<Cart />} />
          {/* Weitere Routen hier hinzufügen */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;