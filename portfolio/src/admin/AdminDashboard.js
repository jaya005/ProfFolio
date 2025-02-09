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
