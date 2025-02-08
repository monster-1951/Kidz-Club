"use client";
import React, { useEffect, useState } from "react";

const ChildStore = () => {
  const [mode, setmode] = useState<string | null>(null);
  useEffect(() => {
    const storedMode =
      typeof window !== "undefined" ? localStorage.getItem("Mode") : null;
    setmode(storedMode);
  }, []);
  if (mode === "Child Mode") {
    return <>{mode}</>;
  } else {
    return <>{mode}</>;
  }
};

export default ChildStore;
