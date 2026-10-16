import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Certifications" />

      <Reveal>
        <ul className="divide-y divide-border">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <p className="font-medium leading-snug text-foreground transition-colors group-hover:text-grad-2">
                    {cert.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {cert.issuer}
                    {cert.platform !== cert.issuer && ` · ${cert.platform}`}
                    {cert.date && ` · ${cert.date}`}
                  </p>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-grad-2 motion-reduce:transition-none" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
