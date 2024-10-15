"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Etude() {
  const [activeEtude, setActiveEtude] = useState("ERPC");

  return (
    <div className="relative h-full overflow-hidden w-full py-2">
      <motion.div
        className="flex w-[200%]"
        animate={{ x: activeEtude === "ERPC" ? "0%" : "-50%" }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      >
        <div className="w-1/2 flex space-x-2">
          <p className="text-justify leading-relaxed text-background w-11/12 p-3">
            J'ai obtenu un <strong> BTS ERPC</strong>, une formation qui m'a permis
            de développer des compétences polyvalentes dans les domaines de la
            <strong className="font-semibold"> communication</strong>, de la
            <strong> gestion de projet</strong>, et de la
            <strong> création graphique</strong>. Ce cursus m'a offert une
            compréhension approfondie des outils et des techniques nécessaires
            pour concevoir et réaliser des projets de
            <strong className="font-semibold"> communication visuelle</strong>,
            notamment à travers des logiciels comme
            <strong> Adobe InDesign</strong> et
            <strong className="font-semibold"> Illustrator</strong>. Grâce à cette
            formation, j'ai acquis une solide base en matière de
            <strong> gestion des relations clients</strong>, d'
            <strong className="font-semibold"> organisation de projet</strong>, et
            d'<strong> optimisation des processus de production</strong>.
          </p>
          <div className="w-1/12 flex items-center justify-center text-nowrap bg-background">
            <div 
              className="-rotate-90 relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-full before:mb-1 before:w-full before:origin-bottom before:scale-y-[0.20] before:bg-accent before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-50"
              onClick={() => setActiveEtude("FULLSTACK")}
            >
              <span className="text-primary text-2xl flex items-center uppercase relative">
                go to Fullstack
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5 animate-bounce"
                >
                  <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex space-x-2">
          <div className="w-1/12 flex items-center justify-center text-nowrap bg-background">
            <div 
              className="-rotate-90 relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-full before:mb-1 before:w-full before:origin-bottom before:scale-y-[0.20] before:bg-accent before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-50"
              onClick={() => setActiveEtude("ERPC")}
            >
              <span className="text-primary text-2xl flex items-center uppercase relative">
                go to BTS ERPC
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5 animate-bounce"
                >
                  <path
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <p className="text-justify leading-relaxed text-background w-11/12 p-3">
            J'ai obtenu un diplôme en <strong> développement full-stack</strong> à
            la <strong> Holberton School</strong>, où j'ai acquis des compétences
            avancées en <strong> développement logiciel</strong>. Cette formation
            immersive m'a permis de maîtriser des technologies modernes telles que
            <strong> HTML</strong>, <strong> CSS</strong>,
            <strong> JavaScript</strong>,<strong> React</strong>,
            <strong> Python</strong>, <strong> C</strong>, et <strong>MySQL</strong>
            . J'ai également développé des <strong> soft skills</strong>
            essentielles, comme l'<strong> autonomie</strong>, la
            <strong> collaboration</strong>, et la
            <strong> gestion du temps</strong>. Ce programme intensif m'a préparé à
            relever des défis techniques et à travailler efficacement en équipe.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Etude;
