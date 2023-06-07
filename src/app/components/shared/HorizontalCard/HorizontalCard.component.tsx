import React from "react";
import Container from "./HorizontalCard.style";
import { motion } from "framer-motion";
import Image from "next/image";
import factory_img from "@/app/assets/images/Home/factory.png";
import useTranslation from "@/app/hooks/useTranslation";

type HorizontalCardProps = {
  direction?: boolean;
  cardImg?: any;
  description?: string;
  title?: string;
  hasBtn?: boolean;
  buttonText?: string;
};
const HorizontalCard = ({
  direction = true,
  cardImg = "",
  description = "",
  title = "",
  hasBtn = false,
  buttonText = "",
}: HorizontalCardProps) => {
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
        style={{ direction: direction ? "ltr" : "rtl" }}
        className="horizontal_card"
      >
        <div className="horizontal_card--img">
          <Image src={cardImg} alt="factory" />
        </div>
        <div className="horizontal_card--content">
          <p className="horizontal_card--content--title">{title}</p>
          <p
            className="horizontal_card--content--desc"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>
      </motion.div>
    </Container>
  );
};

export default HorizontalCard;
