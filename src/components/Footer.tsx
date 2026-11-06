import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        © {year}{" "}
        {profile.name}.
      </p>
    </footer>
  );
}
