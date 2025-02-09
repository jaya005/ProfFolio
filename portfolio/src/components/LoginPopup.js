// // // import React, { useState } from "react";
// // // import "./LoginPopup.css"; // Import styles for the popup

// // // const LoginPopup = ({ onLogin }) => {
// // //   const [userId, setUserId] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");

// // //   const handleLogin = () => {
// // //     const dummyUser = {
// // //       userId: "admin",
// // //       password: "admin123",
// // //     };

// // //     if (userId === dummyUser.userId && password === dummyUser.password) {
// // //       const token = "dummy-jwt-token"; // Replace with real JWT from backend
// // //       localStorage.setItem("token", token);
// // //       onLogin(token);
// // //     } else {
// // //       setError("Invalid credentials. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-overlay">
// // //       <div className="login-box">
// // //         <h2>Admin Login</h2>
// // //         {error && <p className="error-text">{error}</p>}
// // //         <input
// // //           type="text"
// // //           placeholder="User ID"
// // //           value={userId}
// // //           onChange={(e) => setUserId(e.target.value)}
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />
// // //         <button onClick={handleLogin}>Login</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPopup;
// // import React, { useState } from "react";
// // import "./LoginPopup.css"; // Import styles for the popup

// // const LoginPopup = ({ onLogin }) => {
// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleLogin = () => {
// //     const dummyUser = {
// //       userId: "admin",
// //       password: "admin123",
// //     };

// //     if (userId === dummyUser.userId && password === dummyUser.password) {
// //       const token = "dummy-jwt-token"; // Replace with real JWT from backend
// //       localStorage.setItem("token", token);
// //       onLogin(token);
// //     } else {
// //       setError("Invalid credentials. Please try again.");
// //     }
// //   };

// //   const handleForgotPassword = () => {
// //     if (userId.trim() === "") {
// //       setError("Please enter your User ID to reset the password.");
// //       return;
// //     }

// //     alert(`Password reset instructions sent to the registered email for User ID: ${userId}`);
// //   };

// //   return (
// //     <div className="login-overlay">
// //       <div className="login-box">
// //         <h2>Admin Login</h2>
// //         {error && <p className="error-text">{error}</p>}
// //         <input
// //           type="text"
// //           placeholder="User ID"
// //           value={userId}
// //           onChange={(e) => setUserId(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button className="my-1" onClick={handleLogin}>Login</button>
// //         <button onClick={handleForgotPassword} className="forgot-password-btn my-2">
// //           Forgot Password?
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPopup;
// import React, { useState } from "react";
// import "./LoginPopup.css"; // Import styles for the popup

// const LoginPopup = ({ onLogin }) => {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password screen

//   const handleLogin = () => {
//     const dummyUser = {
//       userId: "admin",
//       password: "admin123",
//     };

//     if (userId === dummyUser.userId && password === dummyUser.password) {
//       const token = "dummy-jwt-token"; // Replace with real JWT from backend
//       localStorage.setItem("token", token);
//       onLogin(token);
//     } else {
//       setError("Invalid credentials. Please try again.");
//     }
//   };

//   const handleForgotPassword = () => {
//     if (userId.trim() === "") {
//       setError("Please enter your User ID to reset the password.");
//       return;
//     }

//     // Simulating sending a reset link to the registered email
//     alert(`Password reset instructions sent to the registered email for User ID: ${userId}`);
//     setIsForgotPassword(false); // Go back to login screen after resetting
//   };

//   return (
//     <div className="login-overlay">
//       <div className="login-box">
//         <h2>{isForgotPassword ? "Reset Password" : "Admin Login"}</h2>
//         {error && <p className="error-text">{error}</p>}

//         {!isForgotPassword && (
//           <>
//             <input
//               type="text"
//               placeholder="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className="my-1" onClick={handleLogin}>Login</button>
//             <button onClick={() => setIsForgotPassword(true)} className="forgot-password-btn my-2">
//               Forgot Password?
//             </button>
//           </>
//         )}

//         {isForgotPassword && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter User ID to Reset Password"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//             <button className="my-1" onClick={handleForgotPassword}>Reset Password</button>
//             <button onClick={() => setIsForgotPassword(false)} className="my-2">
//               Back to Login
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;
import React, { useState } from "react";
import "./LoginPopup.css"; // Import styles for the popup

const LoginPopup = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleLogin = () => {
    const dummyUser = {
      userId: "admin",
      password: "admin123",
    };

    if (userId === dummyUser.userId && password === dummyUser.password) {
      const token = "dummy-jwt-token"; 
      localStorage.setItem("token", token);
      onLogin(token);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (userId.trim() === "") {
      setError("Please enter your User ID to reset the password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        setResetEmailSent(true);
      } else {
        setError("User not found. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleResetPassword = async (newPassword) => {
    const token = new URLSearchParams(window.location.search).get('token');

    try {
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.ok) {
        alert("Password successfully reset!");
      } else {
        setError("Invalid or expired token.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <h2>{isForgotPassword ? "Reset Password" : "Admin Login"}</h2>
        {error && <p className="error-text">{error}</p>}
        
        {!isForgotPassword && !resetEmailSent && (
          <>
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
            <button onClick={() => setIsForgotPassword(true)} className="forgot-password-btn">
              Forgot Password?
            </button>
          </>
        )}

        {isForgotPassword && !resetEmailSent && (
          <>
            <input
              type="text"
              placeholder="Enter User ID to Reset Password"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleForgotPassword}>Reset Password</button>
            <button onClick={() => setIsForgotPassword(false)}>Back to Login</button>
          </>
        )}

        {resetEmailSent && (
          <p>A reset link has been sent to your email. Please check your inbox.</p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
