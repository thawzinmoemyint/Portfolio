import { about } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./ui/SectionHeading";
import HoverRow from "./ui/HoverRow";
import Reveal from "./ui/Reveal";

export default function About() {
  const { education } = about;

  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="About" />

      <Reveal className="space-y-4 leading-relaxed text-muted-foreground">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>

      <Reveal delay={80} className="group/list mt-12">
        <HoverRow aside="Education">
          <h3 className="font-medium leading-snug text-foreground">
            {education.school}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.degree} · {education.period}
          </p>
          <ul
            className="mt-4 flex flex-wrap gap-2"
            aria-label="Relevant coursework"
          >
            {education.coursework.map((c) => (
              <li key={c}>
                <Badge variant="subtle">{c}</Badge>
              </li>
            ))}
          </ul>
        </HoverRow>
      </Reveal>
    </section>
  );
}
