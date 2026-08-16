import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">

        <Link to="/" className="logo">
          💚 NekiTrace
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/fooddrive">Food Drive</Link>
          </li>

          <li>
            <Link to="/donate">Donate</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>

        <Link to="/donate" className="donate-btn">
          Donate Now
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;