import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected GTM outcomes and pipeline growth wins by AXION Growth.",
};

const studies = [
  "B2B SaaS / EMEA Expansion",
  "Fintech / Outbound Rebuild",
  "Advisory Firm / Inbound Acceleration",
  "Healthtech / ICP Repositioning",
];

export default function CaseStudiesPage() {
  return (
    <main className="section-wrap py-20">
      <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)]">Results</h1>
      <p className="mt-4 max-w-3xl text-lg text-text-secondary">
        Placeholder snapshots of client outcomes. Full narratives and dashboards available on request.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {studies.map((study, idx) => (
          <article key={study} className="rounded-xl border border-border bg-bg-surface p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-primary">
              Case {String(idx + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 font-display text-3xl">{study}</h2>
            <p className="mt-3 text-text-secondary">
              Placeholder: pipeline growth, conversion uplift, and operation redesign metrics.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
