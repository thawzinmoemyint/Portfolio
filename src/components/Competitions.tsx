import { Trophy, Medal } from "lucide-react";
import { awards } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import HoverRow, { RowLink } from "./ui/HoverRow";
import Reveal from "./ui/Reveal";

const icons = { trophy: Trophy, medal: Medal };

export default function Competitions() {
  return (
    <section
      id="awards"
      aria-label="Awards"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Awards" />

      <ol className="group/list space-y-12">
        {awards.map((award, i) => {
          const Icon = icons[award.icon];
          return (
            <li key={award.title}>
              <Reveal delay={i * 60}>
                <HoverRow
                  aside={
                    <span className="inline-flex items-center gap-2">
                      <Icon className="size-4 text-grad-2" />
                      {award.year}
                    </span>
                  }
                >
                  <h3>
                    {award.href ? (
                      <RowLink href={award.href}>{award.title}</RowLink>
                    ) : (
                      <span className="font-medium leading-tight text-foreground">
                        {award.title}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {award.event}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {award.description}
                  </p>
                </HoverRow>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
