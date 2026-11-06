"use client";

import Image from "next/image";
import { Briefcase, FileText, MapPin } from "lucide-react";
import { navLinks, profile, resumes } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggle from "./ThemeToggle";
import { socialLinks } from "./socialLinks";
import { useActiveSection } from "./useActiveSection";

export default function Sidebar() {
  const active = useActiveSection();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-full bg-gradient-accent p-[2px]">
            <div className="relative size-28 overflow-hidden rounded-full bg-surface sm:size-32">
              <Image
                src="/headshot.png"
                alt={profile.name}
                fill
                sizes="(min-width: 640px) 128px, 112px"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </div>
          <ThemeToggle className="-mr-2 shrink-0 lg:hidden" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium sm:text-xl">
          <span className="text-gradient">{profile.title}</span>
        </p>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-grad-1 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-grad-1" />
            </span>
            {profile.availability}
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-3.5 shrink-0" />
            <span>
              {profile.location}
              <span aria-hidden> · </span>
              <span className="sr-only">. </span>
              {profile.openToLocations}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Briefcase className="size-3.5 shrink-0" />
            {profile.workModes}
          </p>
        </div>

        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="w-max">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className="group flex items-center py-2.5"
                  >
                    <span
                      className={cn(
                        "mr-4 h-px w-8 bg-muted-foreground/40 transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none",
                        isActive && "w-16 bg-gradient-accent",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground",
                        isActive && "text-foreground",
                      )}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 space-y-5 lg:mt-0">
        <ul className="space-y-1.5 text-sm">
          {resumes.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                download
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="size-4" />
                {r.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="-ml-2 flex items-center gap-1">
          {socialLinks.map(({ label, href, Icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon-lg"
                  className="text-muted-foreground hover:bg-transparent hover:text-foreground"
                >
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    aria-label={label}
                  >
                    <Icon className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-border lg:block" aria-hidden />
          <ThemeToggle className="hidden lg:inline-flex" />
        </div>
      </div>
    </header>
  );
}
