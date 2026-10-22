import MapViewer from "./MapViewer";
import {
  type Lang,
  person,
  contact,
  projects,
  services,
  skills,
  languages,
  publications,
  nameNote,
  experience,
  award,
  education,
  certifications,
  ui,
} from "@/content/site";


function pick(s: string, lang: Lang) {
  if (!s.includes("|")) return s;
  const [ar, en] = s.split("|");
  return lang === "ar" ? ar : en;
}

function Icon({ name }: { name: "wa" | "phone" | "mail" | "card" | "doc" | "in" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "wa":
      return (
        <svg {...common}>
          <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
          <path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
          <path d="M19 3v5M16.5 5.5h5" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M12 11v6M9.5 14.5L12 17l2.5-2.5" />
        </svg>
      );
    case "in":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
        </svg>
      );
  }
}

function statusColor(s: string) {
  if (/منشور|Published/.test(s)) return "var(--rawdha)";
  if (/مكتمل|Completed/.test(s)) return "var(--wadi)";
  if (/مستقلة|Independent/.test(s)) return "var(--copper)";
  return "var(--sand)";
}

export default function Site({ lang }: { lang: Lang }) {
  const t = <K extends { ar: string; en: string }>(o: K) => o[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const visibleCerts = certifications.slice(0, 6);
  const moreCerts = certifications.slice(6);

  return (
    <div className="pb-24 lg:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-basalt/95 text-on-basalt backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-bold no-underline">
            <img src="/img/profile.webp" alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
            <span className="text-[15px]">{t(person.name)}</span>
          </a>
          <nav className="ms-auto hidden items-center gap-1 text-[15px] md:flex" aria-label={lang === "ar" ? "أقسام الصفحة" : "Page sections"}>
            {(["maps", "services", "research", "experience", "contact"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="rounded-md px-3 py-1.5 text-[#c9c3b5] no-underline hover:bg-white/10 hover:text-white">
                {t(ui.nav[k])}
              </a>
            ))}
          </nav>
          <a
            href={t(ui.langHref)}
            hrefLang={lang === "ar" ? "en" : "ar"}
            lang={lang === "ar" ? "en" : "ar"}
            className="ms-auto rounded-md border border-white/25 px-3 py-1.5 text-sm font-medium no-underline hover:bg-white/10 md:ms-2"
          >
            {t(ui.langSwitch)}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero: built like the first slide of the Tuwaiq deck */}
        <section className="relative isolate overflow-hidden bg-basalt text-on-basalt">
          <picture>
            <source media="(max-width: 1023px)" srcSet="/img/hero-tuwaiq-m.webp" />
            <img
              src="/img/hero-tuwaiq.webp"
              srcSet="/img/hero-tuwaiq-900.webp 900w, /img/hero-tuwaiq.webp 1920w"
              sizes="100vw"
              width={1920}
              height={1080}
              alt=""
              fetchPriority="high"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
          </picture>
          <div aria-hidden className="hero-shade absolute inset-0 -z-10" />

          <div className="mx-auto flex min-h-[calc(100svh-7.5rem)] max-w-6xl flex-col justify-end px-4 pb-14 pt-48 sm:px-6 lg:min-h-[680px] lg:justify-center lg:py-28">
            <div className="max-w-xl">
              <p className={`text-[13px] font-bold text-sand sm:text-sm ${lang === "en" ? "uppercase tracking-[0.18em]" : ""}`}>
                {t(person.heroEyebrow)}
              </p>
              <h1 className="mt-4 text-[3rem] leading-[1.1] text-[#f5f0e6] sm:text-6xl lg:text-7xl">{t(person.name)}</h1>
              <p className="mt-4 text-lg font-medium text-[#ece5d6] sm:text-xl">{t(person.title)}</p>
              <p className="mt-4 max-w-lg text-[17px] text-[#c9c3b5]">{t(person.lead)}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-lg bg-sand px-5 py-3 font-medium text-[#1b241f] no-underline hover:bg-[#e4b27e]">
                  {t(ui.requestConsult)}
                </a>
                <a href="#maps" className="rounded-lg border border-white/30 px-5 py-3 font-medium text-[#f5f0e6] no-underline hover:bg-white/10">
                  {t(ui.viewMaps)}
                </a>
              </div>

              <div className="mt-10 flex items-start gap-4">
                <img src="/img/profile.webp" alt="" width={640} height={640} className="size-14 shrink-0 rounded-full object-cover ring-2 ring-white/20" />
                <ul className="space-y-1 text-[14px] text-[#c9c3b5]">
                  {person.facts.map((f, k) => (
                    <li key={k}>{t(f)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="absolute bottom-3 end-4 hidden text-xs text-white/75 sm:block" dir={dir}>
            {t(person.heroImageCaption)}
          </p>
        </section>

        {/* Maps */}
        <section id="maps" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.maps)}</h2>
            <p className="mt-3 text-ink-soft">{t(ui.mapsIntro)}</p>

            <div className="mt-10 space-y-16 lg:space-y-24">
              {projects.map((p, idx) => (
                <article key={p.id} id={p.id} className="grid scroll-mt-20 gap-6 lg:grid-cols-12 lg:items-start lg:gap-12">
                  <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <MapViewer
                      dir={dir}
                      title={t(p.title)}
                      card={{ ...p.card, alt: t(p.card.alt) }}
                      images={p.gallery.map((g) => ({ src: g.src, w: g.w, h: g.h, caption: t(g.caption) }))}
                      labels={{ open: t(ui.openMap), close: t(ui.close), prev: t(ui.prev), next: t(ui.next), hint: t(ui.zoomHint), reset: t(ui.resetZoom) }}
                    />
                    {p.credit && <p className="mt-2 text-xs text-ink-soft">{t(p.credit)}</p>}
                  </div>

                  <div className="lg:col-span-5">
                    <p className={`flex items-center gap-2 text-[13px] font-bold text-copper ${lang === "en" ? "uppercase tracking-[0.14em]" : ""}`}>
                      <span aria-hidden className="size-2 rounded-full" style={{ background: statusColor(p.status.en) }} />
                      {t(p.status)}
                      {lang === "ar" ? "، " : ", "}
                      {p.year}
                    </p>
                    <h3 className="mt-2 text-[1.75rem] leading-snug">{t(p.title)}</h3>
                    <p className="mt-3 text-ink-soft">{t(p.summary)}</p>

                    <div className="mt-5 rounded-md bg-sea px-4 py-3">
                      <p className="text-sm font-bold text-copper">{t(ui.result)}</p>
                      <p className="mt-1 font-medium">{t(p.result)}</p>
                    </div>

                    <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
                      {p.facts.map((f, k) => (
                        <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                          <dt className="text-ink-soft">{t(f.k)}</dt>
                          <dd>{t(f.v)}</dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="mt-5 flex flex-wrap gap-2" dir="ltr" aria-label={lang === "ar" ? "الأدوات" : "Tools"}>
                      {p.tools.map((tool) => (
                        <li key={tool} className="rounded-md bg-paper px-2.5 py-1 text-[13px] text-ink-soft ring-1 ring-line">
                          {tool}
                        </li>
                      ))}
                    </ul>

                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noopener" className="mt-6 inline-block font-medium text-copper underline underline-offset-4">
                        {t(p.link.label)}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.services)}</h2>
            <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
              {services.map((s, k) => (
                <div key={k} className="border-t-2 border-copper pt-4">
                  <h3 className="text-[1.3rem] leading-snug">{t(s.title)}</h3>
                  <p className="mt-2 text-ink-soft">{t(s.body)}</p>
                  <p className="mt-3 text-sm">
                    <span className="text-ink-soft">{t(ui.example)} </span>
                    {s.proof.map((pr, j) => (
                      <span key={j}>
                        {j > 0 && (lang === "ar" ? "، " : ", ")}
                        <a
                          href={pr.href}
                          {...(pr.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                          className="font-medium text-wadi underline decoration-wadi/40 underline-offset-4 hover:decoration-wadi"
                        >
                          {t(pr.label)}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.skills)}</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {skills.map((s, k) => (
                <div key={k} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                  <h3 className="font-bold md:col-span-4">{t(s.group)}</h3>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1.5 md:col-span-5">
                    {s.tools.map((tool) => (
                      <li key={tool} className="rounded-md bg-paper px-2.5 py-1 text-[14px]">
                        {pick(tool, lang)}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-ink-soft md:col-span-3">
                    {t(ui.usedIn)}: <span className="text-ink">{t(s.usedIn)}</span>
                  </p>
                </div>
              ))}
              <div className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                <h3 className="font-bold md:col-span-4">{t(ui.langs)}</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 md:col-span-8">
                  {languages.map((l) => (
                    <li key={l.name.en}>
                      {t(l.name)}: <span className="text-ink-soft">{t(l.level)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.research)}</h2>
            <p className="mt-3 text-ink-soft">{t(nameNote)}</p>
            <ol className="mt-8 space-y-6">
              {publications.map((p, k) => (
                <li key={k} className="grid gap-1 md:grid-cols-12 md:gap-6">
                  <p className="text-sm font-medium md:col-span-3" style={{ color: k === 0 ? "var(--rawdha)" : "var(--ink-soft)" }}>
                    {t(p.status)}
                  </p>
                  <p className="text-[15px] leading-relaxed md:col-span-9" dir="ltr" lang="en">
                    {p.text}{" "}
                    {p.href && (
                      <a href={p.href} target="_blank" rel="noopener" className="whitespace-nowrap font-medium text-wadi underline underline-offset-4">
                        doi:10.1186/s12862-026-02582-0
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.experience)}</h2>
            <ol className="mt-8 space-y-10">
              {experience.map((e, k) => (
                <li key={k} className="grid gap-2 md:grid-cols-12 md:gap-6">
                  <p className="text-sm text-ink-soft md:col-span-3 md:pt-1">{t(e.period)}</p>
                  <div className="md:col-span-9">
                    <h3 className="text-xl font-bold">{t(e.role)}</h3>
                    <p className="text-ink-soft">{t(e.org)}</p>
                    <ul className="mt-3 space-y-1.5">
                      {e.points.map((pt, j) => (
                        <li key={j} className="flex gap-3">
                          <span aria-hidden className="mt-[0.75em] size-1.5 shrink-0 rounded-full bg-ink-soft" />
                          <span>{t(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-paper p-5">
                <p className="text-sm font-medium text-escarp">{t(ui.award)}</p>
                <h3 className="mt-1 text-lg font-bold">{t(award.title)}</h3>
                <p className="mt-2 text-ink-soft">{t(award.body)}</p>
                <a href={award.href} target="_blank" rel="noopener" className="mt-3 inline-block text-sm font-medium text-wadi underline underline-offset-4">
                  {t(ui.visit)} ECS
                </a>
              </div>
              <div className="rounded-xl bg-paper p-5">
                <h3 className="text-sm font-medium text-ink-soft">{t(ui.education)}</h3>
                <ul className="mt-2 space-y-3">
                  {education.map((ed, k) => (
                    <li key={k}>
                      <p className="font-bold">{t(ed.degree)}</p>
                      <p className="text-ink-soft">
                        {t(ed.place)}
                        <br />
                        {t(ed.detail)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <h2 className="text-[2rem] leading-tight sm:text-[2.6rem]">{t(ui.certs)}</h2>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCerts.map((c, k) => (
                <li key={k} className="border-b border-line py-3">
                  <p className="font-medium">{t(c.name)}</p>
                  <p className="text-sm text-ink-soft" dir="ltr" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                    {c.issuer}
                  </p>
                </li>
              ))}
            </ul>
            <details className="mt-6">
              <summary className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 font-medium hover:bg-surface">
                {t(ui.allCerts)} ({certifications.length})
                <svg className="chev transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <ul className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                {moreCerts.map((c, k) => (
                  <li key={k} className="border-b border-line py-3">
                    <p className="font-medium">{t(c.name)}</p>
                    <p className="text-sm text-ink-soft" dir="ltr" style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                      {c.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-basalt text-on-basalt">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-6">
              <h2 className="text-[2rem] leading-tight text-[#f5f0e6] sm:text-[2.6rem]">{t(ui.contactTitle)}</h2>
              <p className="mt-4 max-w-md text-[17px] text-[#b9c4c3]">{t(ui.contactBody)}</p>
            </div>
            <div className="lg:col-span-6">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 py-4 no-underline hover:text-white">
                    <Icon name="mail" />
                    <span dir="ltr" className="text-lg font-medium">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a href={contact.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-4 py-4 no-underline hover:text-white">
                    <Icon name="wa" />
                    <span>{t(ui.whatsapp)}</span>
                    <span dir="ltr" className="ms-auto text-[#b9c4c3]">{contact.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={contact.linkedin} target="_blank" rel="noopener" className="flex items-center gap-4 py-4 no-underline hover:text-white">
                    <Icon name="in" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={contact.vcard} download className="inline-flex items-center gap-2 rounded-lg bg-sand px-5 py-3 font-medium text-[#1b241f] no-underline hover:bg-[#e4b27e]">
                  <Icon name="card" />
                  {t(ui.saveContact)}
                </a>
                <a href={contact.cv} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-medium no-underline hover:bg-white/10">
                  <Icon name="doc" />
                  {t(ui.downloadCv)}
                </a>
              </div>
            </div>
          </div>
          <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-6 text-sm text-[#93a09f] sm:px-6">
              <span>{t(person.name)}</span>
              <span>{t(ui.footer)}</span>
            </div>
          </footer>
        </section>
      </main>

      {/* Mobile action bar for QR visitors */}
      <nav
        aria-label={lang === "ar" ? "تواصل سريع" : "Quick contact"}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      >
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
                className="flex flex-col items-center gap-1 py-2.5 text-[12px] font-medium text-ink no-underline active:bg-paper"
              >
                <span className="text-copper">
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
