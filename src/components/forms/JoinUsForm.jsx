import "../../styles/joinUs.css";
import "../../styles/contact.css";
import TextField from "@mui/material/TextField";
import {
  createTheme,
  ThemeProvider,
  Alert,
  Dialog,
  Button,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useState, useRef } from "react";

export default function JoinUsForm(props) {
  var fd = new FormData();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message:
      "The resume for my Cloudburst Sprinkler job application is attached to this email.",
  });

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [verified, setVerified] = useState(false);
  const captchaRef = useRef(null);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });

  const submitEmail = async () => {
    fdAddReset("add");
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axiosInstance.post(process.env.REACT_APP_APPLICATION_URL, fd, header);
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
      fdAddReset("reset");
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message:
          "The resume for my Cloudburst Sprinkler job application is attached to this email.",
      });
      setFileName("");
    }
    captchaRef.current.reset();
  };

  const fdAddReset = (type) => {
    if (type === "add") {
      fd.append("firstName", formState.firstName);
      fd.append("lastName", formState.lastName);
      fd.append("phone", formState.phone);
      fd.append("email", formState.email);
      fd.append("message", formState.message);
      fd.append("resume", file);
    } else if (type === "reset") {
      fd.delete("firstName");
      fd.delete("lastName");
      fd.delete("phone");
      fd.delete("email");
      fd.delete("message");
      fd.delete("resume");
    }
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

  const handleFile = (e) => {
    try {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      fd.append("resume", e.target.files[0]);
    } catch (error) {
      setFileName("");
      fd.delete("resume");
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#222222",
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
      MuiFormControlLabel: {
        styleOverrides: {
          asterisk: {
            color: "#ffffff",
            "&$error": {
              color: "#ffffff",
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
            ? "contactFormContainer join contactBlur"
            : "contactFormContainer join"
        }
      >
        <span className="contactFormTitle join">Interested in joining us?</span>
        <span className="contactFormSubTitle join">
          Become a member of the Cloudburst team.
        </span>
        <span className="requiredField join">Indicates a required field.</span>
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
            className="contactFormInput join"
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
            className="contactFormInput join"
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
            className="contactFormInput join"
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
            className="contactFormInput join"
          />

          <div className="joinFileButton">
            <span className="contactCommentForm join">Resume:</span>
            <label>
              <input
                required
                accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
                type="file"
                onChange={handleFile}
              />
              <Button variant="contained" component="span" size="large" sx={{borderRadius: "10% 10% 10% 10% / 50% 50% 50% 50%"}}>
                Upload Resume
              </Button>
            </label>
            <span>{fileName}</span>
            <span className="contactCommentForm join noReq">
              Application comments:
            </span>
          </div>

          <TextField
            className="contactFormInput join"
            id="standard-multiline-static"
            fullWidth={true}
            multiline
            rows={7}
            label="Comments (500 character limit)"
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
