// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import AccountPage from "./pages/Account/Account";
import DashboardPage from "./pages/Dashboard/DashboardPage";
=======
import Account from "./pages/Account/Account";
import About from "./pages/About/About"; // Neue About-Komponente importieren
>>>>>>> Chris
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD

          <Route path="/account" element={<AccountPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
=======
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} /> {/* Neue Route für About */}
          {/* Weitere Routen hier */}
>>>>>>> Chris
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
