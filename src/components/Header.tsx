"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-light sticky top-0 z-50 text-foreground">
      <div className="container-page flex h-14 items-center justify-between sm:h-16">
        <Link href="/" className="flex items-baseline gap-3" aria-label={`${site.name}, prima pagină`}>
          <span className="text-xl font-extrabold tracking-[0.42em]">IVECO</span>
          <span className="text-sm text-muted">Sibiu</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
          <Link href="/service#programare" className="hover:text-foreground">Programare service</Link>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav className="hidden border-t border-black/5 bg-black/[0.04] md:block" aria-label="Principal">
        <div className="container-page flex h-12 items-center gap-10">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.9375rem] text-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <nav className="border-t border-black/10 md:hidden" aria-label="Mobil">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-3 font-medium last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
