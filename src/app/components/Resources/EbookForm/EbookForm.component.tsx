import {
  Button,
  FormControl,
  FormHelperText,
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
  CloseCircle,
  Sms,
  User,
} from "iconsax-react";
import { motion } from "framer-motion";
import useTranslation from "@/app/hooks/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { EBookFormInput, FormDataState } from "@/app/interfaces/Form";
import * as yup from "yup";
import Regex from "@/app/helpers/regex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { submitForm } from "@/app/store/reducers/form-reducers/FormStore";

function EbookForm({ data, setIsEbookForm, formType }: any): JSX.Element {
  const dispatch = useDispatch();
  const { t, locale, setLocale } = useTranslation();
  const { eBookFormData } = useSelector((state: FormDataState) => state);

  const defaultValues: EBookFormInput = eBookFormData;

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required(t("form_errors").requiredNameErr)
        .matches(Regex.notEmpty, t("form_errors").requiredNameErr)
        .max(50, t("form_errors").maxLength_50),

      email: yup
        .string()
        .required(t("form_errors").requiredEmailErr)
        .matches(Regex.notEmpty, t("form_errors").requiredEmailErr)
        .matches(Regex.email, t("form_errors").inValidEmailErr)
        .max(50, t("form_errors").maxLength_50),

      company: yup.string().max(50, t("form_errors").maxLength_50),
      jobTitle: yup.string().max(50, t("form_errors").maxLength_50),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm<EBookFormInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullName: "",
        email: "",
        company: "",
        jobTitle: "",
        phoneNumber: null,
        notes: null,
      });
    }
  }, [isSubmitSuccessful, reset]);

  watch(["fullName", "email", "company", "jobTitle"]);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("PSMapGuide.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "PSMapGuide.pdf";
        alink.click();
      });
    });
  };

  const onSubmit = (data: EBookFormInput) => {
    const body: EBookFormInput = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: null,
      notes: null,
      company:
        data.company?.trim() === "" || data.company?.trim() === undefined
          ? null
          : data.company?.trim(),
      jobTitle:
        data.jobTitle?.trim() === "" || data.jobTitle?.trim() === undefined
          ? null
          : data.jobTitle?.trim(),
    };

    dispatch(submitForm({ body, formType }))
      .then(() => {
        reset({ ...defaultValues });
        setIsEbookForm(false);
        onButtonClick();
      })
      .catch((err: any) => console.log("err", err));
  };

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
              {...register("fullName")}
              onChange={async (e) => {
                setValue("fullName", e.target.value);
                await trigger(["fullName"]);
              }}
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
            {!!errors.fullName?.message && (
              <FormHelperText error id="accountId-error">
                {errors.fullName?.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.email}
              {...register("email")}
              onChange={async (e) => {
                setValue("email", e.target.value);
                await trigger(["email"]);
              }}
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
            {!!errors.email?.message && (
              <FormHelperText error id="accountId-error">
                {errors.email?.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.company}
              {...register("company")}
              onChange={async (e) => {
                setValue("company", e.target.value);
                await trigger(["company"]);
              }}
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
            {!!errors.company?.message && (
              <FormHelperText error id="accountId-error">
                {errors.company?.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className="form_input" fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              placeholder={data.job}
              {...register("jobTitle")}
              onChange={async (e) => {
                setValue("jobTitle", e.target.value);
                await trigger(["jobTitle"]);
              }}
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
            {!!errors.jobTitle?.message && (
              <FormHelperText error id="accountId-error">
                {errors.jobTitle?.message}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            className="global_button form--download_btn"
            onClick={handleSubmit((data) => onSubmit(data))}
          >
            {t("resources_hero").download_btn}
            {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}

export default EbookForm;
