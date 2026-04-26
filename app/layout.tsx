import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  ["Dashboard", "/dashboard"],
  ["Jobs", "/jobs"],
  ["Resume Agent", "/resume-agent"],
  ["Tracker", "/tracker"],
  ["Follow-Ups", "/follow-ups"],
  ["Profile", "/profile"],
  ["Admin", "/admin"]
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
            <Link href="/" className="font-bold text-xl text-primary">StudentApply AI</Link>
            <nav className="flex flex-wrap gap-4 text-sm">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="text-slate-600 hover:text-primary">{label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-7xl p-4 md:p-6">{children}</main>
      </body>
    </html>
  );
}
