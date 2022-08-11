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
import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [customer, setCustomer] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      phone === "" ||
      email === "" ||
      message === ""
    ) {
      setOpenError(true);
    } else {
      setOpenSuccess(true);
      console.log(
        firstName,
        lastName,
        phone,
        email,
        company,
        customer,
        project,
        message
      );
    }
  };

  const handleCaptcha = (e) => {
    console.log("Captcha value: ", e);
    if (e !== null) {
      setVerified(true);
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
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ mt: "1rem" }}
          />
          <TextField
            required
            id="standard-basic"
            label="Last Name"
            variant="standard"
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mt: "1rem" }}
          />
          <TextField
            required
            id="standard-basic"
            label="Phone"
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
            sx={{ mt: "1rem" }}
          />
          <TextField
            required
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: "1rem" }}
          />
          <TextField
            id="standard-basic"
            label="Company"
            variant="standard"
            onChange={(e) => setCompany(e.target.value)}
            sx={{ mt: "1rem" }}
          />

          <FormControl>
            <FormLabel required sx={{ mt: "1rem" }}>
              Are you a current Cloudburst Sprinkler customer?
            </FormLabel>
            <RadioGroup
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            >
              <FormControlLabel
                control={<Radio required />}
                label="Yes"
                value="yes"
              />
              <FormControlLabel
                control={<Radio required />}
                label="No"
                value="no"
              />
            </RadioGroup>

            <FormLabel sx={{ mt: "2rem" }}>Project Type</FormLabel>
            <RadioGroup
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                label="Residential"
                value="residential"
              />
              <FormControlLabel
                control={<Radio />}
                label="Commercial"
                value="commercial"
              />
            </RadioGroup>
          </FormControl>

          <span className="contactCommentForm">How can we help you?</span>
          <TextField
            required
            id="standard-multiline-static"
            fullWidth={true}
            multiline
            rows={7}
            label="Comments / Project Description (500 character limit)"
            inputProps={{ maxLength: 500 }}
            onChange={(e) => setMessage(e.target.value)}
          />

          <ReCAPTCHA
            sitekey="6LcNT0EhAAAAAPl943HZ9YEbqdKgEGeZWLsw3nem"
            style={{ marginLeft: "6rem" }}
            onChange={handleCaptcha}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            disabled={!verified}
            sx={{
              ml: "8rem",
              width: "13vw",
              height: "7vh",
              borderRadius: "10% 10% 10% 10% / 50% 50% 50% 50%",
              fontSize: "1.5rem",
            }}
          >
            SUBMIT
          </Button>

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
              Your request has successfully been processed. Our team will get
              back to you shortly.
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
              all required fields are filled.
            </Alert>
          </Dialog>
        </form>
      </div>
    </ThemeProvider>
  );
}
