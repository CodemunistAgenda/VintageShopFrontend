import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Account.scss";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="account-page">
      <div className="account-container">
        <h1 className="page-title">Mein Konto</h1>

        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Anmelden
          </button>
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Registrieren
          </button>
        </div>

        {activeTab === "login" && <LoginForm switchTab={setActiveTab} />}
        {activeTab === "register" && <RegisterForm switchTab={setActiveTab} />}
      </div>
    </div>
  );
};

export default AccountPage;
