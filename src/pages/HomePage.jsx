import { useEffect } from "react";
import { useLocation } from "react-router";
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
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Hero profile={profileData} projectCount={projectsData.length} />
      <ProjectsSection projects={projectsData} />
      <ExperienceSection items={experienceData} />
      <SkillsSection skills={skillsData} />
    </>
  );
}