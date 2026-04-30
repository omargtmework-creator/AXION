import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="section-wrap py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl text-accent-primary">AXION</span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
              Growth
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 text-text-secondary">
            <a href="#" aria-label="LinkedIn">
              <LinkIcon size={18} />
            </a>
            <a href="mailto:hello@axion-growth.com">hello@axiomgrowth.com</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-tertiary md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kazim Gaber &amp; Axion. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.16em]">GTM AS A SERVICE</p>
        </div>
      </div>
    </footer>
  );
}
