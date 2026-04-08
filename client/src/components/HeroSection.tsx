/**
 * V3 HeroSection — "Dark Goddess" Feminine Luxury Oracle
 * Design: Asymmetric split — editorial Cormorant text left, liquid chrome goddess right
 * Colors: #08080e bg, violet #7c3aed accent, lavender #a78bfa, chrome silver
 * Typography: Cormorant Garamond (display italic) + Space Grotesk (UI)
 */

import { useEffect, useRef } from "react";

const GODDESS_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-goddess-hero-RPW2tyNe9EifQzLD6iGAY4.png";
const ORB_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/v3-orb-L7Ehs3FjVmFRyFE65s3Ksu.webp";

interface HeroSectionProps {
  onPullCard: () => void;
}

export default function HeroSection({ onPullCard }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; o: number; hue: number }> = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 90; i++) {
      particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.4 + 0.2, o: Math.random() * 0.4 + 0.05, hue: Math.random() * 60 + 260 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 75%, ${p.o})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#08080e" }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.3 }} />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div style={{ position: "absolute", top: "5%", left: "0%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", top: "40%", right: "30%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(196,181,253,0.05) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      </div>

      {/* Nav */}
      <nav className="relative flex items-center justify-between px-6 md:px-14 pt-8 pb-4" style={{ zIndex: 10 }}>
        <div className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(196,181,253,0.5)" }}>The Oracle</div>
        <div className="hidden md:flex items-center gap-10">
          {[{ label: "Pull a Card", fn: onPullCard }, { label: "Major Arcana", fn: onPullCard }, { label: "Shop", fn: () => window.open("https://www.etsy.com","_blank") }].map(({ label, fn }) => (
            <button key={label} onClick={fn} className="font-ui text-xs tracking-[0.2em] uppercase transition-colors duration-300" style={{ color: "rgba(196,181,253,0.35)", letterSpacing: "0.18em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(196,181,253,0.8)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(196,181,253,0.35)")}
            >{label}</button>
          ))}
        </div>
        <button onClick={onPullCard} className="font-ui text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300"
          style={{ border: "1px solid rgba(124,58,237,0.4)", color: "rgba(196,181,253,0.8)", letterSpacing: "0.15em" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.1)"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; }}
        >
          Begin Reading
        </button>
      </nav>

      {/* Main hero layout */}
      <div className="relative" style={{ zIndex: 5 }}>
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] px-6 md:px-14">

          {/* LEFT — Text */}
          <div className="flex-1 flex flex-col justify-center pt-8 lg:pt-0 pb-20 lg:pb-0 max-w-xl order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10 fade-up fade-up-delay-1">
              <div style={{ width: "36px", height: "1px", background: "linear-gradient(90deg, rgba(167,139,250,0.7), transparent)" }} />
              <span className="font-ui text-xs tracking-[0.35em] uppercase" style={{ color: "rgba(167,139,250,0.55)" }}>Major Arcana · 22 Cards</span>
            </div>

            {/* Headline */}
            <div className="fade-up fade-up-delay-2">
              <div className="font-display" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, color: "rgba(240,238,255,0.9)", letterSpacing: "-0.02em", lineHeight: 0.88 }}>
                The
              </div>
              <div className="font-display-italic" style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, fontStyle: "italic",
                background: "linear-gradient(135deg, #e0d7ff 0%, #c4b5fd 25%, #a78bfa 55%, #7c3aed 80%, #c4b5fd 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                letterSpacing: "-0.02em", lineHeight: 0.88,
              }}>
                Oracle
              </div>
            </div>

            {/* Thin rule */}
            <div className="my-8 fade-up fade-up-delay-3">
              <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, rgba(167,139,250,0.5), transparent)" }} />
            </div>

            {/* Body */}
            <p className="font-body mb-10 max-w-xs fade-up fade-up-delay-3" style={{ fontSize: "0.9rem", fontWeight: 300, color: "rgba(226,232,240,0.45)", lineHeight: 1.85, letterSpacing: "0.025em" }}>
              Pull a card from the Major Arcana and receive your reading. Ancient wisdom, digital oracle. Each card carries a message meant only for you.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap fade-up fade-up-delay-4">
              <button onClick={onPullCard} className="group relative overflow-hidden font-ui text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500"
                style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)", color: "#f0eeff", letterSpacing: "0.15em", boxShadow: "0 0 30px rgba(124,58,237,0.25), 0 4px 20px rgba(0,0,0,0.4)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 50px rgba(124,58,237,0.45), 0 4px 30px rgba(0,0,0,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 30px rgba(124,58,237,0.25), 0 4px 20px rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Pull Your Card →
              </button>
              <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="font-ui text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(226,232,240,0.5)", letterSpacing: "0.15em" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(226,232,240,0.8)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(226,232,240,0.5)"; }}
              >
                Shop Deck
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-14 fade-up fade-up-delay-5">
              {[["22", "Major Arcana"], ["78", "Full Deck"], ["∞", "Readings"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display" style={{ fontSize: "1.75rem", fontWeight: 300, color: "rgba(196,181,253,0.7)", lineHeight: 1 }}>{n}</div>
                  <div className="font-ui text-xs tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Goddess */}
          <div className="relative flex-1 flex items-center justify-center lg:justify-end order-1 lg:order-2 min-h-[55vw] lg:min-h-0">
            {/* Glow halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{ width: "55%", height: "75%", background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(167,139,250,0.05) 50%, transparent 70%)", filter: "blur(50px)", borderRadius: "50%" }} />
            </div>

            {/* Floating orb — top corner */}
            <div className="absolute top-8 right-8 lg:top-16 lg:right-4 float-slow" style={{ width: "clamp(60px, 8vw, 100px)", zIndex: 3, animationDelay: "2s" }}>
              <img src={ORB_URL} alt="" style={{ width: "100%", height: "auto", mixBlendMode: "screen", opacity: 0.85 }} />
            </div>

            {/* Main goddess figure */}
            <div className="relative float-slow" style={{ width: "clamp(280px, 45vw, 520px)", zIndex: 2 }}>
              <img src={GODDESS_URL} alt="Liquid chrome goddess oracle" style={{ width: "100%", height: "auto", objectFit: "contain", mixBlendMode: "screen", filter: "contrast(1.05) brightness(0.92) saturate(1.1)" }} />
            </div>

            {/* Vertical label */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3" style={{ zIndex: 3 }}>
              <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(167,139,250,0.3))" }} />
              <span className="font-ui text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(167,139,250,0.35)", writingMode: "vertical-rl", fontSize: "0.6rem" }}>Ancient Wisdom</span>
              <div style={{ width: "1px", height: "40px", background: "linear-gradient(to top, transparent, rgba(167,139,250,0.3))" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", zIndex: 10, background: "rgba(8,8,14,0.8)" }}>
        <div className="ticker-track">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="font-ui text-xs tracking-[0.3em] uppercase mx-6" style={{ color: "rgba(167,139,250,0.25)" }}>
              Major Arcana <span style={{ color: "rgba(124,58,237,0.5)", margin: "0 1rem" }}>✦</span> Pull Your Reading <span style={{ color: "rgba(124,58,237,0.5)", margin: "0 1rem" }}>✦</span> Ancient Wisdom <span style={{ color: "rgba(124,58,237,0.5)", margin: "0 1rem" }}>✦</span> Digital Oracle <span style={{ color: "rgba(124,58,237,0.5)", margin: "0 1rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
