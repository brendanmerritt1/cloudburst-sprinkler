import "../styles/contact.css";
import ContactForm from "../components/forms/ContactForm";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";
import { windowResize } from "../utils/windowResize";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="contactContainer">
      <Helmet>
        <title>Contact Us - Cloudburst Lawn Sprinkler Systems</title>
        <link rel="canonical" href="http://cloudburstsprinkler.com/contact" />
      </Helmet>
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <img
        src={loadImage("contact")}
        alt=""
        className={isOpenBlur ? "contactImg contactBlur" : "contactImg"}
      />
      <ContactForm isOpenBlur={isOpenBlur} />
      {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
    </div>
  );
}
