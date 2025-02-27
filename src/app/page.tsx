import DashboardAnimationSection from "@/components/main/Home/DashboardAnimationSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import PricingSection from "@/components/main/Home/PricingSection";
import React from "react";
import Preview from "../components/main/Home/AllSocialMediaSection";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <DashboardAnimationSection />
      <div className="space-y-20 pb-20">
        <FeaturesSection />
        <PricingSection />
        <Preview />
      </div>
    </React.Fragment>
  );
};

export default Home;
