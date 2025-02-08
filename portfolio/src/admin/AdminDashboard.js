import React, { useState } from "react";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const handleAddProject = () => {
    if (newProject) {
      setProjects([...projects, newProject]);
      setNewProject("");
    }
  };

  const handleDeleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>
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
