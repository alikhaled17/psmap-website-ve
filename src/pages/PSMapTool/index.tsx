import PSMapToolHeroSection from "@/app/components/PSMapTool/PSMapTool_HeroSection/PSMapToolHeroSection.component";
import PSMapToolHowItWorks from "@/app/components/PSMapTool/PSMapTool_HowItWorks/PSMapTool_HowItWorks.component";
import PSMapToolPricing from "@/app/components/PSMapTool/PSMapTool_Pricing/PSMapTool_Pricing.component";
import useTranslation from "@/app/hooks/useTranslation";
import React from "react";

const PSMapTool = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <PSMapToolHeroSection />
      <PSMapToolPricing />
      <PSMapToolHowItWorks />
    </>
  );
};

export default PSMapTool;
