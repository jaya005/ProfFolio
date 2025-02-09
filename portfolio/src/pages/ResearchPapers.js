import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./ResearchPapers.css";

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/researchPapers");
      setPapers(response.data);
    } catch (error) {
      console.error("Error fetching research papers:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Research Papers</h1>
      <Row>
        {papers.map((paper) => (
          <Col key={paper.id} md={6} lg={4} className="mb-4">
            <Card className="shadow">
              <Card.Img variant="top" src={paper.image} style={{ objectFit: "cover", height: "200px", width: "100%" }} />
              <Card.Body>
                <Card.Title>{paper.title}</Card.Title>
                <Card.Text>{paper.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResearchPapers;
