/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Container from "./PSMapToolHeroSection.style";
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
            Discover a Whole World of Problem-Solving Possibilities with our
            Feature-Packed RCA Tool
          </p>
          <p className="PSMapTool_HeroSection--desc">
            Don't let system failures be the cause of errors. Reduce them by
            over 50% with our PSMap RCA tool for both medical and manufacturing
            organizations
          </p>
          <p className="PSMapTool_HeroSection--desc">
            We provide a suite of PSMap tools to help you conduct effective Root
            Cause Analysis.
          </p>
          <Link
            href=""
            className="global_button PSMapTool_HeroSection--trial_btn"
          >
            Start Your Free Trial
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Link>
        </motion.div>
      </div>
      <div className="hero_background">
        <Image
          src={PSMapToolHeroSectionImg}
          className="hero_background--img"
          alt="Hero Img"
        />
      </div>
    </Container>
  );
};

export default PSMapToolHeroSection;
