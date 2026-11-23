import Hero from "../components/Hero.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";

import {
  profileData,
  projectsData,
  experienceData,
  skillsData,
} from "../data/portfolioData.js";

export default function HomePage() {
  return (
    <>
      <Hero profile={profileData} projectCount={projectsData.length} />
      <ProjectsSection projects={projectsData} />
      <ExperienceSection items={experienceData} />
      <SkillsSection skills={skillsData} />
    </>
  );
}