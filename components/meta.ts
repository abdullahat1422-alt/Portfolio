import type { Metadata, Viewport } from "next";
import { SITE_URL, person, type Lang } from "@/content/site";

export function buildMetadata(lang: Lang): Metadata {
  const title = `${person.name[lang]} | ${person.title[lang]}`;
  const description = person.lead[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: lang === "ar" ? "/" : "/en/",
      languages: { ar: "/", en: "/en/" },
    },
    openGraph: {
      title,
      description,
      url: lang === "ar" ? "/" : "/en/",
      siteName: person.name[lang],
      locale: lang === "ar" ? "ar_SA" : "en_US",
      type: "profile",
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
    icons: { icon: "/icon.svg", apple: "/img/profile-256.jpg" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f171d" },
  ],
};
