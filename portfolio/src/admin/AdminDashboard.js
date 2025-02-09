import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPopup from "../components/LoginPopup";
import "./AdminDashboard.css";

const sections = [
  "projects",
  "researchPapers",
  "conferences",
  "achievements",
  "teachingExperience",
  "collaborations",
  "blog",
];

const AdminDashboard = () => {
  const [data, setData] = useState({});
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    name: "",
    institution: "",
    researchTopic: "",
    date: "",
    location: "",
    summary: "",
  });
  const [selectedSection, setSelectedSection] = useState("projects");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imageFile, setImageFile] = useState(null); // State to store the uploaded image file

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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Convert Image File to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result }); // Store Base64 Image
      };
    }
  };

  const handleAddItem = async () => {
    let requestData = { ...newItem };

    try {
      const response = await axios.post(`http://localhost:3001/${selectedSection}`, requestData);
      setData({ ...data, [selectedSection]: [...(data[selectedSection] || []), response.data] });

      setNewItem({
        title: "",
        description: "",
        image: "",
        category: "",
        name: "",
        institution: "",
        researchTopic: "",
        date: "",
        location: "",
        summary: "",
      });
      setImageFile(null); // Reset file input
    } catch (error) {
      console.error("Error adding item:", error);
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
      <button className="logout-btn btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
      <h1 className="text-center">Admin Dashboard</h1>

      {/* Section Selection Dropdown */}
      <div className="mb-3">
        <label className="fw-bold">Select Section:</label>
        <select className="form-control" onChange={(e) => setSelectedSection(e.target.value)} value={selectedSection}>
          {sections.map((section) => (
            <option key={section} value={section}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Input Fields */}
      <div>
      {selectedSection === "projects" && (
          <>
            <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="institution" placeholder="Institution Name" value={newItem.institution} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="researchTopic" placeholder="Research Topic" value={newItem.researchTopic} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}
        {selectedSection === "collaborations" && (
          <>
            <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="institution" placeholder="Institution Name" value={newItem.institution} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="researchTopic" placeholder="Research Topic" value={newItem.researchTopic} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}
        {selectedSection === "blog" && (
          <>
            <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="date" placeholder="Date" value={newItem.date} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="summary" placeholder="Summary" value={newItem.summary} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}
        {selectedSection === "researchPapers" && (
          <>
            <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="category" placeholder="Category" value={newItem.category} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}
        {selectedSection === "conferences" && (
          <>
            <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="date" placeholder="Date" value={newItem.date} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="location" placeholder="Location" value={newItem.location} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}
        {selectedSection === "teachingExperience" && (
          <>
            <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="institution" placeholder="Institution Name" value={newItem.institution} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="researchTopic" placeholder="Research Topic" value={newItem.researchTopic} onChange={handleInputChange} className="form-control mb-2" />
          </>
        )}

        {/* Image Upload Input */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mb-2" />
        {imageFile && <p className="text-success">Image uploaded: {imageFile.name}</p>}

        <button onClick={handleAddItem} className="btn btn-primary">Add Item</button>
      </div>

      {/* Display Existing Items */}
      <ul className="list-group mt-3">
        {data[selectedSection]?.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.title || item.name}</strong>
              <p className="mb-1">{item.description || item.researchTopic}</p>
              {item.image && <img src={item.image} alt="Uploaded" style={{ width: "100px", height: "auto" }} />}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
