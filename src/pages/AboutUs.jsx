import "../styles/aboutUs.css";
import "../styles/contact.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import NavigateButton from "../components/services/NavigateButton";
import { loadImage } from "../utils/imageLoader";
import { useState } from "react";

export default function AboutUs() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);

  return (
    <div className="aboutContainer">
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "aboutBlur" : null}>
        <div className="aboutPicContainer">
          <img src={loadImage("about_us")} alt="" className="heroImg" />
          <div className={isOpenBlur ? "aboutCaptions blur" : "aboutCaptions"}>
            <p className="aboutCaptionTitle">Supporting Beautiful Landscapes</p>
            <p className="aboutSubCaption">
              in Delaware, Maryland, New Jersey, and Pennsylvania since 1988.
            </p>
          </div>
        </div>
        <div className="aboutViewContainer">
          <p className="aboutParagraphCaption">How We Got Started</p>
          <p className="aboutParagraph">
            Cloudburst's humble beginnings started back in 1982 when founder and
            owner Brett Forrest built his own sprinkler system in his front
            yard. A buddy learned about his custom sprinkler and asked Brett if
            he'd install a simple irrigation system for him in his yard. Soon
            after, folks took notice of his friend's yard, and word got out
            quickly. Brett realized there was a need for an industry that wasn't
            mainstream yet. He founded Cloudburst and incorporated it in 1988.
            His mission? To help others achieve a beautiful outdoor space they
            can be proud of.
          </p>
          <p className="aboutParagraph">
            Today, Cloudburst is a full-service, licensed residential and
            commercial irrigation company. It's still a family-owned business
            with the same mission &#8212; to help customers create outdoor
            spaces they can be proud of. From planning and design to
            installation and maintenance, Cloudburst is a reputable leader in
            the industry.
          </p>
          <p className="aboutParagraph">
            We've been helping homeowners and commercial businesses achieve
            beautiful results for over 30 years.
          </p>
          <p className="aboutParagraph">
            Thousands of customers have trusted Cloudburst to help them create a
            thriving landscape with a reliable sprinkler system. We can help you
            too.
          </p>
          <div className="aboutButtonCenter">
            <NavigateButton
              color="lightgray"
              desc="CONTACT US"
              nav="/contact"
            />
          </div>
        </div>
        <Sitemap />
      </div>
    </div>
  );
}
