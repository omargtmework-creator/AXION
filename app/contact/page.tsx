import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a GTM audit with AXION Growth.",
};

export default function ContactPage() {
  return (
    <main className="section-wrap py-20">
      <div className="grid overflow-hidden rounded-2xl border border-border bg-bg-surface md:grid-cols-5">
        <aside className="bg-[linear-gradient(160deg,#131920_0%,#0D1117_100%)] p-8 md:col-span-2 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-primary">Contact</p>
          <h1 className="mt-4 font-display text-5xl">Build demand with intent.</h1>
          <p className="mt-5 text-text-secondary">
            Tell us where pipeline is breaking. We will map the highest-leverage path to stable growth.
          </p>
          <div className="mt-10 space-y-3 text-text-secondary">
            <p>hello@axiomgrowth.com</p>
            <p>Dubai / Riyadh / London</p>
          </div>
        </aside>

        <section className="p-8 md:col-span-3 md:p-10">
          <form className="space-y-5">
            <input className="w-full rounded-lg border bg-bg-base p-3" placeholder="Full Name" />
            <input className="w-full rounded-lg border bg-bg-base p-3" placeholder="Company" />
            <input className="w-full rounded-lg border bg-bg-base p-3" placeholder="Email" type="email" />
            <select className="w-full rounded-lg border bg-bg-base p-3">
              <option>Monthly Revenue</option>
              <option>{`< $100k`}</option>
              <option>$100k-$1M</option>
              <option>$1M+</option>
            </select>
            <textarea
              className="min-h-[140px] w-full rounded-lg border bg-bg-base p-3"
              placeholder="Main Challenge"
            />
            <button
              type="submit"
              className="rounded-full bg-accent-primary px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-bg-base"
            >
              Request GTM Audit
            </button>
          </form>
          <p className="mt-4 text-sm text-text-secondary">We typically respond within 4 business hours.</p>

          <div className="mt-10 rounded-xl border border-[var(--border-accent)] bg-bg-base p-6">
            <a
              href="https://calendly.com/ommo1122334455/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-primary hover:underline"
            >
              <CalendarDays size={14} /> Prefer to skip the form? Book directly →
            </a>
            <div className="mt-4 flex h-40 items-center justify-center rounded-lg border border-dashed border-border text-text-tertiary">
              Open Calendly to book your 30-minute call
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
