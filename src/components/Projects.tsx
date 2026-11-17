"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectTag } from "@/lib/data";
import type { ComponentType } from "react";
import { Globe, Newspaper } from "lucide-react";
import { SiGithub, SiHuggingface } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SectionHeading from "./ui/SectionHeading";
import HoverRow from "./ui/HoverRow";
import Reveal from "./ui/Reveal";

type Filter = "All" | ProjectTag;
type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

/** Logo for a project link, picked from where it points. */
function linkIcon({ label, href }: { label: string; href: string }): IconType {
  const host = new URL(href).hostname;
  if (host === "github.com") return SiGithub;
  if (host.endsWith("hf.space") || host.endsWith("huggingface.co")) return SiHuggingface;
  if (/press|news/i.test(label)) return Newspaper;
  return Globe;
}
const filters: Filter[] = ["All", "Web", "Mobile", "AI/ML"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(active)),
    [active],
  );

  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Projects" />

      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as Filter)}
        className="gap-0"
      >
        <TabsList variant="line" className="mb-10 w-full justify-start gap-6 rounded-none border-b border-border p-0 group-data-horizontal/tabs:h-auto">
          {filters.map((f) => (
            <TabsTrigger
              key={f}
              value={f}
              className="h-auto flex-none rounded-none px-0 pb-3 after:bg-gradient-accent group-data-horizontal/tabs:after:-bottom-px"
            >
              {f}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={active}>
          <ol className="group/list space-y-12">
            {visible.map((project, i) => {
              const links = project.links ?? [];
              return (
                <li key={project.title}>
                  <Reveal delay={(i % 3) * 60}>
                    <HoverRow aside={project.tags.join(" · ")}>
                      <h3 className="font-medium leading-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.tagline}
                      </p>

                      {project.highlight && (
                        <p className="mt-3 text-sm font-medium text-grad-2">
                          {project.highlight}
                        </p>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {links.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-4 text-sm">
                          {links.map((link) => {
                            const Icon = linkIcon(link);
                            return (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="relative z-20 inline-flex items-center gap-1.5 font-medium text-foreground hover:text-grad-2"
                                >
                                  <Icon className="size-4 shrink-0" aria-hidden />
                                  {link.label}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      <ul
                        className="mt-4 flex flex-wrap gap-2"
                        aria-label="Technologies used"
                      >
                        {project.tech.map((t) => (
                          <li key={t}>
                            <Badge variant="accent">{t}</Badge>
                          </li>
                        ))}
                      </ul>
                    </HoverRow>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </TabsContent>
      </Tabs>
    </section>
  );
}
