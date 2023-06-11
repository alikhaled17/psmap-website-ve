import CommunityAboutSection from "@/app/components/Community/CommunityAboutSection/CommunityAboutSection.component";
import CommunityHeroSection from "@/app/components/Community/CommunityHeroSection/CommunityHeroSection.component";
import useTranslation from "@/app/hooks/useTranslation";

const Community = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <CommunityHeroSection />
      <CommunityAboutSection />
    </>
  );
};

export default Community;
