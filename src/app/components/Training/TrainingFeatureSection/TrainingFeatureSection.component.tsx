import emergency_img from "@/app/assets/images/Training/emergency.png";
import factory_img from "@/app/assets/images/Training/factory.png";
import useTranslation from "@/app/hooks/useTranslation";
import HorizontalCard from "../../shared/HorizontalCard/HorizontalCard.component";
import Container from "./TrainingFeatureSection.style";

const TrainingFeatureSection = () => {
  const { t, locale, setLocale } = useTranslation();

  const cardOne = t("training_features").cards[0];
  const cardTwo = t("training_features").cards[1];
  return (
    <Container>
      <div className="warped_container">
        <HorizontalCard
          title={cardOne.title}
          cardImg={emergency_img}
          description={cardOne.desc}
          direction={locale === "en"}
          hasBtn={cardOne.btnText}
          btnHref="/Training/register"
        />
        <HorizontalCard
          title={cardTwo.title}
          cardImg={factory_img}
          description={cardTwo.desc}
          direction={locale === "ar"}
          hasBtn={cardTwo.btnText}
          btnHref="/Training/register"
        />
      </div>
    </Container>
  );
};

export default TrainingFeatureSection;
