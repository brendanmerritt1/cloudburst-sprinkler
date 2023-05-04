const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.REACT_APP_SG_API_KEY);
const path = require("path");
const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
}

app.use(express.static("public"));

app.post(
  path.join(process.env.REACT_APP_BACKEND_URL, process.env.REACT_APP_API_URL),
  async (req, res) => {
    const { token } = req.body;
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRETKEY}&response=${token}`
    );

    if (res.status(200)) {
      res.send("reCAPTCHA verified successfully.");
    } else {
      res.send("reCAPTCHA verification failed - robot detected.");
    }
  }
);

app.post(
  path.join(
    process.env.REACT_APP_BACKEND_URL,
    process.env.REACT_APP_SUBMIT_URL
  ),
  (req, res) => {
    const msg = {
      from: {
        email: process.env.REACT_APP_EMAIL,
        name: `${req.body.formState.firstName} ${req.body.formState.lastName}`,
      },
      to: {
        email: process.env.REACT_APP_EMAIL,
        name: "Cloudburst Lawn Sprinkler Systems",
      },
      replyTo: {
        email: `${req.body.formState.email}`,
      },
      subject: `Message from: ${req.body.formState.firstName} ${req.body.formState.lastName}`,
      text: `
        ${req.body.formState.message}
      
        Project type: ${req.body.formState.project}
        Phone number: ${req.body.formState.phone}
        Affiliated company: ${req.body.formState.company}
        Current Cloudburst Sprinkler customer: ${req.body.formState.customer}
      `,
    };

    sgMail
      .send(msg)
      .then((res) => {
        console.log(
          "Email sent successfully. Status code: " + res[0].statusCode
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${process.env.PORT || port}`);
});
