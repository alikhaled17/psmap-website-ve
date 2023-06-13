/* eslint-disable react/no-unescaped-entities */
import ourVision1 from "@/app/assets/images/About/OurVision1.png";
import ourVision2 from "@/app/assets/images/About/OurVision2.png";
import ourVision3 from "@/app/assets/images/About/OurVision3.png";
import ourVision4 from "@/app/assets/images/About/OurVision4.png";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./AboutOurVisionSection.style";

const AboutOurVisionSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <div className="ourvision_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="ourvision_section"
          >
            <p className="primary_text ourvision_section--title">
              {t("about_vision").title}
            </p>
            <p className="primary_text ourvision_section--desc">
              {t("about_vision").desc}
            </p>
            <div className="ourvision_section--items">
              <Image src={ourVision1} className={locale} alt="ourVision1" />
              <Image src={ourVision2} className={locale} alt="ourVision2" />
              <Image src={ourVision3} className={locale} alt="ourVision3" />
              <Image src={ourVision4} className={locale} alt="ourVision4" />
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AboutOurVisionSection;
