import ContactHeroSection from "@/app/components/ContactUs/ContactHeroSection/ContactHeroSection.component";
import useTranslation from "@/app/hooks/useTranslation";

const Contact = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <ContactHeroSection />
    </>
  );
};

export default Contact;
