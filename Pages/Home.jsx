import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() 
{
  const navigate = useNavigate();
  const featuredProjects = [
    {
      id: 1,
      title: "Medical Treatment Fund",
      description:
        "Supporting a beneficiary in need of urgent heart surgery and medical care.",
      goal: "Rs. 500,000",
      raised: "Rs. 180,000",
      progress: 36,
      image: "Medical.jpg",
    },
    {
      id: 2,
      title: "Education Hope Fund",
      description:
        "Helping a student continue their education with essential academic support",
      goal: "Rs. 350,000",
      raised: "Rs. 250,000",
      progress: 22,
      image: "Education.jpg",
    },
    {
      id: 3,
      title: "Food Relief Fund",
      description:
        "Providing monthly food supplies to someone who is facing financial hardship.",
      goal: "Rs. 200,000",
      raised: "Rs. 120,000",
      progress: 10,
      image: "Food.png",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Transparent",
      description:
        "Track fundraising progress with clear goals and visible updates ensuring every contribution has a purpose.",
    },
    {
      id: 2,
      title: "Trusted",
      description:
        "Support carefully managed fundraising campaigns designed to connect donors with genuine causes.",
    },
    {
      id: 3,
      title: "Impactful",
      description:
        "Every donation contributes towards meaningful change, bringing hope one project at a time.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-left">
            <p className="tagline">Every Donation Leaves a Trace.</p>
            <h1>
              Together, We Can Create<span> Lasting Change.</span>
            </h1>
            <p className="hero-text">
              NekiTrace is a transparent fundraising platform where every
              donation creates meaningful impact. Support verified fundraising
              projects and help bring real change to people's lives.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/donate")}
              >
                Donate Now
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src="HeroImage.jpg" alt="Helping Hands" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-heading">
            <h2>Why Choose NekiTrace?</h2>
            <p>
              Built on transparency, driven by compassion, and focused on
              creating meaningful impact.
            </p>
          </div>
          <div className="feature-cards">
            {features.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className="feature-icon"></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Fundraising Projects</h2>
            <p>
              Support verified campaigns making a real difference. Every
              contribution brings a project one step closer to its goal.
            </p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.image} className="project-image" />
                <div className="project-content">
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
                    className="details-btn"
                    onClick={() => navigate("/projects")}
                  >
                    Explore Projects
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <div className="section-heading">
            <h2>Our Collective Impact</h2>

            <p>
              Every contribution creates a ripple of hope. Together, we continue
              to build meaningful change.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>12+</h3>
              <p>Active Projects</p>
            </div>
            <div className="impact-card">
              <h3>120+</h3>
              <p>Generous Donors</p>
            </div>
            <div className="impact-card">
              <h3>Rs 1.4M</h3>
              <p>Funds Raised</p>
            </div>
            <div className="impact-card">
              <h3>87%</h3>
              <p>Campaign Goal Achieved</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Ready to Leave a Trace?</h2>
          <p>
            Every act of kindness begins with a single step. Explore projects
            and become part of someone's journey today.
          </p>
          <button className="primary-btn" onClick={() => navigate("/projects")}>
            Explore Projects
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
