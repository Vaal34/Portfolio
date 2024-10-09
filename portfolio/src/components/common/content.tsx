"use client";

import About from "./content/aboutSection/about";
import Contact from "./content/contact";
import Projects from "./content/projects";

function Content() {
  return (
    <>
      <section
        id="about"
        className="relative h-screen overflow-hidden bg-background"
      >
        <About />
      </section>
      <section
        id="projects"
        className="relative h-screen overflow-hidden bg-background p-6"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="relative h-screen overflow-hidden bg-background p-6"
      >
        <Contact />
      </section>
    </>
  );
}

export default Content;
