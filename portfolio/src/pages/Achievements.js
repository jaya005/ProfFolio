// // import React from 'react'

// // const Achievements = () => {
// //   return (
// //     <div>
// //         achievements
// //     </div>
// //   )
// // }

// // export default Achievements
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Achievements = () => {
//   const achievements = [
//     {
//       title: "Best Researcher Award",
//       description: "Received the Best Researcher Award for outstanding contributions in AI and Machine Learning.",
//     },
//     {
//       title: "Published 50+ Papers",
//       description: "Authored and co-authored over 50 research papers in reputed international journals.",
//     },
//     {
//       title: "Keynote Speaker at IEEE Conference",
//       description: "Delivered a keynote speech on Deep Learning advancements at IEEE 2023 Conference.",
//     },
//     {
//       title: "Grant for AI Research",
//       description: "Secured a research grant of $100,000 for advancing AI-based education technologies.",
//     },
//     {
//       title: "Mentored 20+ PhD Scholars",
//       description: "Supervised and guided over 20 PhD scholars in their research journey.",
//     },
//     {
//       title: "Patent in Blockchain Security",
//       description: "Filed a patent for a novel approach in blockchain security applications.",
//     },
//   ];

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-3">Achievements</h1>
//       <div className="row">
//         {achievements.map((achievement, index) => (
//           <div className="col-md-4 mx-3 my-3 d-flex" key={index}>
//             <div className="card shadow-sm w-100" style={{ height: "100%" }}>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{achievement.title}</h5>
//                 <p className="card-text flex-grow-1">{achievement.description}</p>
//                 <button className="btn btn-primary mt-auto">Read More</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Researcher Award",
      description: "Received the Best Researcher Award for outstanding contributions in AI and Machine Learning.",
    },
    {
      title: "Published 50+ Papers",
      description: "Authored and co-authored over 50 research papers in reputed international journals.",
    },
    {
      title: "Keynote Speaker at IEEE Conference",
      description: "Delivered a keynote speech on Deep Learning advancements at IEEE 2023 Conference.",
    },
    {
      title: "Grant for AI Research",
      description: "Secured a research grant of $100,000 for advancing AI-based education technologies.",
    },
    {
      title: "Mentored 20+ PhD Scholars",
      description: "Supervised and guided over 20 PhD scholars in their research journey.",
    },
    {
      title: "Patent in Blockchain Security",
      description: "Filed a patent for a novel approach in blockchain security applications.",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Achievements</h1>
      <div className="row justify-content-center g-4">
        {achievements.map((achievement, index) => (
          <div className="col-sm-6 col-md-4 d-flex" key={index}>
            <div className="card shadow-sm w-100 h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{achievement.title}</h5>
                <p className="card-text flex-grow-1">{achievement.description}</p>
                <button className="btn btn-primary mt-auto">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
