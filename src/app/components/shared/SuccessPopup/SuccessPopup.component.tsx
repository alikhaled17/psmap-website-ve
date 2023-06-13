import { Button } from "@mui/material";
import Container from "./SuccessPopup.style";
import { CloseCircle } from "iconsax-react";
import { motion } from "framer-motion";
import useTranslation from "@/app/hooks/useTranslation";

function SuccessPopup({ setIsSuccessPopup }: any): JSX.Element {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <motion.div
        className="success_popup"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.05,
          },
        }}
      >
        <div className="popup">
          <span
            className="popup--close"
            onClick={() => setIsSuccessPopup(false)}
          >
            <CloseCircle />
          </span>
          <p className="popup--title">{t("success_popup").title}</p>
          <Button
            className="global_button popup--close_btn"
            onClick={() => setIsSuccessPopup(false)}
          >
            {t("success_popup").close}
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}

export default SuccessPopup;
