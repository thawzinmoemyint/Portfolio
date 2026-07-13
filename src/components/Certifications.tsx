import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Certifications"
          title="Courses & credentials"
          description="Verified certificates from specialized courses in machine learning and deep learning."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 80} className="h-full">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border group flex h-full flex-col rounded-2xl p-6"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-grad-3">
                      <BadgeCheck size={22} />
                    </span>
                    <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                      {cert.platform}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-grad-2">{cert.issuer}</p>
                  {cert.date && (
                    <p className="mt-1 font-mono text-xs text-muted">{cert.date}</p>
                  )}

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-foreground">
                    View credential
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
