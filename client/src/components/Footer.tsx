/*
 * Footer — V2 "Brutal Oracle"
 * Design: Pure black. Minimal editorial grid. Monospace labels.
 * Bold display type for brand name. Thin dividers.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#1a1a22]">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-[40px] leading-none text-white mb-4">
              THE<br />ORACLE
            </h3>
            <p className="font-body text-[#5c566b] text-xs leading-relaxed max-w-xs">
              Ancient wisdom meets digital divination. Pull a card and receive guidance from the Major Arcana.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase mb-6">Navigate</div>
            <ul className="space-y-3">
              {["Pull a Card", "Major Arcana", "Shop the Deck", "About"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-mono text-xs tracking-[0.2em] text-[#5c566b] uppercase hover:text-[#a9a2be] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Etsy */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] text-[#8575a4] uppercase mb-6">Connect</div>
            <ul className="space-y-3">
              {[
                { label: "Etsy Shop", href: "https://www.etsy.com" },
                { label: "Instagram", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "Pinterest", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-[0.2em] text-[#5c566b] uppercase hover:text-[#a9a2be] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a22] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase">
            &copy; {currentYear} The Oracle. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase">
              Major Arcana · 22 Cards
            </span>
            <div className="w-1 h-1 bg-[#7B2FBE] rounded-full" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#5c566b] uppercase">
              Ancient Wisdom
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
