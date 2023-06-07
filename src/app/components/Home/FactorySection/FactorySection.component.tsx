import React from "react";
import Container from "./FactorySection.style";
import factory_img from "@/app/assets/images/Home/factory.png";
import emergency_img from "@/app/assets/images/Home/emergency.png";
import HorizontalCard from "../../shared/HorizontalCard/HorizontalCard.component";
import useTranslation from "@/app/hooks/useTranslation";

const FactorySection = () => {
  const { t, locale, setLocale } = useTranslation();

  const cardOne = t("factory").cards[0];
  const cardTwo = t("factory").cards[1];
  return (
    <Container>
      <div className="warped_container">
        <HorizontalCard
          title={cardOne.title}
          cardImg={emergency_img}
          description={cardOne.desc}
          direction={locale === "en"}
        />
        <HorizontalCard
          title={cardTwo.title}
          cardImg={factory_img}
          description={cardTwo.desc}
          direction={locale === "ar"}
        />
      </div>
    </Container>
  );
};

export default FactorySection;
