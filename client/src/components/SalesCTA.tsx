/*
 * SalesCTA — V2 "Brutal Oracle"
 * Design: Full-bleed purple fill section. Bold display type.
 * Email capture + Etsy CTA. Asymmetric layout.
 */

import { useState } from "react";
import { toast } from "sonner";

const LIQUID_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/liquid-purple-texture-ccexfu4S82KyRpXKZManwv.webp";

export default function SalesCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're in. Daily readings incoming.", {
        style: { background: "#1f1e2c", border: "1px solid #5b4775", color: "#c8c0e0" },
      });
      setEmail("");
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Purple fill block */}
      <div className="relative bg-[#5b4775] overflow-hidden">
        {/* Liquid texture overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${LIQUID_TEXTURE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto py-20 px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-white opacity-40" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-white/60 uppercase">
                  The Full Deck
                </span>
              </div>
              <h2 className="font-display text-[clamp(48px,8vw,110px)] leading-none text-white mb-4">
                GET THE<br />FULL DECK
              </h2>
              <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm mb-8">
                78 cards. Major and Minor Arcana. Printed on premium matte stock with gilded edges. A complete oracle for your practice.
              </p>
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#1f1e2c] font-mono text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#c8c0e0] transition-colors"
              >
                Shop on Etsy
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {[
                { num: "78", label: "Cards" },
                { num: "22", label: "Major Arcana" },
                { num: "56", label: "Minor Arcana" },
                { num: "∞", label: "Readings" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-[48px] leading-none text-white mb-1">{num}</div>
                  <div className="font-mono text-[9px] tracking-[0.3em] text-white/50 uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Email capture — dark strip */}
      <div className="relative bg-[#0f0f14] border-t border-[#1f1e2c]">
        <div className="container mx-auto py-16 px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#7B2FBE]" />
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase">
                  Daily Oracle
                </span>
              </div>
              <h3 className="font-display text-[clamp(28px,4vw,52px)] leading-none text-white mb-2">
                FREE DAILY READING
              </h3>
              <p className="font-body text-[#8575a4] text-sm">
                One card. Every morning. In your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-0 w-full md:w-auto md:min-w-[380px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-[#1f1e2c] border border-[#5b4775] border-r-0 px-5 py-4 font-mono text-xs text-[#c8c0e0] placeholder-[#5c566b] tracking-wider outline-none focus:border-[#8575a4] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#7B2FBE] text-white font-mono text-xs tracking-[0.3em] uppercase px-6 py-4 hover:bg-[#8575a4] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
