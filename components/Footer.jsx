import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>
            <b>NekiTrace</b>
          </h2>
          <p>Every Donation Leaves a Trace.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/admin">Admin</Link>

        </div>
      </div>
      <hr />
      <p className="copyright">© 2026 NekiTrace. Built by Nimra Sultan</p>
    </footer>
  );
}

export default Footer;
