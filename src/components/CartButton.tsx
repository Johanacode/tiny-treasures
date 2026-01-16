import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="relative text-cream/80 hover:text-gold transition-colors duration-300"
      aria-label="Open cart"
    >
      <ShoppingBag size={22} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold text-wine-dark text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;
