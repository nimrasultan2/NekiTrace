import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/project";
import ProjectDetail from "./Pages/projectDetail";
import Donation from "./Pages/Donation";
import Admin from "./Pages/Admin";
import About from "./Pages/About";
import FoodDrive from "./Pages/FoodDrive";

function App() 
{
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => 
  {
    fetch("http://localhost:8080/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Server responded with an error");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setFetchError("Could not load projects. Is the backend running?");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        Loading projects...
      </div>
    );
  }

  if (fetchError) 
  {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "red" }}>
        {fetchError}
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/projects"
        element={
          <Projects
            projects={projects}
            setSelectedProject={setSelectedProject}
          />
        }
      />

      <Route
        path="/details"
        element={
          <ProjectDetail
            project={selectedProject}
          />
        }
      />

      <Route
        path="/donate"
        element={
          <Donation
            project={selectedProject}
          />
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/fooddrive" element={<FoodDrive />} />

      <Route
        path="/admin"
        element={
          <Admin
            projects={projects}
            setProjects={setProjects}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
          />
        }
      />
    </Routes>
  );
}

export default App;