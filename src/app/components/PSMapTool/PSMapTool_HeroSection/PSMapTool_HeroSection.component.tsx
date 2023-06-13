/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Container from "./PSMapTool_HeroSection.style";
import PSMapToolHeroSectionImg from "@/app/assets/images/PSMapTool/PSMapTool_HeroSection.svg";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import Image from "next/image";

const PSMapToolHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className="PSMapTool_HeroSection"
        >
          <p className="PSMapTool_HeroSection--title">
            {t("psmaptool_hero").title}
          </p>
          <p className="PSMapTool_HeroSection--desc">
            {t("psmaptool_hero").desc[0]}
          </p>
          <p className="PSMapTool_HeroSection--desc">
            {t("psmaptool_hero").desc[1]}
          </p>
          <Link
            href="/PSMapTool/register"
            className="global_button PSMapTool_HeroSection--trial_btn"
          >
            {t("psmaptool_hero").trial_btn}
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Link>
        </motion.div>
      </div>
      <div className="hero_background"></div>
    </Container>
  );
};

export default PSMapToolHeroSection;
