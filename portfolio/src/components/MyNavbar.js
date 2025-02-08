import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        <Link to="/" style={styles.brandLink}>Professor Portfolio</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/research-papers" style={styles.link}>Research</Link></li>
        <li><Link to="/conferences" style={styles.link}>Conferences</Link></li>
        <li><Link to="/achievements" style={styles.link}>Achievements</Link></li>
        <li><Link to="/teaching-experience" style={styles.link}>Teaching</Link></li>
        <li><Link to="/collaborations" style={styles.link}>Collaborations</Link></li>
        <li><Link to="/blog" style={styles.link}>Blog</Link></li>
        <li><Link to="/admin" style={styles.link}>Admin</Link></li>
      </ul>
    </nav>
  );
};

// Styling for the navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#000", // Black background
    borderBottom: "2px solid white",
  },
  brand: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  brandLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    transition: "0.3s",
  },
};

// Hover effect for links
styles.link[':hover'] = {
  color: "#ccc", // Light gray on hover
};

export default MyNavbar;
