import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // For social media icons
import "./Home.css"; // Custom CSS file for additional styling

const Home = () => {
  return (
    <div className="home-container">
      <Container className="mt-5">
        {/* Main Header Section */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-4 text mb-4 fade-in">
              Welcome to My Portfolio
            </h1>
            <p className="lead text-muted mb-4">
              Explore the academic and professional journey of Professor HC Verma,
              a dedicated educator, researcher, and innovator.
            </p>
          </Col>
        </Row>

        {/* About the Professor Section */}
        <Row id="about" className="mt-5">
          <Col md={6} className="text-center">
            <h2 className="text-secondary mb-4">About Professor HC Verma</h2>
            <p className="lead text-muted">
              Professor HC Verma is a passionate academic with over 16 years of
              experience in Physics. Dedicated to fostering a learning
              environment that encourages creativity and critical thinking, 
              Professor HC Verma has made significant contributions to his specific research, teaching areas.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src="https://www.iitk.ac.in/new/images/events/Prof-H-C-Verma.jpeg"
              alt="HC Verma"
              className=" proff img-fluid rounded-circle shadow-lg"
            />
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row className="text-center mt-5">
          <Col>
            <h3 className="text-secondary">Connect with Professor HC Verma</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="mailto:professor@example.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer mt-5">
        <Container className="text-center">
          <p className="text-muted">© 2025 Professor HC Verma. All Rights Reserved.</p>
          <p className="text-muted">Designed with passion and dedication.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
