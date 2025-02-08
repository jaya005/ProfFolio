import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ResearchPapers from "./pages/ResearchPapers";
import Conferences from "./pages/Conferences";
import Achievements from "./pages/Achievements";
import TeachingExperience from "./pages/TeachingExperience";
import Collaborations from "./pages/Collaborations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminDashboard from "./admin/AdminDashboard";
import Login from "./pages/Login";
import MyNavbar from "./components/MyNavbar"; 

function App() {
  return (
    <Router>
      <MyNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research-papers" element={<ResearchPapers />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/teaching-experience" element={<TeachingExperience />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
