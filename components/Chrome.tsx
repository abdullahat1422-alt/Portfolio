"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; n: string; label: string; inNav?: boolean };

// Page chrome that helps visitors move around a long page:
// - header with the current section highlighted, and a reading-progress line
// - phone menu listing every section by its page number
// - desktop page index on the side (01–07), like an atlas
// - back-to-top button once the visitor is past the cover
export default function Chrome({
  name,
  items,
  lang,
  langHref,
  langLabel,
  labels,
}: {
  name: string;
  items: Item[];
  lang: "ar" | "en";
  langHref: string;
  langLabel: string;
  labels: { sections: string; menu: string; close: string; top: string; skip: string };
}) {
  const other = lang === "ar" ? "en" : "ar";
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - innerHeight;
        const p = max > 0 ? Math.min(1, scrollY / max) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
        setPast(scrollY > innerHeight * 0.9);
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [items]);

  // close the phone menu with Escape, return focus to its button
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = items.filter((i) => i.inNav);

  return (
    <>
      <a href="#about" className="sr-only z-[60] rounded-full bg-copper px-4 py-2 font-semibold text-[#14110a] focus:not-sr-only focus:fixed focus:start-4 focus:top-4">
        {labels.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-paper/90 via-paper/60 to-transparent px-3 pb-4 pt-3 sm:px-6">
        <div className="glass relative mx-auto flex max-w-6xl items-center gap-2 overflow-hidden rounded-full py-2 pe-2 ps-3 sm:ps-4">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 font-semibold no-underline">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f3ecdc] p-1 shadow-[inset_0_-1px_0_rgba(0,0,0,.15)]">
              <img src="/img/logo-mark.webp" alt="" width={240} height={214} className="h-auto w-full" />
            </span>
            <span className="truncate">{name}</span>
          </a>
          <nav className="ms-auto hidden items-center gap-1 md:flex" aria-label={labels.sections}>
            {navItems.map((i) => {
              const on = active === i.id;
              return (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`rounded-full px-4 py-1.5 text-[15px] no-underline transition-colors ${on ? "bg-copper/15 text-copper" : "text-ink-soft hover:bg-surface hover:text-ink"}`}
                >
                  {i.label}
                </a>
              );
            })}
          </nav>
          <a
            href={langHref}
            hrefLang={other}
            lang={other}
            className="ms-auto shrink-0 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper no-underline transition-transform hover:scale-[1.04] md:ms-2"
          >
            {langLabel}
          </a>
          <button
            ref={menuBtn}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="phone-menu"
            aria-label={open ? labels.close : labels.menu}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-surface text-ink ring-1 ring-line md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
          {/* reading progress */}
          <div aria-hidden className="absolute inset-x-6 bottom-0 h-[2px] overflow-hidden rounded-full">
            <div ref={bar} className="h-full w-full origin-left bg-gradient-to-r from-[#6e7f2e] via-[#d9de95] to-[#6ca9bb] rtl:origin-right" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>

        {/* Phone menu: atlas index */}
        {open && (
          <nav id="phone-menu" aria-label={labels.sections} className="menu-in mx-auto mt-2 max-w-6xl rounded-[1.75rem] bg-[#172019]/[.97] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)] ring-1 ring-line backdrop-blur-xl md:hidden">
            <ul>
              {items.map((i) => (
                <li key={i.id}>
                  <a
                    href={`#${i.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === i.id ? "true" : undefined}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3 no-underline ${active === i.id ? "bg-copper/15 text-copper" : "text-ink active:bg-surface"}`}
                  >
                    <span className="w-7 font-[family-name:Anton] text-lg text-sand">{i.n}</span>
                    <span className="font-semibold">{i.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop page index */}
      <nav aria-label={labels.sections} className="fixed end-5 top-1/2 z-30 hidden -translate-y-1/2 min-[1360px]:block">
        <ul className="flex flex-col gap-1.5">
          {items.map((i) => {
            const on = active === i.id;
            return (
              <li key={i.id}>
                <a href={`#${i.id}`} aria-current={on ? "true" : undefined} className="group flex items-center justify-end gap-3 no-underline" title={i.label}>
                  <span className={`whitespace-nowrap rounded-full bg-surface/90 px-2.5 py-0.5 text-[12px] font-medium text-ink opacity-0 ring-1 ring-line backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100`}>
                    {i.label}
                  </span>
                  <span className={`font-[family-name:Anton] text-[13px] tabular-nums transition-all ${on ? "text-sand" : "text-ink-soft/50 group-hover:text-ink"}`}>{i.n}</span>
                  <span aria-hidden className={`h-px transition-all ${on ? "w-7 bg-sand" : "w-3 bg-ink-soft/40 group-hover:w-5"}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Back to top */}
      <a
        href="#top"
        aria-label={labels.top}
        className={`fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom))] end-4 z-30 grid size-11 bg-[#172019]/90 ring-1 ring-line shadow-[0_12px_30px_-10px_rgba(0,0,0,.8)] backdrop-blur place-items-center rounded-full text-ink no-underline transition-all duration-300 lg:bottom-6 lg:end-6 ${past ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        tabIndex={past ? 0 : -1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
