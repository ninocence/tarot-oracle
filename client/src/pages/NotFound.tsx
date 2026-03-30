import { useLocation } from "wouter";

/*
 * LIQUID ORACLE — 404 Page
 * Design: Dark themed, minimal, editorial.
 */

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#00CED1]/50 mb-6 font-light"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Lost in the Void
        </p>
        <h1
          className="text-6xl sm:text-8xl font-light text-[#E8DAEF]/20 tracking-[0.1em] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          404
        </h1>
        <p className="text-sm text-[#C39BD3]/40 font-light mb-10 tracking-wider max-w-xs mx-auto">
          The cards cannot reveal what does not exist. Let us guide you back.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="glow-button rounded-full px-10 py-4 text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Return to the Oracle
        </button>
      </div>
    </div>
  );
}
