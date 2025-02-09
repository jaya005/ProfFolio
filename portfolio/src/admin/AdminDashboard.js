// // // // // // // import React, { useState } from "react";

// // // // // // // const AdminDashboard = () => {
// // // // // // //   const [projects, setProjects] = useState([]);
// // // // // // //   const [newProject, setNewProject] = useState("");

// // // // // // //   const handleAddProject = () => {
// // // // // // //     if (newProject) {
// // // // // // //       setProjects([...projects, newProject]);
// // // // // // //       setNewProject("");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDeleteProject = (index) => {
// // // // // // //     setProjects(projects.filter((_, i) => i !== index));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mt-4">
// // // // // // //       <h1>Admin Dashboard</h1>
// // // // // // //       <div>
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="Add a project"
// // // // // // //           value={newProject}
// // // // // // //           onChange={(e) => setNewProject(e.target.value)}
// // // // // // //           className="form-control"
// // // // // // //         />
// // // // // // //         <button onClick={handleAddProject} className="btn btn-primary mt-2">
// // // // // // //           Add Project
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //       <ul className="list-group mt-3">
// // // // // // //         {projects.map((project, index) => (
// // // // // // //           <li key={index} className="list-group-item d-flex justify-content-between">
// // // // // // //             {project}
// // // // // // //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
// // // // // // //               Delete
// // // // // // //             </button>
// // // // // // //           </li>
// // // // // // //         ))}
// // // // // // //       </ul>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AdminDashboard;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import LoginPopup from "../components/LoginPopup"; // Import the login popup

// // // // // // const AdminDashboard = () => {
// // // // // //   const [projects, setProjects] = useState([]);
// // // // // //   const [newProject, setNewProject] = useState("");
// // // // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const token = localStorage.getItem("token");
// // // // // //     if (token) {
// // // // // //       setIsAuthenticated(true);
// // // // // //     }
// // // // // //   }, []);

// // // // // //   const handleLogin = (token) => {
// // // // // //     setIsAuthenticated(true);
// // // // // //   };

// // // // // //   const handleAddProject = () => {
// // // // // //     if (newProject) {
// // // // // //       setProjects([...projects, newProject]);
// // // // // //       setNewProject("");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDeleteProject = (index) => {
// // // // // //     setProjects(projects.filter((_, i) => i !== index));
// // // // // //   };

// // // // // //   if (!isAuthenticated) {
// // // // // //     return <LoginPopup onLogin={handleLogin} />;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="container mt-4">
// // // // // //       <h1>Admin Dashboard</h1>
// // // // // //       <button
// // // // // //         className="btn btn-danger"
// // // // // //         onClick={() => {
// // // // // //           localStorage.removeItem("token");
// // // // // //           setIsAuthenticated(false);
// // // // // //         }}
// // // // // //       >
// // // // // //         Logout
// // // // // //       </button>
// // // // // //       <div>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Add a project"
// // // // // //           value={newProject}
// // // // // //           onChange={(e) => setNewProject(e.target.value)}
// // // // // //           className="form-control"
// // // // // //         />
// // // // // //         <button onClick={handleAddProject} className="btn btn-primary mt-2">
// // // // // //           Add Project
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       <ul className="list-group mt-3">
// // // // // //         {projects.map((project, index) => (
// // // // // //           <li key={index} className="list-group-item d-flex justify-content-between">
// // // // // //             {project}
// // // // // //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
// // // // // //               Delete
// // // // // //             </button>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import LoginPopup from "../components/LoginPopup"; // Import the login popup
// // // // // import "./AdminDashboard.css"; // Import styles

// // // // // const AdminDashboard = () => {
// // // // //   const [projects, setProjects] = useState([]);
// // // // //   const [newProject, setNewProject] = useState("");
// // // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     if (token) {
// // // // //       setIsAuthenticated(true);
// // // // //     }
// // // // //   }, []);

