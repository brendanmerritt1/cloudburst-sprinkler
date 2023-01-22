import "../../styles/contact.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
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
import { useState, useRef } from "react";

export default function ContactForm() {
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

  const submitEmail = async () => {
    await axios.post(process.env.REACT_APP_SUBMIT_URL, { formState });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) {
      setOpenError(true);
    } else {
      const token = captchaRef.current.getValue();
      await axios
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
      <div className="contactFormContainer">
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
          />
          <TextField
            id="standard-basic"
            label="Company"
            variant="standard"
            name="company"
            onChange={handleStateChange}
            value={formState.company}
            sx={{ mt: "1rem" }}
          />
          <br />
          <FormControl>
            <FormLabel required sx={{ mt: "1rem" }}>
              Are you a current Cloudburst Sprinkler customer?
            </FormLabel>
            <RadioGroup
              value={formState.customer}
              name="customer"
              onChange={handleStateChange}
            >
              <FormControlLabel
                control={<Radio required />}
                label="Yes"
                value="Yes"
              />
              <FormControlLabel
                control={<Radio required />}
                label="No"
                value="No"
              />
            </RadioGroup>

            <FormLabel sx={{ mt: "2rem" }}>Project Type</FormLabel>
            <RadioGroup
              value={formState.project}
              name="project"
              onChange={handleStateChange}
            >
              <FormControlLabel
                control={<Radio />}
                label="Residential Service"
                value="Residential Service"
              />
              <FormControlLabel
                control={<Radio />}
                label="New Residential Construction"
                value="New Residential Construction"
              />
            </RadioGroup>
          </FormControl>

          <br />
          <span className="contactCommentForm">How can we help you?</span>
          <TextField
            required
            id="standard-multiline-static"
            fullWidth={true}
            multiline
            rows={7}
            label="Comments / Project Description (500 character limit)"
            inputProps={{ maxLength: 500 }}
            name="message"
            onChange={handleStateChange}
            value={formState.message}
          />
          <div className="contactCaptButtonCont">
            <div className="contactButtonAlign">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                onChange={handleCaptcha}
                ref={captchaRef}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{
                  width: "11vw",
                  height: "2.75vw",
                  borderRadius: "13% 13% 13% 13% / 50% 50% 50% 50%",
                  fontSize: "0.8vw",
                  backgroundColor: "#222222",
                }}
              >
                SUBMIT
              </Button>
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
