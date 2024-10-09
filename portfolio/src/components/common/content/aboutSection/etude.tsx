"use client";

import { useState } from "react";

function Etude() {
  const [activeEtude, setActiveEtude] = useState("FULLSTACK");

  return (
    <div className="relative flex h-full overflow-hidden py-2">
      <div className="w-1/2 p-9">
        <p className="text-justify leading-relaxed text-background">
          J'ai obtenu un <strong>BTS ERPC</strong>, une formation qui m'a permis
          de développer des compétences polyvalentes dans les domaines de la
          <strong className="font-semibold">communication</strong>, de la{" "}
          <strong>gestion de projet</strong>, et de la{" "}
          <strong>création graphique</strong>. Ce cursus m'a offert une
          compréhension approfondie des outils et des techniques nécessaires
          pour concevoir et réaliser des projets de
          <strong className="font-semibold">communication visuelle</strong>,
          notamment à travers des logiciels comme{" "}
          <strong>Adobe InDesign</strong> et
          <strong className="font-semibold">Illustrator</strong>. Grâce à cette
          formation, j'ai acquis une solide base en matière de{" "}
          <strong>gestion des relations clients</strong>, d'
          <strong className="font-semibold">organisation de projet</strong>, et
          d'<strong>optimisation des processus de production</strong>.
        </p>
      </div>
      <div className="w-1/2 p-9">
        <p className="text-justify leading-relaxed text-background">
          J'ai obtenu un diplôme en <strong>développement full-stack</strong> à
          la <strong>Holberton School</strong>, où j'ai acquis des compétences
          avancées en <strong>développement logiciel</strong>. Cette formation
          immersive m'a permis de maîtriser des technologies modernes telles que{" "}
          <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>,<strong>React</strong>,{" "}
          <strong>Python</strong>, <strong>C</strong>, et <strong>MySQL</strong>
          . J'ai également développé des <strong>soft skills</strong>{" "}
          essentielles, comme l'<strong>autonomie</strong>, la{" "}
          <strong>collaboration</strong>, et la{" "}
          <strong>gestion du temps</strong>. Ce programme intensif m'a préparé à
          relever des défis techniques et à travailler efficacement en équipe.
        </p>
      </div>
      <div
        className={`absolute inset-0 flex py-8 transition-transform duration-500 ease-in-out ${
          activeEtude === "FULLSTACK" ? "translate-x-1/2" : "-translate-x-1/2"
        }`}
      >
        <div className="flex w-1/2 cursor-pointer flex-col items-start justify-center bg-background p-8 text-primary">
          <span
            className="bg-accent text-left hover:underline"
            onClick={() => setActiveEtude("BTS")}
          >
            go to FULLSTACK {"\u2192"}
          </span>
          <h1 className="break-words text-left text-7xl font-medium">
            BTS ERPC
          </h1>
          <a
            href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-etudes-de-realisation-d-un-projet-de-communication-option-a-etudes-de-realisation-de-produits-plurimedia"
            className="font-light hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Études et Réalisation d'un Projet de Communication)
          </a>
        </div>
        <div className="flex w-1/2 cursor-pointer flex-col items-end justify-center bg-background p-8 text-primary">
          <span
            className="bg-accent text-right hover:underline"
            onClick={() => setActiveEtude("FULLSTACK")}
          >
            {"\u2190"} go to BTS ERPC
          </span>
          <h1 className="break-words text-right text-7xl font-medium">
            FULL STACK
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Etude;
