import "../../styles/contact.css";
import TextField from "@mui/material/TextField";
import ContactSubmitButton from "../contact/ContactSubmitButton";

export default function ContactForm() {
  return (
    <div className="contactFormContainer">
      <span className="contactFormTitle">
        Ready to bring your vision to life?
      </span>
      <form className="contactFormFields">
        <TextField
          required
          id="standard-basic"
          label="First Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-basic"
          label="Last Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-basic"
          label="Phone"
          variant="standard"
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
        />
        <span className="contactFormSubtitle">How can we help you?</span>
        <TextField
          id="standard-multiline-static"
          fullWidth={true}
          multiline
          rows={7}
          label="Comments / Project Description..."
        />
        <ContactSubmitButton />
      </form>
    </div>
  );
}
