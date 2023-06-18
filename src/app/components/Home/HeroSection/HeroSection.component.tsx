/* eslint-disable react/no-unescaped-entities */
import React from "react";
import hero_img from "@/app/assets/images/Home/HeroImg.svg";
import Container from "./HeroSection.style";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, ArrowLeft } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import HorizentalCard from "../../shared/HorizontalCard/HorizontalCard.component";

const HeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <div className="hero_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
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
                __html: t("hero").title,
              }}
            ></p>
            <p
              className="info_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("hero").desc,
              }}
            ></p>
            <div className="info_section--trial ">
              <Link
                href="/PSMapTool"
                className="global_button info_section--trial--trial_btn"
              >
                {t("hero").trial_btn}
                {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Link>
              <div className="info_section--watch">
                <Link href="" className="info_section--watch--play_btn">
                  <Play />
                </Link>
                <Link href="" className="info_section--watch--watch_btn">
                  {t("hero").watch_btn}
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="hero_img"
          >
            <Image src={hero_img} alt="hero logo" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
