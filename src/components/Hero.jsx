export default function Hero({ profile, projectCount }) {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-meta">
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <h1 className="hero-title">{profile.fullName}</h1>
        <p className="hero-about">{profile.about}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            პროექტების ნახვა ({projectCount})
          </a>
          <a href={`mailto:${profile.email}`} className="btn-secondary">
            დაკავშირება
          </a>
        </div>
      </div>
    </header>
  );
}