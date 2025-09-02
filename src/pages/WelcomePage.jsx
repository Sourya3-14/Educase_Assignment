import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="welcome-card">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-description">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="button-container">
          <button onClick={() => navigate("/signup")} className="btn-primary">
            Create Account
          </button>
          <button onClick={() => navigate("/login")} className="btn-secondary">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
