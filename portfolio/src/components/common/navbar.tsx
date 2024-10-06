"use client";

import ActiveContentContext from "@/context/activeContent.context";
import { useContext } from "react";
import Marquee from "../ui/marquee";

function Navbar() {
  const { setActiveContent } = useContext(ActiveContentContext);

  return (
    <div className="flex items-center overflow-hidden bg-accent text-[--accent-700]">
      <nav>
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:3s] [--gap:1.5rem]"
        >
          <span
            onClick={() => setActiveContent("projects")}
            className="font-weight-300 cursor-pointer text-4xl transition-all duration-200 hover:text-[--accent-600]"
          >
            PROJETS
          </span>
          <span
            onClick={() => setActiveContent("about")}
            className="font-weight-300 cursor-pointer text-4xl uppercase transition-all duration-200 hover:text-[--accent-600]"
          >
            à PROPOS
          </span>
          <span
            onClick={() => setActiveContent("contact")}
            className="font-weight-300 cursor-pointer text-4xl transition-all duration-200 hover:text-[--accent-600]"
          >
            CONTACT
          </span>
        </Marquee>
      </nav>
    </div>
  );
}

export default Navbar;
