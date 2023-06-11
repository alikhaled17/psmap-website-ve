import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Container from "./EbookForm.style";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building,
  Call,
  CloseCircle,
  Note1,
  Sms,
  User,
} from "iconsax-react";
import { motion } from "framer-motion";
import Link from "next/link";
import useTranslation from "@/app/hooks/useTranslation";
function EbookForm({ data, setIsEbookForm }: any): JSX.Element {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <motion.div
        className="ebook_form"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.05,
          },
        }}
      >
        <div className="form">
          <span className="form--close" onClick={() => setIsEbookForm(false)}>
            <CloseCircle />
          </span>
          <p className="form--title">{data.title}</p>
          <p className="form--desc">{data.desc}</p>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.name}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="toggle" className="form_input--start">
                    <User />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle" className="form_input--end">
                    *
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.email}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="toggle" className="form_input--start">
                    <Sms />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle" className="form_input--end">
                    *
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.company}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="toggle" className="form_input--start">
                    <Building />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle"
                    className="form_input--end"
                  ></IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.job}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="toggle" className="form_input--start">
                    <Briefcase />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle"
                    className="form_input--end"
                  ></IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link href="" className="global_button form--download_btn">
            {t("resources_hero").download_btn}
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Link>
        </div>
      </motion.div>
    </Container>
  );
}

export default EbookForm;
