import { motion } from "framer-motion";

/*
 * LIQUID ORACLE — HeroSection
 * Design: Full-bleed dark cosmic hero with chrome text,
 * iridescent orb, and editorial typography.
 * Dark background image → light/chrome text.
 */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/hero-bg-bAdGQMPQbJTGznL4fCbLZi.webp";
const ORB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/mystical-orb-PsTZ9N9YQ9zV3qea9uTRYD.webp";

interface HeroSectionProps {
  onPullCard: () => void;
}

export default function HeroSection({ onPullCard }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          filter: "brightness(0.4) saturate(1.2)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]" />

      {/* Ambient gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,47,190,0.4) 0%, transparent 70%)",
          animation: "mesh-morph 15s ease-in-out infinite, float-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,206,209,0.3) 0%, transparent 70%)",
          animation: "mesh-morph 12s ease-in-out infinite reverse, float 10s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Vertical label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase text-[#C39BD3]/50 font-light"
            style={{ writingMode: "vertical-lr", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Major Arcana
          </span>
        </motion.div>

        {/* Floating orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <img
            src={ORB_IMG}
            alt="Mystical Oracle"
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(123,47,190,0.4)]"
            style={{ animation: "iridescent 8s ease-in-out infinite", mixBlendMode: "screen" }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#C39BD3]/70 mb-6 font-light"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ancient Wisdom &middot; Digital Oracle
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6"
        >
          <span
            className="chrome-text block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.08em] leading-[0.9]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            THE
          </span>
          <span
            className="chrome-text block text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-light tracking-[0.12em] leading-[0.85] mt-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ORACLE
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-sm sm:text-base text-[#D7BDE2]/60 font-light tracking-[0.15em] uppercase mb-12 max-w-md mx-auto"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Pull a card from the Major Arcana
          <br />
          <span className="text-[#00CED1]/50">& receive your reading</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button
            onClick={onPullCard}
            className="glow-button rounded-full px-10 py-4 sm:px-14 sm:py-5 text-white text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pull Your Card
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#C39BD3]/30 font-light">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#7B2FBE]/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
