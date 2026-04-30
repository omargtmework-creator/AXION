import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Outbound engine, inbound demand, ICP architecture, and pipeline operations delivered end-to-end.",
};

const services = [
  {
    name: "Outbound Engine",
    detail:
      "Prospecting architecture, sequence strategy, offer positioning, and channel orchestration to create consistent meeting velocity.",
  },
  {
    name: "Inbound Demand",
    detail:
      "SEO and paid demand generation that captures intent and routes qualified prospects into your sales process.",
  },
  {
    name: "ICP Architecture",
    detail:
      "Research-backed segmentation, account scoring, and messaging frameworks built from first principles.",
  },
  {
    name: "Pipeline Operations",
    detail:
      "CRM hygiene, conversion analytics, and RevOps systems designed for predictable scaling.",
  },
];

export default function ServicesPage() {
  return (
    <main className="section-wrap py-20">
      <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)]">Services</h1>
      <p className="mt-4 max-w-3xl text-lg text-text-secondary">
        We do not ship recommendations. We deploy working GTM systems your team can run and scale.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="gold-border-hover rounded-xl bg-bg-surface p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent-primary">
              AXION SERVICE
            </p>
            <h2 className="font-display text-4xl">{service.name}</h2>
            <p className="mt-3 text-text-secondary">{service.detail}</p>
            <button className="mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary hover:text-accent-primary">
              Explore Scope <ArrowUpRight size={14} />
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
