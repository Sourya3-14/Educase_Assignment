import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = ({ onUserDataSave }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Save user data in app state
    onUserDataSave(formData);

    // Navigate to account page
    navigate("/account");
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  return (
    <div className="page">
      <div className="auth-card">
        <button onClick={() => navigate("/")} className="back-button">
          ← Back
        </button>

        <h1 className="auth-title">
          Create your <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="form-label">
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone number<span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email address<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="form-input"
            />
          </div>

          <div className="radio-group">
            <label className="radio-label">Are you an Agency?</label>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
