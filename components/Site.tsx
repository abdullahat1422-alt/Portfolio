import MapViewer from "./MapViewer";
import Effects from "./Effects";
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

export default function Site({ lang }: { lang: Lang }) {
  const t = <K extends { ar: string; en: string }>(o: K) => o[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const sep = lang === "ar" ? "، " : ", ";

  const statusTone = (s: string) =>
    /Published/.test(s) ? "bg-leaf/12 text-leaf" : /prep/.test(s) ? "bg-copper/12 text-copper" : "bg-sky-soft text-sky";

  return (
    <div className="pb-20 lg:pb-0">
      <Effects />
      {/* Header: floating glass pill */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
        <div className="glass mx-auto flex max-w-6xl items-center gap-3 rounded-full py-2 pe-2 ps-3 sm:ps-4">
          <a href="#top" className="flex items-center gap-2.5 font-semibold no-underline">
            <img src="/img/logo-mark.webp" alt="" width={240} height={214} className="h-9 w-auto" />
            <span>{t(person.name)}</span>
          </a>
          <nav className="ms-auto hidden items-center gap-1 md:flex" aria-label={lang === "ar" ? "الأقسام" : "Sections"}>
            {(["maps", "services", "about", "contact"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="rounded-full px-4 py-1.5 text-[15px] text-ink-soft no-underline transition-colors hover:bg-surface hover:text-ink">
                {t(ui.nav[k])}
              </a>
            ))}
          </nav>
          <a
            href={t(ui.langHref)}
            hrefLang={lang === "ar" ? "en" : "ar"}
            lang={lang === "ar" ? "en" : "ar"}
            className="ms-auto rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper no-underline transition-transform hover:scale-[1.04] md:ms-2"
          >
            {t(ui.langSwitch)}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero, phone: text on the sky of the field photo */}
        <section className="relative isolate overflow-hidden lg:hidden">
          <img src="/img/field.webp" alt="" width={720} height={1280} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_62%]" />
          <div aria-hidden className="hero-veil absolute inset-0 -z-10" />
          <div className="flex min-h-[calc(100svh-8.5rem)] flex-col justify-between px-5 pb-8 pt-10 text-white">
            <div className="[text-shadow:0_1px_12px_rgba(0,30,60,.35)]">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[13px] font-semibold text-white backdrop-blur">
                <span aria-hidden className="pulse-dot size-1.5 rounded-full bg-[#9fe08a] text-[#9fe08a]" />
                {t(ui.available)}
              </p>
              <p className="text-[15px] font-medium text-white/90">{t(person.title)}</p>
              <p className="mt-1 text-[13px] text-white/85">{person.tags.map((g) => t(g)).join("  ·  ")}</p>
              <h1 className="mt-2 text-[2.3rem] font-extrabold leading-[1.3]">{t(person.name)}</h1>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/90">{t(person.lead)}</p>
            </div>
            <div className="flex gap-3">
              <a href="#contact" className="flex-1 rounded-full bg-copper py-3 text-center font-semibold text-white no-underline shadow-lg shadow-black/15">
                {t(ui.requestConsult)}
              </a>
              <a href="#maps" className="flex-1 rounded-full border border-white/70 bg-white/10 py-3 text-center font-semibold text-white no-underline backdrop-blur">
                {t(ui.viewMaps)}
              </a>
            </div>
          </div>
        </section>

        {/* Hero, desktop: split with topographic backdrop */}
        <section className="relative isolate hidden overflow-hidden lg:block">
          <div aria-hidden className="topo pointer-events-none absolute -inset-10 -z-10" />
          <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-12 px-6 pb-20 pt-14">
            <div className="col-span-6">
              <p className="reveal inline-flex items-center gap-2.5 rounded-full border border-leaf/25 bg-leaf/10 px-4 py-1.5 text-[14px] font-semibold text-leaf">
                <span aria-hidden className="pulse-dot size-2 rounded-full bg-leaf" />
                {t(ui.available)}
              </p>
              <h1 className="reveal d1 ink-grad mt-6 pb-2 text-[3.8rem] font-extrabold leading-[1.2]">{t(person.name)}</h1>
              <ul className="reveal d1 mt-4 flex flex-wrap gap-2">
                <li className="rounded-full bg-sky-soft px-4 py-1.5 text-[15px] font-medium text-sky">{t(person.title)}</li>
                {person.tags.map((g, k) => (
                  <li key={k} className="rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-[14px] font-medium text-ink-soft">{t(g)}</li>
                ))}
              </ul>
              <p className="reveal d2 mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">{t(person.lead)}</p>
              <div className="reveal d3 mt-9 flex gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 font-semibold text-white no-underline shadow-lg shadow-copper/30 transition-all hover:-translate-y-0.5 hover:bg-copper-strong hover:shadow-xl hover:shadow-copper/35">
                  {t(ui.requestConsult)}
                  <span aria-hidden className="transition-transform group-hover:-translate-x-1 ltr:group-hover:translate-x-1">{lang === "ar" ? "←" : "→"}</span>
                </a>
                <a href="#maps" className="rounded-full border border-line bg-paper/70 px-7 py-3.5 font-semibold no-underline transition-colors hover:bg-surface">
                  {t(ui.viewMaps)}
                </a>
              </div>
            </div>
            <div className="reveal d2 relative col-span-6">
              <img src="/img/field.webp" alt={lang === "ar" ? "عبدالله في مسح ميداني" : "Abdullah on a field survey"} width={720} height={1280} fetchPriority="high" className="ms-auto h-[580px] w-[430px] rounded-[2.25rem] object-cover object-[50%_60%] shadow-2xl shadow-[#5a3712]/25 ring-1 ring-black/5" />
              <div className="glass float-a absolute bottom-16 start-6 rounded-2xl px-5 py-3.5">
                <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-copper" data-count="50" data-prefix="+">+50</p>
                <p className="text-[13px] font-medium text-ink-soft">{t(ui.mapsBadge)}</p>
              </div>
              <div className="glass float-b absolute end-[-10px] top-14 rounded-2xl px-4 py-3">
                <p className="text-[12px] font-semibold text-leaf">{t(ui.paperBadge)}</p>
                <p className="text-[13px] font-medium" dir="ltr">BMC Ecology &amp; Evolution</p>
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

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <ul className="grid gap-3 sm:grid-cols-3">
            {person.stats.map((s, k) => (
              <li key={k} className={`spot reveal d${k + 1} px-6 py-5`}>
                <p
                  className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-copper"
                  {...(typeof s.n === "string" && /^\+\d+$/.test(s.n) ? { "data-count": s.n.slice(1), "data-prefix": "+" } : {})}
                >
                  {typeof s.n === "string" ? s.n : t(s.n)}
                </p>
                <p className="mt-1.5 text-[14px] leading-snug text-ink-soft">{t(s.l)}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Work */}
        <section id="maps" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="reveal text-3xl font-bold sm:text-5xl">{t(ui.maps)}</h2>

          {(() => {
            const labels = { open: t(ui.openMap), close: t(ui.close), prev: t(ui.prev), next: t(ui.next), hint: t(ui.zoomHint), reset: t(ui.resetZoom) };
            const Meta = ({ p, big }: { p: (typeof projects)[number]; big?: boolean }) => (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  {big && <span className="rounded-full bg-copper px-3 py-0.5 text-[13px] font-semibold text-white">{t(ui.featured)}</span>}
                  <span className={`rounded-full px-3 py-0.5 text-[13px] font-medium ${statusTone(p.status.en)}`}>{t(p.status)}</span>
                  {p.highlight && <span className="rounded-full bg-surface px-3 py-0.5 text-[13px] font-medium text-ink ring-1 ring-line">{t(p.highlight)}</span>}
                </div>
                <h3 className={`mt-3 font-bold ${big ? "text-2xl sm:text-3xl" : "text-xl"}`}>{t(p.title)}</h3>
                <p className={`mt-2 text-ink-soft ${big ? "text-[17px] leading-relaxed" : ""}`}>{t(p.line)}</p>
                <p className="mt-2 text-[13px] text-ink-soft/80" dir="ltr" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                  {p.tools.join("  ·  ")}
                </p>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noopener" className="mt-2 inline-block text-[15px] font-semibold text-sky no-underline hover:underline">
                    {t(p.link.label)} ↗
                  </a>
                )}
                {p.credit && <p className="mt-1 text-[11px] text-ink-soft/70">{t(p.credit)}</p>}
              </>
            );
            const [first, ...rest] = projects;
            return (
              <>
                <article id={first.id} className="spot reveal mt-10 grid scroll-mt-24 items-center gap-8 p-4 sm:p-6 lg:grid-cols-12 lg:gap-12 lg:p-8">
                  <div className="lg:col-span-7">
                    <MapViewer
                      dir={dir}
                      title={t(first.title)}
                      aspect="aspect-[5/4]"
                      sizes="(min-width: 1024px) 680px, 100vw"
                      card={{ ...first.card, alt: t(first.card.alt) }}
                      images={first.gallery.map((g) => ({ src: g.src, w: g.w, h: g.h, caption: t(g.caption) }))}
                      labels={labels}
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <Meta p={first} big />
                  </div>
                </article>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {rest.map((p, idx) => (
                    <article
                      key={p.id}
                      id={p.id}
                      className={`spot reveal ${idx % 2 ? "d1" : ""} scroll-mt-24 p-4 sm:p-5 ${rest.length % 2 === 1 && idx === rest.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]" : ""}`}
                    >
                      <MapViewer
                        dir={dir}
                        title={t(p.title)}
                        card={{ ...p.card, alt: t(p.card.alt) }}
                        images={p.gallery.map((g) => ({ src: g.src, w: g.w, h: g.h, caption: t(g.caption) }))}
                        labels={labels}
                      />
                      <div className="mt-5 px-1 pb-1">
                        <Meta p={p} />
                      </div>
                    </article>
                  ))}
                </div>

                {/* Map gallery */}
                <div id="gallery" className="mt-24 scroll-mt-20">
                  <h2 className="reveal text-3xl font-bold sm:text-5xl">{t(ui.gallery)}</h2>
                  <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-x-7 lg:grid-cols-4">
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
              </>
            );
          })()}
        </section>

        {/* Photo band: three of Abdullah's own endemic-plant field photos */}
        <section aria-label={t(ui.band)} className="relative isolate h-[48vh] min-h-[320px] overflow-hidden bg-night">
          <div aria-hidden className="absolute inset-0 -z-10 grid grid-cols-3">
            {["euphorbia-tower", "euphorbia-cliff", "euphorbia-boulders"].map((id) => (
              <img key={id} src={`/plants/${id}-band.webp`} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            ))}
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1b2318]/75 via-[#1b2318]/15 to-transparent" />
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
            <p className="text-3xl font-bold text-white [text-shadow:0_2px_16px_rgba(0,0,0,.35)] sm:text-5xl">{t(ui.band)}</p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="reveal text-3xl font-bold sm:text-5xl">{t(ui.services)}</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {services.map((s, k) => (
              <div key={s.photo} className={`reveal ${k % 3 === 1 ? "d1" : k % 3 === 2 ? "d2" : ""} group relative isolate aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-night sm:aspect-[4/3]`}>
                <Photo id={s.photo} alt="" sizes="(min-width:1024px) 380px, 50vw" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141a12]/90 via-[#141a12]/35 to-transparent" />
                <div className="flex h-full flex-col justify-end p-4 text-white sm:p-6">
                  <h3 className="text-[16px] font-bold leading-snug sm:text-xl">{t(s.title)}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-[13px] leading-snug text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 sm:text-[14.5px] max-lg:max-h-24 max-lg:opacity-100">{t(s.line)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About: experience, skills, research, certificates */}
        <section id="about" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="reveal mb-4 lg:col-span-2">
              <h2 className="text-3xl font-bold sm:text-5xl">{t(ui.aboutTitle)}</h2>
              <p className="mt-5 max-w-3xl text-[17px] leading-loose text-ink-soft">{t(person.profile)}</p>
            </div>
            <div className="spot reveal p-6 sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{t(ui.experience)}</h2>
              <ol className="mt-8 space-y-6 border-s-2 border-sky/30 ps-6">
                {experience.map((e, k) => (
                  <li key={k} className="relative">
                    <span aria-hidden className="absolute -start-[1.95rem] top-1.5 size-3.5 rounded-full border-2 border-paper bg-sky" />
                    <p className="text-sm text-ink-soft">{t(e.period)}</p>
                    <p className="text-lg font-semibold">{t(e.role)}</p>
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

              <a href={award.href} target="_blank" rel="noopener" className="mt-8 flex items-center gap-4 rounded-2xl bg-paper p-4 no-underline ring-1 ring-line hover:ring-copper">
                <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-copper/12 text-xl">🏆</span>
                <span>
                  <span className="block font-semibold">{t(award.title)}</span>
                  <span className="block text-sm text-ink-soft">{t(award.org)}</span>
                </span>
              </a>

              <h3 className="mt-10 text-lg font-semibold">{t(ui.education)}</h3>
              <ul className="mt-3 space-y-2">
                {education.map((ed, k) => (
                  <li key={k}>
                    <span className="font-medium">{t(ed.degree)}</span>
                    <span className="text-ink-soft">{sep}{t(ed.place)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spot reveal p-6 sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{t(ui.skills)}</h2>
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
                  <span className="text-ink-soft">
                    {languages.map((l) => `${t(l.name)} (${t(l.level)})`).join(sep)}
                  </span>
                </li>
              </ul>
            </div>

            <div className="spot reveal p-6 sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{t(ui.research)}</h2>
              <p className="mt-2 text-sm text-ink-soft" dir="auto">{t(nameNote)}</p>
              <ul className="mt-6 space-y-4">
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
            </div>

            <div className="spot reveal p-6 sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{t(ui.certs)}</h2>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
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
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
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

        {/* Contact */}
        <section id="contact" className="reveal relative isolate mx-3 mb-6 scroll-mt-24 overflow-hidden rounded-[2.25rem] text-white sm:mx-6 lg:mx-auto lg:max-w-6xl">
          <Photo id="a1" alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#232c20]/80" />
          <div className="px-6 py-16 sm:px-12 lg:py-24">
            <h2 className="text-4xl font-extrabold sm:text-6xl">{t(ui.contactTitle)}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">{t(ui.contactLine)}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              <a href={contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-[#fbf7ec] px-5 py-4 font-semibold text-[#1f281d] no-underline hover:bg-white">
                <span className="text-leaf"><Icon name="wa" size={22} /></span>
                {t(ui.whatsapp)}
                <span dir="ltr" className="ms-auto text-sm font-normal text-[#5d6555]">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20">
                <Icon name="mail" size={22} />
                <span dir="ltr" className="truncate text-[15px]">{contact.email}</span>
              </a>
              <a href={contact.vcard} download className="flex items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20">
                <Icon name="card" size={22} />
                {t(ui.saveContact)}
              </a>
              <div className="flex gap-3">
                <a href={contact.cv} target="_blank" rel="noopener" className="flex flex-1 items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20">
                  <Icon name="doc" size={22} />
                  {t(ui.downloadCv)}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="grid place-items-center rounded-2xl bg-white/12 px-5 ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20">
                  <Icon name="in" size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#e8dcc4] text-[#4f5a45]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-8 pt-12 text-center sm:px-6">
          <img src="/img/logo-full.webp" alt="ALSUMAIRI" width={640} height={654} loading="lazy" className="h-auto w-36 sm:w-44" />
          <p className="mt-4 text-sm">{t(person.name)}{sep}{t(ui.footer)}</p>
          <p className="mt-6 text-[11px] text-[#7a7a66]" dir="ltr">Photos: {photoCredits}</p>
        </div>
      </footer>

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
