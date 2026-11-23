import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          number="01"
          title="რჩეული პროექტები"
          subtitle="პრაქტიკული აპლიკაციები, რომლებიც შექმნილია რეალური ამოცანების გადასაჭრელად"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              year={project.year}
              title={project.title}
              description={project.description}
              tags={project.tags}
              status={project.status}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}