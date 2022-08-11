import "../styles/contact.css";
import ContactForm from "../components/forms/ContactForm";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Navbar color="white"/>
      <img
        src={require("../assets/ContactUs_2560.jpg")}
        alt=""
        className="flowers"
      />
      <ContactForm />
      <Sitemap />
    </div>
  );
}
