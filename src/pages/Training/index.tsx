import TrainingFeatureSection from "@/app/components/Training/TrainingFeatureSection/TrainingFeatureSection.component";
import TrainingHeroSection from "@/app/components/Training/TrainingHeroSection/TrainingHeroSection.component";
import TrainingLearnRCASection from "@/app/components/Training/TrainingLearnRCASection/TrainingLearnRCASection.component";
import TrainingRCACertifiedSection from "@/app/components/Training/TrainingRCACertifiedSection/TrainingRCACertifiedSection.component";

const Resources = () => {
  return (
    <>
      <TrainingHeroSection />
      <TrainingLearnRCASection />
      <TrainingFeatureSection />
      <TrainingRCACertifiedSection />
    </>
  );
};

export default Resources;
