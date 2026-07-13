import { Trophy, Medal, ExternalLink } from "lucide-react";
import { awards } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const icons = { trophy: Trophy, medal: Medal };

export default function Competitions() {
  return (
    <section id="awards" className="relative px-6 py-24">
      <div
        className="glow left-1/4 top-32 h-[300px] w-[300px] bg-grad-2"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Awards"
          title="Competitions & recognition"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, i) => {
            const Icon = icons[award.icon];
            return (
              <Reveal key={award.title} delay={i * 100} className="h-full">
                <div className="gradient-border group h-full rounded-2xl p-6">
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-black">
                        <Icon size={24} />
                      </span>
                      <span className="font-mono text-sm text-muted">
                        {award.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-grad-2">
                      {award.event}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {award.description}
                    </p>

                    {award.href && (
                      <a
                        href={award.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        Learn more
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
