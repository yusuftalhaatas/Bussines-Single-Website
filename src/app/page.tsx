"use client";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ProductSlider from "./components/ProductSlider";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <MissionSection />
      <ProductSlider />
      <TeamSection />
      <style jsx>{`
        .home-page {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
}
