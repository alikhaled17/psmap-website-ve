import mainImg from "@/app/assets/images/PSMapTool/PSMapTool_AboutSection.png";
import OrangeStar from "@/app/assets/images/global/orangeStar.svg";
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import StarImage from "../../shared/StarImage/StarImage.component";
import Container from "./PSMapTool_AboutSection.style";

const PSMapToolAboutSection = () => {
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
          className="PSMapTool_AboutSection"
        >
          <div className="PSMapTool_AboutSection--content">
            <ul className="PSMapTool_AboutSection--content__list">
              {t("psmaptool_about").list.map(
                (m: { title: string; desc: string }) => (
                  <li
                    key={m.title}
                    className="PSMapTool_AboutSection--content__list--item"
                  >
                    <span>
                      <Image
                        src={OrangeStar}
                        alt="star item"
                        className="PSMapTool_AboutSection--content__list--item--orange_star"
                      />
                    </span>
                    <div>
                      <p
                        className="PSMapTool_AboutSection--content__list--item--title"
                        dangerouslySetInnerHTML={{
                          __html: m.title,
                        }}
                      ></p>
                      <p
                        className="PSMapTool_AboutSection--content__list--item--desc primary_text"
                        dangerouslySetInnerHTML={{
                          __html: m.desc,
                        }}
                      ></p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="PSMapTool_AboutSection--image">
            <StarImage mainImg={mainImg} />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default PSMapToolAboutSection;
