"use client";

import { useEffect, useRef } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./useActiveSection";

/** Sticky, horizontally scrollable section tabs for small screens. */
export default function MobileNav() {
  const active = useActiveSection();
  const listRef = useRef<HTMLUListElement>(null);

  // keep the active tab visible by scrolling the strip sideways
  // (not scrollIntoView, which could also scroll the page vertically)
  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !tab) return;
    list.scrollTo({
      left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-30 -mx-6 mt-10 border-b border-border bg-background/80 backdrop-blur md:-mx-12 lg:hidden"
    >
      <ul
        ref={listRef}
        className="relative flex gap-6 overflow-x-auto px-6 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map((link) => {
          const isActive = active === link.href.slice(1);
          return (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative block py-3.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground",
                  isActive &&
                    "text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gradient-accent",
                )}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
