/**
 * Home — V3 "Dark Goddess" Feminine Luxury Oracle
 * Design: Deep black canvas. Sections flow: hero → spread → CTA → footer.
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
    <div className="min-h-screen text-white" style={{ background: "#08080e" }}>
      <HeroSection onPullCard={handlePullCard} />
      <div ref={spreadRef}>
        <CardSpread id="card-spread" />
      </div>
      <SalesCTA />
      <Footer />
    </div>
  );
}
