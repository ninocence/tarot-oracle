/**
 * V3 SalesCTA — "Dark Goddess" Feminine Luxury Oracle
 * Design: Dark section with iridescent liquid texture background, Cormorant display type,
 * glass-morphism email capture, elegant Etsy CTA.
 */

import { useState } from "react";
import { toast } from "sonner";

const LIQUID_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-liquid-bg-CqCPTcRGEPDpjbKfbLkLHi.webp";

export default function SalesCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're in. Daily readings incoming.", {
        style: { background: "#0f0f1a", border: "1px solid rgba(124,58,237,0.4)", color: "rgba(196,181,253,0.9)" },
      });
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#08080e" }}>
      {/* Full deck CTA */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0f0f1a 40%, #1e0a3c 100%)" }}>
        {/* Liquid texture */}
        <div className="absolute inset-0" style={{ backgroundImage: `url(${LIQUID_TEXTURE})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12, mixBlendMode: "overlay" }} />
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.2) 0%, transparent 60%)" }} />

        <div className="relative z-10 container mx-auto py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-8">
                <div style={{ width: "30px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}>The Full Deck</span>
              </div>
              <h2 className="font-display leading-none mb-6" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 300, color: "rgba(240,238,255,0.95)", letterSpacing: "-0.02em" }}>
                Get the<br />
                <span className="font-display-italic" style={{ fontStyle: "italic" }}>Full Deck</span>
              </h2>
              <p className="font-body mb-10 max-w-sm" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, letterSpacing: "0.02em" }}>
                78 cards. Major and Minor Arcana. Printed on premium matte stock with gilded edges. A complete oracle for your practice.
              </p>
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-ui text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.9)", color: "#08080e", letterSpacing: "0.15em" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,1)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Shop on Etsy →
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-10 lg:gap-14">
              {[["78", "Cards"], ["22", "Major Arcana"], ["56", "Minor Arcana"], ["∞", "Readings"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "rgba(240,238,255,0.85)", lineHeight: 1 }}>{n}</div>
                  <div className="font-ui text-xs tracking-[0.25em] uppercase mt-2" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Email capture */}
      <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a12" }}>
        <div className="container mx-auto py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: "24px", height: "1px", background: "rgba(124,58,237,0.5)" }} />
                <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(167,139,250,0.5)", fontSize: "0.65rem" }}>Daily Oracle</span>
              </div>
              <h3 className="font-display leading-none mb-2" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 300, color: "rgba(240,238,255,0.88)", letterSpacing: "-0.01em" }}>
                Free Daily Reading
              </h3>
              <p className="font-body" style={{ color: "rgba(226,232,240,0.35)", fontSize: "0.85rem", fontWeight: 300 }}>
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
                className="flex-1 px-5 py-4 font-body text-sm outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  borderRight: "none",
                  color: "rgba(226,232,240,0.8)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"; e.currentTarget.style.background = "rgba(124,58,237,0.05)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              />
              <button
                type="submit"
                className="font-ui text-xs tracking-[0.2em] uppercase px-6 py-4 transition-all duration-300 whitespace-nowrap"
                style={{ background: "rgba(124,58,237,0.8)", color: "rgba(240,238,255,0.9)", letterSpacing: "0.15em", border: "1px solid rgba(124,58,237,0.4)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,58,237,0.8)"; }}
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
