import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-wine-dark/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-wine-dark border-l border-gold/20 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-gold" size={24} />
                <h2 className="font-serif text-xl text-cream">Your Cart</h2>
                <span className="bg-gold text-wine-dark text-xs px-2 py-1 rounded-full font-semibold">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-cream/70 hover:text-cream transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="text-cream/30 mb-4" size={48} />
                  <p className="text-cream/60">Your cart is empty</p>
                  <p className="text-cream/40 text-sm mt-2">
                    Add some treasures to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-wine/50 p-3 rounded-sm border border-border/50"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-sm"
                      />
                      <div className="flex-1">
                        <h4 className="font-serif text-cream text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gold text-sm mt-1">
                          ₹{item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-wine-light/50 rounded text-cream/70 hover:text-cream transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-cream text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-wine-light/50 rounded text-cream/70 hover:text-cream transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-cream/40 hover:text-destructive transition-colors self-start"
                      >
                        <X size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gold/20 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-cream/70">Subtotal</span>
                  <span className="font-serif text-xl text-gold">
                    ₹{totalPrice}
                  </span>
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
