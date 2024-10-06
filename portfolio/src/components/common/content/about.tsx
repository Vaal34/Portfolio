"use client";

import { useEffect, useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("à Propos");
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabPosition, setActiveTabPosition] = useState(0);

  useEffect(() => {
    const activeElement = document.querySelector(`li[data-tab="${activeTab}"]`) as HTMLElement;
    if (activeElement) {
      setActiveTabWidth(activeElement.offsetWidth);
      setActiveTabPosition(activeElement.offsetLeft);
    }
  }, [activeTab]);

  return (
    <div className="shadow-custom flex size-full rounded-3xl bg-primary">
      <div className="w-1/3 p-9">
        <img
          src="https://avatars.githubusercontent.com/u/113857350?v=4"
          alt="Valentin Melia"
          className="h-full rounded-2xl object-cover"
        />
      </div>
      <div className="w-2/3 pr-9 pt-9">
        <nav className="relative h-[10%] w-full rounded-2xl bg-background">
          <ul className="flex h-full items-center justify-between font-bold uppercase text-secondary px-2">
            {["à Propos", "Etude", "Technologies"].map((tab) => (
              <li
                key={tab}
                data-tab={tab}
                className={`cursor-pointer relative z-10 px-4 py-2 ${activeTab === tab ? "text-primary" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "Etude" ? "Études & Formations" : tab}
              </li>
            ))}
          </ul>
          <div
            className="absolute top-1/2 -translate-y-1/2 h-3/4 bg-secondary transition-all duration-500 rounded-xl" 
            style={{ 
              width: `${activeTabWidth}px`,
              transform: `translateX(${activeTabPosition}px) translateY(-50%)`,
            }}
          />
        </nav>
      </div>
    </div>
  );
}

export default About;