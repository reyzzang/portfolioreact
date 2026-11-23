import SectionHeader from "./SectionHeader.jsx";
import SkillGroup from "./SkillGroup.jsx";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          number="03"
          title="ტექნოლოგიები და უნარები"
          subtitle="ძირითადი ინსტრუმენტები, რომლებსაც ვიყენებ პროექტების შექმნისას"
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <SkillGroup
              key={group.id}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}