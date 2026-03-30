import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { majorArcana, type TarotCard } from "@/lib/tarotData";
import CardReading from "./CardReading";

/*
 * LIQUID ORACLE — CardSpread
 * Design: Fan-shaped arc of face-down tarot cards.
 * Premium 3D flip animation, glassmorphism, iridescent glow.
 * Uses a key-based remount to cleanly reset the fan after each reading.
 */

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/card-back-cJGVWedMxrPorPbQB7X2jW.webp";
const COSMIC_DIVIDER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/cosmic-divider-dDBsZFSySJj9nPNPZ7RGXt.webp";

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

/* ── Inner fan component (remounted via key) ── */
function CardFan({
  onCardSelected,
  cardDims,
}: {
  onCardSelected: (card: TarotCard, reversed: boolean) => void;
  cardDims: { w: number; h: number; radius: number; maxAngle: number };
}) {
  const [shuffledIndices] = useState<number[]>(() => {
    const indices = Array.from({ length: 22 }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isReversed, setIsReversed] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isSelected = flippingIndex !== null;

  const handleCardClick = useCallback(
    (displayIndex: number) => {
      if (isSelected) return;
      const cardIndex = shuffledIndices[displayIndex];
      const card = majorArcana[cardIndex];
      const reversed = Math.random() > 0.5;
      setFlippingIndex(displayIndex);
      setSelectedCard(card);
      setIsReversed(reversed);
      setTimeout(() => onCardSelected(card, reversed), 900);
    },
    [isSelected, shuffledIndices, onCardSelected],
  );

  const total = 22;

  return (
    <div
      className="relative flex justify-center"
      style={{ height: cardDims.radius + cardDims.h + 40 }}
    >
      <div
        className="relative"
        style={{
          width: cardDims.w,
          height: cardDims.radius + cardDims.h,
          perspective: "1200px",
        }}
      >
        {shuffledIndices.map((_, displayIndex) => {
          const angleStep = (cardDims.maxAngle * 2) / (total - 1);
          const angle = -cardDims.maxAngle + displayIndex * angleStep;
          const isFlipping = flippingIndex === displayIndex;
          const isHovered = hoveredIndex === displayIndex;
          const zBase = total - Math.abs(displayIndex - Math.floor(total / 2));

          return (
            <motion.div
              key={displayIndex}
              className="absolute cursor-pointer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isSelected && !isFlipping ? 0.15 : 1,
                scale: isFlipping ? 2.5 : isSelected && !isFlipping ? 0.92 : 1,
                rotateY: isFlipping ? 180 : 0,
                ...(isFlipping ? { rotate: 0, y: -cardDims.radius - 60 } : {}),
              }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: isFlipping ? 0.8 : 0.4, ease: [0.4, 0, 0.2, 1] },
                rotateY: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                default: { duration: 0.6, delay: displayIndex * 0.02 },
              }}
              style={{
                width: cardDims.w,
                height: cardDims.h,
                left: 0,
                bottom: 0,
                transformOrigin: `50% ${cardDims.radius + cardDims.h}px`,
                transformStyle: "preserve-3d",
                zIndex: isHovered ? 60 : isFlipping ? 100 : zBase,
                rotate: `${angle}deg`,
                y: -cardDims.radius,
              }}
              whileHover={
                !isSelected
                  ? {
                      y: -cardDims.radius - 18,
                      scale: 1.12,
                      zIndex: 60,
                      transition: { duration: 0.2 },
                    }
                  : {}
              }
              onHoverStart={() => !isSelected && setHoveredIndex(displayIndex)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(displayIndex)}
            >
              {/* Card back */}
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow: isHovered
                    ? "0 8px 32px rgba(123, 47, 190, 0.5), 0 0 60px rgba(123, 47, 190, 0.2)"
                    : "0 2px 12px rgba(0,0,0,0.5), 0 0 20px rgba(123, 47, 190, 0.06)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <img
                  src={CARD_BACK}
                  alt="Tarot Card"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{
                    opacity: isHovered ? 0.4 : 0,
                    background:
                      "linear-gradient(135deg, transparent 20%, rgba(0,206,209,0.25) 50%, transparent 80%)",
                  }}
                />
              </div>

              {/* Card front (revealed on flip) */}
              <div
                className="absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background:
                    "linear-gradient(135deg, #1a0a2e 0%, #0a0a0f 50%, #0a1a2e 100%)",
                  boxShadow:
                    "0 8px 40px rgba(123, 47, 190, 0.4), 0 0 80px rgba(0, 206, 209, 0.1)",
                  border: "1px solid rgba(123, 47, 190, 0.3)",
                }}
              >
                {selectedCard && isFlipping && (
                  <div className="text-center p-2">
                    <p className="text-[7px] sm:text-[9px] text-[#00CED1]/70 tracking-[0.3em] uppercase font-light">
                      {selectedCard.number}
                    </p>
                    <p
                      className="text-[10px] sm:text-xs text-[#E8DAEF] mt-1 leading-tight"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        transform: isReversed ? "rotate(180deg)" : "none",
                      }}
                    >
                      {selectedCard.name}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Instruction text */}
      {!isSelected && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute -bottom-10 left-0 right-0 text-center text-[10px] sm:text-xs text-[#C39BD3]/30 tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Tap a card to reveal your reading
        </motion.p>
      )}
    </div>
  );
}

/* ── Main CardSpread section ── */
export default function CardSpread({ id }: CardSpreadProps) {
  const [readingCard, setReadingCard] = useState<TarotCard | null>(null);
  const [readingReversed, setReadingReversed] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [fanKey, setFanKey] = useState(0);
  const spreadRef = useRef<HTMLDivElement>(null);
  const readingRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  const cardDims = useMemo(() => {
    if (windowWidth < 480) return { w: 48, h: 72, radius: 140, maxAngle: 50 };
    if (windowWidth < 768) return { w: 60, h: 90, radius: 200, maxAngle: 55 };
    if (windowWidth < 1024) return { w: 70, h: 105, radius: 280, maxAngle: 55 };
    return { w: 80, h: 120, radius: 340, maxAngle: 50 };
  }, [windowWidth]);

  const handleCardSelected = useCallback((card: TarotCard, reversed: boolean) => {
    setReadingCard(card);
    setReadingReversed(reversed);
    setShowReading(true);
    setTimeout(() => {
      readingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }, []);

  const handleReset = useCallback(() => {
    setReadingCard(null);
    setShowReading(false);
    setReadingReversed(false);
    setFanKey((k) => k + 1);
    setTimeout(() => {
      spreadRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, []);

  return (
    <section id={id} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#00CED1]/60 mb-4 font-light"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Choose Your Card
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[0.08em] text-[#E8DAEF]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The Spread
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-[#C39BD3]/40 font-light mt-4 tracking-wider max-w-md mx-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Focus your intention, then select the card that calls to you
        </motion.p>
      </div>

      {/* Card fan (remounts on reset via key) */}
      <div ref={spreadRef} className="px-4">
        <CardFan
          key={fanKey}
          onCardSelected={handleCardSelected}
          cardDims={cardDims}
        />
      </div>

      {/* Cosmic divider */}
      <div className="mt-20 sm:mt-28 opacity-25">
        <img
          src={COSMIC_DIVIDER}
          alt=""
          className="w-full max-w-3xl mx-auto h-12 sm:h-20 object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
      </div>

      {/* Card Reading */}
      <AnimatePresence>
        {showReading && readingCard && (
          <div ref={readingRef}>
            <CardReading
              card={readingCard}
              isReversed={readingReversed}
              onReset={handleReset}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
