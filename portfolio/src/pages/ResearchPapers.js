// import React, { useState } from "react";

// const ResearchPapers = () => {
//   const [search, setSearch] = useState("");
//   const papers = [
//     "AI in Education",
//     "Blockchain Security",
//     "Deep Learning",
//   ];

//   return (
//     <div className="container mt-4">
//       <h1>Research Papers</h1>
//       <input
//         type="text"
//         placeholder="Search papers..."
//         onChange={(e) => setSearch(e.target.value)}
//         className="form-control"
//       />
//       <ul>
//         {papers.filter(paper => paper.toLowerCase().includes(search.toLowerCase()))
//           .map((paper, index) => (
//             <li key={index}>{paper}</li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default ResearchPapers;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResearchPapers = () => {
  const [search, setSearch] = useState("");
  const papers = [
    "AI in Education",
    "Blockchain Security",
    "Deep Learning",
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Research Papers</h1>
      <input
        type="text"
        placeholder="Search papers..."
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-4"
      />
      <div className="row">
        {papers
          .filter((paper) =>
            paper.toLowerCase().includes(search.toLowerCase())
          )
          .map((paper, index) => (
            <div className="col-md-4  mb-5 d-flex" key={index}>
              <div className="card shadow-sm w-100" style={{ height: "100%" }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{paper}</h5>
                  <p className="card-text flex-grow-1">
                    This paper explores key aspects of {paper}.
                  </p>
                  <button className="btn btn-primary mt-auto">Read More</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
