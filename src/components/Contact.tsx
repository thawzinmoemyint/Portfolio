"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiKaggle } from "react-icons/si";
import { profile, socials } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
      // honeypot — real users leave this empty
      company: String(data.get("company") || ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div
        className="glow left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 bg-grad-3"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something"
          description="Have a role, a project, or just want to say hi? Drop me a message — I usually reply within a day."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* left: contact info */}
          <Reveal className="space-y-6">
            <a
              href={socials.email}
              className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-grad-3">
                <Mail size={18} />
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-muted">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-grad-2">
                <MapPin size={18} />
              </span>
              {profile.location}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-grad-2 hover:text-foreground"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-grad-2 hover:text-foreground"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={socials.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-grad-2 hover:text-foreground"
              >
                <SiKaggle size={18} />
              </a>
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="gradient-border rounded-2xl p-6 sm:p-8"
            >
              <div className="relative z-10 space-y-5">
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or role…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 size={16} />
                    Thanks! Your message is on its way. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} />
                    {error}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-grad-2";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
