/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./ContactHeroSection.style";
import Image from "next/image";
import useTranslation from "@/app/hooks/useTranslation";
import Form from "../../shared/Forms/Form.component";
import HeroBackground from "@/app/assets/images/Contact/HeroBackground.svg";
import Call from "@/app/assets/images/Contact/call.svg";
import Whatsapp from "@/app/assets/images/Contact/whatsapp.svg";
import Email from "@/app/assets/images/Contact/Email.svg";
import { FormType } from "@/app/interfaces/FormType.enum";

const ContactHeroSection = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div>
        <div className="hero_container">
          <Image src={HeroBackground} alt="" className="hero_image" />
        </div>

        <div className="hero_section_text">
          <p className="title">{t("contact_hero").title}</p>
          <p className="description">{t("contact_hero").desc}</p>
        </div>

        <div className="contacts_container">
          <div className="contact-info">
            <Image src={Call} alt="" className="icon" />
            <p className="text">{t("contact_hero").phone}</p>
          </div>

          <div className="contact-info">
            <Image src={Email} alt="" className="icon" />
            <p className="text">{t("contact_hero").email}</p>
          </div>

          <div className="contact-info">
            <Image src={Whatsapp} alt="" className="icon" />
            <p className="text">{t("contact_hero").whatsapp}</p>
          </div>
        </div>

        <Form data={t("register_form").form} formType={FormType.Contact} />
      </div>
    </Container>
  );
};

export default ContactHeroSection;
