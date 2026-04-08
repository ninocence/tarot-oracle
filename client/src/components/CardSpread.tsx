/**
 * V3 CardSpread — "Dark Goddess" Feminine Luxury Oracle
 * Design: Dark section, Cormorant Garamond headers, new sacred geometry card back
 * Preserves the smooth arc fan layout and card flip animation from V1
 */

import { useState, useEffect } from "react";
import { majorArcana, type TarotCard } from "@/lib/tarotData";
import CardReading from "./CardReading";

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-card-back-3TJv3jtwk9jJd6FTzXjaz7.png";

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

interface CardSpreadProps {
  id?: string;
}

function CardFan({ onCardSelected }: { onCardSelected: (card: TarotCard, reversed: boolean) => void }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;
  const cardCount = isMobile ? 7 : isTablet ? 9 : 11;
  const cardW = isMobile ? 54 : isTablet ? 66 : 78;
  const cardH = isMobile ? 92 : isTablet ? 112 : 132;
  const spreadAngle = isMobile ? 28 : isTablet ? 32 : 36;
  const spreadRadius = isMobile ? 280 : isTablet ? 340 : 420;

  const [shuffled] = useState(() => [...majorArcana].sort(() => Math.random() - 0.5).slice(0, cardCount));

  const handleSelect = (idx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    const card = shuffled[idx];
    const reversed = Math.random() > 0.6;
    setTimeout(() => onCardSelected(card, reversed), 600);
  };

  return (
    <div
      className="relative flex items-end justify-center"
      style={{ height: isMobile ? 200 : isTablet ? 260 : 310, width: "100%" }}
    >
      {shuffled.map((_, idx) => {
        const t = cardCount <= 1 ? 0.5 : idx / (cardCount - 1);
        const angle = (t - 0.5) * spreadAngle * 2;
        const rad = (angle * Math.PI) / 180;
        const x = Math.sin(rad) * spreadRadius;
        const y = -Math.cos(rad) * spreadRadius + spreadRadius;
        const isHovered = hoveredIdx === idx;
        const isSelected = selectedIdx === idx;

        return (
          <div
            key={idx}
            className="absolute bottom-0"
            style={{
              width: cardW,
              height: cardH,
              left: `calc(50% + ${x}px - ${cardW / 2}px)`,
              bottom: `${-y + 10}px`,
              transform: `rotate(${angle}deg)${isHovered ? " translateY(-18px) scale(1.06)" : ""}${isSelected ? " translateY(-26px) scale(1.1)" : ""}`,
              zIndex: isHovered || isSelected ? 50 : idx,
              transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease",
              boxShadow: isSelected
                ? "0 20px 60px rgba(124,58,237,0.7), 0 0 0 1px rgba(196,181,253,0.4)"
                : isHovered
                ? "0 14px 40px rgba(124,58,237,0.5), 0 0 0 1px rgba(167,139,250,0.25)"
                : "0 6px 24px rgba(0,0,0,0.7)",
              cursor: selectedIdx !== null ? "default" : "pointer",
              borderRadius: "6px",
            }}
            onMouseEnter={() => selectedIdx === null && setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleSelect(idx)}
          >
            <img
              src={CARD_BACK}
              alt="Tarot card"
              className="w-full h-full object-cover"
              style={{ borderRadius: "6px" }}
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function CardSpread({ id }: CardSpreadProps) {
  const [spreadKey, setSpreadKey] = useState(0);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isReversed, setIsReversed] = useState(false);
  const [phase, setPhase] = useState<"spread" | "reading">("spread");

  const handleCardSelected = (card: TarotCard, reversed: boolean) => {
    setSelectedCard(card);
    setIsReversed(reversed);
    setTimeout(() => setPhase("reading"), 400);
  };

  const handleReset = () => {
    setPhase("spread");
    setSelectedCard(null);
    setIsReversed(false);
    setTimeout(() => setSpreadKey((k) => k + 1), 300);
  };

  return (
    <section id={id} className="relative py-28 overflow-hidden" style={{ background: "#08080e" }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-iridescent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="container mx-auto relative" style={{ zIndex: 1 }}>
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: "30px", height: "1px", background: "rgba(167,139,250,0.5)" }} />
              <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(167,139,250,0.5)" }}>The Reading</span>
            </div>
            <h2 className="font-display leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 300, color: "rgba(240,238,255,0.9)", letterSpacing: "-0.02em" }}>
              The Spread
            </h2>
          </div>
          <div className="hidden md:block text-right mt-4 md:mt-0">
            <p className="font-body text-sm" style={{ color: "rgba(226,232,240,0.3)", fontWeight: 300, lineHeight: 1.7 }}>
              Focus your intention.<br />Select the card that calls to you.
            </p>
          </div>
        </div>

        {phase === "spread" && (
          <>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-center mb-14" style={{ color: "rgba(167,139,250,0.4)" }}>
              Touch a card to reveal your reading
            </p>
            <div className="relative">
              <CardFan key={spreadKey} onCardSelected={handleCardSelected} />
            </div>
            {/* Instruction hint */}
            <div className="flex items-center justify-center gap-3 mt-12">
              <div style={{ width: "20px", height: "1px", background: "rgba(167,139,250,0.3)" }} />
              <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300, letterSpacing: "0.05em" }}>
                Each reading is unique to this moment
              </span>
              <div style={{ width: "20px", height: "1px", background: "rgba(167,139,250,0.3)" }} />
            </div>
          </>
        )}

        {phase === "reading" && selectedCard && (
          <CardReading
            card={selectedCard}
            isReversed={isReversed}
            onReset={handleReset}
          />
        )}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-iridescent" />
    </section>
  );
}
