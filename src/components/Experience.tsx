import { ArrowRight } from "lucide-react";
import { experiences, resumes } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./ui/SectionHeading";
import HoverRow, { RowLink } from "./ui/HoverRow";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Experience" />

      <ol className="group/list space-y-12">
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${i}`}>
            <Reveal delay={i * 60}>
              <HoverRow aside={exp.period}>
                <h3>
                  {exp.companyUrl ? (
                    <RowLink href={exp.companyUrl}>
                      {exp.role} · {exp.company}
                    </RowLink>
                  ) : (
                    <span className="font-medium leading-tight text-foreground">
                      {exp.role} · {exp.company}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.location}
                </p>

                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-grad-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {exp.tech.map((t) => (
                    <li key={t}>
                      <Badge variant="accent">{t}</Badge>
                    </li>
                  ))}
                </ul>
              </HoverRow>
            </Reveal>
          </li>
        ))}
      </ol>

      <a
        href={resumes[0].href}
        download
        className="group mt-12 inline-flex items-center gap-2 font-medium text-foreground hover:text-grad-2"
      >
        Download full résumé
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
      </a>
    </section>
  );
}
