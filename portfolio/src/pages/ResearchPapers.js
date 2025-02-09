// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Card, Container, Row, Col } from "react-bootstrap";
// // // // // import axios from "axios";
// // // // // import "./ResearchPapers.css";

// // // // // const ResearchPapers = () => {
// // // // //   const [papers, setPapers] = useState([]);

// // // // //   useEffect(() => {
// // // // //     fetchPapers();
// // // // //   }, []);

// // // // //   const fetchPapers = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:3001/researchPapers");
// // // // //       setPapers(response.data);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching research papers:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Container className="mt-4">
// // // // //       <h1 className="text-center mb-4">Research Papers</h1>
// // // // //       <Row>
// // // // //         {papers.map((paper) => (
// // // // //           <Col key={paper.id} md={6} lg={4} className="mb-4">
// // // // //             <Card className="shadow">
// // // // //               <Card.Img variant="top" src={paper.image} style={{ objectFit: "cover", height: "200px", width: "100%" }} />
// // // // //               <Card.Body>
// // // // //                 <Card.Title>{paper.title}</Card.Title>
// // // // //                 <Card.Text>{paper.description}</Card.Text>
// // // // //               </Card.Body>
// // // // //             </Card>
// // // // //           </Col>
// // // // //         ))}
// // // // //       </Row>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default ResearchPapers;
// // // // import React, { useState, useEffect } from "react";
// // // // import { Card, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
// // // // import axios from "axios";
// // // // import "./ResearchPapers.css";

// // // // const ResearchPapers = () => {
// // // //   const [papers, setPapers] = useState([]);
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [category, setCategory] = useState("All");

// // // //   useEffect(() => {
// // // //     fetchPapers();
// // // //   }, []);

// // // //   const fetchPapers = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:3001/researchPapers");
// // // //       setPapers(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching research papers:", error);
// // // //     }
// // // //   };

// // // //   // **Filtering Logic**
// // // //   const filteredPapers = papers.filter((paper) => {
// // // //     return (
// // // //       (category === "All" || paper.category === category) &&
// // // //       paper.title.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     );
// // // //   });

// // // //   return (
// // // //     <Container className="mt-4">
// // // //       <h1 className="text-center mb-4">Research Papers</h1>

// // // //       {/* Search and Filter Controls */}
// // // //       <InputGroup className="mb-3">
// // // //         <Form.Control
// // // //           type="text"
// // // //           placeholder="Search research papers..."
// // // //           value={searchQuery}
// // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // //         />
// // // //         <Form.Select
// // // //           onChange={(e) => setCategory(e.target.value)}
// // // //           value={category}
// // // //         >
// // // //           <option value="All">All Categories</option>
// // // //           <option value="AI">Artificial Intelligence</option>
// // // //           <option value="Blockchain">Blockchain</option>
// // // //           <option value="Quantum">Quantum Computing</option>
// // // //           <option value="IoT">IoT & Smart Cities</option>
// // // //         </Form.Select>
// // // //       </InputGroup>

// // // //       {/* Displaying Research Papers */}
// // // //       <Row>
// // // //         {filteredPapers.map((paper) => (
// // // //           <Col key={paper.id} md={6} lg={4} className="mb-4">
// // // //             <Card className="shadow">
// // // //               <Card.Img
// // // //                 variant="top"
// // // //                 src={paper.image}
// // // //                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
// // // //               />
// // // //               <Card.Body>
// // // //                 <Card.Title>{paper.title}</Card.Title>
// // // //                 <Card.Text>{paper.description}</Card.Text>
// // // //                 <a href={paper.link} target="_blank" rel="noopener noreferrer">
// // // //                   Read More
// // // //                 </a>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           </Col>
// // // //         ))}
// // // //       </Row>

// // // //       {/* No results message */}
// // // //       {filteredPapers.length === 0 && (
// // // //         <p className="text-center mt-3">No research papers found.</p>
// // // //       )}
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default ResearchPapers;
// // // import React, { useState, useEffect } from "react";
// // // import { Card, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
// // // import axios from "axios";
// // // import "./ResearchPapers.css";

