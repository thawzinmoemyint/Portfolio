"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label={`${profile.name} — home`}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="nav-logo"
                x1="10"
                y1="14"
                x2="54"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--grad-1)" />
                <stop offset="0.5" stopColor="var(--grad-2)" />
                <stop offset="1" stopColor="var(--grad-3)" />
              </linearGradient>
            </defs>
            <rect
              x="1"
              y="1"
              width="62"
              height="62"
              rx="15"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="2"
            />
            <g
              stroke="url(#nav-logo)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              {/* T */}
              <path d="M9 20 H31" />
              <path d="M20 20 V46" />
              {/* Z */}
              <path d="M34 20 H55 L34 46 H55" />
            </g>
          </svg>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-grad-2 hover:text-foreground"
          >
            Get in touch
          </a>
        </div>

        {/* mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-accent px-4 py-3 text-center text-sm font-semibold text-black"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
