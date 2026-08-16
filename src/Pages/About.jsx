import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function About({ setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />


      <section className="about-hero">
        <div className="container">
          <h1>About NekiTrace</h1>

          <p>
            Building trust through transparent giving. Every donation tells a
            story, every campaign creates hope, and every act of kindness leaves
            a trace.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-story">
          <div className="story-image">
            <img src="ProjectsImage.jpg" alt="About NekiTrace" />
          </div>

          <div className="story-content">
            <h2>Our Story</h2>

            <p>
              NekiTrace was founded with a simple belief: people are always
              willing to help when they know their generosity truly reaches
              those who need it. While countless individuals wish to support
              charitable causes, uncertainty about where donations go often
              becomes a barrier to giving.
            </p>

            <p>
              Our platform bridges that gap by bringing transparency to every
              campaign. Each fundraiser presents a genuine story, a clearly
              defined goal, and visible fundraising progress so donors can
              follow the journey from the first contribution to the final
              outcome.
            </p>

            <p>
              More than just a donation platform, NekiTrace is a community built
              on compassion, accountability, and hope. Every campaign represents
              a real life waiting to be transformed through collective kindness.
            </p>
          </div>
        </div>
      </section>


      

      <Footer />
    </>
  );
}
