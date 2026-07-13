import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiKaggle } from "react-icons/si";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm">
            <span className="text-gradient font-bold">{profile.name}</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            © {year} · All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={socials.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="text-muted transition-colors hover:text-foreground"
          >
            <SiKaggle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
