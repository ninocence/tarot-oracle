import { motion } from "framer-motion";

/*
 * LIQUID ORACLE — Footer
 * Design: Minimal editorial footer with thin dividers,
 * spaced-out uppercase labels, and subtle gradient accents.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/20 to-transparent mb-16 sm:mb-20" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-16 sm:mb-20">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4
              className="text-lg sm:text-xl font-light text-[#E8DAEF] mb-4 tracking-[0.04em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Oracle
            </h4>
            <p className="text-xs text-[#C39BD3]/40 font-light leading-relaxed">
              A digital sanctuary where ancient Tarot wisdom meets contemporary design. Each card reading is a conversation between your intuition and the collective unconscious — a mirror reflecting the truths you already carry within.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#00CED1]/40 mb-6 font-light">
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { label: "Pull a Card", href: "#card-spread" },
                { label: "Shop the Full Deck", href: "https://www.etsy.com" },
                { label: "About Tarot", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#D7BDE2]/40 hover:text-[#D7BDE2]/80 transition-colors duration-300 font-light tracking-wider"
                    onClick={(e) => {
                      if (link.href === "#") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#00CED1]/40 mb-6 font-light">
              Connect
            </p>
            <ul className="space-y-3">
              {["Instagram", "TikTok", "Pinterest", "Twitter / X"].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs text-[#D7BDE2]/40 hover:text-[#D7BDE2]/80 transition-colors duration-300 font-light tracking-wider"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[9px] sm:text-[10px] text-[#C39BD3]/20 tracking-[0.3em] uppercase font-light">
            &copy; {currentYear} The Oracle. All rights reserved.
          </p>
          <p className="text-[9px] sm:text-[10px] text-[#C39BD3]/15 tracking-[0.2em] font-light">
            Crafted with intention &middot; Designed for seekers
          </p>
        </div>
      </div>
    </footer>
  );
}
