import { IBM_Plex_Sans_Arabic, Gelasio, Noto_Naskh_Arabic } from "next/font/google";

// Body text (Arabic + Latin)
export const plex = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-plex",
});

// Headings: Gelasio is metric-compatible with Georgia (the deck's title face)
export const gelasio = Gelasio({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gelasio",
});

// Arabic serif headings to pair with Gelasio
export const naskh = Noto_Naskh_Arabic({
  weight: ["600", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-naskh",
});

export const fontVars = `${plex.variable} ${gelasio.variable} ${naskh.variable}`;
