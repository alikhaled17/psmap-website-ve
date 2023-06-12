import React from "react";
import Container from "./HorizontalCard.style";
import { motion } from "framer-motion";
import Image from "next/image";
import factory_img from "@/app/assets/images/Home/factory.png";
import useTranslation from "@/app/hooks/useTranslation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "iconsax-react";

type HorizontalCardProps = {
  direction?: boolean;
  cardImg?: any;
  description?: string;
  title?: string;
  hasBtn?: string;
  btnHref?: string;
};
const HorizontalCard = ({
  direction = true,
  cardImg = "",
  description = "",
  title = "",
  hasBtn = "",
  btnHref = "",
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
          {hasBtn && (
            <>
              {direction ? (
                <div
                  className="horizontal_card--content--btn"
                  style={{ justifyContent: "flex-start" }}
                >
                  <Link href={btnHref} className="global_button button">
                    {hasBtn}
                    {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
                  </Link>
                </div>
              ) : (
                <div
                  className="horizontal_card--content--btn"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Link href={btnHref} className="global_button button">
                    {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
                    {hasBtn}
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </Container>
  );
};

export default HorizontalCard;
