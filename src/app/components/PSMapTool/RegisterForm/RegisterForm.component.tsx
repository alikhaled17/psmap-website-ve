/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./RegisterForm.style";
import { motion } from "framer-motion";
import useTranslation from "@/app/hooks/useTranslation";
import Form from "../../shared/Forms/Form.component";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const { t, locale, setLocale } = useTranslation();
  const router = useRouter();
  const { formType } = router.query;

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

          <Form data={t("register_form").form} formType={formType} />
        </motion.div>
      </div>
    </Container>
  );
};

export default RegisterForm;
