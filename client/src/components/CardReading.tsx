import { motion } from "framer-motion";
import type { TarotCard } from "@/lib/tarotData";

/*
 * LIQUID ORACLE — CardReading
 * Design: Glassmorphism panel with editorial typography.
 * Gradient borders, iridescent accents, serif card names.
 */

const CARD_BACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/card-back-cJGVWedMxrPorPbQB7X2jW.webp";

interface CardReadingProps {
  card: TarotCard;
  isReversed: boolean;
  onReset: () => void;
}

export default function CardReading({ card, isReversed, onReset }: CardReadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-4xl mx-auto px-4 pt-16 sm:pt-24"
    >
      {/* Main reading panel */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        {/* Gradient border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(123,47,190,0.1) 0%, transparent 50%, rgba(0,206,209,0.05) 100%)",
          }}
        />

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-8 sm:mb-12"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-[#00CED1]/50 font-light">
            Your Reading
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-[#C39BD3]/30 font-light">
            {isReversed ? "Reversed" : "Upright"}
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start">
          {/* Card image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div
              className="w-40 h-60 sm:w-48 sm:h-72 lg:w-56 lg:h-84 rounded-xl overflow-hidden relative"
              style={{
                boxShadow: "0 8px 40px rgba(123, 47, 190, 0.3), 0 0 80px rgba(123, 47, 190, 0.1)",
                animation: "pulse-glow 4s ease-in-out infinite",
                transform: isReversed ? "rotate(180deg)" : "none",
              }}
            >
              <img
                src={CARD_BACK}
                alt={card.name}
                className="w-full h-full object-cover"
              />
              {/* Card name overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-transparent to-transparent flex items-end justify-center pb-4">
                <div className="text-center" style={{ transform: isReversed ? "rotate(180deg)" : "none" }}>
                  <p className="text-[10px] text-[#00CED1]/70 tracking-[0.4em] uppercase font-light mb-1">
                    {card.number}
                  </p>
                  <p
                    className="text-lg sm:text-xl text-[#E8DAEF] font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}
                  >
                    {card.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reading content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Card number & name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#00CED1]/60 mb-2 font-light">
                {card.number} &mdash; Major Arcana
              </p>
              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E8DAEF] mb-2 tracking-[0.04em]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {card.name}
              </h3>
              {isReversed && (
                <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#C39BD3]/50 border border-[#C39BD3]/20 rounded-full px-4 py-1 mb-6">
                  Reversed Position
                </span>
              )}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent my-6 sm:my-8"
            />

            {/* Meaning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C39BD3]/40 mb-3 font-light">
                {isReversed ? "Reversed Meaning" : "Upright Meaning"}
              </p>
              <p
                className="text-sm sm:text-base text-[#D7BDE2]/80 leading-relaxed font-light"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {isReversed ? card.reversedMeaning : card.uprightMeaning}
              </p>
            </motion.div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 sm:mt-8"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C39BD3]/40 mb-3 font-light">
                Keywords
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#00CED1]/60 border border-[#00CED1]/15 rounded-full px-3 py-1.5 font-light"
                    style={{ background: "rgba(0, 206, 209, 0.03)" }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Spiritual message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(123,47,190,0.08) 0%, rgba(0,206,209,0.04) 100%)",
                border: "1px solid rgba(123, 47, 190, 0.1)",
              }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#7B2FBE]/50 mb-3 font-light">
                Message from the Oracle
              </p>
              <p
                className="text-base sm:text-lg lg:text-xl text-[#E8DAEF]/90 font-light italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.02em" }}
              >
                &ldquo;{card.message}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onReset}
            className="glow-button rounded-full px-8 py-3 sm:px-10 sm:py-4 text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pull Another Card
          </button>
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C39BD3]/50 hover:text-[#C39BD3]/80 transition-colors duration-300 font-light border border-[#C39BD3]/15 hover:border-[#C39BD3]/30 rounded-full px-8 py-3 sm:px-10 sm:py-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get the Full Deck
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
