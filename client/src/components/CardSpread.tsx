/*
 * CardSpread — V2 "Brutal Oracle"
 * Design: Pure black section. Editorial header. Card fan with new card back.
 * Purple accent fills, Space Mono labels, Bebas Neue headings.
 */

import { useState, useEffect } from "react";
import { majorArcana, type TarotCard } from "@/lib/tarotData";
import CardReading from "./CardReading";

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/card-back-v2-UvN8B6RejnKtKSoMDud3cM.webp";

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
  const cardW = isMobile ? 52 : isTablet ? 64 : 76;
  const cardH = isMobile ? 88 : isTablet ? 108 : 128;
  const spreadAngle = isMobile ? 28 : isTablet ? 32 : 36;
  const spreadRadius = isMobile ? 280 : isTablet ? 340 : 400;

  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5).slice(0, cardCount);

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
      style={{ height: isMobile ? 200 : isTablet ? 260 : 300, width: "100%" }}
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
            className="absolute bottom-0 tarot-card"
            style={{
              width: cardW,
              height: cardH,
              left: `calc(50% + ${x}px - ${cardW / 2}px)`,
              bottom: `${-y + 10}px`,
              transform: `rotate(${angle}deg)${isHovered ? " translateY(-16px) scale(1.05)" : ""}${isSelected ? " translateY(-24px) scale(1.08)" : ""}`,
              zIndex: isHovered || isSelected ? 50 : idx,
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
              boxShadow: isSelected
                ? "0 20px 60px rgba(123,47,190,0.7), 0 0 0 1px rgba(169,162,190,0.4)"
                : isHovered
                ? "0 12px 40px rgba(123,47,190,0.5), 0 0 0 1px rgba(169,162,190,0.2)"
                : "0 4px 20px rgba(0,0,0,0.6)",
              cursor: selectedIdx !== null ? "default" : "pointer",
            }}
            onMouseEnter={() => selectedIdx === null && setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleSelect(idx)}
          >
            <img
              src={CARD_BACK}
              alt="Tarot card"
              className="w-full h-full object-cover"
              style={{ borderRadius: 4 }}
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
    <section id={id} className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      {/* Purple accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FBE] to-transparent opacity-50" />

      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#7B2FBE]" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase">
                The Reading
              </span>
            </div>
            <h2 className="font-display text-[clamp(40px,7vw,90px)] leading-none text-white">
              THE SPREAD
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase mb-1">
              Focus your intention
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase">
              Select the card that calls to you
            </div>
          </div>
        </div>

        {phase === "spread" && (
          <>
            <p className="font-mono text-[11px] tracking-[0.3em] text-[#5c566b] uppercase text-center mb-12">
              Tap a card to reveal your reading
            </p>
            <div className="relative">
              <CardFan key={spreadKey} onCardSelected={handleCardSelected} />
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b4775] to-transparent opacity-40" />
    </section>
  );
}
