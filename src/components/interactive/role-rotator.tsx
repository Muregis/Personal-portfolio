"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/site";

export function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="text-lg font-medium text-cyan-200 md:text-xl" aria-live="off">
      {roles[index]}
    </p>
  );
}
