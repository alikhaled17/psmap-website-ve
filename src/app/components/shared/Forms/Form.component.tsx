import { User, Sms, Call, Building, Briefcase, Note1 } from "iconsax-react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Container from "./Form.style";
import Link from "next/link";
import { Play, ArrowRight, ArrowLeft } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Form = ({ data }: any) => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="form">
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
            placeholder={data.phone}
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
        <FormControl className="form_input" fullWidth variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            placeholder={data.notes}
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
        </FormControl>
      </div>
      <p className="desc primary_text">{data.forom_tail}</p>
      <div className="acceptions">
        <div className="acceptions--item">
          <FormControlLabel control={<Checkbox />} label="" />
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
      <Link href="" className="global_button submit_btn">
        {data.form_submition} {locale === "ar" ? <ArrowLeft /> : <ArrowRight />}
      </Link>
    </Container>
  );
};

export default Form;
