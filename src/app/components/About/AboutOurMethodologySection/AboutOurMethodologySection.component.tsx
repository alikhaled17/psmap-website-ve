/* eslint-disable react/no-unescaped-entities */
import mainImg from "@/app/assets/images/About/OurMethodology.png";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import OrangeStar from "@/app/assets/images/global/orangeStar.svg";
import Container from "./AboutOurMethodologySection.style";

const AboutOurMethodologySection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
          className="OurMethodology_section"
        >
          <div className="OurMethodology_section--title">
            {t("about_methodology").title}
          </div>
          <div className="OurMethodology_section--body">
            <div className="content">
              <ul className="content--list">
                {t("about_methodology").list.map((m: string) => (
                  <li key={m} className="content--list--item">
                    <span>
                      <Image
                        src={OrangeStar}
                        alt="star item"
                        className="content--list--item--orange_star"
                      />
                    </span>
                    <div>
                      <p
                        className="content--list--item--desc primary_text"
                        dangerouslySetInnerHTML={{
                          __html: m,
                        }}
                      ></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="main_image">
              <Image src={mainImg} alt="main img" />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutOurMethodologySection;
