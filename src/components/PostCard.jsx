export default function PostCard({ id, title, body }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-year">ჩანაწერი #{id}</span>
        <span className="project-status">API სტატია</span>
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{body}</p>
    </article>
  );
}