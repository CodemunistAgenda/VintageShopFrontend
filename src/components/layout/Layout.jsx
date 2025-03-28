import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AllProviders } from '../../contexts/index';
import './styles/Layout.scss';

const Layout = () => {
  return (
    <AllProviders>
      <div className="layout-container">
        <Header />
        <main className="layout-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AllProviders>
  );
};

export default Layout;