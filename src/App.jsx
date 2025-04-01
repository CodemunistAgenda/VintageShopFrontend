// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AccountPage from "./pages/Account/Account";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Account from "./pages/Account/Account";
import About from "./pages/About/About"; 
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
