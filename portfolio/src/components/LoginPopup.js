import React, { useState } from "react";
import "./LoginPopup.css"; // Import styles for the popup

const LoginPopup = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const dummyUser = {
      userId: "admin",
      password: "admin123",
    };

    if (userId === dummyUser.userId && password === dummyUser.password) {
      const token = "dummy-jwt-token"; // Replace with real JWT from backend
      localStorage.setItem("token", token);
      onLogin(token);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <h2>Admin Login</h2>
        {error && <p className="error-text">{error}</p>}
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPopup;
