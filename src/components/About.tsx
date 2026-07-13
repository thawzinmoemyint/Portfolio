import { GraduationCap } from "lucide-react";
import { about } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function About() {
  const { education } = about;

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 — About" title="Two crafts, one engineer" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <div className="gradient-border rounded-2xl p-6">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-grad-3">
                    <GraduationCap size={20} />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Education
                  </h3>
                </div>

                <p className="font-semibold text-foreground">{education.school}</p>
                <p className="mt-1 text-sm text-muted">{education.degree}</p>
                <p className="mt-1 text-sm text-muted">{education.period}</p>
                <p className="text-sm text-muted">{education.location}</p>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
