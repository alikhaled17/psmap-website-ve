/* eslint-disable react/no-unescaped-entities */
import React from "react";
import hero_img from "@/app/assets/images/Training/trainingHeroImg.png";
import Container from "./TrainingHeroSection.style";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, ArrowLeft } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import HorizentalCard from "../../shared/HorizontalCard/HorizontalCard.component";

const TrainingHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container className={locale}>
      <div className="warped_container">
        <div className="training_hero_container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="info_section"
          >
            <p
              className="info_section--title"
              style={{ lineHeight: locale === "en" ? "64px" : "88px" }}
              dangerouslySetInnerHTML={{
                __html: t("training_hero").title,
              }}
            ></p>
            <p
              className="info_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("training_hero").desc,
              }}
            ></p>
            <div className="info_section--trial ">
              <Link
                href=""
                className="global_button info_section--trial--trial_btn"
              >
                {t("training_hero").trial_btn}
                {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="training_hero_img"
          >
            <Image src={hero_img} alt="hero logo" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingHeroSection;
