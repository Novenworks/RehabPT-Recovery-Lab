"use client";

import { useState } from "react";
import { BOOK, PHONE, PHONE_DISPLAY } from "@/lib/links";

const NAV = [
  { href: "#two-sides", label: "Rehab + Recovery" },
  { href: "#stack", label: "Recovery Lab" },
  { href: "#contrast", label: "Contrast" },
  { href: "#clinical", label: "Physical Therapy" },
  { href: "#locations", label: "Locations" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="https://images.squarespace-cdn.com/content/v1/686c4403e336af50242db6b0/e87964f7-acb7-4296-bbae-6721182da0fd/RehabPT+logo.png?format=1500w"
            alt="RehabPT"
            className="h-9 w-auto brightness-0 invert"
          />
          <span className="hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] uppercase text-sand sm:block">
            Recovery Lab
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-sand/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`sms:${PHONE}`}
            className="hidden text-xs font-semibold tracking-wide text-sand/80 md:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOK}
            className="rounded-sm bg-teal px-3 py-2 text-xs font-bold tracking-wide text-ink uppercase"
          >
            Book
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-5 bg-paper" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-sand"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
