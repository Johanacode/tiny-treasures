import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import FloralCorner from "./FloralCorner";

export const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-wine overflow-hidden">
      {/* Decorative corners */}
      <FloralCorner position="top-left" className="opacity-25" />
      <FloralCorner position="bottom-right" className="opacity-25" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 tracking-wide">
            Get in Touch
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          
          <p className="text-cream/80 mb-12 leading-relaxed">
            Interested in a custom piece or have questions about our collection? 
            We'd love to hear from you.
          </p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            {/* Instagram - Primary */}
            <a
              href="https://instagram.com/tinytreasures.7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-sm border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-300 w-full max-w-xs"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <span className="text-cream text-sm block">Follow us on Instagram</span>
                <span className="text-gold text-sm font-medium">@tinytreasures.7</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@tinytreasures.com"
              className="group flex items-center gap-4 text-cream/70 hover:text-gold transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">hello@tinytreasures.com</span>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="gold" size="lg" asChild>
              <a 
                href="https://instagram.com/tinytreasures.7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Message Us on Instagram
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
