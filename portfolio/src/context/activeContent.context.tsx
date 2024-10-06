"use client";

import { createContext } from "react";

type ActiveContentContextType = {
  activeContent: string;
  setActiveContent: (content: string) => void;
};

const ActiveContentContext = createContext<ActiveContentContextType>({
  activeContent: "about",
  setActiveContent: () => {},
});

export default ActiveContentContext;
