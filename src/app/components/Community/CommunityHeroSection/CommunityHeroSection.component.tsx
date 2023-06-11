/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CommunityHeroImg from "@/app/assets/images/Community/CommunityHeroImg.svg";
import Container from "./CommunityHeroSection.style";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  ArrowLeft,
  Export,
  ExportSquare,
} from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import HorizentalCard from "../../shared/HorizontalCard/HorizontalCard.component";

const CommunityHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <div className="communityhero_container">
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
                __html: t("community_hero").title,
              }}
            ></p>
            <p
              className="info_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("community_hero").desc,
              }}
            ></p>
            <div className="info_section--trial ">
              <Link
                href="https://network.psmap.io/"
                className="global_button info_section--trial--trial_btn"
              >
                {t("community_hero").trial_btn}
                {locale === "ar" ? (
                  <ExportSquare style={{ transform: "rotateZ(270deg)" }} />
                ) : (
                  <ExportSquare />
                )}
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
            className="communityhero_img"
          >
            <Image src={CommunityHeroImg} alt="hero logo" />
          </motion.div>
        </div>
        <div className="footer_section">
          <p
            className="footer_section--title"
            style={{ lineHeight: locale === "en" ? "64px" : "88px" }}
            dangerouslySetInnerHTML={{
              __html: t("community_hero").footer_title,
            }}
          ></p>
          <p
            className="footer_section--desc primary_text"
            dangerouslySetInnerHTML={{
              __html: t("community_hero").footer_desc,
            }}
          ></p>
        </div>
      </div>
    </Container>
  );
};

export default CommunityHeroSection;
