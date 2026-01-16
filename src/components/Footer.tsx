import React from "react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-wine-dark border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-xl tracking-widest text-cream">
            <span className="font-light">TINY </span>
            <span className="text-gold font-medium">TREASURES</span>
          </a>

          {/* Tagline */}
          <p className="text-cream/50 text-sm text-center italic font-serif">
            Handmade with love, worn with grace
          </p>

          {/* Social */}
          <a
            href="https://instagram.com/tinytreasures.7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300"
          >
            <Instagram size={18} />
            <span className="text-sm">@tinytreasures.7</span>
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/20" />

          {/* Copyright */}
          <p className="text-cream/40 text-xs tracking-wide">
            © {currentYear} Tiny Treasures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
