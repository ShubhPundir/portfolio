import "../styles/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">My Portfolio</Link>
      </h1>
      <ul className="nav-links">
        <li><Link to="/#skills">Skills</Link></li>
        <li><Link to="/allprojects">All Projects</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
