import "../styles/contact.css";
import ContactForm from "../components/forms/ContactForm";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";
import { useState } from "react";

export default function Contact() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);

  return (
    <div className="contactContainer">
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <img
        src={loadImage("contact")}
        alt=""
        className={isOpenBlur ? "contactImg contactBlur" : "contactImg"}
      />
      <ContactForm isOpenBlur={isOpenBlur} />
      <Sitemap />
    </div>
  );
}