// // // const ResearchPapers = () => {
// // //   const [papers, setPapers] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [category, setCategory] = useState("All");

// // //   useEffect(() => {
// // //     fetchPapers();
// // //   }, []);

// // //   const fetchPapers = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:3001/researchPapers");
// // //       setPapers(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching research papers:", error);
// // //     }
// // //   };

// // //   // **Filtering Logic**
// // //   const filteredPapers = papers.filter((paper) => {
// // //     return (
// // //       (category === "All" || paper.category === category) &&
// // //       paper.title.toLowerCase().includes(searchQuery.toLowerCase())
// // //     );
// // //   });

// // //   return (
// // //     <Container className="mt-4">
// // //       <h1 className="text-center mb-4">Research Papers</h1>

// // //       {/* Search and Filter Controls */}
// // //       <InputGroup className="mb-3">
// // //         <Form.Control
// // //           type="text"
// // //           placeholder="Search research papers..."
// // //           value={searchQuery}
// // //           onChange={(e) => setSearchQuery(e.target.value)}
// // //         />
// // //         <Form.Select
// // //           onChange={(e) => setCategory(e.target.value)}
// // //           value={category}
// // //         >
// // //           <option value="All">All Categories</option>
// // //           <option value="AI">Artificial Intelligence</option>
// // //           <option value="Blockchain">Blockchain</option>
// // //           <option value="Quantum">Quantum Computing</option>
// // //           <option value="IoT">IoT & Smart Cities</option>
// // //         </Form.Select>
// // //       </InputGroup>

// // //       {/* Displaying Research Papers */}
// // //       <Row>
// // //         {filteredPapers.map((paper) => (
// // //           <Col key={paper.id} md={6} lg={4} className="mb-4">
// // //             <Card className="shadow">
// // //               <Card.Img
// // //                 variant="top"
// // //                 src={paper.image}
// // //                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
// // //               />
// // //               <Card.Body>
// // //                 <Card.Title>{paper.title}</Card.Title>
// // //                 <Card.Text>{paper.description}</Card.Text>
// // //                 <a href={paper.link} target="_blank" rel="noopener noreferrer">
// // //                   Read More
// // //                 </a>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         ))}
// // //       </Row>

// // //       {/* No results message */}
// // //       {filteredPapers.length === 0 && (
// // //         <p className="text-center mt-3">No research papers found.</p>
// // //       )}
// // //     </Container>
// // //   );
// // // };

// // // export default ResearchPapers;
// // import React, { useState, useEffect } from "react";
// // import { Card, Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
// // import axios from "axios";
// // import "./ResearchPapers.css";

// // const ResearchPapers = () => {
// //   const [papers, setPapers] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [category, setCategory] = useState("All");

// //   useEffect(() => {
// //     fetchPapers();
// //   }, []);

// //   const fetchPapers = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3001/researchPapers");
// //       setPapers(response.data);
// //     } catch (error) {
// //       console.error("Error fetching research papers:", error);
// //     }
// //   };

// //   // **Filtering Logic**
// //   const filteredPapers = papers.filter((paper) => {
// //     return (
// //       (category === "All" || paper.category === category) &&
// //       paper.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //   });

// //   return (
// //     <Container className="mt-4">
// //       <h1 className="text-center mb-4">Research Papers</h1>

// //       {/* Search and Filter Controls */}
// //       <InputGroup className="mb-3 mx-3">
// //         <Form.Control
// //           type="text"
// //           placeholder="Search research papers..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //         <Form.Select
// //           onChange={(e) => setCategory(e.target.value)}
// //           value={category}
// //         >
// //           <option value="All">All Categories</option>
// //           <option value="AI">Artificial Intelligence</option>
// //           <option value="Blockchain">Blockchain</option>
// //           <option value="Quantum">Quantum Computing</option>
// //           <option value="IoT">IoT & Smart Cities</option>
// //         </Form.Select>
// //       </InputGroup>

