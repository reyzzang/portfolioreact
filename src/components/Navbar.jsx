import { Link, NavLink } from "react-router";

export default function Navbar({ fullName }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          {fullName}
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              მთავარი
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              სტატიები (API)
            </NavLink>
          </li>
          <li>
            <a href="/#projects">პროექტები</a>
          </li>
          <li>
            <a href="/#contact">კონტაქტი</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}