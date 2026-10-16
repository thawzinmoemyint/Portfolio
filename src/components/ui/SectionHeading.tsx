export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-foreground lg:mb-8">
      {title}
    </h2>
  );
}
