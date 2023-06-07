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
        {/* <iframe
          width="1200"
          height="615"
          src="https://www.youtube.com/embed/16C3jaeUKjQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <video controls style={{ width: "100%", maxHeight: "50vh" }}>
          <source
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </Container>
  );
};

export default WhatRCASection;
