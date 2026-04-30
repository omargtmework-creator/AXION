"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const [started, setStarted] = useState(false);
  const [meetings, setMeetings] = useState(0);
  const [multiplierX10, setMultiplierX10] = useState(0);
  const [industries, setIndustries] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    let startTime: number | null = null;
    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1400, 1);
      setMeetings(Math.round(progress * 240));
      setMultiplierX10(Math.round(progress * 32));
      setIndustries(Math.round(progress * 18));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c8a96e22_0%,transparent_55%)]" />
      <div className="section-wrap relative">
        <div className="grid gap-8 text-center md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-display text-7xl text-accent-primary">{meetings}+</p>
            <p className="mt-2 text-text-secondary">Qualified meetings booked monthly</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="font-display text-7xl text-accent-primary">{(multiplierX10 / 10).toFixed(1)}x</p>
            <p className="mt-2 text-text-secondary">Average pipeline multiplier in 90 days</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="font-display text-7xl text-accent-primary">{industries}</p>
            <p className="mt-2 text-text-secondary">Industries served across MENA &amp; Europe</p>
          </motion.div>
        </div>

        <p className="mt-12 text-center font-display text-4xl italic text-text-secondary">
          &quot;We do not generate leads. We engineer demand.&quot;
        </p>
      </div>
    </section>
  );
}
