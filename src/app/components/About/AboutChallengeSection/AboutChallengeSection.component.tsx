/* eslint-disable react/no-unescaped-entities */
import mainImg from "@/app/assets/images/About/Challenge.png";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";

import Container from "./AboutChallengeSection.style";

const AboutChallengeSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
          className="Challenge_section"
        >
          <div className="Challenge_section--content">
            <p className="primary_text Challenge_section--content--title">
              {t("about_challenge").title}
            </p>
            <p className="primary_text Challenge_section--content--desc">
              {t("about_challenge").desc}
            </p>
          </div>
          <div className="Challenge_section--main_image">
            <Image src={mainImg} alt="main img" />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutChallengeSection;
