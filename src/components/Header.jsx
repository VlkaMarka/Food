import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="#1565c0 blue darken-3">
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          Food
        </Link>
        <ul id="nav-mobile" className="right">
          <li className="nav_link_wrapper">
            <Link to="/about">About</Link>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
