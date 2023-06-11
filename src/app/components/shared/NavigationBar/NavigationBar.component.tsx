import desktop_logo from "@/app/assets/images/global/logo-lg.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "./NavigationBar.style";
import { Global, Menu } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import HorizentalCard from "../HorizontalCard/HorizontalCard.component";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const { t, locale, setLocale } = useTranslation();
  const router = useRouter();

  const checkRoute = (r: string) => {
    return router.pathname === r ? "active" : "";
  };
  return (
    <Container>
      <motion.span className="desktop_nav warped_container">
        <div className="desktop_nav--items_section ">
          <div className="desktop_nav--items_section--logo">
            <Image src={desktop_logo} alt="psmap logo" />
          </div>
          <div className="desktop_nav--items_section--items">
            {t("nav").items.map(
              (el: { text: string; route: string }, index: number) => (
                <motion.div
                  key={index}
                  className="item primary_text"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.05 * index,
                    },
                  }}
                >
                  <Link
                    href={el.route}
                    className={`item--text interactive_btn ${checkRoute(
                      el.route
                    )}`}
                  >
                    {el.text}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          className="desktop_nav--community_section "
        >
          <Link href="">
            <Global
              onClick={() => {
                setLocale(locale === "en" ? "ar" : "en");
              }}
            />
          </Link>
          <Link
            href={t("nav").joinBtn.href}
            className="global_button desktop_nav--community_section--join_btn"
          >
            {t("nav").joinBtn.text}
          </Link>
        </motion.div>
      </motion.span>
      <motion.span className="tablet_nav">
        <div className="tablet_nav--main ">
          <div className="tablet_nav--main--logo">
            <Image src={desktop_logo} alt="psmap logo" />
          </div>
          <div
            onClick={() => {
              setLocale(locale === "en" ? "ar" : "en");
            }}
            className="tablet_nav--main--menu_icon"
          >
            <MenuIcon />
          </div>
        </div>
      </motion.span>
    </Container>
  );
};

export default NavigationBar;
