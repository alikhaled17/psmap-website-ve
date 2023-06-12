/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./TrainingForm.style";
import { motion } from "framer-motion";
import PricingCard from "../../shared/PricingCard/PricingCard.component";
import useTranslation from "@/app/hooks/useTranslation";
import Form from "../../shared/Forms/Form.component";

const TrainingForm = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
          className="register_form"
        >
          <p
            className="register_form--title primary_text"
            dangerouslySetInnerHTML={{
              __html: t("register_form").title,
            }}
          ></p>

          <Form data={t("register_form").form} />
        </motion.div>
      </div>
    </Container>
  );
};

export default TrainingForm;
