import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch achievements data from db.json
  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await axios.get("http://localhost:3001/achievements");
      setAchievements(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching achievements:", error);
      setError("Failed to load achievements data.");
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Achievements</h1>

      {loading && <p className="text-center">Loading achievements...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row justify-content-center g-4">
        {achievements.map((achievement) => (
          <div className="col-sm-6 col-md-4 d-flex" key={achievement.id}>
            <div className="card shadow-sm w-100 h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{achievement.title}</h5>
                <p className="card-text flex-grow-1">{achievement.description}</p>
                <button className="btn btn-primary mt-auto">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
