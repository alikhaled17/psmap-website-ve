import AboutComparisonSection from "@/app/components/About/AboutComparisonSection/AboutComparisonSection.component";
import AboutHeroSection from "@/app/components/About/AboutHeroSection/AboutHeroSection.component";
import AboutOurVisionSection from "@/app/components/About/AboutOurVisionSection/AboutOurVisionSection.component";
import useTranslation from "@/app/hooks/useTranslation";

const About = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <AboutHeroSection />
      <AboutOurVisionSection />
      <AboutComparisonSection />
    </>
  );
};

export default About;
