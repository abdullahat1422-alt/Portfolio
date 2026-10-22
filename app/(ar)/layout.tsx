import "../globals.css";
import { fontVars } from "@/components/fonts";
import { buildMetadata, viewport as vp } from "@/components/meta";

export const metadata = buildMetadata("ar");
export const viewport = vp;

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
