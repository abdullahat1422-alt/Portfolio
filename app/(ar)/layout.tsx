import "../globals.css";
import { fontHref } from "@/components/fonts";
import { buildMetadata, viewport as vp } from "@/components/meta";

export const metadata = buildMetadata("ar");
export const viewport = vp;

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={fontHref} />
      </head>
      <body>{children}</body>
    </html>
  );
}
