import type { CSSProperties } from "react";
import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./ui/SectionHeading";
import { skillIcons } from "./skillIcons";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Skills" />

      <Reveal>
        <dl className="divide-y divide-border">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-8 sm:gap-4"
            >
              <dt className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {group.category}
              </dt>
              <dd className="flex flex-wrap gap-2 sm:col-span-6">
                {group.skills.map((skill) => {
                  const icon = skillIcons[skill];
                  return (
                    <Badge
                      key={skill}
                      variant="subtle"
                      className="gap-1.5 px-3 py-1.5 text-foreground/90 transition-colors hover:border-grad-2 [&>svg]:size-3.5!"
                    >
                      {icon && (
                        <icon.Icon
                          aria-hidden
                          // brand colors per theme; neutral when not set
                          style={
                            {
                              "--brand-light": icon.light,
                              "--brand-dark": icon.dark ?? icon.light,
                            } as CSSProperties
                          }
                          className="text-[var(--brand-light,var(--muted-foreground))] dark:text-[var(--brand-dark,var(--muted-foreground))]"
                        />
                      )}
                      {skill}
                    </Badge>
                  );
                })}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
