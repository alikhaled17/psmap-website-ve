/* eslint-disable react/no-unescaped-entities */
import useTranslation from "@/app/hooks/useTranslation";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import { motion } from "framer-motion";
import Container from "./SignupSection.style";
import Form from "../../shared/Forms/Form.component";
import Link from "next/link";

const SignupSection = () => {
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
          className="signup_section"
        >
          <p
            className="signup_section--title primary_text"
            dangerouslySetInnerHTML={{
              __html: t("sign_up").title,
            }}
          ></p>
          <p
            className="signup_section--desc primary_text"
            dangerouslySetInnerHTML={{
              __html: t("sign_up").desc,
            }}
          ></p>
          <p
            className="signup_section--sup_title"
            dangerouslySetInnerHTML={{
              __html: t("sign_up").subtitle,
            }}
          ></p>
          <Form />
        </motion.div>
      </div>
    </Container>
  );
};

export default SignupSection;
