/* eslint-disable react/no-unescaped-entities */
import BookImg from "@/app/assets/images/Resources/BookImg.png";

import { useState } from "react";
import StarImg from "@/app/assets/images/global/star.svg";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Resources_HeroSection.style";
import EbookForm from "../EbookForm/EbookForm.component";
import { FormType } from "@/app/interfaces/FormType.enum";

const ResourcesHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();
  const [isEbookForm, setIsEbookForm] = useState<boolean>(false);
  return (
    <Container
      className={`
      ${locale}
    `}
    >
      {isEbookForm && (
        <EbookForm
          data={t("ebookk_form").form}
          setIsEbookForm={setIsEbookForm}
          formType={FormType.EBook}
        />
      )}
      <div className="warped_container">
        <div className="resources_hero_container desktop_screen">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            style={{ order: locale === "ar" ? 2 : 1 }}
            className="resources_hero_section"
          >
            <p
              className="resources_hero_section--title"
              style={{ lineHeight: locale === "en" ? "64px" : "88px" }}
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").title,
              }}
            ></p>
            <p
              className="resources_hero_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").desc[0],
              }}
            ></p>
            <p
              className="resources_hero_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").desc[1],
              }}
            ></p>
            <div className="resources_hero_section--trial ">
              <Link
                href=""
                className="global_button resources_hero_section--trial_btn"
                onClick={() => {
                  setIsEbookForm(true);
                }}
              >
                {t("resources_hero").download_btn}
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
            style={{ order: locale === "ar" ? 1 : 2 }}
            className="resources_hero_img"
          >
            <Image src={BookImg} alt="hero logo" />
          </motion.div>
        </div>
        <div className="resources_hero_container mobile_screen">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            style={{ order: locale === "ar" ? 2 : 1 }}
            className="resources_hero_section"
          >
            <p
              className={`resources_hero_section--title ${locale}`}
              style={{ lineHeight: locale === "en" ? "64px" : "88px" }}
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").title,
              }}
            ></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            style={{ order: locale === "ar" ? 1 : 2 }}
            className="resources_hero_img"
          >
            <Image src={BookImg} alt="hero logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            style={{ order: 3 }}
            className="resources_hero_section"
          >
            <p
              className="resources_hero_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").desc[0],
              }}
            ></p>
            <p
              className="resources_hero_section--desc primary_text"
              dangerouslySetInnerHTML={{
                __html: t("resources_hero").desc[1],
              }}
            ></p>
            <div className="resources_hero_section--trial ">
              <Link
                href=""
                className="global_button resources_hero_section--trial_btn"
                onClick={() => {
                  setIsEbookForm(true);
                }}
              >
                {t("resources_hero").download_btn}
                {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default ResourcesHeroSection;
