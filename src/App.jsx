// App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountPage from "./pages/AccountPage";

// Main App Component
const App = () => {
  const [userData, setUserData] = useState(null);

  const handleUserDataSave = (data) => {
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const handleLogin = (data) => {
    setUserData(data);
  };

  // Load user data from localStorage on app start
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      try {
        setUserData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error parsing saved user data:", error);
        localStorage.removeItem("userData");
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<SignupPage onUserDataSave={handleUserDataSave} />}
        />
        <Route path="/account" element={<AccountPage userData={userData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
