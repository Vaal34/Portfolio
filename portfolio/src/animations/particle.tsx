"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#09BC8A");

  useEffect(() => {
    setColor(theme === "dark" ? "#09BC8A" : "#004346");
  }, [theme]);

  return (
    <Particles
    className="absolute inset-0"
    quantity={700}
    ease={20}
    color={color}
    refresh
    />
  );
};

export default ParticlesDemo;
