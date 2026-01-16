import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-wine-dark">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-6xl text-cream">404</h1>
        <p className="mb-6 text-xl text-cream/70">Oops! Page not found</p>
        <Button variant="gold" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
