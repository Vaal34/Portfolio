"use client";

import ActiveContentContext from "@/context/activeContent.context";
import React, { useState } from "react";

export function ActiveContentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeContent, setActiveContent] = useState("about");

  return (
    <ActiveContentContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ActiveContentContext.Provider>
  );
}
