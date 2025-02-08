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

  const testimonials = [
    { name: "Amit Sharma", text: "Professor Jaya's DSA course was life-changing! The concepts were explained clearly with real-world examples." },
    { name: "Sneha Verma", text: "The Machine Learning course provided great hands-on projects. The best teaching style I've experienced!" },
    { name: "Ravi Kumar", text: "Blockchain Security was my favorite! The professor made complex concepts very easy to understand." },
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

      {/* Student Testimonials */}
      <h2 className="mt-5 mb-4">💬 Student Testimonials</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="text-center p-4 border rounded shadow-sm">
                <p className="lead">"{testimonial.text}"</p>
                <h5 className="fw-bold">- {testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Teaching Resources */}
      <h2 className="mt-5 mb-4">📄 Teaching Resources</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span>📌 DSA Lecture Notes (PDF)</span> <button className="btn btn-success">Download</button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>📌 ML Course Assignments (ZIP)</span> <button className="btn btn-success">Download</button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>📌 Blockchain Security Research Papers (PDF)</span> <button className="btn btn-success">Download</button>
        </li>
      </ul>

      {/* Contact for Mentorship */}
      <h2 className="mt-5 mb-4">📩 Contact for Mentorship</h2>
      <form className="mb-5">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="How can I help you?"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default TeachingExperience;
