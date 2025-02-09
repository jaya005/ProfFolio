// // import React from 'react'

// // const Collaborations = () => {
// //   return (
// //     <div>
// //       collaborations
// //     </div>
// //   )
// // }

// // export default Collaborations
// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import "./Collaborations.css"; // Import CSS for styling

// const collaborations = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     institution: "Harvard University",
//     researchTopic: "Artificial Intelligence in Healthcare",
//     image: "https://tse4.mm.bing.net/th?id=OIP.UkqQvxkrUmcgcD21cGeEFwHaFV&pid=Api&P=0&h=180",
//   },
//   {
//     id: 2,
//     name: "Prof. Alice Smith",
//     institution: "Stanford University",
//     researchTopic: "Blockchain for Secure Data Transactions",
//     image: "https://tse4.mm.bing.net/th?id=OIP._bfM2X0gndr4NEFqq6PekQAAAA&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     name: "Dr. Robert Brown",
//     institution: "MIT",
//     researchTopic: "Smart Cities and IoT Innovations",
//     image: "https://tse3.mm.bing.net/th?id=OIP.S3aaOtsnirZNzHxl6ESxSAHaGa&pid=Api&P=0&h=180",
//   },
//   {
//     id: 4,
//     name: "Prof. Emily White",
//     institution: "Oxford University",
//     researchTopic: "Big Data in Scientific Research",
//     image: "https://tse4.mm.bing.net/th?id=OIP.ohExUP9Dwf9KVQJvaN4aXgHaEJ&pid=Api&P=0&h=180",
//   },
// ];

// const Collaborations = () => {
//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Collaborations</h1>
//       <Row>
//         {collaborations.map((collab) => (
//           <Col key={collab.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//             <Card className="collab-card shadow">
//               <Card.Img variant="top" src={collab.image} className="collab-image" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{collab.name}</Card.Title>
//                 <Card.Text className="text-muted text-center">{collab.institution}</Card.Text>
//                 <Card.Text className="flex-grow-1 text-center">{collab.researchTopic}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Collaborations;
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Collaborations.css";

const Collaborations = () => {
  const [collaborations, setCollaborations] = useState([]);
  const [selectedCollab, setSelectedCollab] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCollaborations();
  }, []);

  const fetchCollaborations = async () => {
    try {
      const response = await axios.get("http://localhost:3001/collaborations");
      setCollaborations(response.data);
    } catch (error) {
      console.error("Error fetching collaborations:", error);
    }
  };

  const handleShowMore = (collab) => {
    setSelectedCollab(collab);
    setShowModal(true);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Collaborations</h1>
      <Row>
        {collaborations.map((collab) => (
          <Col key={collab.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="collab-card shadow">
              <Card.Img variant="top" src={collab.image} className="collab-image" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{collab.name}</Card.Title>
                <Card.Text className="text-muted text-center">{collab.institution}</Card.Text>
                <Card.Text className="flex-grow-1 text-center">{collab.researchTopic}</Card.Text>
                <Button variant="primary" className="mt-2" onClick={() => handleShowMore(collab)}>View More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Viewing Full Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedCollab && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCollab.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={selectedCollab.image} alt={selectedCollab.name} className="img-fluid mb-3" />
              <h5>{selectedCollab.institution}</h5>
              <p>IoT  can  be defined  as  a system  of  physically embodied  objects  that  is  endowed  with  a  combination  of sensors  and  software  and  other  technologies  to  allow  the connection of the  different  systems and devices through the internet[1]. Beginning from a simple device such as a PDA to the  elaborate  device  involved  in  the  production  of  other products, these are    devices.  Comparatively,  it  is much  more  significant across different  segments like;  health, production  lines/industries, transport, farming, and smart urban settlements. In  healthcare,  IoT  is applied  in  remote  patient  monitoring, which allows health practice to step in when required instead of  patients’  constant  visits  to  the  hospital[2].  In manufacturing  the  Internet  of  Things  is  defined  as  smart manufacturing  where  devices  and  equipment  in  the production line are connected  allow  for enhancement of the production processes as well as to show signs of the needed repair[3].  IoT  aims  to  provide  considerable  support  in  the transportation area due to smart cars, traffic controls, and the effective usage of the available resources. The perception was made  by  analyzing  the  connectivity business  sectors  which include  the  agricultural  sector where  the Internet  of  things aids in determining the balance between the resource used in farming and the required productivity. IoT in smart city: used in relation to efficient resource management, enhancement of public  services  and  in  general,  the  public’s  well  being[4]. Internet of  Things  is rapidly  expanding  and it  is  forecasted that by 2025 this may go further than 75 billion of  devices.</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Collaborations;
