import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import Footer from "./components/Footer.jsx";

import {
  profileData,
  projectsData,
  experienceData,
  skillsData,
} from "./data/portfolioData.js";

export default function App() {
  return (
    <div className="app">
      <Navbar fullName={profileData.fullName} />
      <Hero profile={profileData} projectCount={projectsData.length} />
      <main>
        <ProjectsSection projects={projectsData} />
        <ExperienceSection items={experienceData} />
        <SkillsSection skills={skillsData} />
      </main>
      <Footer profile={profileData} />
    </div>
  );
}