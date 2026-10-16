"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

const sectionIds = navLinks.map((link) => link.href.slice(1));

/** Tracks which section is in the reading zone near the top of the viewport. */
export function useActiveSection() {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
