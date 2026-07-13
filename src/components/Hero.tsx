import { ArrowDown, MapPin } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiKaggle } from "react-icons/si";
import { profile, socials, resumes } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* gradient glow accents */}
      <div
        className="glow left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 bg-grad-1"
        aria-hidden
      />
      <div
        className="glow right-[8%] top-1/3 h-[320px] w-[320px] bg-grad-3"
        aria-hidden
      />
      <div
        className="glow left-[4%] bottom-10 h-[280px] w-[280px] bg-grad-2"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-grad-3 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-grad-3" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold sm:text-3xl">
            <span className="text-gradient">{profile.title}</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-grad-2" />
            {profile.location}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-grad-2"
            >
              Contact me
            </a>
          </div>

          {/* resumes + socials */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex flex-wrap gap-4 text-sm">
              {resumes.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  download
                  className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-grad-2"
                >
                  {r.label} ↓
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={socials.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              className="text-muted transition-colors hover:text-foreground"
            >
              <SiKaggle size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
