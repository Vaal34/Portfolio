"use client";

import About from "./content/aboutSection/about";
import Contact from "./content/Contact/contact";
import Projects from "./content/projectSection/projects";

function Content() {
  return (
    <>
      <section
        id="about"
        className="relative h-full lg:h-screen overflow-hidden bg-background"
      >
        <About />
      </section>
      <section id="projects" className="bg-background">
        <Projects />
      </section>
      <section id="contact" className="relative h-screen overflow-hidden">
        <Contact />
      </section>
    </>
  );
}

export default Content;
