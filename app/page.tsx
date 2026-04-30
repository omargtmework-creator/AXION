import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pipeline Is Not An Accident",
  description:
    "Premium GTM-as-a-Service and demand generation for growth-stage teams that need engineered pipeline consistency.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Problem />
      <Services />
      <Stats />
      <Process />
      <CTABanner />
    </main>
  );
}
