import React from "react";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Product, useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart, items } = useCart();
  const isInCart = items.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:border-gold/30 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-gold/70 text-xs uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-serif text-lg text-cream mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-cream/60 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl text-gold">
            ₹{product.price}
          </span>
          <Button
            variant={isInCart ? "elegant" : "gold"}
            size="sm"
            onClick={handleAddToCart}
            className="gap-1"
          >
            {isInCart ? (
              <>
                <Check size={16} />
                Added
              </>
            ) : (
              <>
                <Plus size={16} />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
