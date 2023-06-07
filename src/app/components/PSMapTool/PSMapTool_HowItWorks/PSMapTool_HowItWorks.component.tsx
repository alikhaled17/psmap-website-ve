import React from "react";
import Container from "./PSMapTool_HowItWorks.style";
import { motion } from "framer-motion";
import CollectAnalyzeData from "@/app/assets/images/PSMapTool/how_1.png";
import Image from "next/image";
import useTranslation from "@/app/hooks/useTranslation";

const PSMapToolHowItWorks = () => {
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
          className="PSMapTool_HowItWorks"
        >
          <p className="PSMapTool_HowItWorks--title">
            {t("psmaptool_howItWorks").title}
          </p>
          <div className="HowItWorks_list">
            {t("psmaptool_howItWorks").cards.map((m: any, i: number) => (
              <div className="item" key={m}>
                <div className="item_image">
                  <Image src={m.img} alt={m.title} />
                </div>
                <div className="item_separator">
                  <span className="item_separator--number">{`0${i + 1}`}</span>
                </div>
                <div className="item_content">
                  <p className="item_content--title">{m.title}</p>
                  <p className="item_content--desc">{m.desc}</p>
                  <div className="mobile_image">
                    <Image src={m.img} alt={m.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default PSMapToolHowItWorks;
