import ringImage from "@/assets/ring-collection.jpg";
import earringsImage from "@/assets/earrings-collection.jpg";
import necklaceImage from "@/assets/necklace-collection.jpg";
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "ring-1",
    name: "Delicate Rose Band",
    price: 499,
    image: ringImage,
    category: "Rings",
    description: "A delicate rose gold band with intricate floral detailing",
  },
  {
    id: "ring-2",
    name: "Twisted Vine Ring",
    price: 649,
    image: ringImage,
    category: "Rings",
    description: "Elegant twisted vine design in premium gold finish",
  },
  {
    id: "earring-1",
    name: "Pearl Drop Earrings",
    price: 799,
    image: earringsImage,
    category: "Earrings",
    description: "Classic pearl drops with gold accents",
  },
  {
    id: "earring-2",
    name: "Crystal Studs",
    price: 449,
    image: earringsImage,
    category: "Earrings",
    description: "Sparkling crystal studs for everyday elegance",
  },
  {
    id: "necklace-1",
    name: "Golden Heart Pendant",
    price: 999,
    image: necklaceImage,
    category: "Necklaces",
    description: "A timeless heart pendant on a delicate chain",
  },
  {
    id: "necklace-2",
    name: "Layered Chain Set",
    price: 1299,
    image: necklaceImage,
    category: "Necklaces",
    description: "Three-layer chain set for a modern look",
  },
];
