/* eslint-disable react/no-unescaped-entities */
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./TrainingRCACertifiedSection.style";
import mainImg from "@/app/assets/images/Training/RCACertified.png";
import patternImg from "@/app/assets/images/Training/pattern.svg";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Link from "next/link";

const TrainingRCACertifiedSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
          className="RCACertified_section"
        >
          <p
            className="RCACertified_section--title primary_text"
            dangerouslySetInnerHTML={{
              __html: t("training_certified").title,
            }}
          ></p>
          <div className="RCACertified_section--main_img">
            <Image
              src={mainImg}
              alt="RCA Certified"
              className="certified_img"
            />
            <Image src={patternImg} alt="RCA pattern" className="pattern" />
          </div>
          <p
            className="RCACertified_section--desc primary_text"
            dangerouslySetInnerHTML={{
              __html: t("training_certified").desc,
            }}
          ></p>
          <Link
            href="/Training/register"
            className="global_button RCACertified_section--btn"
          >
            {t("training_certified").btn}
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default TrainingRCACertifiedSection;
