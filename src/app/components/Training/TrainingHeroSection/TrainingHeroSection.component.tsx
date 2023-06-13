/* eslint-disable react/no-unescaped-entities */
import HeroBgAr from "@/app/assets/images/Training/TrainingHeroBGAR.svg";
import HeroBgEn from "@/app/assets/images/Training/TrainingHeroBGEN.svg";
import hero_img from "@/app/assets/images/Training/trainingHeroImg.png";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./TrainingHeroSection.style";
import { FormType } from "@/app/interfaces/FormType.enum";

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
              display: "",
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
                href={{
                  pathname: "/Training/register",
                  query: { formType: FormType.Training },
                }}
                className="global_button info_section--trial--trial_btn"
              >
                {t("training_hero").trial_btn}
                {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Link>
            </div>
          </motion.div>
          <motion.div className="training_hero_img">
            {locale === "ar" ? (
              <Image src={HeroBgAr} className="Ar_item" alt="fly" />
            ) : (
              <Image src={HeroBgEn} className="En_item" alt="fly" />
            )}
            <Image src={hero_img} alt="hero logo" className="main_img" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingHeroSection;
