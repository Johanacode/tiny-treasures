import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-wine-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
