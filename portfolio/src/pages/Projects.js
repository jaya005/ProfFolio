// // import React from 'react'

// // const Projects = () => {
// //   return (
// //     <div>
// //       My Projects
// //     </div>
// //   )
// // }

// // export default Projects
// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";

// const projects = [
//   {
//     id: 1,
//     title: "AI in Healthcare",
//     description: "Using artificial intelligence to predict diseases.",
//     image: "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/6-image-guided-therapy.jpg",
//   },
//   {
//     id: 2,
//     title: "Blockchain Security",
//     description: "Securing online transactions with blockchain.",
//     image: "https://tse2.mm.bing.net/th?id=OIP.p37unYT9jPTeha4mCyLBogHaFj&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     title: "E-Learning Platform",
//     description: "An interactive platform for online education.",
//     image: "https://tse4.mm.bing.net/th?id=OIP.saZXgHRFmN3posXkSIhQyAHaFc&pid=Api&P=0&h=180",
//   },
//   {
//     id: 4,
//     title: "Smart Traffic System",
//     description: "A traffic management system using IoT.",
//     image: "https://tse4.mm.bing.net/th?id=OIP.YnaZUGf7cgfw9-fvxt3SlQHaE8&pid=Api&P=0&h=180",
//   },
// ];

// const Projects = () => {
//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Projects</h1>
//       <Row>
//         {projects.map((project) => (
//           <Col key={project.id} md={6} lg={4} className="mb-4">
//             <Card className="shadow">
//               <Card.Img variant="top" src={project.image} />
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Projects;
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Projects.css"; // Import CSS for additional styling

const projects = [
  {
    id: 1,
    title: "AI in Healthcare",
    description: "Using artificial intelligence to predict diseases.",
    image: "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/6-image-guided-therapy.jpg",
  },
  {
    id: 2,
    title: "Blockchain Security",
    description: "Securing online transactions with blockchain.",
    image: "https://tse2.mm.bing.net/th?id=OIP.p37unYT9jPTeha4mCyLBogHaFj&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "An interactive platform for online education.",
    image: "https://tse4.mm.bing.net/th?id=OIP.saZXgHRFmN3posXkSIhQyAHaFc&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Smart Traffic System",
    description: "A traffic management system using IoT.",
    image: "https://tse4.mm.bing.net/th?id=OIP.YnaZUGf7cgfw9-fvxt3SlQHaE8&pid=Api&P=0&h=180",
  },
];

const Projects = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="project-card shadow">
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{project.title}</Card.Title>
                <Card.Text className="flex-grow-1 text-center">{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
