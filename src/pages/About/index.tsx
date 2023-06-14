import AboutChallengeSection from "@/app/components/About/AboutChallengeSection/AboutChallengeSection.component";
import AboutComparisonSection from "@/app/components/About/AboutComparisonSection/AboutComparisonSection.component";
import AboutHeroSection from "@/app/components/About/AboutHeroSection/AboutHeroSection.component";
import AboutOurMethodologySection from "@/app/components/About/AboutOurMethodologySection/AboutOurMethodologySection.component";
import AboutOurVisionSection from "@/app/components/About/AboutOurVisionSection/AboutOurVisionSection.component";
import SignupSection from "@/app/components/Home/SignupSection/SignupSection.component";
import useTranslation from "@/app/hooks/useTranslation";

const About = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <AboutHeroSection />
      <AboutOurVisionSection />
      <AboutOurMethodologySection />
      <AboutComparisonSection />
      <AboutChallengeSection />
      <SignupSection />
    </>
  );
};

export default About;
