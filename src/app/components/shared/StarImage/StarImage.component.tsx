import React from "react";
import Container from "./StarImage.style";
import { motion } from "framer-motion";
import starImg from "@/app/assets/images/global/star.svg";
import dotsImg from "@/app/assets/images/global/dots.svg";
import Image from "next/image";

const StarImage = ({ mainImg }: any) => {
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
        className="star_img"
      >
        <Image src={mainImg} alt="main img" className="star_img--main_img" />
        <Image
          src={starImg}
          alt="l_star_img"
          className="star_img--l_star_img"
        />
        <Image
          src={starImg}
          alt="r_star_img"
          className="star_img--r_star_img"
        />
        <Image src={dotsImg} alt="dots_img" className="star_img--dots_img" />
      </motion.div>
    </Container>
  );
};

export default StarImage;
