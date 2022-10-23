const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
const path = require("path");
const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "build")));
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}

app.use(express.static("public"));

app.post(process.env.REACT_APP_API_URL, async (req, res) => {
  const { token } = req.body;
  await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRETKEY}&response=${token}`
  );

  if (res.status(200)) {
    res.send("reCAPTCHA verified successfully.");
  } else {
    res.send("reCAPTCHA verification failed - robot detected.");
  }
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_EMAIL,
    pass: process.env.REACT_APP_PASS,
    clientId: process.env.REACT_APP_OAUTH_CLIENTID,
    clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post(process.env.REACT_APP_SUBMIT_URL, (req, res) => {
  let mailOptions = {
    from: `${req.body.formState.firstName} ${req.body.formState.lastName} <${req.body.formState.email}>`,
    to: process.env.REACT_APP_EMAIL,
    replyTo: `${req.body.formState.email}`,
    subject: `Message from: ${req.body.formState.firstName} ${req.body.formState.lastName}`,
    text: `
      ${req.body.formState.message}
      

      Project type: ${req.body.formState.project}
      Phone number: ${req.body.formState.phone}
      Affiliated company: ${req.body.formState.company}
      Current Cloudburst Sprinkler customer: ${req.body.formState.customer}
    `,
  };

  transporter.sendMail(mailOptions, () => {
    console.log("Email sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
