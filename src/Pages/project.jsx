import "../styles/project.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Projects({ setPage, setSelectedProject, projects }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="projects-page">
        <div className="container">
          <div className="page-header">
            <p className="page-tagline">Our Campaigns</p>

            <h1>Support a Cause That Matters</h1>

            <p className="page-description">
              Every campaign represents a real story of hope. Browse our
              fundraising projects and help create meaningful change through
              transparent giving.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">
                  <div className="project-top">
                    <span className="status-badge">{project.status}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="amount-boxes">
                    <div className="amount-box">
                      <small>Goal</small>
                      <strong>{project.goal}</strong>
                    </div>

                    <div className="amount-box">
                      <small>Raised</small>
                      <strong>{project.raised}</strong>
                    </div>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                  <span className="progress-text">
                    {project.progress}% Funded
                  </span>

                  <button
                    className="support-btn"
                    onClick={() => {
                      fetch(`http://localhost:8080/api/projects/${project.id}`)
                        .then((res) => res.json())
                        .then((fullProject) => {
                          setSelectedProject(fullProject);
                          navigate("/details");
                        })
                        .catch((err) =>
                          console.error(
                            "Failed to fetch project details:",
                            err,
                          ),
                        );
                    }}
                  >
                    {" "}
                    Support This Cause →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <h2>Every Donation Leaves a Trace.</h2>

          <p>
            Together, we can bring hope, dignity, and opportunity to those who
            need it most.
          </p>

          <button className="primary-btn" onClick={() => navigate("/donate")}>
            Donate Today
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
