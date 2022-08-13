import "../styles/contact.css";
import ContactForm from "../components/forms/ContactForm";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";

export default function Contact() {
  return (
    <div className="contactContainer">
      <Navbar color="white"/>
      <img
        src={loadImage("contact_1920")}
        alt=""
        className="contactImg"
      />
      <ContactForm />
      <Sitemap />
    </div>
  );
}
