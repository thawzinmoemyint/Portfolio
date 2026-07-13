"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type ProjectTag } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

type Filter = "All" | ProjectTag;
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
    <section id="projects" className="relative px-6 py-24">
      {/* subtle accent glow */}
      <div
        className="glow right-1/4 top-40 h-[300px] w-[300px] bg-grad-1"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="A mix of full-stack web products and machine-learning systems. Filter by domain."
        />

        {/* filter tabs */}
        <Reveal className="mb-10 inline-flex rounded-full border border-border bg-surface p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-gradient-accent text-black"
                  : "text-muted hover:text-foreground"
              }`}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 80}
              className="h-full"
            >
              <article className="group gradient-border flex h-full flex-col rounded-2xl p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-grad-2">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.highlight && (
                    <p className="mt-3 text-sm font-medium text-foreground">
                      {project.highlight}
                    </p>
                  )}

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                        >
                          {link.label}
                          <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
