"use client";

import About from "./content/about";
import Contact from "./content/contact";
import Projects from "./content/projects";

function Content() {
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-background p-6">
        <About />
      </section>
      <section className="relative h-screen overflow-hidden bg-background p-6">
        <Projects />
      </section>
      <section className="relative h-screen overflow-hidden bg-background p-6">
        <Contact />
      </section>
    </>
  );
}

export default Content;
