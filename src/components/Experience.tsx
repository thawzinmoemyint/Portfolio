import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="Building products in the field — from commercial web apps to research data analysis."
        />

        <div className="relative border-l border-border pl-6 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal
              key={`${exp.company}-${i}`}
              delay={i * 80}
              className="relative pb-12 last:pb-0"
            >
              {/* timeline dot */}
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[47px]">
                <span className="h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-background" />
              </span>

              <div className="gradient-border rounded-2xl p-6">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-grad-2">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {exp.company}
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="text-muted">· {exp.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-grad-3" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
