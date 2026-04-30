"use client";

import { motion } from "framer-motion";
import { Compass, Target, Radar, Workflow } from "lucide-react";

const cards = [
  {
    icon: Radar,
    title: "Outbound Engine",
    text: "Cold outreach infrastructure: sequences, tooling, copy, and targeting. Fully managed.",
  },
  {
    icon: Compass,
    title: "Inbound Demand",
    text: "Content, SEO, and paid programs that make buyers come to you with intent.",
  },
  {
    icon: Target,
    title: "ICP Architecture",
    text: "We define, score, and build your ideal customer profile from first principles.",
  },
  {
    icon: Workflow,
    title: "Pipeline Operations",
    text: "CRM setup, reporting dashboards, and RevOps infrastructure that scales.",
  },
];

export default function Services() {
  return (
    <section className="section-wrap py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-[clamp(2.2rem,6vw,4.5rem)] text-text-primary"
      >
        WHAT WE BUILD FOR YOU
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-10 mt-3 text-lg text-text-secondary"
      >
        End-to-end GTM infrastructure, not consulting decks.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="gold-border-hover rounded-xl bg-bg-surface p-8"
          >
            <card.icon className="mb-5 text-accent-primary" size={22} />
            <h3 className="mb-2 font-display text-3xl">{card.title}</h3>
            <p className="text-text-secondary">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
