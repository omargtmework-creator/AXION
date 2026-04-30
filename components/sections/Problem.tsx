"use client";

import { motion } from "framer-motion";

const problems = [
  {
    id: "01",
    title: "Your pipeline is unpredictable",
    text: "Feast and famine cycles kill momentum. Growth requires engineered consistency.",
  },
  {
    id: "02",
    title: "Your team sells, not sources",
    text: "Top closers should not be cold calling. That is a system problem, not a people problem.",
  },
  {
    id: "03",
    title: "GTM is fragmented",
    text: "Marketing, sales, and ops work in silos. You need one integrated motion.",
  },
];

export default function Problem() {
  return (
    <section className="section-wrap grid gap-10 py-24 md:grid-cols-[120px_1fr]">
      <div className="flex items-start md:justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-tertiary md:origin-center md:-rotate-90">
          THE CHALLENGE
        </p>
      </div>
      <div className="space-y-6">
        {problems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="rounded-xl border border-border bg-bg-surface p-8"
          >
            <p className="mb-3 font-mono text-sm text-accent-primary">{item.id}</p>
            <h3 className="mb-2 font-display text-4xl leading-tight text-text-primary">{item.title}</h3>
            <p className="max-w-3xl border-t border-[var(--border-accent)] pt-4 text-text-secondary">
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
