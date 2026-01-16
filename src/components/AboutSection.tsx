import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FloralCorner from "./FloralCorner";

export const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-wine overflow-hidden">
      {/* Decorative corners */}
      <FloralCorner position="top-right" className="opacity-20" />
      <FloralCorner position="bottom-left" className="opacity-20" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Title */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 tracking-wide">
              Our Story
            </h2>
            
            {/* Decorative Line */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-cream/85 text-lg leading-relaxed">
              At <span className="text-gold font-serif">Tiny Treasures</span>, we believe that jewelry 
              should be as unique as the woman who wears it. Each piece is lovingly handcrafted, 
              transforming simple materials into wearable art that tells a story.
            </p>

            <p className="text-cream/75 leading-relaxed">
              Our designs draw inspiration from nature's delicate beauty—the curve of a petal, 
              the shimmer of moonlight on water, the strength hidden within softness. 
              Every treasure we create is meant to remind you of your own quiet power.
            </p>

            <p className="text-cream/75 leading-relaxed">
              Handmade with intention. Worn with grace.
            </p>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center gap-4 items-center"
          >
            <span className="w-12 h-px bg-gold/30" />
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="w-12 h-px bg-gold/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
