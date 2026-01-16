import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import ringImage from "@/assets/ring-collection.jpg";
import earringsImage from "@/assets/earrings-collection.jpg";
import necklaceImage from "@/assets/necklace-collection.jpg";

const collections = [
  {
    id: 1,
    name: "Rings",
    description: "Delicate bands that whisper stories of elegance",
    image: ringImage,
  },
  {
    id: 2,
    name: "Earrings",
    description: "Graceful drops that dance with your every move",
    image: earringsImage,
  },
  {
    id: 3,
    name: "Necklaces",
    description: "Timeless chains that rest close to your heart",
    image: necklaceImage,
  },
];

export const CollectionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="collection" className="py-24 md:py-32 bg-wine-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 tracking-wide">
            Our Collection
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-cream/70 max-w-lg mx-auto">
            Each piece tells a story of craftsmanship and care, designed to be treasured for years to come.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-5">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Border decoration */}
                <div className="absolute inset-2 border border-gold/20 group-hover:border-gold/40 transition-colors duration-300 rounded-sm pointer-events-none" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-cream/60 text-sm italic mb-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Button variant="elegant" size="lg" asChild>
            <a href="https://instagram.com/tinytreasures.7" target="_blank" rel="noopener noreferrer">
              View More on Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;
