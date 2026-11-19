"use client";

import { useState } from "react";
import MapViewer from "./MapViewer";

type G = { thumb: string; full: string; w: number; h: number; tw: number; th: number; caption: string; from: string };
type Labels = { open: string; close: string; prev: string; next: string; hint: string; reset: string };

// Map gallery with project filter chips and a short first view, so the page stays easy to scroll on a phone.
export default function Gallery({
  items,
  dir,
  labels,
  allLabel,
  moreLabel,
  lessLabel,
  first = 8,
}: {
  items: G[];
  dir: "rtl" | "ltr";
  labels: Labels;
  allLabel: string;
  moreLabel: string;
  lessLabel: string;
  first?: number;
}) {
  const groups = Array.from(new Set(items.map((g) => g.from)));
  const [filter, setFilter] = useState<string | null>(null);
  const [all, setAll] = useState(false);
  const list = filter ? items.filter((g) => g.from === filter) : items;
  const shown = filter || all ? list : list.slice(0, first);

  const chip = (on: boolean) =>
    `shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-all ${on ? "tab-on text-[#0f1510]" : "pill-raised bg-surface text-ink-soft ring-1 ring-line hover:text-ink"}`;

  return (
    <>
      <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="group">
        <button type="button" aria-pressed={!filter} onClick={() => setFilter(null)} className={chip(!filter)}>
          {allLabel} <span className="tabular-nums opacity-70">{items.length}</span>
        </button>
        {groups.map((gname) => (
          <button key={gname} type="button" aria-pressed={filter === gname} onClick={() => setFilter(filter === gname ? null : gname)} className={chip(filter === gname)}>
            {gname} <span className="tabular-nums opacity-70">{items.filter((g) => g.from === gname).length}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-x-7 lg:grid-cols-4">
        {shown.map((g) => (
          <figure key={g.thumb} className="layer-in">
            <MapViewer
              dir={dir}
              compact
              aspect="aspect-square"
              sizes="(min-width: 1024px) 270px, 50vw"
              title={g.caption}
              card={{ src: g.thumb, src720: g.thumb, w: g.tw, h: g.th, alt: g.caption }}
              images={[{ src: g.full, w: g.w, h: g.h, caption: g.caption }]}
              labels={labels}
            />
            <figcaption className="mt-3.5">
              <span className="block text-[12px] font-semibold text-copper">{g.from}</span>
              <span className="block text-[14px] font-medium leading-snug">{g.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {!filter && list.length > first && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => {
              if (all) document.getElementById("gallery")?.scrollIntoView({ block: "start" });
              setAll(!all);
            }}
            className="pill-raised inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 font-semibold text-ink ring-1 ring-line transition-all hover:-translate-y-0.5 hover:ring-copper/50"
          >
            {all ? lessLabel : `${moreLabel} (${list.length})`}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className={all ? "rotate-180" : ""}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
