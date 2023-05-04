import "../../styles/contact.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  createTheme,
  ThemeProvider,
  FormControl,
  FormLabel,
  Alert,
  Dialog,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import * as bp from "../services/breakpoints";

export default function ContactForm(props) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [is2560, setIs2560] = useState(
    window.matchMedia(bp.MediaQuery2560).matches
  );
  const [is1920, setIs1920] = useState(
    window.matchMedia(bp.MediaQuery1920).matches
  );
  const [is1280, setIs1280] = useState(
    window.matchMedia(bp.MediaQuery1280).matches
  );
  const [is1024, setIs1024] = useState(
    window.matchMedia(bp.MediaQuery1024).matches
  );
  const [is700, setIs700] = useState(
    window.matchMedia(bp.MediaQuery700).matches
  );
  const [is415, setIs415] = useState(
    window.matchMedia(bp.MediaQuery415).matches
  );
  const [is350, setIs350] = useState(
    window.matchMedia(bp.MediaQuery350).matches
  );
  const [is320, setIs320] = useState(
    window.matchMedia(bp.MediaQuery320).matches
  );

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    customer: "",
    project: "",
    message: "",
  });

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [verified, setVerified] = useState(false);
  const captchaRef = useRef(null);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  })

  const submitEmail = async () => {
    await axiosInstance.post(process.env.REACT_APP_SUBMIT_URL, { formState });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) {
      setOpenError(true);
    } else {
      const token = captchaRef.current.getValue();
      await axiosInstance
        .post(process.env.REACT_APP_API_URL, { token })
        .then((res) => {
          if (res.status) {
            setOpenSuccess(true);
          } else {
            setOpenError(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      submitEmail();
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        customer: "",
        project: "",
        message: "",
      });
    }
    captchaRef.current.reset();
  };

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptcha = (e) => {
    if (e !== null) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const handleClose = () => {
    if (openSuccess) {
      setOpenSuccess(false);
      setVerified(false);
    }
    setOpenError(false);
  };

  const dynamicMargin = () => {
    if (is700 || is1024) {
      return "0 4rem";
    } else if (is415) {
      return "0 6rem";
    } else if (is350) {
      return "0 4rem";
    } else if (is320) {
      return "0 3rem";
    } else if (is1280 || is1920 || is2560) {
      return "0 6rem";
    }
  };

  const dynamicFontSize = () => {
    if (is1920 || is2560) {
      return "medium";
    } else if (is1280) {
      return "0.9rem";
    } else if (is1024) {
      return "0.9rem";
    } else if (is700) {
      return "0.8rem";
    } else if (is350 || is415) {
      return "1rem";
    } else if (is320) {
      return "0.9rem";
    }
  };

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setIs2560(window.matchMedia(bp.MediaQuery2560).matches);
      setIs1920(window.matchMedia(bp.MediaQuery1920).matches);
      setIs1280(window.matchMedia(bp.MediaQuery1280).matches);
      setIs1024(window.matchMedia(bp.MediaQuery1024).matches);
      setIs700(window.matchMedia(bp.MediaQuery700).matches);
      setIs415(window.matchMedia(bp.MediaQuery415).matches);
      setIs350(window.matchMedia(bp.MediaQuery350).matches);
      setIs320(window.matchMedia(bp.MediaQuery320).matches);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#474747",
      },
    },
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "red",
            "&$error": {
              color: "red",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={
          props.isOpenBlur
            ? "contactFormContainer contactBlur"
            : "contactFormContainer"
        }
      >
        <span className="contactFormTitle">
          Ready to bring your vision to life?
        </span>
        <span className="contactFormSubTitle">
          Join the thousands of satisfied customers enjoying irrigation by
          Cloudburst.
        </span>
        <span className="requiredField">Indicates a required field.</span>
        <form
          className="contactFormFields"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="standard-basic"
            label="First Name"
            variant="standard"
            name="firstName"
            onChange={handleStateChange}
            value={formState.firstName}
            sx={{ mt: "1rem" }}
            className="contactFormInput"
          />
          <TextField
            required
            id="standard-basic"
            label="Last Name"
            variant="standard"
            name="lastName"
            onChange={handleStateChange}
            value={formState.lastName}
            sx={{ mt: "1rem" }}
            className="contactFormInput"
          />
          <TextField
            required
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            onChange={handleStateChange}
            value={formState.phone}
            sx={{ mt: "1rem" }}
            className="contactFormInput"
          />
          <TextField
            required
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleStateChange}
            value={formState.email}
            sx={{ mt: "1rem" }}
            className="contactFormInput"
          />
          <TextField
            id="standard-basic"
            label="Company"
            variant="standard"
            name="company"
            onChange={handleStateChange}
            value={formState.company}
            sx={{ mt: "1rem" }}
            className="contactFormInput"
          />

          <FormControl sx={{ p: dynamicMargin() }}>
            <FormLabel
              required
              sx={{
                mt: "1rem",
                fontSize: dynamicFontSize(),
              }}
              className="contactFormInput"
            >
              Are you a current Cloudburst Sprinkler customer?
            </FormLabel>
            <RadioGroup
              value={formState.customer}
              name="customer"
              onChange={handleStateChange}
            >
              <FormControlLabel
                control={
                  <Radio required size={!isDesktop ? "small" : "medium"} />
                }
                label="Yes"
                value="Yes"
                className="contactFormInput"
              />
              <FormControlLabel
                control={
                  <Radio required size={!isDesktop ? "small" : "medium"} />
                }
                label="No"
                value="No"
                className="contactFormInput"
              />
            </RadioGroup>

            <FormLabel
              sx={{
                mt: "2rem",
                fontSize: dynamicFontSize(),
              }}
            >
              Project Type
            </FormLabel>
            <RadioGroup
              value={formState.project}
              name="project"
              onChange={handleStateChange}
            >
              <FormControlLabel
                control={<Radio size={!isDesktop ? "small" : "medium"} />}
                label="Residential Service"
                value="Residential Service"
                className="contactFormInput"
              />
              <FormControlLabel
                control={<Radio size={!isDesktop ? "small" : "medium"} />}
                label="New Residential Construction"
                value="New Residential Construction"
                className="contactFormInput"
              />
            </RadioGroup>
          </FormControl>

          <span className="contactCommentForm">How can we help you?</span>
          <TextField
            required
            className="contactFormInput"
            id="standard-multiline-static"
            fullWidth={true}
            multiline
            rows={7}
            label="Comments / Project Description (500 character limit)"
            inputProps={{
              maxLength: 500,
            }}
            sx={{ width: "90%" }}
            name="message"
            onChange={handleStateChange}
            value={formState.message}
          />
          <div className="contactCaptButtonCont">
            <div className="contactButtonAlign">
              <div className="captchaWrapper">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                  onChange={handleCaptcha}
                  ref={captchaRef}
                />
              </div>

              <button
                type="submit"
                className="navigateButton contactButton"
                id="lightgray"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <Dialog
            open={openSuccess}
            onClose={handleClose}
            sx={{
              "& .MuiDialog-container": {
                alignItems: "flex-end",
              },
            }}
          >
            <Alert severity="success">
              Your request has successfully been processed. Our team will email
              you back shortly.
            </Alert>
          </Dialog>

          <Dialog
            open={openError}
            onClose={handleClose}
            sx={{
              "& .MuiDialog-container": {
                alignItems: "flex-end",
              },
            }}
          >
            <Alert severity="error">
              An error occurred while submitting your request. Please check that
              the reCAPTCHA verification was successful.
            </Alert>
          </Dialog>
        </form>
      </div>
    </ThemeProvider>
  );
}
