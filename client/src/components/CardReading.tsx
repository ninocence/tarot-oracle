/**
 * V3 CardReading — "Dark Goddess" Feminine Luxury Oracle
 * Design: Two-column. Left: card with premium flip animation + sacred geometry back.
 * Right: Cormorant Garamond display name, elegant reading panel, glass-morphism quote.
 * Colors: near-black bg, violet accents, lavender text, chrome silver highlights.
 */

import { useState, useEffect } from "react";
import type { TarotCard } from "@/lib/tarotData";

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-card-back-3TJv3jtwk9jJd6FTzXjaz7.png";
const LIQUID_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-liquid-bg-CqCPTcRGEPDpjbKfbLkLHi.webp";

interface CardReadingProps {
  card: TarotCard;
  isReversed: boolean;
  onReset: () => void;
}

export default function CardReading({ card, isReversed, onReset }: CardReadingProps) {
  const [flipped, setFlipped] = useState(false);
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;

  useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full" style={{ animation: "fade-up 0.7s ease forwards" }}>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* LEFT — Card with flip */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5 w-full lg:w-auto">
          <div className="card-scene" style={{ width: 190, height: 315 }}>
            <div className={`card-inner ${flipped ? "flipped" : ""}`}>
              {/* Face-down (back) */}
              <div className="card-face card-back-face" style={{ borderRadius: 8, overflow: "hidden" }}>
                <img src={CARD_BACK} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Face-up (front) */}
              <div
                className="card-face card-front-face"
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  background: "linear-gradient(160deg, #1a0a2e 0%, #0f0f1a 40%, #1e0a3c 100%)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 14px",
                  transform: isReversed ? "rotateY(180deg) rotate(180deg)" : "rotateY(180deg)",
                  position: "relative",
                }}
              >
                {/* Liquid texture bg */}
                <div className="absolute inset-0" style={{ backgroundImage: `url(${LIQUID_TEXTURE})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
                {/* Glow */}
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />
                <div className="relative z-10 text-center w-full">
                  <div className="font-ui text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(167,139,250,0.6)", fontSize: "0.6rem" }}>
                    {isReversed ? "Reversed" : "Upright"}
                  </div>
                  <div className="font-ui text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(124,58,237,0.7)", fontSize: "0.6rem" }}>
                    {card.number}
                  </div>
                  <div style={{ width: "30px", height: "1px", background: "rgba(167,139,250,0.4)", margin: "0 auto 16px" }} />
                  <div className="font-display" style={{ color: "rgba(240,238,255,0.9)", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.2, letterSpacing: "0.02em" }}>
                    {card.name}
                  </div>
                  <div style={{ width: "20px", height: "1px", background: "rgba(167,139,250,0.3)", margin: "16px auto 14px" }} />
                  {/* Star symbol */}
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, margin: "0 auto" }}>
                    <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" stroke="rgba(167,139,250,0.5)" strokeWidth="0.8" fill="rgba(124,58,237,0.15)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Orientation badge */}
          <div className="px-4 py-2 font-ui text-xs tracking-[0.25em] uppercase" style={{
            border: `1px solid ${isReversed ? "rgba(167,139,250,0.2)" : "rgba(124,58,237,0.4)"}`,
            color: isReversed ? "rgba(167,139,250,0.6)" : "rgba(196,181,253,0.8)",
            background: isReversed ? "transparent" : "rgba(124,58,237,0.08)",
            fontSize: "0.65rem",
          }}>
            {isReversed ? "↓ Reversed" : "↑ Upright"}
          </div>
        </div>

        {/* RIGHT — Reading panel */}
        <div className="flex-1 min-w-0">
          {/* Card number + name */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-ui text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(124,58,237,0.8)", fontSize: "0.65rem" }}>
                {card.number}
              </span>
              <div className="flex-1" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
            </div>
            <h3 className="font-display leading-none mb-3" style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "rgba(240,238,255,0.92)",
              letterSpacing: "-0.02em",
            }}>
              {card.name}
            </h3>
            <p className="font-display-italic" style={{ color: "rgba(167,139,250,0.6)", fontSize: "1rem", fontWeight: 300 }}>
              {isReversed ? "Reversed Reading" : "Upright Reading"}
            </p>
          </div>

          {/* Oracle message — glass panel */}
          <div className="relative mb-8 p-6 overflow-hidden" style={{
            background: "rgba(124,58,237,0.05)",
            borderLeft: "2px solid rgba(124,58,237,0.5)",
            backdropFilter: "blur(10px)",
          }}>
            <div className="absolute inset-0" style={{ backgroundImage: `url(${LIQUID_TEXTURE})`, backgroundSize: "cover", opacity: 0.04 }} />
            <p className="relative font-display-italic" style={{ color: "rgba(196,181,253,0.85)", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.75, fontStyle: "italic" }}>
              "{card.message}"
            </p>
          </div>

          {/* Meaning */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "20px", height: "1px", background: "rgba(124,58,237,0.5)" }} />
              <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(167,139,250,0.5)", fontSize: "0.65rem" }}>Your Reading</span>
            </div>
            <p className="font-body" style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, letterSpacing: "0.02em" }}>
              {meaning}
            </p>
          </div>

          {/* Keywords */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: "20px", height: "1px", background: "rgba(124,58,237,0.3)" }} />
              <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.65rem" }}>Keywords</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {card.keywords.map((kw) => (
                <span key={kw} className="font-ui text-xs tracking-[0.2em] uppercase px-3 py-1.5" style={{
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "rgba(167,139,250,0.65)",
                  background: "rgba(124,58,237,0.06)",
                  fontSize: "0.6rem",
                }}>
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onReset}
              className="font-ui text-sm tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-400"
              style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)", color: "#f0eeff", letterSpacing: "0.15em", boxShadow: "0 0 25px rgba(124,58,237,0.25)" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(124,58,237,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 25px rgba(124,58,237,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Pull Another Card
            </button>
            <a
              href="https://www.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-sm tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(226,232,240,0.5)", letterSpacing: "0.15em" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(226,232,240,0.8)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(226,232,240,0.5)"; }}
            >
              Get the Full Deck
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
