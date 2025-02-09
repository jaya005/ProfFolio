// // // // // // // import React from 'react'

// // // // // // // const Projects = () => {
// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       My Projects
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default Projects
// // // // // // import React from "react";
// // // // // // import { Card, Container, Row, Col } from "react-bootstrap";

// // // // // // const projects = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     title: "AI in Healthcare",
// // // // // //     description: "Using artificial intelligence to predict diseases.",
// // // // // //     image: "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/6-image-guided-therapy.jpg",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     title: "Blockchain Security",
// // // // // //     description: "Securing online transactions with blockchain.",
// // // // // //     image: "https://tse2.mm.bing.net/th?id=OIP.p37unYT9jPTeha4mCyLBogHaFj&pid=Api&P=0&h=180",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     title: "E-Learning Platform",
// // // // // //     description: "An interactive platform for online education.",
// // // // // //     image: "https://tse4.mm.bing.net/th?id=OIP.saZXgHRFmN3posXkSIhQyAHaFc&pid=Api&P=0&h=180",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     title: "Smart Traffic System",
// // // // // //     description: "A traffic management system using IoT.",
// // // // // //     image: "https://tse4.mm.bing.net/th?id=OIP.YnaZUGf7cgfw9-fvxt3SlQHaE8&pid=Api&P=0&h=180",
// // // // // //   },
// // // // // // ];

// // // // // // const Projects = () => {
// // // // // //   return (
// // // // // //     <Container className="mt-4">
// // // // // //       <h1 className="text-center mb-4">Projects</h1>
// // // // // //       <Row>
// // // // // //         {projects.map((project) => (
// // // // // //           <Col key={project.id} md={6} lg={4} className="mb-4">
// // // // // //             <Card className="shadow">
// // // // // //               <Card.Img variant="top" src={project.image} />
// // // // // //               <Card.Body>
// // // // // //                 <Card.Title>{project.title}</Card.Title>
// // // // // //                 <Card.Text>{project.description}</Card.Text>
// // // // // //               </Card.Body>
// // // // // //             </Card>
// // // // // //           </Col>
// // // // // //         ))}
// // // // // //       </Row>
// // // // // //     </Container>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // import React from "react";
// // // // // import { Card, Container, Row, Col } from "react-bootstrap";
// // // // // import "./Projects.css"; // Import CSS for additional styling

// // // // const projects = [
// // // //   {
// // // //     id: 1,
// // // //     title: "AI in Healthcare",
// // // //     description: "Using artificial intelligence to predict diseases.",
// // // //     image: "https://www.philips.com/c-dam/corporate/newscenter/global/standard/resources/healthcare/2022/ai-in-healthcare-realwordl-examples/6-image-guided-therapy.jpg",
// // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: "Blockchain Security",
// // // // //     description: "Securing online transactions with blockchain.",
// // // // //     image: "https://tse2.mm.bing.net/th?id=OIP.p37unYT9jPTeha4mCyLBogHaFj&pid=Api&P=0&h=180",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     title: "E-Learning Platform",
// // // // //     description: "An interactive platform for online education.",
// // // // //     image: "https://tse4.mm.bing.net/th?id=OIP.saZXgHRFmN3posXkSIhQyAHaFc&pid=Api&P=0&h=180",
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     title: "Smart Traffic System",
// // // // //     description: "A traffic management system using IoT.",
// // // // //     image: "https://tse4.mm.bing.net/th?id=OIP.YnaZUGf7cgfw9-fvxt3SlQHaE8&pid=Api&P=0&h=180",
// // // // //   },
// // // // // ];

// // // // // const Projects = () => {
// // // // //   return (
// // // // //     <Container className="mt-4">
// // // // //       <h1 className="text-center mb-4">Projects</h1>
// // // // //       <Row>
// // // // //         {projects.map((project) => (
// // // // //           <Col key={project.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
// // // // //             <Card className="project-card shadow">
// // // // //               <Card.Img variant="top" src={project.image} className="project-image" />
// // // // //               <Card.Body className="d-flex flex-column">
// // // // //                 <Card.Title className="text-center">{project.title}</Card.Title>
// // // // //                 <Card.Text className="flex-grow-1 text-center">{project.description}</Card.Text>
// // // // //               </Card.Body>
// // // // //             </Card>
// // // // //           </Col>
// // // // //         ))}
// // // // //       </Row>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default Projects;
// // // // import React, { useState, useEffect } from "react";
// // // // import { Card, Container, Row, Col } from "react-bootstrap";
// // // // import axios from "axios";
// // // // import "./Projects.css";

// // // // const Projects = () => {
// // // //   const [projects, setProjects] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchProjects();
// // // //   }, []);

// // // //   const fetchProjects = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:3001/projects");
// // // //       setProjects(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching projects:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container className="mt-4">
// // // //       <h1 className="text-center mb-4">Projects</h1>
// // // //       <Row>
// // // //         {projects.map((project) => (
// // // //           <Col key={project.id} md={6} lg={4} className="mb-4">
// // // //             <Card className="shadow project-card">
// // // //               <Card.Body>
// // // //                 <Card.Title>{project.title}</Card.Title>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           </Col>
// // // //         ))}
// // // //       </Row>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import React, { useState, useEffect } from "react";
// // // import { Card, Container, Row, Col } from "react-bootstrap";
// // // import axios from "axios";
// // // import "./Projects.css";

// // // const Projects = () => {
// // //   const [projects, setProjects] = useState([]);

// // //   useEffect(() => {
// // //     fetchProjects();
// // //   }, []);