// // // // //   const handleLogin = (token) => {
// // // // //     setIsAuthenticated(true);
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     setIsAuthenticated(false);
// // // // //   };

// // // // //   const handleAddProject = () => {
// // // // //     if (newProject) {
// // // // //       setProjects([...projects, newProject]);
// // // // //       setNewProject("");
// // // // //     }
// // // // //   };

// // // // //   const handleDeleteProject = (index) => {
// // // // //     setProjects(projects.filter((_, i) => i !== index));
// // // // //   };

// // // // //   if (!isAuthenticated) {
// // // // //     return <LoginPopup onLogin={handleLogin} />;
// // // // //   }

// // // // //   return (
// // // // //     <div className="container mt-4">
// // // // //       <button className="logout-btn" onClick={handleLogout}>
// // // // //         Logout
// // // // //       </button>
// // // // //       <h1 className="text-center">Admin Dashboard</h1>
// // // // //       <div>
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Add a project"
// // // // //           value={newProject}
// // // // //           onChange={(e) => setNewProject(e.target.value)}
// // // // //           className="form-control"
// // // // //         />
// // // // //         <button onClick={handleAddProject} className="btn btn-primary mt-2">
// // // // //           Add Project
// // // // //         </button>
// // // // //       </div>
// // // // //       <ul className="list-group mt-3">
// // // // //         {projects.map((project, index) => (
// // // // //           <li key={index} className="list-group-item d-flex justify-content-between">
// // // // //             {project}
// // // // //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(index)}>
// // // // //               Delete
// // // // //             </button>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminDashboard;
// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import LoginPopup from "../components/LoginPopup"; // Import the login popup
// // // // import "./AdminDashboard.css"; // Import styles

// // // // const AdminDashboard = () => {
// // // //   const [projects, setProjects] = useState([]);
// // // //   const [newProject, setNewProject] = useState("");
// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// // // //   // Fetch projects from database
// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (token) {
// // // //       setIsAuthenticated(true);
// // // //     }
// // // //     fetchProjects();
// // // //   }, []);

// // // //   const fetchProjects = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:3001/projects");
// // // //       setProjects(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching projects:", error);
// // // //     }
// // // //   };

// // // //   const handleLogin = (token) => {
// // // //     setIsAuthenticated(true);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     setIsAuthenticated(false);
// // // //   };

// // // //   const handleAddProject = async () => {
// // // //     if (newProject) {
// // // //       try {
// // // //         const response = await axios.post("http://localhost:3001/projects", {
// // // //           title: newProject,
// // // //         });
// // // //         setProjects([...projects, response.data]); // Update state
// // // //         setNewProject("");
// // // //       } catch (error) {
// // // //         console.error("Error adding project:", error);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleDeleteProject = async (id) => {
// // // //     try {
// // // //       await axios.delete(`http://localhost:3001/projects/${id}`);
// // // //       setProjects(projects.filter((project) => project.id !== id));
// // // //     } catch (error) {
// // // //       console.error("Error deleting project:", error);
// // // //     }
// // // //   };

// // // //   if (!isAuthenticated) {
// // // //     return <LoginPopup onLogin={handleLogin} />;
// // // //   }

// // // //   return (
// // // //     <div className="container mt-4">
// // // //       <button className="logout-btn" onClick={handleLogout}>
// // // //         Logout
// // // //       </button>
// // // //       <h1 className="text-center">Admin Dashboard</h1>
// // // //       <div>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Add a project"
// // // //           value={newProject}
// // // //           onChange={(e) => setNewProject(e.target.value)}
// // // //           className="form-control"
// // // //         />
// // // //         <button onClick={handleAddProject} className="btn btn-primary mt-2">
// // // //           Add Project
// // // //         </button>
// // // //       </div>
// // // //       <ul className="list-group mt-3">
// // // //         {projects.map((project) => (
// // // //           <li key={project.id} className="list-group-item d-flex justify-content-between">
// // // //             {project.title}
// // // //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(project.id)}>
// // // //               Delete
// // // //             </button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import LoginPopup from "../components/LoginPopup"; 

