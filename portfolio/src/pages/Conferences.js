// // // import React from 'react'

// // // const Conferences = () => {
// // //   return (
// // //     <div>
// // //       conferences
// // //     </div>
// // //   )
// // // }

// // // export default Conferences
// // import React from "react";
// // import { Card, Container, Row, Col } from "react-bootstrap";
// // import "./Conferences.css"; // Import CSS for styling

// // const conferences = [
// //   {
// //     id: 1,
// //     title: "International Conference on AI & Data Science",
// //     date: "March 15, 2024",
// //     location: "MIT, USA",
// //     description: "Discussing advancements in AI, deep learning, and data science applications.",
// //     image: "https://www.analyticsinsight.net/wp-content/uploads/2021/11/Data-Science-Trends-2022.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Blockchain & Cybersecurity Summit",
// //     date: "May 10, 2024",
// //     location: "London, UK",
// //     description: "Exploring blockchain security, cryptography, and decentralized networks.",
// //     image: "https://blockchain-expo.com/global/wp-content/uploads/2023/01/blockchain-expo-global-2023.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "International Conference on IoT & Smart Cities",
// //     date: "July 25, 2024",
// //     location: "Tokyo, Japan",
// //     description: "Focusing on IoT innovations and smart city infrastructure development.",
// //     image: "https://smartcity.press/wp-content/uploads/2021/05/Top-3-IoT-Trends-Shaping-Smart-Cities.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Cloud Computing & Big Data Analytics Conference",
// //     date: "September 5, 2024",
// //     location: "Berlin, Germany",
// //     description: "Covering topics on cloud storage, big data processing, and AI in cloud computing.",
// //     image: "https://www.eweek.com/wp-content/uploads/2022/04/Cloud-Computing-1.jpg",
// //   },
// // ];

// // const Conferences = () => {
// //   return (
// //     <Container className="mt-4">
// //       <h1 className="text-center mb-4">Conferences</h1>
// //       <Row>
// //         {conferences.map((conference) => (
// //           <Col key={conference.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
// //             <Card className="conference-card shadow">
// //               <Card.Img variant="top" src={conference.image} className="conference-image" />
// //               <Card.Body className="d-flex flex-column">
// //                 <Card.Title className="text-center">{conference.title}</Card.Title>
// //                 <Card.Text className="text-muted text-center">{conference.date} | {conference.location}</Card.Text>
// //                 <Card.Text className="flex-grow-1 text-center">{conference.description}</Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Conferences;
// import React from "react";
// import { Card, Container, Row, Col } from "react-bootstrap";
// import "./Conferences.css"; // Import CSS for styling

// const conferences = [
//   {
//     id: 1,
//     title: "International Conference on AI & Data Science",
//     date: "March 15, 2024",
//     location: "MIT, USA",
//     description: "Discussing advancements in AI, deep learning, and data science applications.",
//     image: "https://tse2.mm.bing.net/th?id=OIP.W15rk4FpB--7YUMdjik0nAHaE8&pid=Api&P=0&h=180",
//   },
//   {
//     id: 2,
//     title: "Blockchain & Cybersecurity Summit",
//     date: "May 10, 2024",
//     location: "London, UK",
//     description: "Exploring blockchain security, cryptography, and decentralized networks.",
//     image: "https://tse2.mm.bing.net/th?id=OIP.tnbq2HadAJ-s3s4-Mp8guAHaEI&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     title: "International Conference on IoT & Smart Cities",
//     date: "July 25, 2024",
//     location: "Tokyo, Japan",
//     description: "Focusing on IoT innovations and smart city infrastructure development.",
//     image: "https://tse4.mm.bing.net/th?id=OIP.9pTrKXxgdqhNqp23HxGLZQHaDN&pid=Api&P=0&h=180",
//   },
//   {
//     id: 4,
//     title: "Cloud Computing & Big Data Analytics Conference",
//     date: "September 5, 2024",
//     location: "Berlin, Germany",
//     description: "Covering topics on cloud storage, big data processing, and AI in cloud computing.",
//     image: "https://tse4.mm.bing.net/th?id=OIP.teeOnrNnF_-LejDD8NZ80AHaD3&pid=Api&P=0&h=180",
//   },
// ];

// const Conferences = () => {
//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">Conferences</h1>
//       <Row>
//         {conferences.map((conference) => (
//           <Col key={conference.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//             <Card className="conference-card shadow">
//               <Card.Img variant="top" src={conference.image} className="conference-image" />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="text-center">{conference.title}</Card.Title>
//                 <Card.Text className="text-muted text-center">{conference.date} | {conference.location}</Card.Text>
//                 <Card.Text className="flex-grow-1 text-center">{conference.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Conferences;
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Conferences.css"; // Import CSS

const conferences = [
  {
    id: 1,
    title: "International Conference on AI & Data Science",
    date: "March 15, 2024",
    location: "MIT, USA",
    description: "Discussing advancements in AI, deep learning, and data science applications.",
    image: "https://tse4.mm.bing.net/th?id=OIP.jvY4xNa_A8NZSvf3Lhv95AHaEf&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    title: "Blockchain & Cybersecurity Summit",
    date: "May 10, 2024",
    location: "London, UK",
    description: "Exploring blockchain security, cryptography, and decentralized networks.",
    image: "https://tse2.mm.bing.net/th?id=OIP.tnbq2HadAJ-s3s4-Mp8guAHaEI&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "International Conference on IoT & Smart Cities",
    date: "July 25, 2024",
    location: "Tokyo, Japan",
    description: "Focusing on IoT innovations and smart city infrastructure development.",
    image: "https://tse1.mm.bing.net/th?id=OIP.ekqBkvYlm0kiyqlz7P9zHQHaEe&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "Cloud Computing & Big Data Analytics Conference",
    date: "September 5, 2024",
    location: "Berlin, Germany",
    description: "Covering topics on cloud storage, big data processing, and AI in cloud computing.",
    image: "https://tse4.mm.bing.net/th?id=OIP.teeOnrNnF_-LejDD8NZ80AHaD3&pid=Api&P=0&h=180",
  },
];

const Conferences = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Conferences</h1>
      <Row>
        {conferences.map((conference) => (
          <Col key={conference.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="conference-card shadow">
              <Card.Img variant="top" src={conference.image} className="conference-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{conference.title}</Card.Title>
                <Card.Text className="text-muted text-center">{conference.date} | {conference.location}</Card.Text>
                <Card.Text className="flex-grow-1 text-center">{conference.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Conferences;
