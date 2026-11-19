"use client";

import { useState } from "react";
import MapViewer from "./MapViewer";

export type LayerItem = {
  id: string;
  title: string;
  status: string;
  statusTone: string;
  highlight?: string;
  line: string;
  tools: string[];
  link?: { href: string; label: string };
  credit?: string;
  card: { src: string; src720: string; w: number; h: number; alt: string };
  images: { src: string; w: number; h: number; caption: string }[];
};

type Labels = { open: string; close: string; prev: string; next: string; hint: string; reset: string };

// Projects shown like a GIS layers panel: pick a layer, its sheet slides forward.
// Desktop: sticky layer list + one large panel. Phone: the same list as an accordion.
export default function Layers({
  items,
  dir,
  labels,
  featured,
  mapsWord,
  panelLabel,
}: {
  items: LayerItem[];
  dir: "rtl" | "ltr";
  labels: Labels;
  featured: string;
  mapsWord: string;
  panelLabel: string;
}) {
  const [active, setActive] = useState(0);
  const swatches = ["#b5c25a", "#7fb3c2", "#d8cfa8", "#a8d08d", "#6e7f2e", "#5b8fa0", "#c9d27a"];

  const Panel = ({ p, k, big }: { p: LayerItem; k: number; big?: boolean }) => (
    <div key={p.id} className="layer-in">
      <MapViewer
        dir={dir}
        title={p.title}
        aspect={big ? "aspect-[5/4]" : "aspect-[4/3]"}
        sizes={big ? "(min-width: 1024px) 720px, 100vw" : "100vw"}
        card={p.card}
        images={p.images}
        labels={labels}
      />
      <div className="mt-6 px-1">
        <div className="flex flex-wrap items-center gap-2">
          {k === 0 && <span className="rounded-full bg-copper px-3 py-0.5 text-[13px] font-bold text-[#14110a]">{featured}</span>}
          <span className={`rounded-full px-3 py-0.5 text-[13px] font-medium ${p.statusTone}`}>{p.status}</span>
          {p.highlight && <span className="rounded-full bg-paper px-3 py-0.5 text-[13px] font-medium text-ink ring-1 ring-line">{p.highlight}</span>}
        </div>
        <h3 className={`mt-3 font-extrabold ${big ? "text-2xl sm:text-[2rem]" : "text-xl"}`}>{p.title}</h3>
        <p className="mt-2 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">{p.line}</p>
        <p className="mt-3 text-[13px] font-medium tracking-wide text-sky" dir="ltr" style={{ textAlign: dir === "rtl" ? "right" : "left" }}>
          {p.tools.join("  /  ")}
        </p>
        {p.link && (
          <a href={p.link.href} target="_blank" rel="noopener" className="mt-1 inline-block py-2 text-[15px] font-semibold text-copper no-underline hover:underline">
            {p.link.label} ↗
          </a>
        )}
        {p.credit && <p className="mt-1 text-[11px] text-ink-soft/70">{p.credit}</p>}
      </div>
    </div>
  );

  const Tab = ({ p, k }: { p: LayerItem; k: number }) => {
    const on = k === active;
    return (
      <button
        type="button"
        onClick={() => {
          setActive(k);
          if (window.innerWidth < 1024) requestAnimationFrame(() => document.getElementById(p.id)?.scrollIntoView({ block: "start" }));
        }}
        aria-expanded={on}
        onKeyDown={(e) => {
          const keys: Record<string, number> = { ArrowDown: 1, ArrowUp: -1, Home: -k, End: items.length - 1 - k };
          if (!(e.key in keys)) return;
          e.preventDefault();
          const nk = (k + keys[e.key] + items.length) % items.length;
          setActive(nk);
          const scope = (e.currentTarget as HTMLElement).closest("[data-layers]");
          requestAnimationFrame(() => (scope?.querySelectorAll<HTMLButtonElement>("button.layer-tab")[nk])?.focus());
        }}
        aria-controls={`layer-${p.id}`}
        className={`layer-tab group flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-start transition-all ${on ? "tab-on bg-ink text-paper" : "tab-off bg-paper text-ink ring-1 ring-line hover:-translate-y-px hover:bg-white"}`}
      >
        <span aria-hidden className={`grid size-6 shrink-0 place-items-center rounded-md ring-1 ${on ? "ring-[#141a12]/25" : "ring-line"}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={on ? "opacity-100" : "opacity-35"}>
            {on ? <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" /> : <path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3 3.6M6.2 7.6A17 17 0 0 0 2 12s3.5 6 10 6a9 9 0 0 0 4-.9" />}
          </svg>
        </span>
        <span aria-hidden className="h-6 w-1.5 shrink-0 rounded-full" style={{ background: swatches[k % swatches.length] }} />
        <span className="min-w-0 flex-1">
          <span className="block truncate pb-0.5 text-[15px] font-semibold leading-[1.7]">{p.title}</span>
          <span className={`block text-[12px] ${on ? "text-[#5d6555]" : "text-ink-soft"}`}>{p.status}</span>
        </span>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[12px] font-semibold tabular-nums ${on ? "bg-[#141a12]/10" : "bg-paper"}`} title={mapsWord}>
          {p.images.length}
        </span>
      </button>
    );
  };

  return (
    <div className="mt-10">
      {/* Desktop: layers panel + sheet */}
      <div data-layers className="hidden gap-8 lg:grid lg:grid-cols-12">
        <div className="col-span-4">
          <div className="panel-inset sticky top-24 rounded-[1.75rem] bg-surface p-3 ring-1 ring-line">
            <p className="flex items-center justify-between px-2 pb-3 pt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              <span>{panelLabel}</span>
              <span className="tabular-nums">{items.length}</span>
            </p>
            <div className="space-y-1.5" role="tablist" aria-orientation="vertical">
              {items.map((p, k) => (
                <Tab key={p.id} p={p} k={k} />
              ))}
            </div>
          </div>
        </div>
        <div id={`layer-${items[active].id}`} className="sheet col-span-8 rounded-[1.75rem] p-5">
          <Panel key={items[active].id} p={items[active]} k={active} big />
        </div>
      </div>

      {/* Phone: accordion layers */}
      <div data-layers className="space-y-2 lg:hidden">
        {items.map((p, k) => (
          <div key={p.id} id={p.id} className="scroll-mt-24">
            <Tab p={p} k={k} />
            {k === active && (
              <div id={`layer-${p.id}`} className="sheet mt-2 rounded-[1.5rem] p-3">
                <Panel p={p} k={k} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
