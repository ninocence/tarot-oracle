/**
 * V3 Footer — "Dark Goddess" Feminine Luxury Oracle
 * Design: Near-black, Cormorant display brand name, thin dividers, iridescent rule
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: "#06060c", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display leading-none mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "rgba(240,238,255,0.85)", letterSpacing: "-0.01em" }}>
              The<br />
              <span className="font-display-italic" style={{ fontStyle: "italic" }}>Oracle</span>
            </h3>
            <p className="font-body max-w-xs" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.85, letterSpacing: "0.02em" }}>
              Ancient wisdom meets digital divination. Pull a card and receive guidance from the Major Arcana.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="font-ui text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.6rem" }}>Navigate</div>
            <ul className="space-y-3">
              {["Pull a Card", "Major Arcana", "Shop the Deck", "About"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300, letterSpacing: "0.02em" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "rgba(196,181,253,0.7)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-ui text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.6rem" }}>Connect</div>
            <ul className="space-y-3">
              {[
                { label: "Etsy Shop", href: "https://www.etsy.com" },
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "Pinterest", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target={href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                    className="font-body text-sm transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300, letterSpacing: "0.02em" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "rgba(196,181,253,0.7)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Iridescent divider */}
        <div className="divider-iridescent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-ui text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.6rem" }}>
            &copy; {currentYear} The Oracle. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <span className="font-ui text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.6rem" }}>Major Arcana · 22 Cards</span>
            <div style={{ width: "3px", height: "3px", background: "rgba(124,58,237,0.6)", borderRadius: "50%" }} />
            <span className="font-ui text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.6rem" }}>Ancient Wisdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
