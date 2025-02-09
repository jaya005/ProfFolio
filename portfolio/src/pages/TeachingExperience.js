// import React from 'react'

// const TeachingExperience = () => {
//   return (
//     <div>
//       i teach
//     </div>
//   )
// }

// export default TeachingExperience
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TeachingExperience = () => {
  const courses = [
    { name: "Data Structures & Algorithms", description: "Understanding fundamental data structures and algorithms with real-world applications." },
    { name: "Machine Learning", description: "Exploring supervised and unsupervised learning techniques with hands-on projects." },
    { name: "Blockchain Security", description: "Analyzing cryptographic protocols and security risks in blockchain technology." },
    { name: "Web Development", description: "Building full-stack web applications with React.js and Node.js." },
    { name: "Artificial Intelligence", description: "Understanding neural networks, deep learning, and AI-driven applications." },
    { name: "Cloud Computing", description: "Learning cloud services, deployment strategies, and security best practices." },
  ];
  const teachingTimeline = [
    { year: "2024 – Present", position: "Associate Professor, NIT Jamshedpur" },
    { year: "2021 – 2024", position: "Assistant Professor, IIT Delhi" },
    { year: "2018 – 2021", position: "Teaching Assistant, IISc Bangalore" },
  ];

  return (
    <div className="container mt-5">
      {/* Introduction Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Teaching Experience</h1>
        <p className="lead">
          "Teaching is not just about sharing knowledge; it's about inspiring minds and shaping the future."
        </p>
      </div>

      {/* Courses Taught */}
      <h2 className="mb-4">📚 Courses Taught</h2>
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4 d-flex" key={index}>
            <div className="card shadow-sm w-100 h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text flex-grow-1">{course.description}</p>
                <button className="btn btn-primary mt-auto">View Syllabus</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teaching Timeline */}
      <h2 className="mt-5 mb-4">🕰️ Teaching Timeline</h2>
      <ul className="list-group">
        {teachingTimeline.map((entry, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <strong>{entry.year}</strong> <span>{entry.position}</span>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default TeachingExperience;
