"use client";

import { useEffect } from "react";

// One small client script for the whole page:
// - .reveal elements fade up when they enter the viewport
// - .spot cards get a soft glow that follows the pointer
// - [data-count] numbers count up once when visible
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("fx");

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const countEls = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.classList.add("in");
            io.unobserve(el);
            if (el.dataset.count) {
              const target = parseInt(el.dataset.count, 10);
              const prefix = el.dataset.prefix ?? "";
              const t0 = performance.now();
              const step = (t: number) => {
                const p = Math.min(1, (t - t0) / 1100);
                const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
                el.textContent = `${prefix}${v}`;
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach((el) => io.observe(el));
      countEls.forEach((el) => io.observe(el));
    }

    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as HTMLElement | null)?.closest?.(".spot") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    if (!reduce) document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
