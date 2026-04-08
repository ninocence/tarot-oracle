/*
 * HeroSection — V2 "Brutal Oracle"
 * Design: Pure black, massive Bebas Neue type, 3D figure bleeding right,
 * purple fills, editorial grid, asymmetric layout.
 * Dark bg → light text (white / lavender)
 */

import { useEffect, useRef } from "react";

const HERO_FIGURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/hero-figure-HFkZLpiTrQc9JYbDAQaA4B.webp";
const HERO_ORB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477101494/69cLE9yNAHUj9QzK7nHhZX/hero-3d-object-2eEaGqkAjJFk8vNb7wMnSY.webp";

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
    const particles: Array<{ x: number; y: number; r: number; vx: number; vy: number; o: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        o: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(169, 162, 190, ${p.o})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const marqueeItems = [
    "MAJOR ARCANA", "22 CARDS", "PULL YOUR READING", "ANCIENT WISDOM",
    "DIGITAL ORACLE", "MAJOR ARCANA", "22 CARDS", "PULL YOUR READING",
    "ANCIENT WISDOM", "DIGITAL ORACLE", "MAJOR ARCANA", "22 CARDS",
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden grid-overlay">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Purple radial glow */}
      <div
        className="absolute right-0 top-0 w-[60%] h-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 55% 65% at 75% 45%, rgba(91,71,117,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-8">
        <div className="font-mono text-xs tracking-[0.3em] text-[#a9a2be] uppercase">
          The Oracle
        </div>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Pull a Card", action: onPullCard },
            { label: "Major Arcana", action: onPullCard },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="font-mono text-xs tracking-[0.2em] text-[#a9a2be] uppercase hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.2em] text-[#a9a2be] uppercase hover:text-white transition-colors"
          >
            Shop
          </a>
        </div>
        <button onClick={onPullCard} className="btn-oracle text-xs py-3 px-6">
          Begin Reading
        </button>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[calc(100vh-72px)] px-6 md:px-12">

        {/* Left: Text column */}
        <div className="flex-1 flex flex-col justify-center pt-10 lg:pt-0 pb-24 lg:pb-0 max-w-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#7B2FBE]" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase">
              Major Arcana · 22 Cards
            </span>
          </div>

          <h1 className="font-display leading-[0.88] text-white mb-1" style={{ fontSize: "clamp(80px,13vw,170px)" }}>
            THE
          </h1>
          <h1
            className="font-display leading-[0.88] mb-8"
            style={{
              fontSize: "clamp(80px,13vw,170px)",
              background: "linear-gradient(135deg, #c8c0e0 0%, #8575a4 40%, #7B2FBE 70%, #c8c0e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ORACLE
          </h1>

          <p className="font-body text-[#8575a4] text-sm leading-relaxed max-w-xs mb-10 tracking-wide">
            Pull a card from the Major Arcana and receive your reading. Ancient wisdom, digital oracle.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={onPullCard} className="btn-oracle">
              Pull Your Card
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Shop Deck
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-[#5b4775] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="#8575a4" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-mono text-[10px] text-[#5c566b] tracking-[0.3em] uppercase">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Right: 3D Figure */}
        <div className="relative flex-shrink-0 w-full lg:w-auto flex items-end justify-center lg:justify-end lg:absolute lg:right-0 lg:bottom-0 lg:top-0 lg:w-[52%]">
          <div className="relative w-[300px] md:w-[420px] lg:w-[560px] xl:w-[640px]">
            {/* Floating orb */}
            <div
              className="absolute -top-4 left-4 w-20 h-20 md:w-28 md:h-28 float-anim z-20"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src={HERO_ORB}
                alt=""
                className="w-full h-full object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Main figure */}
            <img
              src={HERO_FIGURE}
              alt="Oracle figure"
              className="w-full h-auto object-contain float-anim"
              style={{ mixBlendMode: "screen", filter: "brightness(1.05) contrast(1.05)" }}
            />

            {/* Right-side label */}
            <div className="absolute right-2 top-1/3 flex flex-col items-end gap-1">
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#5c566b] uppercase">
                Ancient Wisdom
              </span>
              <div className="w-12 h-px bg-[#5b4775]" />
            </div>

            {/* Number stamp */}
            <div className="absolute bottom-4 right-0 text-right">
              <div className="font-display text-[70px] leading-none text-[#1f1e2c]">22</div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-[#5c566b] uppercase -mt-2">Cards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#1a1a22] bg-[#0a0a0a] overflow-hidden py-3">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase px-8">
              {item}
              <span className="mx-6 text-[#7B2FBE]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
