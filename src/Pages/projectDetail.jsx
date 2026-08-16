import "../styles/ProjectDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function ProjectDetail({ project, setPage }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) 
  {
    return <h2>No Project Selected</h2>;
  }

  return (
    <>
      <Navbar/>
      <section className="details-hero">
        <div className="container details-hero-content">
          <div className="details-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="details-info">
            <span className="status-badge">{project.status}</span>
            <h1>{project.title}</h1>
            <p className="hero-line">Every Donation Leaves a Trace.</p>

            <div className="amount-boxes">
              <div className="amount-box">
                <small>Goal</small>
                <strong>{project.goal}</strong>
              </div>
              <div className="amount-box">
                <small>Raised</small>
                <strong>{project.raised}</strong>
              </div>
              <div className="amount-box">
                <small>Remaining</small>
                <strong>{project.remaining}</strong>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>

            <p className="progress-text">{project.progress}% Funded</p>

            <button
              className="donate-btn-big"
              onClick={() => navigate("/donate")}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-heading">
            <span>
              <b>Meet the Beneficiary</b>
            </span>
            <h1>{project.beneficiary}</h1>
          </div>
          <p>{project.story}</p>
        </div> 
      </section>

      <section className="campaign-section">
        <div className="container campaign-grid">
          <div className="info-card">
            <h2>Campaign Information</h2>

            <div className="info-row">
              <span>Beneficiary</span>
              <strong>{project.beneficiary}</strong>
            </div>
            <div className="info-row">
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>
            <div className="info-row">
              <span>Location</span>
              <strong>{project.location}</strong>
            </div>
            <div className="info-row">
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>
            <div className="info-row">
              <span>Goal</span>
              <strong>{project.goal}</strong>
            </div>
          </div>

          <div className="timeline-card">
            <h2>Campaign Journey</h2>
            {project.updates && project.updates.length > 0 ? (
              project.updates.map((update, index) => (
                <div className="timeline-item" key={index}>
                  <div className="circle"></div>
                  <p>
                    <strong>{update.title}</strong>: {update.content}
                  </p>
                </div>
              ))
            ) : (
              <p className="no-updates">No updates yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="details-cta">
        <div className="container">
          <h2>Ready to Leave a Trace?</h2>
          <p>
            Your support today can transform someone's tomorrow. Every donation
            brings this campaign one step closer to success.
          </p>
          <button className="donate-btn-big" onClick={() => navigate("/donate")}>
            Donate Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
