export default function Navbar({ fullName }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          {fullName}
        </a>
        <ul className="nav-links">
          <li><a href="#projects">პროექტები</a></li>
          <li><a href="#experience">გამოცდილება</a></li>
          <li><a href="#skills">უნარები</a></li>
          <li><a href="#contact">კონტაქტი</a></li>
        </ul>
      </div>
    </nav>
  );
}