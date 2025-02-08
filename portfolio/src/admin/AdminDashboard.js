// // import React, { useState } from "react";

// // const AdminDashboard = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [newProject, setNewProject] = useState("");

// //   const handleAddProject = () => {
// //     if (newProject) {
// //       setProjects([...projects, newProject]);
// //       setNewProject("");
// //     }
// //   };

// //   const handleDeleteProject = (index) => {
// //     setProjects(projects.filter((_, i) => i !== index));
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h1>Admin Dashboard</h1>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Add a project"
// //           value={newProject}
// //           onChange={(e) => setNewProject(e.target.value)}
// //           className="form-control"
// //         />
// //         <button onClick={handleAddProject} className="btn btn-primary mt-2">
// //           Add Project
// //         </button>
// //       </div>
// //       <ul className="list-group mt-3">
// //         {projects.map((project, index) => (
// //           <li key={index} className="list-group-item d-flex justify-content-between">
// //             {project}
// //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState, useEffect } from "react";
// import LoginPopup from "../components/LoginPopup"; // Import the login popup

// const AdminDashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [newProject, setNewProject] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     setIsAuthenticated(true);
//   };

//   const handleAddProject = () => {
//     if (newProject) {
//       setProjects([...projects, newProject]);
//       setNewProject("");
//     }
//   };

//   const handleDeleteProject = (index) => {
//     setProjects(projects.filter((_, i) => i !== index));
//   };

//   if (!isAuthenticated) {
//     return <LoginPopup onLogin={handleLogin} />;
//   }

//   return (
//     <div className="container mt-4">
//       <h1>Admin Dashboard</h1>
//       <button
//         className="btn btn-danger"
//         onClick={() => {
//           localStorage.removeItem("token");
//           setIsAuthenticated(false);
//         }}
//       >
//         Logout
//       </button>
//       <div>
//         <input
//           type="text"
//           placeholder="Add a project"
//           value={newProject}
//           onChange={(e) => setNewProject(e.target.value)}
//           className="form-control"
//         />
//         <button onClick={handleAddProject} className="btn btn-primary mt-2">
//           Add Project
//         </button>
//       </div>
//       <ul className="list-group mt-3">
//         {projects.map((project, index) => (
//           <li key={index} className="list-group-item d-flex justify-content-between">
//             {project}
//             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import LoginPopup from "../components/LoginPopup"; // Import the login popup
import "./AdminDashboard.css"; // Import styles

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const handleAddProject = () => {
    if (newProject) {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  };

  const handleDeleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  if (!isAuthenticated) {
    return <LoginPopup onLogin={handleLogin} />;
  }

  return (
    <div className="container mt-4">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <h1 className="text-center">Admin Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Add a project"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          className="form-control"
        />
        <button onClick={handleAddProject} className="btn btn-primary mt-2">
          Add Project
        </button>
      </div>
      <ul className="list-group mt-3">
        {projects.map((project, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {project}
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
