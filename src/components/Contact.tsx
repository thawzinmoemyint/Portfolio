"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    <section
      id="contact"
      aria-label="Contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading title="Contact" />

      <Reveal>
        <p className="leading-relaxed text-muted-foreground">
          Have a role, a project, or just want to say hi? Drop me a message
          here or email{" "}
          <a
            href={socials.email}
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-grad-2 hover:decoration-grad-2"
          >
            {profile.email}
          </a>
          . I usually reply within a day.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input
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
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or role…"
              className={cn(inputClass, "resize-none field-sizing-fixed")}
            />
          </Field>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-10 px-5 font-semibold"
            >
              {status === "loading" ? (
                "Sending…"
              ) : (
                <>
                  Send message <ArrowRight />
                </>
              )}
            </Button>

            {status === "success" && (
              <p
                role="status"
                className="flex items-center gap-2 text-sm text-grad-2"
              >
                <CheckCircle2 className="size-4" />
                Thanks! Your message is on its way.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="flex items-center gap-2 text-sm text-destructive"
              >
                <AlertCircle className="size-4" />
                {error}
              </p>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  );
}

const inputClass =
  "h-auto bg-surface px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 md:text-sm dark:bg-surface";

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
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
