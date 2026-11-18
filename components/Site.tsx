import MapViewer from "./MapViewer";
import Effects from "./Effects";
import Layers from "./Layers";
import {
  type Lang,
  person,
  contact,
  projects,
  mapGallery,
  services,
  skills,
  languages,
  publications,
  nameNote,
  experience,
  award,
  education,
  certifications,
  photoCredits,
  ui,
} from "@/content/site";

function pick(s: string, lang: Lang) {
  if (!s.includes("|")) return s;
  const [ar, en] = s.split("|");
  return lang === "ar" ? ar : en;
}

type IconName = "wa" | "phone" | "mail" | "card" | "doc" | "in";
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "wa":
      return (
        <svg {...c}>
          <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
          <path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...c}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...c}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "card":
      return (
        <svg {...c}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
          <path d="M19 3v5M16.5 5.5h5" />
        </svg>
      );
    case "doc":
      return (
        <svg {...c}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M12 11v6M9.5 14.5L12 17l2.5-2.5" />
        </svg>
      );
    case "in":
      return (
        <svg {...c}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
        </svg>
      );
  }
}

function Photo({ id, alt, className, sizes }: { id: string; alt: string; className?: string; sizes: string }) {
  return (
    <img
      src={`/img/photo-${id}-800.webp`}
      srcSet={`/img/photo-${id}-800.webp 800w, /img/photo-${id}.webp 1600w`}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}


// Topographic contour rings drawn around the cover portrait (decorative, no real coordinates)
function ringPaths(n = 9) {
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const r0 = 150 + i * 42;
    let d = "";
    for (let j = 0; j <= 120; j++) {
      const th = (j / 120) * 2 * Math.PI;
      const r = r0 * (1 + 0.05 * Math.sin(3 * th + i * 0.8) + 0.035 * Math.sin(5 * th + i * 1.7) + 0.02 * Math.sin(2 * th - i));
      d += `${j ? "L" : "M"}${(500 + r * Math.cos(th)).toFixed(1)} ${(500 + r * Math.sin(th) * 0.92).toFixed(1)}`;
    }
    out.push(d + "Z");
  }
  return out;
}

