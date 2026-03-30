import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

/*
 * LIQUID ORACLE — SalesCTA
 * Design: Glassmorphism CTA section with email capture.
 * Gradient accents, editorial layout, iridescent highlights.
 */

const ORB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/mystical-orb-PsTZ9N9YQ9zV3qea9uTRYD.webp";

export default function SalesCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Oracle! Check your inbox for your first daily reading.", {
        style: {
          background: "rgba(18, 18, 26, 0.95)",
          border: "1px solid rgba(123, 47, 190, 0.3)",
          color: "#E8DAEF",
        },
      });
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,47,190,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Full deck CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden mb-16 sm:mb-20"
        >
          {/* Decorative gradient */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,206,209,0.4) 0%, transparent 70%)",
            }}
          />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
            {/* Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <img
                src={ORB_IMG}
                alt="Oracle"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(123,47,190,0.3)]"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>

            <div className="text-center lg:text-left">
              <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#00CED1]/50 mb-3 font-light">
                The Complete Collection
              </p>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#E8DAEF] mb-4 tracking-[0.04em]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Unlock the Full 78-Card Deck
              </h3>
              <p className="text-sm text-[#D7BDE2]/50 font-light leading-relaxed max-w-lg mb-8">
                Dive deeper into the mysteries of Tarot with the complete deck — including all Major and Minor Arcana. Beautifully designed, printed on premium card stock with holographic foil details.
              </p>
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button inline-block rounded-full px-10 py-4 text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Shop on Etsy
              </a>
            </div>
          </div>
        </motion.div>

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[#C39BD3]/40 mb-4 font-light">
            Daily Guidance
          </p>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#E8DAEF] mb-3 tracking-[0.04em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Free Daily Card Reading
          </h3>
          <p className="text-sm text-[#D7BDE2]/40 font-light mb-8 max-w-md mx-auto">
            Receive a personalized card reading in your inbox every morning to guide your day.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-[#7B2FBE]/20 rounded-full px-6 py-3.5 text-sm text-[#E8DAEF] placeholder-[#C39BD3]/25 focus:outline-none focus:border-[#7B2FBE]/50 transition-colors duration-300 font-light"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            />
            <button
              type="submit"
              className="glow-button rounded-full px-8 py-3.5 text-white text-[10px] sm:text-xs tracking-[0.25em] uppercase font-light whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Subscribe
            </button>
          </form>

          <p className="text-[9px] text-[#C39BD3]/20 mt-4 tracking-wider font-light">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
