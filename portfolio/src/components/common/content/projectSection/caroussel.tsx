import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300svh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden bg-primary"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300"
      ></div>
      <div className="absolute inset-0 z-10 grid text-accent duration-300 hover:bg-secondary/60 hover:text-primary hover:backdrop-blur-lg">
        <div className="flex h-full items-start justify-between p-8">
          <p className="background-blur text-4xl md:text-5xl font-black uppercase">
            {card.title}
          </p>
          <div className="flex flex-col gap-1">
            {card.website && (
              <a
                className="rounded-full bg-background p-2 shadow-lg"
                href={card.website}
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                      stroke=" #3b25e9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            )}
            {card.github && (
              <a
                className="rounded-full bg-background p-2 shadow-lg"
                href={card.github}
                target="_blank"
              >
                <svg
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  className="h-6 w-6 md:h-8 md:w-8"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>github [##3b25e9 ]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#3b25e9 "
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[##3b25e9 ]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="p-8 text-justify opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm text-background">{card.text}</p>
        </div>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
  text: string;
  github?: string;
  website?: string;
};

const cards: CardType[] = [
  {
    url: "/maurice.png",
    title: "Maurice Shop",
    id: 1,
    text: "Conception et développement d'une plateforme e-commerce sur mesure pour un artisan boulanger, visant à diversifier son activité avec la vente de matériel professionnel. Réalisé avec Next.js, TypeScript et TailwindCSS, ce projet met en avant ma capacité à créer des solutions performantes, intuitives et optimisées pour l'expérience utilisateur et le référencement.",
    github: "https://github.com/hug0-cstrs/boulangerie-maurice",
    website: "https://mauricemateriel.fr/",
  },
  {
    url: "/ca.jpg",
    title: "Risques Naturels",
    id: 2,
    text: "Développement d'un script automatisé en Python pour récupérer et analyser les données de risques naturels liées à plusieurs adresses. En exploitant l'OCR et l'API apiGOUV, il extrait, structure et génère automatiquement un fichier CSV exploitable. Ce projet met en avant mon expertise en manipulation de données, automatisation de tâches et intégration d'APIs gouvernementales.",
    github: "https://github.com/Vaal34/PreventionRisquesNaturels",
  },
  {
    url: "/mystudentflat.png",
    title: "My Student Flat",
    id: 3,
    text: "Développement d'une application centralisant les annonces immobilières sur une plateforme intuitive. Réalisé en Python, Flask, SQLAlchemy et Flutter, ce projet met en avant mes compétences en backend, gestion de bases de données et création d'interfaces mobiles interactives pour une meilleure expérience utilisateur.",
    github: "https://github.com/Amandine4731/holbertonschool-MyStudentFlat",
    website:
      "https://medium.com/@5619/searching-for-an-apartment-in-toulouse-can-sometimes-prove-to-be-a-daunting-task-for-students-3adf91192b63",
  },
  {
    url: "/tfc.jpg",
    title: "Stage TFC",
    id: 4,
    text: "Création d'une application sur mesure pour le Toulouse Football Club, conçue pour optimiser la gestion des données des joueurs du centre de formation. Ce projet a nécessité une réflexion approfondie sur la structuration des données et leur accessibilité pour les entraîneurs et analystes. Développé en Python (Flask, SQLAlchemy) et JavaScript (TailwindCSS), il m'a permis de mettre en pratique mes compétences en conception de bases de données, en développement d'interfaces ergonomiques et en gestion de la performance des applications web.",
  },
  {
    url: "",
    title: "A suivre...",
    id: 5,
    text: "",
    github: "",
    website: "",
  },
];
