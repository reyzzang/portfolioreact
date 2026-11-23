export default function ExperienceItem({ period, role, company, location, summary }) {
  return (
    <article className="exp-item">
      <div className="exp-left">
        <span className="exp-period">{period}</span>
        <span className="exp-location">{location}</span>
      </div>
      <div className="exp-right">
        <h3 className="exp-role">{role}</h3>
        <p className="exp-company">{company}</p>
        <p className="exp-summary">{summary}</p>
      </div>
    </article>
  );
}