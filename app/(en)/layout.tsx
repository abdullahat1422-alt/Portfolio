import "../globals.css";
import { fontHref } from "@/components/fonts";
import { buildMetadata, viewport as vp } from "@/components/meta";

export const metadata = buildMetadata("en");
export const viewport = vp;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={fontHref} />
      </head>
      <body>{children}</body>
    </html>
  );
}
