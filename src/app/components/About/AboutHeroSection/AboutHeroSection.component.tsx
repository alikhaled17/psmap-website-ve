/* eslint-disable react/no-unescaped-entities */
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Container from "./AboutHeroSection.style";

const AboutHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <div className="abouthero_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="abouthero_section"
          >
            <p className="primary_text abouthero_section--title">
              {t("about_hero").title}
            </p>
            <p className="primary_text abouthero_section--desc">
              {t("about_hero").desc}
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AboutHeroSection;
