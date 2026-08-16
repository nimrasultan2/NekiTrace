import "../styles/FoodDrive.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FoodDrive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rationItems = [
    "20kg Wheat Flour",
    "5kg Rice",
    "Lentils & Pulses",
    "Cooking Oil",
    "Tea & Sugar",
    "Milk & Essentials",
  ];

  const impactStats = [
    { number: "2,450+", title: "Ration Packs Distributed" },
    { number: "8,900+", title: "People Reached" },
    { number: "22", title: "Cities Covered" },
    { number: "12", title: "Monthly Food Drives" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="food-hero">
        <div className="container food-hero-content">
          <div className="food-hero-text">
            <span className="hero-tag">Community Initiative</span>

            <h1>Monthly Food Drive</h1>

            <p>
              Every month, NekiTrace delivers food packs to families facing
              financial hardship. Your generosity helps ensure that no family
              has to worry about their next meal.
            </p>

            <button className="primary-btn" onClick={() => navigate("/donate")}>
              Sponsor a Family
            </button>
          </div>

          <div className="food-hero-image">
            <img src="FoodDrive.jpg" alt="Food Drive" />
          </div>
        </div>
      </section>

      <section className="food-about">
        <div className="container food-about-content">
          <div className="food-about-image">
            <img src="Food.png" alt="Food Pack" />
          </div>

          <div className="food-about-text">
            <h2>What's Inside Every Food Pack?</h2>

            <ul className="food-list">
              <li>
                <span>✓</span>20kg Wheat Flour
              </li>
              <li>
                <span>✓</span>5kg Rice
              </li>
              <li>
                <span>✓</span>Lentils & Pulses
              </li>
              <li>
                <span>✓</span>Cooking Oil
              </li>
              <li>
                <span>✓</span>Tea & Sugar
              </li>
              <li>
                <span>✓</span>Milk & Essentials
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="food-impact">
        <div className="container">
          <h1>Our Impact</h1>

          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div className="impact-card" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="food-cta">
        <div className="container">
          <h2>One Food Pack Can Feed a Family.</h2>

          <p>
            Your contribution provides dignity, nourishment, and hope to
            families who need it most.
          </p>

          <button className="primary-btn" onClick={() => navigate("/donate")}>
            Donate Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