function Rings({ className }: { className?: string }) {
  const paths = ringPaths();
  return (
    <svg aria-hidden viewBox="0 0 1000 1000" className={className} fill="none">
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          className="ring"
          style={{ animationDelay: `${300 + i * 110}ms` }}
          stroke={i % 4 === 3 ? "#c4662c" : "#c9a370"}
          strokeWidth={i % 4 === 3 ? 2.2 : 1.1}
          strokeOpacity={i % 4 === 3 ? 0.75 : 0.42 - i * 0.025}
        />
      ))}
    </svg>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  const t = <K extends { ar: string; en: string }>(o: K) => o[lang];
  const other = lang === "ar" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const sep = lang === "ar" ? "، " : ", ";

  const statusTone = (s: string) =>
    /Published/.test(s) ? "bg-leaf/12 text-leaf" : /prep/.test(s) ? "bg-copper/12 text-copper" : "bg-sky-soft text-sky";

  // Numbered, bilingual section heading: like a page of a printed atlas
  const Head = ({ n, o, dark }: { n: string; o: { ar: string; en: string }; dark?: boolean }) => (
    <div className="reveal">
      <p className={`flex items-center gap-4 text-[12px] font-semibold tracking-[0.22em] ${dark ? "text-sand" : "text-copper"}`}>
        <span className="font-[family-name:Anton] text-[1.35rem] tracking-normal">{n}</span>
        <span aria-hidden className={`h-px flex-1 ${dark ? "bg-on-night/20" : "bg-ink/15"}`} />
        <span dir="ltr" className={dark ? "text-on-night/50" : "text-ink-soft/70"}>ALSUMAIRI · PORTFOLIO</span>
      </p>
      <h2 className={`mt-5 text-[2.35rem] font-extrabold leading-[1.15] sm:text-6xl ${dark ? "text-on-night" : ""}`}>{o[lang]}</h2>
      <p lang={other} dir={other === "ar" ? "rtl" : "ltr"} style={{ textAlign: lang === "ar" ? "right" : "left" }} className={`mt-2 text-[15px] font-semibold sm:text-lg ${dark ? "text-sand" : "text-copper"}`}>
        {o[other]}
      </p>
    </div>
  );

  const labels = { open: t(ui.openMap), close: t(ui.close), prev: t(ui.prev), next: t(ui.next), hint: t(ui.zoomHint), reset: t(ui.resetZoom) };

  const layerItems = projects.map((p) => ({
    id: p.id,
    title: t(p.title),
    status: t(p.status),
    statusTone: statusTone(p.status.en),
    highlight: p.highlight ? t(p.highlight) : undefined,
    line: t(p.line),
    tools: p.tools,
    link: p.link ? { href: p.link.href, label: t(p.link.label) } : undefined,
    credit: p.credit ? t(p.credit) : undefined,
    card: { ...p.card, alt: t(p.card.alt) },
    images: p.gallery.map((g) => ({ src: g.src, w: g.w, h: g.h, caption: t(g.caption) })),
  }));

  const btnGhostDark = "flex items-center gap-3 rounded-2xl bg-white/8 px-5 py-4 font-semibold no-underline ring-1 ring-white/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15";

  return (
    <div className="bg-paper">
      <Effects />
      {/* Header: floating glass pill */}
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
        <div className="glass mx-auto flex max-w-6xl items-center gap-3 rounded-full py-2 pe-2 ps-3 sm:ps-4">
          <a href="#top" className="flex items-center gap-2.5 font-semibold no-underline">
            <img src="/img/logo-mark.webp" alt="" width={240} height={214} className="h-9 w-auto" />
            <span>{t(person.name)}</span>
          </a>
          <nav className="ms-auto hidden items-center gap-1 md:flex" aria-label={lang === "ar" ? "الأقسام" : "Sections"}>
            {(["about", "maps", "services", "contact"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="rounded-full px-4 py-1.5 text-[15px] text-ink-soft no-underline transition-colors hover:bg-surface hover:text-ink">
                {t(ui.nav[k])}
              </a>
            ))}
          </nav>
          <a
            href={t(ui.langHref)}
            hrefLang={other}
            lang={other}
            className="ms-auto rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper no-underline transition-transform hover:scale-[1.04] md:ms-2"
          >
            {t(ui.langSwitch)}
          </a>
        </div>
      </header>

      <main id="top">
        {/* 01 Cover (dark): portrait over the giant word, contour rings behind */}
        <section className="cover-bg relative isolate overflow-hidden text-on-night">
          <div aria-hidden className="graticule-dark absolute inset-0 -z-10" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Phone */}
            <div className="flex flex-col pb-10 pt-24 lg:hidden">
              <p className={`word-up pt-[0.12em] text-center leading-[1] atlas-en text-[22.5vw]`} aria-hidden>
                {t(ui.atlas)}
              </p>
              <div className="relative mx-auto -mt-[7vw] w-[92%] max-w-[460px]">
                <Rings className="absolute left-1/2 top-[40%] -z-0 w-[175%] max-w-none -translate-x-1/2 -translate-y-1/2" />
                <img src="/img/portrait-760.webp" alt={t(person.name)} width={760} height={760} fetchPriority="high" className="rise relative w-full" />
              </div>
              <div className="relative -mt-14 text-center">
                <p className="fade-in inline-flex items-center gap-2 rounded-full bg-leaf/25 px-3.5 py-1 text-[13px] font-semibold text-[#bfe3a6] ring-1 ring-[#bfe3a6]/25">
                  <span aria-hidden className="pulse-dot size-1.5 rounded-full bg-[#9fe08a] text-[#9fe08a]" />
                  {t(ui.available)}
                </p>
                <h1 className="fade-in mt-3 text-[2.4rem] font-extrabold leading-[1.2]">{t(person.name)}</h1>
                <p className="fade-in mt-2 text-[15.5px] font-semibold text-sand">{t(person.title)}</p>
                <p className="fade-in mt-2 text-[13px] text-on-night/70">{person.tags.map((g) => t(g)).join("  ·  ")}</p>
                <div className="fade-in mt-7 flex gap-3">
                  <a href="#contact" className="flex-1 rounded-full bg-copper py-3 text-center font-semibold text-white no-underline shadow-lg shadow-black/30">
                    {t(ui.requestConsult)}
                  </a>
                  <a href="#maps" className="flex-1 rounded-full bg-white/8 py-3 text-center font-semibold text-on-night no-underline ring-1 ring-white/30">
                    {t(ui.viewMaps)}
                  </a>
                </div>
                <p className="fade-in mt-6 flex items-center justify-center gap-3 text-[13px] text-on-night/65">
                  <span><b className="font-[family-name:var(--font-display)] text-lg text-sand">+50</b> {t(ui.mapsBadge)}</span>
                  <span aria-hidden className="size-1 rounded-full bg-on-night/40" />
                  <span>{t(ui.paperBadge)} · BMC</span>
                </p>
              </div>
            </div>

            {/* Desktop */}
            <div className="relative hidden h-[100svh] min-h-[720px] max-h-[1000px] lg:block">
              <p aria-hidden className={`word-up pointer-events-none absolute inset-x-0 top-[5%] select-none pt-[0.18em] text-center leading-[1] atlas-en text-[min(18vw,16rem)]`}>
                {t(ui.atlas)}
              </p>
              <div className="absolute inset-0 grid grid-cols-[1fr_min(42vw,74svh,660px)_1fr] items-end gap-6">
                <div className="relative z-10 pb-14 [text-shadow:0_2px_18px_rgba(20,26,18,.7)]">
                  <p className="fade-in inline-flex items-center gap-2.5 rounded-full bg-leaf/25 px-4 py-1.5 text-[14px] font-semibold text-[#bfe3a6] ring-1 ring-[#bfe3a6]/25">
                    <span aria-hidden className="pulse-dot size-2 rounded-full bg-[#9fe08a] text-[#9fe08a]" />
                    {t(ui.available)}
                  </p>
                  <h1 className="fade-in mt-5 text-[2.6rem] font-extrabold leading-[1.15] xl:text-[3.3rem]">{t(person.name)}</h1>
                  <p className="fade-in mt-3 text-[17px] font-semibold leading-snug text-sand">{t(person.title)}</p>
                  <ul className="fade-in mt-4 flex flex-wrap gap-1.5">
                    {person.tags.map((g, k) => (
                      <li key={k} className="rounded-full bg-white/8 px-3 py-1 text-[13px] font-medium text-on-night/85 ring-1 ring-white/15">{t(g)}</li>
                    ))}
                  </ul>
                  <div className="fade-in mt-8 flex flex-wrap gap-3">
                    <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 font-semibold text-white no-underline shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-copper-strong">
                      {t(ui.requestConsult)}
                      <span aria-hidden className="transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1">{lang === "ar" ? "←" : "→"}</span>
                    </a>
                    <a href="#maps" className="rounded-full bg-white/8 px-6 py-3.5 font-semibold text-on-night no-underline ring-1 ring-white/30 transition-colors hover:bg-white/15">
                      {t(ui.viewMaps)}
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Rings className="absolute left-1/2 top-[42%] w-[140%] max-w-none opacity-80 -translate-x-1/2 -translate-y-1/2" />
                  <img src="/img/portrait.webp" alt={t(person.name)} width={1254} height={1254} fetchPriority="high" className="rise relative w-full" />
                </div>
                <div className="flex flex-col items-end gap-4 pb-24 rtl:items-start">
                  <div className="fade-in float-a rounded-2xl bg-white/8 px-5 py-4 ring-1 ring-white/15 backdrop-blur">
                    <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-sand" data-count="50" data-prefix="+">+50</p>
                    <p className="text-[13px] font-medium text-on-night/75">{t(ui.mapsBadge)}</p>
                  </div>
                  <div className="fade-in float-b rounded-2xl bg-white/8 px-5 py-4 ring-1 ring-white/15 backdrop-blur">
                    <p className="text-[12px] font-semibold text-[#bfe3a6]">{t(ui.paperBadge)}</p>
                    <p className="text-[14px] font-medium" dir="ltr">BMC Ecology &amp; Evolution</p>
                  </div>
                </div>
              </div>
              <p className="absolute inset-x-0 bottom-3 flex items-center gap-4 text-[12px] font-semibold tracking-[0.22em] text-on-night/45">
                <span className="font-[family-name:Anton] text-[1.2rem] tracking-normal text-sand">01</span>
                <span aria-hidden className="h-px flex-1 bg-on-night/15" />
                <span dir="ltr">ALSUMAIRI · PORTFOLIO</span>
              </p>
            </div>
          </div>
        </section>
        <div aria-hidden className="h-24 bg-gradient-to-b from-[#1b2318] to-paper sm:h-32" />

        <div className="graticule">
          {/* 02 About */}
          <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16 pt-6 sm:px-6 lg:pb-24">
            <Head n="02" o={ui.aboutTitle} />
            <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <figure className="reveal relative lg:col-span-5">
                <img src="/img/field-v4.webp" alt={lang === "ar" ? "عبدالله في مسح ميداني" : "Abdullah on a field survey"} width={720} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_66%] shadow-2xl shadow-[#5a3712]/20 ring-1 ring-black/5" />
                <img src="/img/mount-a.webp" alt="" width={720} height={1280} loading="lazy" className="absolute -bottom-8 end-[-0.75rem] hidden aspect-[3/4] w-[38%] rounded-2xl border-4 border-paper object-cover shadow-xl shadow-[#5a3712]/25 sm:block lg:end-[-2rem]" />
                <figcaption className="mt-4 flex items-center gap-3 text-[13px] font-semibold text-ink-soft">
                  <span aria-hidden className="h-px w-8 bg-copper" />
                  {t(ui.band)}
                </figcaption>
              </figure>
              <div className="lg:col-span-7">
                <p className="reveal text-[17.5px] leading-loose text-ink-soft">{t(person.profile)}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {person.stats.map((s, k) => (
                    <li key={k} className={`spot reveal d${k + 1} px-5 py-5`}>
                      <p
                        className={`font-[family-name:var(--font-display)] font-extrabold leading-tight text-copper ${(typeof s.n === "string" ? s.n : t(s.n)).length > 8 ? "text-[1.25rem]" : "text-[1.7rem]"}`}
                        {...(typeof s.n === "string" && /^\+\d+$/.test(s.n) ? { "data-count": s.n.slice(1), "data-prefix": "+" } : {})}
                      >
                        {typeof s.n === "string" ? s.n : t(s.n)}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-snug text-ink-soft">{t(s.l)}</p>
                    </li>
                  ))}
                </ul>
                <div className="reveal mt-8 border-t border-ink/10 pt-6">
                  <h3 className="text-lg font-bold">{t(ui.education)}</h3>
                  <ul className="mt-3 space-y-2">
                    {education.map((ed, k) => (
                      <li key={k} className="flex gap-3">
                        <span aria-hidden className="mt-[0.75em] size-2 shrink-0 rotate-45 bg-copper" />
                        <span>
                          <span className="font-semibold">{t(ed.degree)}</span>
                          <span className="text-ink-soft">{sep}{t(ed.place)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tools marquee */}
          <section aria-label={lang === "ar" ? "الأدوات" : "Tools"} className="marquee overflow-hidden border-y border-line bg-paper py-4">
            <div className="marquee-track gap-3" dir="ltr">
              {[0, 1].map((rep) => (
                <ul key={rep} className="flex shrink-0 gap-3 pe-3" aria-hidden={rep === 1}>
                  {Array.from(new Set(skills.flatMap((sk) => sk.tools.map((tool) => pick(tool, "en"))))).map((tool) => (
                    <li key={tool} className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-[14px] font-medium text-ink-soft">
                      {tool}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          {/* 03 Selected work: layers */}
          <section id="maps" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
            <Head n="03" o={ui.maps} />
            <Layers items={layerItems} dir={dir} labels={labels} featured={t(ui.featured)} mapsWord={t(ui.mapsWord)} panelLabel={t(ui.layers)} />

            <div id="gallery" className="mt-24 scroll-mt-20">
              <div className="reveal flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
                <h3 className="text-2xl font-extrabold sm:text-4xl">{t(ui.gallery)}</h3>
                <span className="font-[family-name:Anton] text-2xl text-copper">{mapGallery.length}</span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-x-7 lg:grid-cols-4">
                {mapGallery.map((g) => (
                  <figure key={g.thumb} className="reveal">
                    <MapViewer
                      dir={dir}
                      compact
                      aspect="aspect-square"
                      sizes="(min-width: 1024px) 270px, 50vw"
                      title={t(g.caption)}
                      card={{ src: g.thumb, src720: g.thumb, w: g.tw, h: g.th, alt: t(g.caption) }}
                      images={[{ src: g.full, w: g.w, h: g.h, caption: t(g.caption) }]}
                      labels={labels}
                    />
                    <figcaption className="mt-3.5">
                      <span className="block text-[12px] font-semibold text-copper">{t(g.from)}</span>
                      <span className="block text-[14px] font-medium leading-snug">{t(g.caption)}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Photo band: Abdullah's own endemic-plant field photos */}
        <section aria-label={t(ui.band)} className="relative isolate h-[44vh] min-h-[300px] overflow-hidden bg-night">
          <div aria-hidden className="absolute inset-0 -z-10 grid grid-cols-3">
            {["euphorbia-tower", "euphorbia-cliff", "euphorbia-boulders"].map((id) => (
              <img key={id} src={`/plants/${id}-band.webp`} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            ))}
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141a12]/80 via-[#141a12]/15 to-transparent" />
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
            <p className="text-3xl font-extrabold text-white [text-shadow:0_2px_16px_rgba(0,0,0,.35)] sm:text-5xl">{t(ui.band)}</p>
          </div>
        </section>

        <div className="graticule">
          {/* 04 Collaboration */}
          <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
            <Head n="04" o={ui.services} />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {services.map((s, k) => (
                <div key={s.photo} className={`reveal ${k % 3 === 1 ? "d1" : k % 3 === 2 ? "d2" : ""} group relative isolate aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-night sm:aspect-[4/3]`}>
                  <Photo id={s.photo} alt="" sizes="(min-width:1024px) 380px, 50vw" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141a12]/90 via-[#141a12]/35 to-transparent" />
                  <span aria-hidden className="absolute start-4 top-4 font-[family-name:Anton] text-lg text-white/70 sm:start-6 sm:top-5">{String(k + 1).padStart(2, "0")}</span>
                  <div className="flex h-full flex-col justify-end p-4 text-white sm:p-6">
                    <h3 className="text-[16px] font-bold leading-snug sm:text-xl">{t(s.title)}</h3>
                    <p className="mt-1 max-h-0 overflow-hidden text-[13px] leading-snug text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 sm:text-[14.5px] max-lg:max-h-24 max-lg:opacity-100">{t(s.line)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Experience & skills */}
          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
            <Head n="05" o={ui.expSkills} />
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <div className="spot reveal p-6 sm:p-8 lg:col-span-7">
                <h3 className="text-xl font-bold">{t(ui.experience)}</h3>
                <ol className="mt-8 space-y-7 border-s-2 border-sky/25 ps-6">
                  {experience.map((e, k) => (
                    <li key={k} className="relative">
                      <span aria-hidden className={`absolute -start-[1.95rem] top-1.5 size-3.5 rounded-full border-2 border-surface ${k === 0 ? "bg-copper" : "bg-sky"}`} />
                      <p className="text-sm font-medium text-copper">{t(e.period)}</p>
                      <p className="text-lg font-bold">{t(e.role)}</p>
                      <p className="text-ink-soft">{t(e.org)}</p>
                      <ul className="mt-2 space-y-1 text-[15px]">
                        {e.points.map((pt, j) => (
                          <li key={j} className="flex gap-2">
                            <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-sky/60" />
                            <span>{t(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="spot reveal d1 p-6 sm:p-8 lg:col-span-5">
                <h3 className="text-xl font-bold">{t(ui.skills)}</h3>
                <ul className="mt-8 space-y-5">
                  {skills.map((s, k) => (
                    <li key={k}>
                      <p className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-semibold">{t(s.group)}</span>
                        {s.href ? (
                          <a href={s.href} target="_blank" rel="noopener" className="text-[13px] font-medium text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky">{t(s.usedIn)} ↗</a>
                        ) : (
                          <span className="text-[13px] text-sky">{t(s.usedIn)}</span>
                        )}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {s.tools.map((tool) => (
                          <li key={tool} className="rounded-full bg-paper px-3 py-1 text-[13.5px] ring-1 ring-line">
                            {pick(tool, lang)}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  <li>
                    <span className="font-semibold">{t(ui.langs)}: </span>
                    <span className="text-ink-soft">{languages.map((l) => `${t(l.name)} (${t(l.level)})`).join(sep)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 06 Research & certifications */}
          <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
            <Head n="06" o={ui.researchCerts} />
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <div className="spot reveal p-6 sm:p-8 lg:col-span-7">
                <h3 className="text-xl font-bold">{t(ui.research)}</h3>
                <p className="mt-2 text-sm text-ink-soft" dir="auto">{t(nameNote)}</p>
                <ul className="mt-6 space-y-5">
                  {publications.map((p, k) => (
                    <li key={k} className="flex gap-3">
                      <span className={`mt-0.5 h-fit shrink-0 rounded-full px-2.5 py-0.5 text-[12px] font-medium ${k === 0 ? "bg-leaf/12 text-leaf" : "bg-paper text-ink-soft ring-1 ring-line"}`}>
                        {t(p.status)}
                      </span>
                      <span dir="ltr" lang="en" className="text-[14.5px] leading-snug" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noopener" className="font-medium text-sky no-underline hover:underline">
                            {p.title}
                          </a>
                        ) : (
                          <span className="font-medium">{p.title}</span>
                        )}
                        {p.authors && (
                          <span className="mt-1 block text-[13px] text-ink">
                            {p.authors.split(", ").map((au, j, arr) => (
                              <span key={j} className={au === "Al-otaibi A" ? "font-semibold text-copper" : ""}>
                                {au}
                                {j < arr.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </span>
                        )}
                        <span className="block text-[13px] text-ink-soft">{p.venue}</span>
                        {p.orgs && (
                          <span dir={dir} lang={lang} className="mt-1 block text-[13px] text-sky">
                            {t(p.orgs)}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={award.href} target="_blank" rel="noopener" className="mt-8 flex items-center gap-4 rounded-2xl bg-paper p-4 no-underline ring-1 ring-line hover:ring-copper">
                  <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-copper/12 text-xl">🏆</span>
                  <span>
                    <span className="block font-semibold">{t(award.title)}</span>
                    <span className="block text-sm text-ink-soft">{t(award.org)}</span>
                  </span>
                </a>
              </div>

              <div className="spot reveal d1 p-6 sm:p-8 lg:col-span-5">
                <h3 className="flex items-baseline justify-between text-xl font-bold">
                  {t(ui.certs)}
                  <span className="font-[family-name:Anton] text-2xl font-normal text-copper">{certifications.length}</span>
                </h3>
                <ul className="mt-6 grid gap-2">
                  {certifications.slice(0, 6).map((c, k) => (
                    <li key={k} className="rounded-xl bg-paper px-4 py-3 ring-1 ring-line">
                      <p className="text-[15px] font-medium leading-snug">{t(c.name)}</p>
                      <p className="text-[12.5px] text-ink-soft">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
                <details className="mt-3">
                  <summary className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[15px] font-medium text-sky hover:bg-paper">
                    {t(ui.allCerts)} ({certifications.length})
                    <svg className="chev transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <ul className="mt-2 grid gap-2">
                    {certifications.slice(6).map((c, k) => (
                      <li key={k} className="rounded-xl bg-paper px-4 py-3 ring-1 ring-line">
                        <p className="text-[15px] font-medium leading-snug">{t(c.name)}</p>
                        <p className="text-[12.5px] text-ink-soft">{c.issuer}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </section>
        </div>

        {/* 07 Thank you (dark): closing page with every way to reach him */}
        <div aria-hidden className="h-24 bg-gradient-to-b from-paper to-[#1b2318] sm:h-32" />
        <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden bg-[#141a12] text-on-night">
          <img src="/img/mount-b.webp" alt="" width={720} height={1280} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1b2318] via-[#141a12]/70 to-[#141a12]" />
          <div aria-hidden className="graticule-dark absolute inset-0 -z-10" />
          <Rings className="pointer-events-none absolute -end-[30%] top-[10%] -z-10 w-[110%] max-w-[1100px] opacity-50 lg:-end-[12%] lg:w-[70%]" />
          <div className="mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-6 lg:pb-14 lg:pt-16">
            <p className="reveal flex items-center gap-4 text-[12px] font-semibold tracking-[0.22em] text-on-night/45">
              <span className="font-[family-name:Anton] text-[1.35rem] tracking-normal text-sand">07</span>
              <span aria-hidden className="h-px flex-1 bg-on-night/15" />
              <span dir="ltr">ALSUMAIRI · PORTFOLIO</span>
            </p>
            <h2 className={`reveal mt-8 leading-[0.95] ${lang === "ar" ? "atlas-ar text-[26vw] sm:text-[11rem]" : "atlas-en text-[24vw] sm:text-[11rem]"}`}>{t(ui.thanks)}</h2>
            <p lang={other} className="reveal mt-3 text-lg font-semibold text-sand">{ui.thanks[other]}</p>
            <p className="reveal mt-6 max-w-xl text-lg text-on-night/85">{t(ui.contactLine)}</p>
            <div className="reveal mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              <a href={contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-[#fbf7ec] px-5 py-4 font-semibold text-[#1f281d] no-underline transition-all hover:-translate-y-0.5 hover:bg-white">
                <span className="text-leaf"><Icon name="wa" size={22} /></span>
                {t(ui.whatsapp)}
                <span dir="ltr" className="ms-auto text-sm font-normal text-[#5d6555]">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`} className={btnGhostDark}>
                <Icon name="mail" size={22} />
                <span dir="ltr" className="truncate text-[15px]">{contact.email}</span>
              </a>
              <a href={contact.vcard} download className={btnGhostDark}>
                <Icon name="card" size={22} />
                {t(ui.saveContact)}
              </a>
              <div className="flex gap-3">
                <a href={contact.cv} target="_blank" rel="noopener" className={`${btnGhostDark} flex-1`}>
                  <Icon name="doc" size={22} />
                  {t(ui.downloadCv)}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="grid place-items-center rounded-2xl bg-white/8 px-5 ring-1 ring-white/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15">
                  <Icon name="in" size={22} />
                </a>
              </div>
            </div>

            <footer className="mt-20 flex flex-col items-center gap-4 border-t border-on-night/15 pt-8 text-center sm:flex-row sm:text-start">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-paper p-2">
                <img src="/img/logo-mark.webp" alt="ALSUMAIRI" width={240} height={214} loading="lazy" className="h-auto w-full" />
              </span>
              <p className="text-sm text-on-night/75">{t(person.name)}{sep}{t(ui.footer)}</p>
              <p className="text-[11px] text-on-night/45 sm:ms-auto" dir="ltr">Photos: {photoCredits}</p>
            </footer>
          </div>
        </section>
      </main>

      {/* Phone action bar */}
      <nav aria-label={lang === "ar" ? "تواصل سريع" : "Quick contact"} className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <ul className="mx-auto grid max-w-md grid-cols-4">
          {[
            { href: contact.whatsapp, icon: "wa" as const, label: t(ui.whatsapp), ext: true },
            { href: `tel:${contact.phone}`, icon: "phone" as const, label: t(ui.call) },
            { href: `mailto:${contact.email}`, icon: "mail" as const, label: t(ui.email) },
            { href: contact.vcard, icon: "card" as const, label: t(ui.saveContact), dl: true },
          ].map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                {...(a.ext ? { target: "_blank", rel: "noopener" } : {})}
                {...(a.dl ? { download: true } : {})}
                className="flex flex-col items-center gap-0.5 py-2 text-[11.5px] font-medium text-ink no-underline active:bg-surface"
              >
                <span className="text-sky">
                  <Icon name={a.icon} />
                </span>
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