// //       {/* Displaying Research Papers */}
// //       <Row className="justify-content-center g-4">
// //         {filteredPapers.map((paper) => (
// //           <Col key={paper.id} md={6} lg={4} className="mb-4">
// //             <Card className="shadow">
// //               <Card.Img
// //                 variant="top"
// //                 src={paper.image}
// //                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
// //               />
// //               <Card.Body>
// //                 <Card.Title>{paper.title}</Card.Title>
// //                 <Card.Text>{paper.description}</Card.Text>
// //                 <Button
// //                   variant="primary"
// //                   href={paper.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Read More
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>

// //       {/* No results message */}
// //       {filteredPapers.length === 0 && (
// //         <p className="text-center mt-3">No research papers found.</p>
// //       )}
// //     </Container>
// //   );
// // };

// // export default ResearchPapers;
// import React, { useState, useEffect } from "react";
// import { Card, Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
// import axios from "axios";
// import "./ResearchPapers.css";

// const ResearchPapers = () => {
//   const [papers, setPapers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     fetchPapers();
//   }, []);

//   const fetchPapers = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/researchPapers");
//       setPapers(response.data);
//     } catch (error) {
//       console.error("Error fetching research papers:", error);
//     }
//   };

//   // **Filtering Logic**
//   const filteredPapers = papers.filter((paper) => {
//     return (
//       (category === "All" || paper.category === category) &&
//       paper.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Research Papers</h1>

//       {/* Search and Filter Controls */}
//       <InputGroup className="mb-3 mx-3">
//         <Form.Control
//           type="text"
//           placeholder="Search research papers..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <div className="mx-3">
//           <Form.Select
//             onChange={(e) => setCategory(e.target.value)}
//             value={category}
//           >
//             <option value="All">All Categories</option>
//             <option value="AI">Artificial Intelligence</option>
//             <option value="Blockchain">Blockchain</option>
//             <option value="Quantum">Quantum Computing</option>
//             <option value="IoT">IoT & Smart Cities</option>
//           </Form.Select>
//         </div>
//       </InputGroup>

//       {/* Displaying Research Papers */}
//       <Row className="justify-content-center g-4">
//         {filteredPapers.map((paper) => (
//           <Col key={paper.id} md={6} lg={4} className="mb-4">
//             <Card className="shadow">
//               <Card.Img
//                 variant="top"
//                 src={paper.image}
//                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
//               />
//               <Card.Body>
//                 <Card.Title>{paper.title}</Card.Title>
//                 <Card.Text>{paper.description}</Card.Text>
//                 <Button
//                   variant="primary"
//                   href={paper.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Read More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* No results message */}
//       {filteredPapers.length === 0 && (
//         <p className="text-center mt-3">No research papers found.</p>
//       )}
//     </Container>
//   );
// };

// export default ResearchPapers;
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import "./ResearchPapers.css";

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

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

  // **Filtering Logic**
  const filteredPapers = papers.filter((paper) => {
    return (
      (category === "All" || paper.category === category) &&
      paper.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Research Papers</h1>

      {/* Search and Filter Controls */}
      <Row className="mb-3 mx-3">
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <Form.Control
            type="text"
            placeholder="Search research papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="All">All Categories</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Quantum">Quantum Computing</option>
            <option value="IoT">IoT & Smart Cities</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Displaying Research Papers */}
      <Row className="justify-content-center g-4">
        {filteredPapers.map((paper) => (
          <Col key={paper.id} md={6} lg={4} className="mb-4">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src={paper.image}
                style={{ objectFit: "cover", height: "200px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>{paper.title}</Card.Title>
                <Card.Text>{paper.description}</Card.Text>
                <Button
                  variant="primary"
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* No results message */}
      {filteredPapers.length === 0 && (
        <p className="text-center mt-3">No research papers found.</p>
      )}
    </Container>
  );
};

export default ResearchPapers;
