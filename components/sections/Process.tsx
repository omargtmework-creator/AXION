"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "DIAGNOSE", text: "Audit funnel bottlenecks and growth constraints." },
  { id: "02", title: "ARCHITECT", text: "Design a tailored pipeline and acquisition system." },
  { id: "03", title: "EXECUTE", text: "Launch campaigns and outbound infrastructure fast." },
  { id: "04", title: "OPTIMIZE", text: "Refine continuously with live performance data." },
];

export default function Process() {
  return (
    <section className="section-wrap py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-display text-[clamp(2.2rem,6vw,4.2rem)]"
      >
        THE AXION METHOD
      </motion.h2>

      <div className="dash-line relative grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-border bg-bg-surface p-6"
          >
            <p className="font-mono text-xs text-accent-primary">{step.id}</p>
            <h3 className="mt-2 font-mono text-lg tracking-[0.08em] text-text-primary">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
