import React from "react";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export const FloralCorner: React.FC<FloralCornerProps> = ({ position, className = "" }) => {
  const getRotation = () => {
    switch (position) {
      case "top-left":
        return "rotate-0";
      case "top-right":
        return "rotate-90";
      case "bottom-right":
        return "rotate-180";
      case "bottom-left":
        return "-rotate-90";
      default:
        return "";
    }
  };

  const getPosition = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-right":
        return "bottom-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      default:
        return "";
    }
  };

  return (
    <svg
      className={`absolute w-20 h-20 md:w-28 md:h-28 opacity-40 ${getPosition()} ${getRotation()} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main flower */}
      <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="1" transform="rotate(-45, 25, 25)" />
      <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="1" transform="rotate(0, 25, 25)" />
      <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="1" transform="rotate(45, 25, 25)" />
      <ellipse cx="25" cy="25" rx="12" ry="8" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="1" transform="rotate(90, 25, 25)" />
      <circle cx="25" cy="25" r="4" fill="hsl(35, 55%, 55%)" opacity="0.6" />
      
      {/* Decorative stems */}
      <path d="M35 35 Q50 45 60 60" stroke="hsl(35, 55%, 55%)" strokeWidth="0.8" fill="none" />
      <path d="M38 30 Q55 35 70 45" stroke="hsl(35, 55%, 55%)" strokeWidth="0.5" fill="none" />
      
      {/* Small buds */}
      <circle cx="62" cy="58" r="3" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="0.8" />
      <circle cx="72" cy="44" r="2" fill="none" stroke="hsl(35, 55%, 55%)" strokeWidth="0.6" />
      
      {/* Leaves */}
      <path d="M42 40 Q48 38 52 45 Q46 44 42 40" fill="hsl(35, 55%, 55%)" opacity="0.4" />
      <path d="M55 48 Q62 48 65 55 Q58 52 55 48" fill="hsl(35, 55%, 55%)" opacity="0.3" />
    </svg>
  );
};

export default FloralCorner;