// // //   const fetchProjects = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:3001/projects");
// // //       setProjects(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching projects:", error);
// // //     }
// // //   };

// // //   return (
// // //     <Container className="mt-4">
// // //       <h1 className="text-center mb-4">Projects</h1>
// // //       <Row>
// // //         {projects.map((project) => (
// // //           <Col key={project.id} md={6} lg={4} className="mb-4">
// // //             <Card className="shadow project-card">
// // //               <Card.Img variant="top" src={project.image} style={{ objectFit: "cover", height: "200px" }} />
// // //               <Card.Body>
// // //                 <Card.Title>{project.title}</Card.Title>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         ))}
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default Projects;
// // import React, { useState, useEffect } from "react";
// // import { Card, Container, Row, Col } from "react-bootstrap";
// // import axios from "axios";
// // import "./Projects.css";

// // const Projects = () => {
// //   const [projects, setProjects] = useState([]);

// //   useEffect(() => {
// //     fetchProjects();
// //   }, []);

// //   const fetchProjects = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:3001/projects");
// //       setProjects(response.data); // Store projects from database
// //     } catch (error) {
// //       console.error("Error fetching projects:", error);
// //     }
// //   };

// //   return (
// //     <Container className="mt-4">
// //       <h1 className="text-center mb-4">Projects</h1>
// //       <Row className="justify-content-center g-4">
// //         {projects.map((project) => (
// //           <Col key={project.id} md={6} lg={4} className="mb-4">
// //             <Card className="shadow project-card">
// //               <Card.Img
// //                 variant="top"
// //                 src={project.image}
// //                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
// //               />
// //               <Card.Body>
// //                 <Card.Title>{project.title}</Card.Title>
// //                 <Card.Text>{project.description}</Card.Text>
// //                 <div className=" btn btn-primary">Read More</div>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Projects;
// import React, { useState, useEffect } from "react";
// import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
// import axios from "axios";
// import "./Projects.css";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term
//   const [filterCriteria, setFilterCriteria] = useState(""); // State for filter criteria

//   // Fetch projects data from API or local JSON file
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/projects");
//       setProjects(response.data); // Store projects from database
//       setFilteredProjects(response.data); // Initialize filtered projects
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   };

//   // Handle search input change
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Filter projects by title or description
//     const filtered = projects.filter((project) =>
//       project.title.toLowerCase().includes(value.toLowerCase()) ||
//       project.description.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredProjects(filtered);
//   };

//   // Handle filter selection change
//   const handleFilterChange = (e) => {
//     const value = e.target.value;
//     setFilterCriteria(value);

//     // If a filter is selected, filter projects by category
//     const filtered = value
//       ? projects.filter((project) => project.category === value)
//       : projects; // No filter, show all projects

//     // Apply search on filtered projects
//     const searchFiltered = filtered.filter((project) =>
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredProjects(searchFiltered);
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Projects</h1>

//       {/* Search and Filter Section */}
//       <Row className="mb-4">
//         <Col xs={12} md={6} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Search Projects"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </Col>
//         <Col xs={12} md={6}>
//           <Form.Select
//             value={filterCriteria}
//             onChange={handleFilterChange}
//             aria-label="Filter Projects"
//           >
//             <option value="">Select Category</option>
//             <option value="AI">AI</option>
//             <option value="Blockchain">Blockchain</option>
//             <option value="IoT">IoT</option>
//             <option value="Quantum">Quantum</option>
//             <option value="Cybersecurity">Cybersecurity</option>
//             <option value="Drones">Drones</option>
//             {/* Add more filter options as needed */}
//           </Form.Select>
//         </Col>
//       </Row>

//       {/* Projects List */}
//       <Row className="justify-content-center g-4">
//         {filteredProjects.map((project) => (
//           <Col key={project.id} md={6} lg={4} className="mb-4">
//             <Card className="shadow project-card">
//               <Card.Img
//                 variant="top"
//                 src={project.image}
//                 style={{ objectFit: "cover", height: "200px", width: "100%" }}
//               />
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Button variant="primary">Read More</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filterCriteria, setFilterCriteria] = useState(""); // State for filter criteria (selected category)

  // Fetch projects data from API or local JSON file
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3001/projects");
      setProjects(response.data); // Store projects from database
      setFilteredProjects(response.data); // Initialize filtered projects
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Apply filter based on search term and selected category
    applyFilters(value, filterCriteria);
  };

  // Handle filter selection change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterCriteria(value);

    // Apply filter based on selected category and search term
    applyFilters(searchTerm, value);
  };

  // Apply search and filter criteria to filter the projects
  const applyFilters = (search, category) => {
    let filtered = projects;

    // If a category filter is selected, filter projects by title or description containing the category
    if (category) {
      filtered = filtered.filter((project) => {
        return (
          project.title.toLowerCase().includes(category.toLowerCase()) ||
          project.description.toLowerCase().includes(category.toLowerCase())
        );
      });
    }

    // Filter by search term in title or description
    if (search) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Update the filtered projects
    setFilteredProjects(filtered);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Projects</h1>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Select
            value={filterCriteria}
            onChange={handleFilterChange}
            aria-label="Filter Projects"
          >
            <option value="">Select Category</option>
            <option value="AI">AI</option>
            <option value="Blockchain">Blockchain</option>
            <option value="IoT">IoT</option>
            <option value="Quantum">Quantum</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Drones">Drones</option>
            {/* Add more filter options as needed */}
          </Form.Select>
        </Col>
      </Row>

      {/* Projects List */}
      <Row className="justify-content-center g-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Col key={project.id} md={6} lg={4} className="mb-4">
              <Card className="shadow project-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No projects found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
