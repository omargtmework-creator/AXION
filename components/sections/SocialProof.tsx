import MarqueeTicker from "@/components/ui/MarqueeTicker";

export default function SocialProof() {
  return (
    <section className="border-y border-border bg-bg-surface py-5">
      <div className="section-wrap flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
          TRUSTED BY GROWTH-STAGE COMPANIES IN
        </p>
        <MarqueeTicker
          slow
          className="font-mono text-sm text-text-tertiary"
          items={["Nexaflow", "Crevo", "Ardent Capital", "Mira Systems", "Vantego", "Salto"]}
        />
      </div>
    </section>
  );
}
