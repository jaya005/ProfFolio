// import React from 'react'

// const Collaborations = () => {
//   return (
//     <div>
//       collaborations
//     </div>
//   )
// }

// export default Collaborations
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Collaborations.css"; // Import CSS for styling

const collaborations = [
  {
    id: 1,
    name: "Dr. John Doe",
    institution: "Harvard University",
    researchTopic: "Artificial Intelligence in Healthcare",
    image: "https://tse4.mm.bing.net/th?id=OIP.UkqQvxkrUmcgcD21cGeEFwHaFV&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Prof. Alice Smith",
    institution: "Stanford University",
    researchTopic: "Blockchain for Secure Data Transactions",
    image: "https://tse4.mm.bing.net/th?id=OIP._bfM2X0gndr4NEFqq6PekQAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Dr. Robert Brown",
    institution: "MIT",
    researchTopic: "Smart Cities and IoT Innovations",
    image: "https://tse3.mm.bing.net/th?id=OIP.S3aaOtsnirZNzHxl6ESxSAHaGa&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Prof. Emily White",
    institution: "Oxford University",
    researchTopic: "Big Data in Scientific Research",
    image: "https://tse4.mm.bing.net/th?id=OIP.ohExUP9Dwf9KVQJvaN4aXgHaEJ&pid=Api&P=0&h=180",
  },
];

const Collaborations = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Collaborations</h1>
      <Row>
        {collaborations.map((collab) => (
          <Col key={collab.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="collab-card shadow">
              <Card.Img variant="top" src={collab.image} className="collab-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{collab.name}</Card.Title>
                <Card.Text className="text-muted text-center">{collab.institution}</Card.Text>
                <Card.Text className="flex-grow-1 text-center">{collab.researchTopic}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collaborations;
