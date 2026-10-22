"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

type Img = { src: string; caption: string; w: number; h: number };

type Props = {
  images: Img[];
  title: string;
  labels: { open: string; close: string; prev: string; next: string; hint: string; reset: string };
  dir: "rtl" | "ltr";
  card: { src: string; src720: string; w: number; h: number; alt: string };
  aspect?: string;
  sizes?: string;
  compact?: boolean;
  eager?: boolean;
};

export default function MapViewer({ images, title, labels, dir, card, aspect = "aspect-[4/3]", sizes = "(min-width: 1024px) 560px, 100vw", compact = false, eager = false }: Props) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const zoomRef = useRef<ReactZoomPanPinchRef>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const go = useCallback(
    (d: number) => setI((v) => (v + d + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (images.length > 1) {
        const fwd = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
        const back = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        if (e.key === fwd) go(1);
        if (e.key === back) go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go, dir, images.length]);

  useEffect(() => {
    zoomRef.current?.resetTransform(0);
  }, [i]);

  const img = images[i];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setI(0);
          setOpen(true);
        }}
        className="map-frame group block w-full text-start"
        aria-label={`${labels.open}: ${title}`}
      >
        <span className={`map-neatline relative block ${aspect} overflow-hidden`}>
          <img
            src={card.src720}
            srcSet={card.src !== card.src720 ? `${card.src720} 720w, ${card.src} 1400w` : undefined}
            sizes={sizes}
            width={card.w}
            height={card.h}
            alt={card.alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${compact ? "object-cover" : "object-contain p-2"}`}
          />
          <span className={`absolute bottom-2.5 end-2.5 inline-flex items-center gap-1.5 rounded-full bg-night/85 font-medium text-on-night backdrop-blur ${compact ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-[13px]"}`}>
            <svg aria-hidden width={compact ? 13 : 16} height={compact ? 13 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
            </svg>
            {compact ? "" : labels.open}
            {!compact && images.length > 1 ? ` (${images.length})` : ""}
          </span>
        </span>
      </button>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          tabIndex={-1}
          className="viewer-enter fixed inset-0 z-50 flex flex-col bg-[#101416] text-[#eef2f1] outline-none"
          dir={dir}
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{title}</p>
              <p className="truncate text-xs text-[#a6b1b3]">
                {img.caption}
                {images.length > 1 ? `  ${i + 1}/${images.length}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => zoomRef.current?.resetTransform()}
              className="rounded-md px-3 py-2 text-sm text-[#cfd8d7] hover:bg-white/10"
            >
              {labels.reset}
            </button>
            <button
              type="button"
              onClick={close}
              className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20"
            >
              {labels.close}
            </button>
          </div>

          <div className="relative min-h-0 flex-1" dir="ltr">
            <TransformWrapper ref={zoomRef} minScale={1} maxScale={8} centerOnInit doubleClick={{ mode: "toggle", step: 2.5 }} wheel={{ step: 0.15 }}>
              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%" }}>
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.caption}
                  width={img.w}
                  height={img.h}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div className="flex items-center justify-between gap-3 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-2">
            <p className="text-xs text-[#a6b1b3]">{labels.hint}</p>
            {images.length > 1 && (
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
                  {labels.prev}
                </button>
                <button type="button" onClick={() => go(1)} className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
                  {labels.next}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
