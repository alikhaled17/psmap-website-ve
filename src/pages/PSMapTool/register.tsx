import PSMapToolAboutSection from "@/app/components/PSMapTool/PSMapTool_AboutSection/PSMapTool_AboutSection.component";
import PSMapToolHeroSection from "@/app/components/PSMapTool/PSMapTool_HeroSection/PSMapTool_HeroSection.component";
import PSMapToolHowItWorks from "@/app/components/PSMapTool/PSMapTool_HowItWorks/PSMapTool_HowItWorks.component";
import PSMapToolPricing from "@/app/components/PSMapTool/PSMapTool_Pricing/PSMapTool_Pricing.component";
import RegisterForm from "@/app/components/PSMapTool/RegisterForm/RegisterForm.component";
import useTranslation from "@/app/hooks/useTranslation";
import React from "react";

const PSMapTool = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default PSMapTool;
