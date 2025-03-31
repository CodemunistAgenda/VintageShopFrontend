// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          {/* Weitere Routen hier */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;