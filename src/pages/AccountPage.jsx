// pages/AccountPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="account-card">
        <div className="acc-head">
          <button onClick={() => navigate("/")} className="back-button">
            ← Back
          </button>

          <h1 className="account-title">Account Settings</h1>
        </div>
        <div className="acc-body">
          <div className="profile-section">
            <div className="profile-avatar-container">
              <div className="profile-avatar">
                {userData?.fullName
                  ? userData.fullName.charAt(0).toUpperCase()
                  : "M"}
              </div>
              <div className="camera-icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">
                {userData?.fullName || "Marry Doe"}
              </h2>
              <p className="profile-email">
                {userData?.email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet. Consectetur Sadipscing Elit, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat. Sed Diam
          </p>

          <div className="settings-bottom"></div>
        </div>
        <div className="acc-foot">
          <div className="settings-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
