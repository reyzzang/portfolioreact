export default function SkillGroup({ category, items }) {
  return (
    <div className="skill-card">
      <h3 className="skill-category">{category}</h3>
      <ul className="skill-list">
        {items.map((skill) => (
          <li key={skill} className="skill-pill">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}