/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./ContactHeroSection.style";
import Image from "next/image";
import useTranslation from "@/app/hooks/useTranslation";
import Form from "../../shared/Forms/Form.component";
import Email from "@/app/assets/images/Contact/Email.svg";
import { FormType } from "@/app/interfaces/FormType.enum";
import { motion } from "framer-motion";

const ContactHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="warped_container">
        <div className="abouthero_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="contact_hero_section"
          >
            <p className="title">{t("contact_hero").title}</p>
            <p className="description">{t("contact_hero").desc}</p>
          </motion.div>
        </div>
      </div>

      <div className="screen-container">
        <div className="contacts_container">
          {/* <div className="contact-info">
            <Image src={Call} alt="" className="icon" />
            <p className="text">{t("contact_hero").phone}</p>
          </div> */}

          <div className="contact-info">
            <Image src={Email} alt="" className="icon" />
            <p className="text">{t("contact_hero").email}</p>
          </div>

          {/* <div className="contact-info">
            <Image src={Whatsapp} alt="" className="icon" />
            <p className="text">{t("contact_hero").whatsapp}</p>
          </div> */}
        </div>

        <div className="form-container">
          <Form data={t("register_form").form} formType={FormType.Contact} />
        </div>
      </div>
    </Container>
  );
};

export default ContactHeroSection;
