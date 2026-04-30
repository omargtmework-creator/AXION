"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeTicker from "@/components/ui/MarqueeTicker";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-10">
      <div className="section-wrap flex w-full flex-col justify-between gap-10 py-14">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(3.2rem,11vw,10rem)] font-bold leading-[0.92] text-accent-primary"
            >
              PIPELINE
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(3.2rem,11vw,10rem)] font-bold leading-[0.92] text-text-primary"
            >
              IS NOT AN ACCIDENT.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-text-secondary"
          >
            AXION Growth engineers demand. We build and operate your full go-to-market
            engine - outbound, inbound, and everything in between - so your team closes, not
            hunts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full border border-accent-primary px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-primary hover:bg-accent-primary hover:text-bg-base"
            >
              Book a Growth Call
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-border px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary hover:border-accent-primary hover:text-accent-primary"
            >
              See Our Work →
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">
            GTM AS A SERVICE / EST. 2024
          </p>
          <MarqueeTicker
            className="max-w-xl font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary"
            items={[
              "OUTBOUND SYSTEMS",
              "LEAD GENERATION",
              "ICP TARGETING",
              "SALES ENABLEMENT",
              "PIPELINE VELOCITY",
              "REVENUE OPERATIONS",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
