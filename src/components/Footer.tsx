import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Built with Next.js, Tailwind CSS and shadcn/ui. © {year}{" "}
        {profile.name}.
      </p>
    </footer>
  );
}
