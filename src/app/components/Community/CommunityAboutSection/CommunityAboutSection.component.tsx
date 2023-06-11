import mainImg from "@/app/assets/images/Community/CommunityAboutImg.png";
import OrangeStar from "@/app/assets/images/global/orangeStar.svg";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExportSquare } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import StarImage from "../../shared/StarImage/StarImage.component";
import Container from "./CommunityAboutSection.style";

const CommunityAboutSection = () => {
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
          className="about_section"
        >
          <div className="about_section--content">
            <p className="main_title">{t("community_about").title}</p>

            <ul className="about_section--content__list">
              {t("community_about").list.map(
                (m: { title: string; desc: string }) => (
                  <li
                    key={m.title}
                    className="about_section--content__list--item"
                  >
                    <span>
                      <Image
                        src={OrangeStar}
                        alt="star item"
                        className="about_section--content__list--item--orange_star"
                      />
                    </span>
                    <div>
                      <p
                        className="about_section--content__list--item--title"
                        dangerouslySetInnerHTML={{
                          __html: m.title,
                        }}
                      ></p>
                      <p
                        className="about_section--content__list--item--desc primary_text"
                        dangerouslySetInnerHTML={{
                          __html: m.desc,
                        }}
                      ></p>
                    </div>
                  </li>
                )
              )}
            </ul>
            <div>
              <Link
                href="https://network.psmap.io/"
                className="global_button about_section--content--trial_btn"
              >
                {t("community_about").btn}
                {locale === "ar" ? (
                  <ExportSquare style={{ transform: "rotateZ(270deg)" }} />
                ) : (
                  <ExportSquare />
                )}
              </Link>
            </div>
          </div>
          <div className="about_section--image">
            <StarImage mainImg={mainImg} />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default CommunityAboutSection;
