import React from "react";
import Container from "./WhatRCASection.style";
import { motion } from "framer-motion";
import useTranslation from "@/app/hooks/useTranslation";

const WhatRCASection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
        className="what_rca"
      >
        <p className="what_rca--title">{t("what_rca").title} </p>
        <div className="what_rca--video">
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/-G8Ev7Im5ZQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
    </Container>
  );
};

export default WhatRCASection;
