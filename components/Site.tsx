import MapViewer from "./MapViewer";
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
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-semibold no-underline">
            <img src="/img/logo-mark.webp" alt="" width={240} height={214} className="h-11 w-auto" />
            <span>{t(person.name)}</span>
          </a>
          <nav className="ms-auto hidden items-center gap-1 md:flex" aria-label={lang === "ar" ? "الأقسام" : "Sections"}>
            {(["maps", "services", "about", "contact"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="rounded-full px-4 py-1.5 text-[15px] text-ink-soft no-underline hover:bg-surface hover:text-ink">
                {t(ui.nav[k])}
              </a>
            ))}
          </nav>
          <a
            href={t(ui.langHref)}
            hrefLang={lang === "ar" ? "en" : "ar"}
            lang={lang === "ar" ? "en" : "ar"}
            className="ms-auto rounded-full border border-line px-4 py-1.5 text-sm font-medium no-underline hover:bg-surface md:ms-2"
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
              <p className="text-[15px] font-medium text-white/90">{t(person.title)}</p>
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

        {/* Hero, desktop: split */}
        <section className="mx-auto hidden max-w-6xl grid-cols-12 items-center gap-12 px-6 py-16 lg:grid">
          <div className="col-span-6">
            <p className="inline-flex rounded-full bg-sky-soft px-4 py-1.5 text-[15px] font-medium text-sky">{t(person.title)}</p>
            <h1 className="mt-6 text-[3.4rem] font-extrabold leading-[1.25]">{t(person.name)}</h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">{t(person.lead)}</p>
            <div className="mt-9 flex gap-3">
              <a href="#contact" className="rounded-full bg-copper px-7 py-3.5 font-semibold text-white no-underline shadow-lg shadow-copper/25 hover:bg-copper-strong">
                {t(ui.requestConsult)}
              </a>
              <a href="#maps" className="rounded-full border border-line px-7 py-3.5 font-semibold no-underline hover:bg-surface">
                {t(ui.viewMaps)}
              </a>
            </div>
          </div>
          <div className="col-span-6">
            <img src="/img/field.webp" alt={lang === "ar" ? "عبدالله في مسح ميداني" : "Abdullah on a field survey"} width={720} height={1280} fetchPriority="high" className="ms-auto h-[600px] w-[440px] rounded-[2rem] object-cover object-[50%_60%] shadow-2xl shadow-sky/15" />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-6xl divide-y divide-line px-5 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 sm:py-7 sm:rtl:divide-x-reverse">
            {person.stats.map((s, k) => (
              <li key={k} className="flex items-center gap-4 py-4 sm:block sm:px-4 sm:py-0 sm:text-center">
                <p className="w-32 shrink-0 font-[family-name:var(--font-display)] text-2xl font-extrabold text-copper sm:w-auto sm:text-3xl">{typeof s.n === "string" ? s.n : t(s.n)}</p>
                <p className="text-[14px] leading-snug text-ink-soft sm:mt-1.5 sm:text-sm">{t(s.l)}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Work */}
        <section id="maps" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.maps)}</h2>

          {(() => {
            const labels = { open: t(ui.openMap), close: t(ui.close), prev: t(ui.prev), next: t(ui.next), hint: t(ui.zoomHint), reset: t(ui.resetZoom) };
            const Meta = ({ p, big }: { p: (typeof projects)[number]; big?: boolean }) => (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  {big && <span className="rounded-full bg-copper px-3 py-0.5 text-[13px] font-semibold text-white">{t(ui.featured)}</span>}
                  <span className={`rounded-full px-3 py-0.5 text-[13px] font-medium ${statusTone(p.status.en)}`}>{t(p.status)}</span>
                  <span className="rounded-full bg-surface px-3 py-0.5 text-[13px] font-medium text-ink ring-1 ring-line">{t(p.highlight)}</span>
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
                <article id={first.id} className="mt-10 grid scroll-mt-20 items-center gap-8 lg:grid-cols-12 lg:gap-12">
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

                <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
                  {rest.map((p, idx) => (
                    <article
                      key={p.id}
                      id={p.id}
                      className={`scroll-mt-20 ${rest.length % 2 === 1 && idx === rest.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1.25rem)]" : ""}`}
                    >
                      <MapViewer
                        dir={dir}
                        title={t(p.title)}
                        card={{ ...p.card, alt: t(p.card.alt) }}
                        images={p.gallery.map((g) => ({ src: g.src, w: g.w, h: g.h, caption: t(g.caption) }))}
                        labels={labels}
                      />
                      <div className="mt-5">
                        <Meta p={p} />
                      </div>
                    </article>
                  ))}
                </div>

                {/* Map gallery */}
                <div id="gallery" className="mt-24 scroll-mt-20">
                  <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.gallery)}</h2>
                  <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-x-7 lg:grid-cols-4">
                    {mapGallery.map((g) => (
                      <figure key={g.thumb}>
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
        <section id="services" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.services)}</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
            {services.map((s) => (
              <div key={s.photo}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-sea ring-1 ring-line">
                  <Photo id={s.photo} alt="" sizes="(min-width:1024px) 360px, 50vw" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <h3 className="mt-3 text-[17px] font-semibold sm:text-lg">{t(s.title)}</h3>
                <p className="mt-0.5 text-[14px] text-ink-soft sm:text-[15px]">{t(s.line)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About: experience, skills, research, certificates */}
        <section id="about" className="scroll-mt-16 bg-surface">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.aboutTitle)}</h2>
              <p className="mt-5 max-w-3xl text-[17px] leading-loose text-ink-soft">{t(person.profile)}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.experience)}</h2>
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

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.skills)}</h2>
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

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.research)}</h2>
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

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t(ui.certs)}</h2>
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
        <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden text-white">
          <Photo id="a1" alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#232c20]/80" />
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <h2 className="text-3xl font-bold sm:text-5xl">{t(ui.contactTitle)}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">{t(ui.contactLine)}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
              <a href={contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-[#fbf7ec] px-5 py-4 font-semibold text-[#1f281d] no-underline hover:bg-white">
                <span className="text-leaf"><Icon name="wa" size={22} /></span>
                {t(ui.whatsapp)}
                <span dir="ltr" className="ms-auto text-sm font-normal text-[#5d6555]">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur hover:bg-white/20">
                <Icon name="mail" size={22} />
                <span dir="ltr" className="truncate text-[15px]">{contact.email}</span>
              </a>
              <a href={contact.vcard} download className="flex items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur hover:bg-white/20">
                <Icon name="card" size={22} />
                {t(ui.saveContact)}
              </a>
              <div className="flex gap-3">
                <a href={contact.cv} target="_blank" rel="noopener" className="flex flex-1 items-center gap-3 rounded-2xl bg-white/12 px-5 py-4 font-semibold no-underline ring-1 ring-white/25 backdrop-blur hover:bg-white/20">
                  <Icon name="doc" size={22} />
                  {t(ui.downloadCv)}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="grid place-items-center rounded-2xl bg-white/12 px-5 ring-1 ring-white/25 backdrop-blur hover:bg-white/20">
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
