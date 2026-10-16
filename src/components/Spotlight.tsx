"use client";

import { useEffect, useRef } from "react";

/** Soft accent glow that follows the cursor (desktop only). */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e: PointerEvent) => {
      node.style.setProperty("--x", `${e.clientX}px`);
      node.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background:
          "radial-gradient(600px at var(--x, 50%) var(--y, 20%), color-mix(in oklch, var(--grad-2) 7%, transparent), transparent 80%)",
      }}
    />
  );
}
