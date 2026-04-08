/*
 * CardReading — V2 "Brutal Oracle"
 * Design: Two-column layout. Left: card image with flip animation.
 * Right: editorial reading panel with purple accents, Space Mono labels.
 * Dark bg → light text.
 */

import type { TarotCard } from "@/lib/tarotData";

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/card-back-v2-UvN8B6RejnKtKSoMDud3cM.webp";
const LIQUID_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/liquid-purple-texture-ccexfu4S82KyRpXKZManwv.webp";

interface CardReadingProps {
  card: TarotCard;
  isReversed: boolean;
  onReset: () => void;
}

export default function CardReading({ card, isReversed, onReset }: CardReadingProps) {
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;

  return (
    <div className="w-full animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left: Card */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6 w-full lg:w-auto">
          {/* Card with flip effect */}
          <div
            className="relative card-flip-container"
            style={{ width: 180, height: 300 }}
          >
            <div className="card-flip-inner flipped" style={{ width: "100%", height: "100%" }}>
              {/* Card back */}
              <div className="card-face" style={{ borderRadius: 6, overflow: "hidden" }}>
                <img src={CARD_BACK} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Card front */}
              <div
                className="card-face card-face-back"
                style={{
                  borderRadius: 6,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #1f1e2c 0%, #2d1f4a 50%, #1a1a2e 100%)",
                  border: "1px solid rgba(169,162,190,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 12px",
                  transform: isReversed ? "rotateY(180deg) rotate(180deg)" : "rotateY(180deg)",
                }}
              >
                {/* Liquid texture accent */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url(${LIQUID_TEXTURE})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="font-mono text-[9px] tracking-[0.4em] text-[#8575a4] uppercase mb-3">
                    {isReversed ? "Reversed" : "Upright"}
                  </div>
                  <div
                    className="font-mono text-[9px] tracking-[0.3em] text-[#5b4775] uppercase mb-4"
                    style={{ writingMode: "horizontal-tb" }}
                  >
                    {card.number}
                  </div>
                  <div className="w-8 h-px bg-[#7B2FBE] mx-auto mb-4" />
                  <div className="font-serif text-white text-sm leading-tight text-center mb-4">
                    {card.name}
                  </div>
                  <div className="w-6 h-6 mx-auto">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" stroke="#8575a4" strokeWidth="1" fill="rgba(123,47,190,0.2)"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orientation badge */}
          <div
            className="px-4 py-2 border font-mono text-[10px] tracking-[0.3em] uppercase"
            style={{
              borderColor: isReversed ? "rgba(169,162,190,0.3)" : "rgba(123,47,190,0.5)",
              color: isReversed ? "#8575a4" : "#a9a2be",
              background: isReversed ? "transparent" : "rgba(123,47,190,0.1)",
            }}
          >
            {isReversed ? "↓ Reversed" : "↑ Upright"}
          </div>
        </div>

        {/* Right: Reading panel */}
        <div className="flex-1 min-w-0">
          {/* Card number + name */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#7B2FBE] uppercase">
                {card.number}
              </span>
              <div className="flex-1 h-px bg-[#1f1e2c]" />
            </div>
            <h3 className="font-display text-[clamp(36px,6vw,72px)] leading-none text-white mb-2">
              {card.name.toUpperCase()}
            </h3>
            <p className="font-serif italic text-[#8575a4] text-base">
              {isReversed ? "Reversed" : "Upright"} Reading
            </p>
          </div>

          {/* Poetic message */}
          <div
            className="relative p-6 mb-8 overflow-hidden"
            style={{
              background: "rgba(31,30,44,0.6)",
              borderLeft: "2px solid #7B2FBE",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url(${LIQUID_TEXTURE})`,
                backgroundSize: "cover",
              }}
            />
            <p className="relative font-serif italic text-[#c8c0e0] text-base leading-relaxed">
              "{card.message}"
            </p>
          </div>

          {/* Meaning */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#7B2FBE]" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase">
                Your Reading
              </span>
            </div>
            <p className="font-body text-[#a9a2be] text-sm leading-relaxed">
              {meaning}
            </p>
          </div>

          {/* Keywords */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#5b4775]" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase">
                Keywords
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {card.keywords.map((kw) => (
                <span
                  key={kw}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{
                    border: "1px solid rgba(91,71,117,0.5)",
                    color: "#8575a4",
                    background: "rgba(91,71,117,0.1)",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={onReset} className="btn-oracle">
              Pull Another Card
            </button>
            <a
              href="https://www.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Get the Full Deck
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
