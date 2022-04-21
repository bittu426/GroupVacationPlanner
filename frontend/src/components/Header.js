import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/plan" className="nav-link">
            Plan
          </Link>
        </li>
        <li>
          <Link to="/message" className="nav-link">
            messages
          </Link>
        </li>
        <li>
          <Link to="/login" className="logout-desktop-btn">
            login
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
