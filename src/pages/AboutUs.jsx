import "../styles/aboutUs.css";
import "../styles/contact.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import NavigateButton from "../components/services/NavigateButton";
import { loadImage } from "../utils/imageLoader";

export default function AboutUs() {
  return (
    <div className="aboutContainer">
      <Navbar color="white" />
      <div className="aboutPicContainer">
        <img src={loadImage("about_us")} alt="" className="aboutImg" />
        <div className="aboutCaptions">
          <span className="aboutCaptionTitle">
            Supporting Beautiful Landscapes
          </span>
          <span className="aboutSubCaption">Since 1988</span>
        </div>
      </div>
      <div className="aboutViewContainer" id="top">
        <span className="aboutParagraphCaption">How We Got Started</span>
        <p className="aboutParagraph">
          Cloudburst's humble beginnings started back in 1982 when founder and
          owner Brett Forrest built his own sprinkler system in his front yard.
          A buddy learned about his custom sprinkler and asked Brett if he'd
          install a simple irrigation system for him in his yard. Soon after,
          folks took notice of his friend's yard, and word got out quickly.
          Brett realized there was a need for an industry that wasn't mainstream
          yet. He founded Cloudburst and incorporated it in 1988. His mission?
          To help others achieve a beautiful outdoor space they can be proud of.
        </p>
        <p className="aboutParagraph">
          Cloudburst has grown into a full-service licensed residential and
          commercial irrigation company. Today, it's still a family-owned
          business with the same mission &#8212; to help customers create
          outdoor spaces they can be proud of. From planning and design to
          installation and maintenance, Cloudburst has become a reputable leader
          in the industry.
        </p>
        <p className="aboutParagraph">
          We've been helping homeowners and commercial businesses achieve
          beautiful results for over 30 years.
        </p>
      </div>
      <div className="aboutViewContainer" id="bottom">
        <p className="aboutParagraph" id="center">
          Thousands of customers have trusted Cloudburst to help them create a
          thriving landscape with a reliable sprinkler system. Are you ready to
          bring your vision to life?
        </p>
        <NavigateButton color="lightgray" desc="CONTACT US" nav="/contact"/>
      </div>
      <Sitemap />
    </div>
  );
}
