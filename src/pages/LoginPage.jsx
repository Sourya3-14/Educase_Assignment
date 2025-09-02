import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validateForm()) {
      return;
    }

    // Check if user data exists in localStorage (simulating user registration check)
    const savedUserData = localStorage.getItem("userData");

    if (!savedUserData) {
      setLoginError("No account found. Please create an account first.");
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
      return;
    }

    try {
      const userData = JSON.parse(savedUserData);

      // Simple credential validation (in real app, this would be server-side)
      if (
        userData.email === formData.email &&
        userData.password === formData.password
      ) {
        onLogin(userData);
        navigate("/account");
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (error) {
      setLoginError("Error reading user data. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <div className="page">
      <div className="auth-page">
        <div className="auth-card">
          <button onClick={() => navigate("/")} className="back-button">
            ← Back
          </button>

          <h1 className="auth-title">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="auth-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className={"form-input"}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className={"form-input"}
                required
              />
            </div>

            {loginError && <div className="login-error">{loginError}</div>}

            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
