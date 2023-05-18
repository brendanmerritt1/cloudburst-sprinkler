const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/recaptcha", async (req, res) => {
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
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.REACT_APP_SG_API_KEY,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`=== Server is ready to take messages: ${success} ===`);
  }
});

app.post("/api/contact", (req, res) => {
  const email = "";
  if (req.body.formState.project == "Service Request (existing system)") {
    email = process.env.REACT_APP_EMAIL_SERVICE;
  } else {
    email = process.env.REACT_APP_EMAIL_SALES;
  }

  let mailOptions = {
    from: `${req.body.formState.firstName} ${req.body.formState.lastName} <${email}>`,
    to: email,
    replyTo: `${req.body.formState.email}`,
    subject: `Message from: ${req.body.formState.firstName} ${req.body.formState.lastName}`,
    text: `
    ${req.body.formState.message}

    Project type: ${req.body.formState.project}
    Phone number: ${req.body.formState.phone}
    Customer email: ${req.body.formState.email}
    Affiliated company: ${req.body.formState.company}
    Current Cloudburst Sprinkler customer: ${req.body.formState.customer}
  `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Email sent successfully: " + info.response);
    }
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${process.env.PORT || port}`);
});
