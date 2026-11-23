export default function ProjectCard({ year, title, description, tags, status, link }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-year">{year}</span>
        <span className="project-status">{status}</span>
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-bottom">
        <ul className="tag-list">
          {tags.map((tag) => (
            <li key={tag} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>
        <a href={link} className="project-link">
          დეტალურად
        </a>
      </div>
    </article>
  );
}