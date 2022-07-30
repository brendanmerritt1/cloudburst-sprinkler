import "../styles/contact.css";
import ContactForm from "../components/forms/ContactForm";
import Sitemap from "../components/sitemapFooter/Sitemap";

export default function Contact() {
  return (
    <div className="contactContainer">
      <img
        src={require("../assets/stockImageFlower.png")}
        alt=""
        className="flowers"
      />
      <ContactForm />
      <Sitemap />
    </div>
  );
}
