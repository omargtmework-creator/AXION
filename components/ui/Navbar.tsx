"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        scrolled ? "border-b-[var(--border-accent)]" : "border-b-transparent"
      } bg-[#080A0F]/80 backdrop-blur-md`}
    >
      <div className="section-wrap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-start gap-1">
          <span className="font-display text-3xl italic text-accent-primary">AXION</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary">
            Growth
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-mono text-xs uppercase tracking-[0.16em] text-text-secondary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-accent-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-primary hover:bg-accent-primary hover:text-bg-base md:block"
          >
            Book a Call
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-text-primary md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-bg-base px-8 pt-28 md:hidden">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-5 font-mono text-xl uppercase tracking-[0.12em] text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
