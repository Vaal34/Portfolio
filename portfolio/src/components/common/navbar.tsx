"use client";

import { Link } from "react-scroll";
import Marquee from "../ui/marquee";

function Navbar() {
  return (
    <div className="flex h-1/6 items-center overflow-hidden bg-accent text-[--accent-700]">
      <nav>
        <Marquee pauseOnHover reverse className="[--duration:10s] [--gap:1rem]">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="font-weight-300 cursor-pointer text-xl md:text-4xl uppercase transition-all duration-200 hover:text-[--accent-600]"
          >
            PROJETS
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="font-weight-300 cursor-pointer text-xl md:text-4xl uppercase transition-all duration-200 hover:text-[--accent-600]"
          >
            À PROPOS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="font-weight-300 cursor-pointer text-xl md:text-4xl transition-all duration-200 hover:text-[--accent-600]"
          >
            CONTACT
          </Link>
        </Marquee>
      </nav>
    </div>
  );
}

export default Navbar;