// // // const AdminDashboard = () => {
// // //   const [projects, setProjects] = useState([]);
// // //   const [newProject, setNewProject] = useState({ title: "", image: "" });
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     if (token) {
// // //       setIsAuthenticated(true);
// // //     }
// // //     fetchProjects();
// // //   }, []);

// // //   const fetchProjects = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:3001/projects");
// // //       setProjects(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching projects:", error);
// // //     }
// // //   };

// // //   const handleLogin = (token) => {
// // //     setIsAuthenticated(true);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     setIsAuthenticated(false);
// // //   };

// // //   const handleInputChange = (e) => {
// // //     setNewProject({ ...newProject, [e.target.name]: e.target.value });
// // //   };

// // //   const handleAddProject = async () => {
// // //     if (newProject.title && newProject.image) {
// // //       try {
// // //         const response = await axios.post("http://localhost:3001/projects", newProject);
// // //         setProjects([...projects, response.data]);
// // //         setNewProject({ title: "", image: "" }); // Clear input fields
// // //       } catch (error) {
// // //         console.error("Error adding project:", error);
// // //       }
// // //     }
// // //   };

// // //   const handleDeleteProject = async (id) => {
// // //     try {
// // //       await axios.delete(`http://localhost:3001/projects/${id}`);
// // //       setProjects(projects.filter((project) => project.id !== id));
// // //     } catch (error) {
// // //       console.error("Error deleting project:", error);
// // //     }
// // //   };

// // //   if (!isAuthenticated) {
// // //     return <LoginPopup onLogin={handleLogin} />;
// // //   }

// // //   return (
// // //     <div className="container mt-4">
// // //       <button className="logout-btn" onClick={handleLogout}>
// // //         Logout
// // //       </button>
// // //       <h1 className="text-center">Admin Dashboard</h1>
// // //       <div>
// // //         <input
// // //           type="text"
// // //           name="title"
// // //           placeholder="Project Title"
// // //           value={newProject.title}
// // //           onChange={handleInputChange}
// // //           className="form-control mb-2"
// // //         />
// // //         <input
// // //           type="text"
// // //           name="image"
// // //           placeholder="Image URL"
// // //           value={newProject.image}
// // //           onChange={handleInputChange}
// // //           className="form-control mb-2"
// // //         />
// // //         <button onClick={handleAddProject} className="btn btn-primary">
// // //           Add Project
// // //         </button>
// // //       </div>
// // //       <ul className="list-group mt-3">
// // //         {projects.map((project) => (
// // //           <li key={project.id} className="list-group-item d-flex justify-content-between">
// // //             {project.title}
// // //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(project.id)}>
// // //               Delete
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import LoginPopup from "../components/LoginPopup"; 
// // import "./AdminDashboard.css"; 

// // const AdminDashboard = () => {
// //   const [projects, setProjects] = useState([]);
// //   const [newProject, setNewProject] = useState({ title: "", description: "", image: "" });
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       setIsAuthenticated(true);
// //     }
// //     fetchProjects();
// //   }, []);

// //   const fetchProjects = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3001/projects");
// //       setProjects(response.data);
// //     } catch (error) {
// //       console.error("Error fetching projects:", error);
// //     }
// //   };

// //   const handleLogin = (token) => {
// //     setIsAuthenticated(true);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     setIsAuthenticated(false);
// //   };

// //   const handleInputChange = (e) => {
// //     setNewProject({ ...newProject, [e.target.name]: e.target.value });
// //   };

// //   const handleAddProject = async () => {
// //     if (newProject.title && newProject.description && newProject.image) {
// //       try {
// //         const response = await axios.post("http://localhost:3001/projects", newProject);
// //         setProjects([...projects, response.data]);
// //         setNewProject({ title: "", description: "", image: "" }); // Clear input fields
// //       } catch (error) {
// //         console.error("Error adding project:", error);
// //       }
// //     }
// //   };

// //   const handleDeleteProject = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:3001/projects/${id}`);
// //       setProjects(projects.filter((project) => project.id !== id));
// //     } catch (error) {
// //       console.error("Error deleting project:", error);
// //     }
// //   };

// //   if (!isAuthenticated) {
// //     return <LoginPopup onLogin={handleLogin} />;
// //   }

// //   return (
// //     <div className="container mt-4">
// //       <button className="logout-btn" onClick={handleLogout}>
// //         Logout
// //       </button>
// //       <h1 className="text-center">Admin Dashboard</h1>
// //       <div>
// //         <input
// //           type="text"
// //           name="title"
// //           placeholder="Project Title"
// //           value={newProject.title}
// //           onChange={handleInputChange}
// //           className="form-control mb-2"
// //         />
// //         <input
// //           type="text"
// //           name="description"
// //           placeholder="Project Description"
// //           value={newProject.description}
// //           onChange={handleInputChange}
// //           className="form-control mb-2"
// //         />
// //         <input
// //           type="text"
// //           name="image"
// //           placeholder="Image URL"
// //           value={newProject.image}
// //           onChange={handleInputChange}
// //           className="form-control mb-2"
// //         />
// //         <button onClick={handleAddProject} className="btn btn-primary">
// //           Add Project
// //         </button>
// //       </div>
// //       <ul className="list-group mt-3">
// //         {projects.map((project) => (
// //           <li key={project.id} className="list-group-item d-flex justify-content-between">
// //             {project.title}
// //             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(project.id)}>
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
// import axios from "axios";
// import LoginPopup from "../components/LoginPopup";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [research, setResearch] = useState([]);
//   const [conferences, setConferences] = useState([]);
//   const [achievements, setAchievements] = useState([]);
//   const [teaching, setTeaching] = useState([]);
//   const [collaborations, setCollaborations] = useState([]);
//   const [blogs, setBlogs] = useState([]);
  
//   const [newEntry, setNewEntry] = useState({ title: "", description: "", image: "" });
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const responses = await Promise.all([
//         axios.get("http://localhost:3001/projects"),
//         axios.get("http://localhost:3001/research"),
//         axios.get("http://localhost:3001/conferences"),
//         axios.get("http://localhost:3001/achievements"),
//         axios.get("http://localhost:3001/teaching"),
//         axios.get("http://localhost:3001/collaborations"),
//         axios.get("http://localhost:3001/blogs"),
//       ]);
//       setProjects(responses[0].data);
//       setResearch(responses[1].data);
//       setConferences(responses[2].data);
//       setAchievements(responses[3].data);
//       setTeaching(responses[4].data);
//       setCollaborations(responses[5].data);
//       setBlogs(responses[6].data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleLogin = (token) => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   const handleInputChange = (e) => {
//     setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
//   };

//   const handleAddEntry = async (category) => {
//     if (newEntry.title && newEntry.description && newEntry.image) {
//       try {
//         const response = await axios.post(`http://localhost:3001/${category}`, newEntry);
//         switch (category) {
//           case "projects":
//             setProjects([...projects, response.data]);
//             break;
//           case "research":
//             setResearch([...research, response.data]);
//             break;
//           case "conferences":
//             setConferences([...conferences, response.data]);
//             break;
//           case "achievements":
//             setAchievements([...achievements, response.data]);
//             break;
//           case "teaching":
//             setTeaching([...teaching, response.data]);
//             break;
//           case "collaborations":
//             setCollaborations([...collaborations, response.data]);
//             break;
//           case "blogs":
//             setBlogs([...blogs, response.data]);
//             break;
//           default:
//             break;
//         }
//         setNewEntry({ title: "", description: "", image: "" });
//       } catch (error) {
//         console.error(`Error adding ${category}:`, error);
//       }
//     }
//   };

//   const handleDeleteEntry = async (category, id) => {
//     try {
//       await axios.delete(`http://localhost:3001/${category}/${id}`);
//       switch (category) {
//         case "projects":
//           setProjects(projects.filter((item) => item.id !== id));
//           break;
//         case "research":
//           setResearch(research.filter((item) => item.id !== id));
//           break;
//         case "conferences":
//           setConferences(conferences.filter((item) => item.id !== id));
//           break;
//         case "achievements":
//           setAchievements(achievements.filter((item) => item.id !== id));
//           break;
//         case "teaching":
//           setTeaching(teaching.filter((item) => item.id !== id));
//           break;
//         case "collaborations":
//           setCollaborations(collaborations.filter((item) => item.id !== id));
//           break;
//         case "blogs":
//           setBlogs(blogs.filter((item) => item.id !== id));
//           break;
//         default:
//           break;
//       }
//     } catch (error) {
//       console.error(`Error deleting ${category}:`, error);
//     }
//   };

//   if (!isAuthenticated) {
//     return <LoginPopup onLogin={handleLogin} />;
//   }

//   return (
//     <div className="container mt-4">
//       <button className="logout-btn" onClick={handleLogout}>
//         Logout
//       </button>
//       <h1 className="text-center">Admin Dashboard</h1>

//       {["projects", "research", "conferences", "achievements", "teaching", "collaborations", "blogs"].map((category) => (
//         <div key={category} className="mb-4">
//           <h3 className="mt-3 text-capitalize">{category}</h3>
//           <input
//             type="text"
//             name="title"
//             placeholder={`${category} Title`}
//             value={newEntry.title}
//             onChange={handleInputChange}
//             className="form-control mb-2"
//           />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={newEntry.description}
//             onChange={handleInputChange}
//             className="form-control mb-2"
//           />
//           <input
//             type="text"
//             name="image"
//             placeholder="Image URL"
//             value={newEntry.image}
//             onChange={handleInputChange}
//             className="form-control mb-2"
//           />
//           <button onClick={() => handleAddEntry(category)} className="btn btn-primary">
//             Add {category.charAt(0).toUpperCase() + category.slice(1)}
//           </button>

//           <ul className="list-group mt-3">
//             {eval(category).map((item) => (
//               <li key={item.id} className="list-group-item d-flex justify-content-between">
//                 {item.title}
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDeleteEntry(category, item.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPopup from "../components/LoginPopup";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const sections = [
    "projects",
    "researchPapers",
    "conferences",
    "achievements",
    "teachingExperience",
    "collaborations",
    "blog"
  ];

  const [data, setData] = useState({});
  const [newItem, setNewItem] = useState({ title: "", description: "", image: "" });
  const [selectedSection, setSelectedSection] = useState("projects");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedData = {};
      for (let section of sections) {
        const response = await axios.get(`http://localhost:3001/${section}`);
        fetchedData[section] = response.data;
      }
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = async () => {
    if (newItem.title && newItem.description && newItem.image) {
      try {
        const response = await axios.post(`http://localhost:3001/${selectedSection}`, newItem);
        setData({ ...data, [selectedSection]: [...data[selectedSection], response.data] });
        setNewItem({ title: "", description: "", image: "" });
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/${selectedSection}/${id}`);
      setData({ ...data, [selectedSection]: data[selectedSection].filter((item) => item.id !== id) });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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

      <div className="mb-3">
        <label>Select Section:</label>
        <select className="form-control" onChange={(e) => setSelectedSection(e.target.value)}>
          {sections.map((section) => (
            <option key={section} value={section}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newItem.title}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newItem.image}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
        <button onClick={handleAddItem} className="btn btn-primary">
          Add Item
        </button>
      </div>

      <ul className="list-group mt-3">
        {data[selectedSection]?.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
