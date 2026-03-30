import { useRef, useCallback } from "react";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import CardSpread from "@/components/CardSpread";
import SalesCTA from "@/components/SalesCTA";
import Footer from "@/components/Footer";

/*
 * LIQUID ORACLE — Home Page
 * Design: Single continuous scroll with sections that flow into each other.
 * Dark cosmic background, particle field overlay, editorial luxury feel.
 */

export default function Home() {
  const spreadRef = useRef<HTMLDivElement>(null);

  const handlePullCard = useCallback(() => {
    spreadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#E8DAEF] relative">
      {/* Particle field overlay */}
      <ParticleField />

      {/* Fixed ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(123,47,190,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,206,209,0.03) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Navigation bar */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div
            className="px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between"
            style={{
              background: "linear-gradient(to bottom, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0) 100%)",
            }}
          >
            <a
              href="/"
              className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#E8DAEF]/70 hover:text-[#E8DAEF] transition-colors duration-300 font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Oracle
            </a>
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#card-spread"
                className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#C39BD3]/40 hover:text-[#C39BD3]/80 transition-colors duration-300 font-light hidden sm:block"
              >
                Pull a Card
              </a>
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#00CED1]/40 hover:text-[#00CED1]/80 transition-colors duration-300 font-light"
              >
                Shop
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <HeroSection onPullCard={handlePullCard} />

        {/* Card Spread */}
        <div ref={spreadRef}>
          <CardSpread id="card-spread" />
        </div>

        {/* Sales CTA */}
        <SalesCTA />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
