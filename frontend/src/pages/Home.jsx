import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

const Home = () => {
  return (
    <div>
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
