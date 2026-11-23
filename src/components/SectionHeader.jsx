export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="section-header">
      <div className="section-meta">
        <span className="section-num">{number}</span>
        <h2>{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}