"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { useEffect, useState } from "react";
import APropos from "./aPropros";
import Etude from "./etude";
import Technologies from "./techno";
import Image from "next/image";

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
    <div className="flex size-full bg-primary shadow-custom">
      <div className="w-1/3 p-9">
        <Image
          src="https://avatars.githubusercontent.com/u/113857350?v=4"
          alt="Valentin Melia"
          className="h-full object-cover"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between pb-9 pr-9 pt-9">
        <div className="h-[10%]">
          <nav className="relative h-full w-full bg-background">
            <ul className="flex h-full items-center justify-evenly p-2 uppercase text-secondary">
              {["à Propos", "étude & formations", "Technologies"].map((tab) => (
                <li
                  key={tab}
                  data-tab={tab}
                  className={`relative z-10 cursor-pointer px-4 py-2 text-2xl transition-all hover:scale-105 ${activeTab === tab ? "font-semibold text-primary" : "font-light"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "étude & formations" ? "Études & Formations" : tab}
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
        <div className="size-full">
          {activeTab === "à Propos" && <APropos />}
          {activeTab === "étude & formations" && <Etude />}
          {activeTab === "Technologies" && <Technologies />}
        </div>
        <div className="">
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
