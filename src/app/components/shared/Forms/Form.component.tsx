import { User, Sms, Call, Building, Briefcase, Note1 } from "iconsax-react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Container from "./Form.style";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Regex from "@/app/helpers/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDataState, FormInput } from "@/app/interfaces/Form";
import { Button, FormHelperText } from "@mui/material";
import { submitForm } from "@/app/store/reducers/form-reducers/FormStore";
import { useEffect, useState } from "react";
import SuccessPopup from "../SuccessPopup/SuccessPopup.component";
import { StyledTheme } from "@/app/core/theme/StyledTheme";

const Form = ({ data, formType }: any) => {
  const dispatch = useDispatch();
  const [privacySelected, setPrivacySelected] = useState<boolean>(false);
  const [successPopup, setSuccessPopup] = useState<boolean>(false);

  const { t, locale } = useTranslation();
  const { formData } = useSelector((state: FormDataState) => state);

  const defaultValues: FormInput = formData;

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

      phoneNumber: yup
        .string()
        .required(t("form_errors").requiredPhoneNumberErr)
        .matches(Regex.notEmpty, t("form_errors").requiredPhoneNumberErr)
        .min(6, t("form_errors").minPhoneNumberErr)
        .max(50, t("form_errors").maxPhoneNumberErr)
        .matches(Regex.phone, t("form_errors").inValidPhoneNumberErr),

      company: yup.string().max(50, t("form_errors").maxLength_50),
      jobTitle: yup.string().max(50, t("form_errors").maxLength_50),
      notes: yup.string().max(150, t("form_errors").maxLength_150),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    trigger,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
        notes: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  watch(["fullName", "email", "phoneNumber", "company", "jobTitle", "notes"]);

  useEffect(() => {
    reset({
      fullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobTitle: "",
      notes: "",
    });
  }, [locale, reset]);

  const onSubmit = (data: FormInput) => {
    const body: FormInput = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      company:
        data.company?.trim() === "" || data.company?.trim() === undefined
          ? null
          : data.company?.trim(),
      jobTitle:
        data.jobTitle?.trim() === "" || data.jobTitle?.trim() === undefined
          ? null
          : data.jobTitle?.trim(),
      notes:
        data.notes?.trim() === "" || data.notes?.trim() === undefined
          ? null
          : data.notes?.trim(),
    };

    dispatch(submitForm({ body, formType }))
      .then(() => {
        reset({ ...defaultValues });
        setPrivacySelected(false);
        setSuccessPopup(true);
      })
      .catch((err: any) => console.log("err", err));
  };

  const isDisabled = () => {
    const fullName = getValues("fullName");
    const email = getValues("email");
    const phoneNumber = getValues("phoneNumber");

    if (privacySelected && fullName && email && phoneNumber) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      {successPopup && <SuccessPopup setIsSuccessPopup={setSuccessPopup} />}
      <div className="form">
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("fullName")}
            placeholder={data.name}
            onChange={async (e) => {
              setValue("fullName", e.target.value);
              await trigger(["fullName"]);
            }}
            error={!!errors.fullName?.message}
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
            <FormHelperText error className="error-message">
              {errors.fullName?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("email")}
            placeholder={data.email}
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
            <FormHelperText error className="error-message">
              {errors.email?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("phoneNumber")}
            placeholder={data.phone}
            onChange={async (e) => {
              setValue("phoneNumber", e.target.value);
              await trigger(["phoneNumber"]);
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle" className="form_input--start">
                  <Call />
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
          {!!errors.phoneNumber?.message && (
            <FormHelperText error className="error-message">
              {errors.phoneNumber?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("company")}
            placeholder={data.company}
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
            <FormHelperText error className="error-message">
              {errors.company?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("jobTitle")}
            placeholder={data.job}
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
            <FormHelperText error className="error-message">
              {errors.jobTitle?.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("notes")}
            placeholder={data.notes}
            onChange={async (e) => {
              setValue("notes", e.target.value);
              await trigger(["notes"]);
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle" className="form_input--start">
                  <Note1 />
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
          {!!errors.notes?.message && (
            <FormHelperText error className="error-message">
              {errors.notes?.message}
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <p className="desc primary_text">{data.forom_tail}</p>
      <div className="acceptions">
        <div className="acceptions--item">
          <FormControlLabel
            control={
              <Checkbox
                checked={privacySelected}
                onClick={() => setPrivacySelected(!privacySelected)}
              />
            }
            label=""
          />
          <span
            className="acceptions--item--text"
            style={{
              marginLeft: locale === "en" ? "-16px" : "",
              marginRight: locale === "ar" ? "16px" : "",
            }}
          >
            <small>{data.form_privacy[0]}</small>
            <Link href="" color="red">
              <small style={{ color: "red" }}>{data.form_privacy[1]}</small>
            </Link>
          </span>
        </div>
        <div className="acceptions--item">
          <FormControlLabel control={<Checkbox />} label="" />
          <span
            className="acceptions--item--text"
            style={{
              marginLeft: locale === "en" ? "-16px" : "",
              marginRight: locale === "ar" ? "16px" : "",
            }}
          >
            {data.form_recieve_updates}{" "}
          </span>
        </div>
      </div>
      <Button
        className="global_button submit_btn"
        disabled={isDisabled()}
        style={{
          backgroundColor: isDisabled()
            ? StyledTheme.colors.disabledBackground
            : StyledTheme.colors.primary,
        }}
        onClick={handleSubmit((data) => onSubmit(data))}
      >
        {data.form_submition} {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
      </Button>
    </Container>
  );
};

export default Form;
