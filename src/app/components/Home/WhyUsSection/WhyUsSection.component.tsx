import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "./WhyUsSection.style";

const WhyUsSection = () => {
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
          className="why_us"
        >
          <p
            className="why_us--title"
            dangerouslySetInnerHTML={{
              __html: t("why_us").title,
            }}
          ></p>
          <p
            className="why_us--desc"
            dangerouslySetInnerHTML={{
              __html: t("why_us").desc,
            }}
          ></p>
          <div className="why_us--list__items">
            <div className="why_us--list__items--col">
              <ul>
                {t("why_us")
                  .list.slice(0, 4)
                  .map((item: string, i: number) => (
                    <li key={i}>
                      <CheckCircleIcon />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="why_us--list__items--col">
              <ul>
                {t("why_us")
                  .list.slice(4, 8)
                  .map((item: string, i: number) => (
                    <li key={i}>
                      <CheckCircleIcon />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <p
            className="why_us--desc"
            dangerouslySetInnerHTML={{
              __html: t("why_us").tail,
            }}
          ></p>
          <Link href="" className="global_button why_us--trial_btn">
            {t("why_us").btn}
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default WhyUsSection;
