/*
 * Home — V2 "Brutal Oracle"
 * Design: Pure black canvas. Sections flow from hero → spread → CTA → footer.
 * Nav is embedded in HeroSection. No fixed overlay nav needed.
 */

import { useRef, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import CardSpread from "@/components/CardSpread";
import SalesCTA from "@/components/SalesCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const spreadRef = useRef<HTMLDivElement>(null);

  const handlePullCard = useCallback(() => {
    spreadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection onPullCard={handlePullCard} />
      <div ref={spreadRef}>
        <CardSpread id="card-spread" />
      </div>
      <SalesCTA />
      <Footer />
    </div>
  );
}
