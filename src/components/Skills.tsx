import { skillGroups } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Skills"
          title="Tools I work with"
          description="A working toolkit spanning full-stack web development, machine learning, and infrastructure."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 80} className="h-full">
              <div className="gradient-border h-full rounded-2xl p-6">
                <div className="relative z-10">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-grad-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-grad-2"
                      >
                        {skill}
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
