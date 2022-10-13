import "../styles/joinUs.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import { loadImage } from "../utils/imageLoader";

export default function JoinUs() {
  return (
    <div className="joinContainer">
      <Navbar color="black" />
      <div className="joinPicContainer">
        <img src={loadImage("join_us")} alt="" className="joinImg" />
        <div className="joinCaption">
          <span className="joinCaptionTitle">Join Our Team</span>
        </div>
      </div>
      <div className="joinViewContainer">
        <p className="joinParagraph">
          Cloudburst is committed to providing the highest quality of irrigation
          services, but it takes the right people to create a successful team.
          We're always searching for experienced irrigation service and
          installation technicians with a strong work ethic and great attitude.
        </p>
        <p className="joinParagraph">
          At Cloudburst you'll enjoy a competitve compensation and benefits
          package, as well as the opportunity for professional growth and
          respect that comes from working for an industry leader.
        </p>
        <div className="joinContactUs">
          <p className="joinParagraphCaption">
            Ready to join us? Call us today.
          </p>
          <p className="joinParagraph">Delaware (302) 798-5999</p>
          <p className="joinParagraph">Pennsylvania (610) 640-4067</p>
          <p className="joinParagraphCaption">
            Or send us an email.
          </p>
          <p className="joinParagraph">
            sales@cloudburstsprinkler.com
          </p>
        </div>
      </div>
      <Sitemap />
    </div>
  );
}