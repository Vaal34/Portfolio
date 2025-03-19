"use client";

import { Pointer } from "@/components/magicui/pointer";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import CircularText from "@/components/ui/spinText";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import APropos from "./aPropros";
import Etude from "./etude";
import EtudeSmallDevice from "./etudeSmallDevice";
import Technologies from "./techno";

function About() {
  const [activeTab, setActiveTab] = useState("à Propos");
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabPosition, setActiveTabPosition] = useState(0);

  useEffect(() => {
    const activeElement = document.querySelector(
      `li[data-tab="${activeTab}"]`
    ) as HTMLElement;
    if (activeElement) {
      setActiveTabWidth(activeElement.offsetWidth);
      setActiveTabPosition(activeElement.offsetLeft);
    }
  }, [activeTab]);

  return (
    <div className="flex size-full flex-col bg-primary shadow-custom lg:flex-row">
      <div className="hidden p-9 lg:flex lg:w-1/3">
        <div className="size-full bg-secondary">
          <Pointer>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularText
                text="télécharger mon cv • télécharger mon cv • "
                spinDuration={7}
                className="h-[140px] w-[140px]"
              />
              <Download className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
            </div>
          </Pointer>
          <a href="cv.pdf" download="Melia Valentin - Developpeur Fullstack">
            <Image
              src="/pdf.jpg"
              alt="cv"
              className="size-full object-cover object-left blur-sm"
              width={1000}
              height={1000}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between p-4 lg:w-2/3 lg:pb-9 lg:pl-0 lg:pr-9 lg:pt-9">
        <div className="mb-4 h-auto lg:mb-0 lg:h-[10%]">
          <nav className="relative w-full bg-background">
            <ul className="flex flex-wrap items-center justify-evenly p-2 uppercase text-secondary md:flex-row lg:flex-nowrap">
              {["à Propos", "étude & formations", "Technologies"].map((tab) => (
                <li
                  key={tab}
                  data-tab={tab}
                  className={`relative z-10 cursor-pointer px-2 py-1 text-base transition-all hover:scale-105 lg:px-4 lg:py-2 lg:text-2xl ${activeTab === tab ? "font-semibold text-primary" : "font-light"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "étude & formations" ? (
                    <>
                      <span className="sm:hidden">études</span>
                      <span className="hidden sm:inline">
                        Études & Formations
                      </span>
                    </>
                  ) : (
                    tab
                  )}
                </li>
              ))}
            </ul>
            <div
              className="absolute top-1/2 h-3/4 -translate-y-1/2 bg-secondary transition-all duration-500"
              style={{
                width: `${activeTabWidth}px`,
                transform: `translateX(${activeTabPosition}px) translateY(-50%)`,
              }}
            />
          </nav>
        </div>
        <div className="flex-grow">
          {activeTab === "à Propos" && <APropos />}
          {activeTab === "étude & formations" && (
            <>
              <div className="sm:hidden">
                <EtudeSmallDevice />
              </div>
              <div className="hidden sm:block h-full">
                <Etude />
              </div>
            </>
          )}
          {activeTab === "Technologies" && <Technologies />}
        </div>
        <div className="mt-4 lg:mt-0">
          <VelocityScroll
            text={`${activeTab} • `}
            className="border border-background bg-primary p-2 text-xs uppercase italic text-background"
            default_velocity={5}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
