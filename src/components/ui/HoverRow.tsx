import { cn } from "@/lib/utils";

type HoverRowProps = {
  /** small left-column label, e.g. a date range */
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * Two-column list item (label + content) that lifts onto a surface on hover.
 * Place inside a `group/list` parent so the other rows dim while one is hovered.
 */
export default function HoverRow({ aside, children, className }: HoverRowProps) {
  return (
    <div
      className={cn(
        "group relative grid gap-2 pb-1 transition-opacity sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!",
        className,
      )}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_1px_0_0_var(--border)]" />
      <div className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {aside}
      </div>
      <div className="z-10 sm:col-span-6">{children}</div>
    </div>
  );
}

/**
 * Row title that links out. Its overlay span stretches the click target over
 * the whole HoverRow on desktop; other links in the row need `relative z-20`.
 */
export function RowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-baseline font-medium leading-tight text-foreground hover:text-grad-2 focus-visible:text-grad-2 lg:group-hover:text-grad-2"
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md lg:-inset-x-6 lg:block" />
      <span>{children}</span>
      <ArrowUpRightIcon />
    </a>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
