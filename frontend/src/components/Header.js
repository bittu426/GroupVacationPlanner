import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/plan" className="nav-link">
            Plan
          </Link>
        </li>
        <li>
          <Link to="/groups" className="nav-link">
            Groups
          </Link>
        </li>
        <li>
          <Link to="/messages" className="nav-link">
            messages
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
    </div>
  </nav>
);
export default Header;
