import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="section-wrap py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,#0D1117_0%,#131920_100%)] px-8 py-16 md:px-16">
        <div className="absolute left-0 top-0 h-20 w-20 border-l border-t border-[var(--border-accent)]" />
        <div className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-[var(--border-accent)]" />
        <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)]">
          Ready to build a pipeline that does not sleep?
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">
          Talk to our team. No decks, no fluff - just a direct conversation about your growth.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-accent-primary px-8 py-3 font-mono text-xs uppercase tracking-[0.14em] text-bg-base hover:brightness-105"
        >
          Book Your Free GTM Audit
        </Link>
      </div>
    </section>
  );
}
