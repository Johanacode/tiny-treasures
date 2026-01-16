import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Collection", "About", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-wine-dark/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl tracking-widest text-cream">
          <span className="font-normal">TINY </span>
          <span className="font-semibold text-gold">TREASURES</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest font-sans"
            >
              {item}
            </a>
          ))}
          <a
            href="https://instagram.com/tinytreasures.7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 hover:text-gold transition-colors duration-300"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-wine-dark/98 backdrop-blur-md border-t border-gold/20"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-widest py-2"
              >
                {item}
              </a>
            ))}
            <a
              href="https://instagram.com/tinytreasures.7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors duration-300 py-2"
            >
              <Instagram size={18} />
              <span className="text-sm">@tinytreasures.7</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
