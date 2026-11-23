import SectionHeader from "./SectionHeader.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

export default function ExperienceSection({ items }) {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader
          number="02"
          title="სამუშაო გამოცდილება"
          subtitle="პროფესიული საქმიანობა და პრაქტიკული გამოცდილება"
        />
        <div className="exp-list">
          {items.map((item) => (
            <ExperienceItem
              key={item.id}
              period={item.period}
              role={item.role}
              company={item.company}
              location={item.location}
              summary={item.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}