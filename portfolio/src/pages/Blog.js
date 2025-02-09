// // // // import React from 'react'

// // // // const Blog = () => {
// // // //   return (
// // // //     <div>
// // // //       Blogs
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Blog
// // // import React from "react";
// // // import { Card, Container, Row, Col, Button } from "react-bootstrap";
// // // import { Link } from "react-router-dom";
// // // import "./Blog.css"; // Import CSS for styling

// // // const blogs = [
// // //   {
// // //     id: 1,
// // //     title: "The Role of AI in Modern Education",
// // //     date: "March 5, 2024",
// // //     summary: "Artificial Intelligence is revolutionizing education by providing personalized learning experiences and automation.",
// // //     image: "https://www.acadecraft.com/blog/uploads/blog/2023/04/role-of-ai-in-educationwebp.webp",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Blockchain Technology in Research Paper Authorship",
// // //     date: "April 10, 2024",
// // //     summary: "Blockchain ensures the security and authenticity of research papers in academic publishing.",
// // //     image: "https://source.unsplash.com/300x180/?blockchain,security",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "The Future of Smart Cities with IoT",
// // //     date: "May 20, 2024",
// // //     summary: "How IoT is transforming cities into efficient and sustainable smart environments.",
// // //     image: "https://source.unsplash.com/300x180/?smartcity,IoT",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Big Data in Scientific Research",
// // //     date: "June 15, 2024",
// // //     summary: "Big data analytics is reshaping the way researchers analyze complex datasets.",
// // //     image: "https://source.unsplash.com/300x180/?bigdata,science",
// // //   },
// // // ];

// // // const Blog = () => {
// // //   return (
// // //     <Container className="mt-4">
// // //       <h1 className="text-center mb-4">Professor's Blog</h1>
// // //       <Row>
// // //         {blogs.map((blog) => (
// // //           <Col key={blog.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
// // //             <Card className="blog-card shadow">
// // //               <Card.Img variant="top" src={blog.image} className="blog-image" />
// // //               <Card.Body className="d-flex flex-column">
// // //                 <Card.Title className="text-center">{blog.title}</Card.Title>
// // //                 <Card.Text className="text-muted text-center">{blog.date}</Card.Text>
// // //                 <Card.Text className="flex-grow-1 text-center">{blog.summary}</Card.Text>
// // //                 <Link to={`/blog/${blog.id}`}>
// // //                   <Button variant="primary" className="w-100">Read More</Button>
// // //                 </Link>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         ))}
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default Blog;
// // import React from "react";
// // import { Card, Container, Row, Col, Button } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import "./Blog.css"; // Import CSS for styling

// // const blogs = [
// //   {
// //     id: 1,
// //     title: "The Role of AI in Modern Education",
// //     date: "March 5, 2024",
// //     summary: "Artificial Intelligence is revolutionizing education by providing personalized learning experiences and automation.",
// //     image: "https://tse3.mm.bing.net/th?id=OIP.eQS1dMEVjIcktek0WF_xAQHaDt&pid=Api&P=0&h=180",
// //   },
// //   {
// //     id: 2,
// //     title: "Blockchain Technology in Research Paper Authorship",
// //     date: "April 10, 2024",
// //     summary: "Blockchain ensures the security and authenticity of research papers in academic publishing.",
// //     image: "https://tse1.mm.bing.net/th?id=OIP.9itppJwbLRY7TTkdWFgeUwHaE9&pid=Api&P=0&h=180",
// //   },
// //   {
// //     id: 3,
// //     title: "The Future of Smart Cities with IoT",
// //     date: "May 20, 2024",
// //     summary: "How IoT is transforming cities into efficient and sustainable smart environments.",
// //     image: "https://tse3.mm.bing.net/th?id=OIP.AYfVnojojiqKIFRlXDteOgHaFL&pid=Api&P=0&h=180",
// //   },
// //   {
// //     id: 4,
// //     title: "Big Data in Scientific Research",
// //     date: "June 15, 2024",
// //     summary: "Big data analytics is reshaping the way researchers analyze complex datasets.",
// //     image: "https://tse1.mm.bing.net/th?id=OIP.Wlczf-XG7_NYPzc335T2cQHaGu&pid=Api&P=0&h=180",
// //   },
// // ];

// // const Blog = () => {
// //   return (
// //     <Container className="mt-4">
// //       <h1 className="text-center mb-4">Professor's Blog</h1>
// //       <Row>
// //         {blogs.map((blog) => (
// //           <Col key={blog.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
// //             <Card className="blog-card shadow">
// //               <Card.Img variant="top" src={blog.image} className="blog-image" />
// //               <Card.Body className="d-flex flex-column">
// //                 <Card.Title className="text-center">{blog.title}</Card.Title>
// //                 <Card.Text className="text-muted text-center">{blog.date}</Card.Text>
// //                 <Card.Text className="flex-grow-1 text-center">{blog.summary}</Card.Text>
// //                 <Link to={`/blog/${blog.id}`}>
// //                   <Button variant="primary" className="w-100">Read More</Button>
// //                 </Link>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Blog;
// import React, { useState, useEffect } from "react";
// import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import Axios for API calls
// import "./Blog.css"; // Import CSS for styling

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]); // State to store blogs
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch blog data from db.json
//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/blog");
//       setBlogs(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       setError("Failed to load blog data.");
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Professor's Blog</h1>

//       {loading && <p className="text-center">Loading blogs...</p>}
//       {error && <p className="text-danger text-center">{error}</p>}

//       <Row className="justify-content-center g-4">
//         {blogs.map((blog) => (
//           <Col key={blog.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//             <Card className="blog-card shadow">
//               <Card.Img variant="top" src={blog.image} className="blog-image" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{blog.title}</Card.Title>
//                 <Card.Text className="text-muted text-center">{blog.date}</Card.Text>
//                 <Card.Text className="flex-grow-1 text-center">{blog.summary}</Card.Text>
//                 <Link to={`/blog/${blog.id}`}>
//                   <Button variant="primary" className="w-100">Read More</Button>
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import "./Blog.css"; // Import CSS for styling

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [filterCriteria, setFilterCriteria] = useState(""); // Selected filter

  // Fetch blog data from db.json
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/blog");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blog data.");
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  // Filter blogs based on search and filter criteria
  const filteredBlogs = blogs.filter((blog) => {
    // Filter by search term in title or summary
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by selected filter keyword (category)
    const matchesFilter =
      !filterCriteria || blog.title.toLowerCase().includes(filterCriteria.toLowerCase()) || blog.summary.toLowerCase().includes(filterCriteria.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Professor's Blog</h1>

      {loading && <p className="text-center">Loading blogs...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search Blogs"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Select
            value={filterCriteria}
            onChange={handleFilterChange}
            aria-label="Filter Blogs"
          >
            <option value="">Select Keyword</option>
            <option value="AI">AI</option>
            <option value="Blockchain">Blockchain</option>
            <option value="IoT">IoT</option>
            <option value="Smart Cities">Smart Cities</option>
            <option value="Big Data">Big Data</option>
            {/* Add more filter options as needed */}
          </Form.Select>
        </Col>
      </Row>

      {/* Displaying Blogs */}
      <Row className="justify-content-center g-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Col key={blog.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="blog-card shadow">
                <Card.Img variant="top" src={blog.image} className="blog-image" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{blog.title}</Card.Title>
                  <Card.Text className="text-muted text-center">{blog.date}</Card.Text>
                  <Card.Text className="flex-grow-1 text-center">{blog.summary}</Card.Text>
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="primary" className="w-100">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No blogs found based on the selected filters.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Blog;
