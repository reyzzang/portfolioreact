import { Link, useLocation } from "react-router";

export default function Navbar({ fullName }) {
  const { pathname, hash } = useLocation();

  const isHomeActive = pathname === "/" && !hash;
  const isPostsActive = pathname === "/posts";
  const isProjectsActive = pathname === "/" && hash === "#projects";
  const isContactActive = pathname === "/" && hash === "#contact";

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          {fullName}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isHomeActive ? "nav-active" : ""}>
              მთავარი
            </Link>
          </li>
          <li>
            <Link to="/posts" className={isPostsActive ? "nav-active" : ""}>
              სტატიები (API)
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              className={isProjectsActive ? "nav-active" : ""}
            >
              პროექტები
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className={isContactActive ? "nav-active" : ""}
            >
              კონტაქტი
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}