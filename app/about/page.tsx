import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The AXION philosophy: engineered growth over random lead volume.",
};

export default function AboutPage() {
  return (
    <main className="section-wrap py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-primary">Our Philosophy</p>
      <h1 className="mt-3 max-w-5xl font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95]">
        Growth is a systems discipline. Not a sprint. Not luck.
      </h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-text-secondary">
          AXION Growth was built for operators who need precision. We combine strategy, execution,
          and data intelligence into one GTM engine that compounds over time.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary">
          Our teams work inside your workflow, with senior talent and zero handoffs. Every decision
          is tied to pipeline output, conversion leverage, and revenue velocity.
        </p>
      </div>
    </main>
  );
}
