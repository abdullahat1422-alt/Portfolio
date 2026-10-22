import "../globals.css";
import { fontVars } from "@/components/fonts";
import { buildMetadata, viewport as vp } from "@/components/meta";

export const metadata = buildMetadata("en");
export const viewport = vp;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
