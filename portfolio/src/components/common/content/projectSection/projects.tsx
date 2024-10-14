import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollCarousel from "./caroussel";

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "-40%"]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [1, 0.6]);

  return (
    <div ref={containerRef} className="relative h-[400svh] bg-background">
      <motion.div
        className="sticky top-0 flex h-screen items-center justify-center"
        style={{ y, scale }}
      >
        <div className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.30] before:bg-accent before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
          <h1 className="relative text-6xl md:text-8xl font-bold text-primary">Projects</h1>
        </div>
      </motion.div>
      <HorizontalScrollCarousel />
    </div>
  );
}

export default Projects;
