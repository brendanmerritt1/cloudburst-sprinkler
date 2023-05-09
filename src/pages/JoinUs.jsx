import "../styles/joinUs.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import { loadImage } from "../utils/imageLoader";
import { windowResize } from "../utils/windowResize";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function JoinUs() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="joinContainer">
      <Helmet>
        <title>Join Us - Cloudburst Lawn Sprinkler Systems</title>
        <link rel="canonical" href="https://cloudburstsprinkler.com/join-us" />
      </Helmet>
      <Navbar color="black" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur && "joinBlur"}>
        <div className="joinPicContainer">
          <img
            src={loadImage("join_us")}
            alt=""
            className="heroImg"
            id="join_us"
          />
          <div className={isOpenBlur ? "joinCaption blur" : "joinCaption"}>
            <span className="joinCaptionTitle">Join Our Team</span>
            <span className="joinCaptionSub">
              and work for a premier irrigation company.
            </span>
          </div>
        </div>
        <div className="joinViewContainer">
          <p className="joinParagraph">
            Cloudburst is committed to providing the highest quality of
            irrigation services, but it takes the right people to create a
            successful team. We're always searching for experienced irrigation
            service and installation technicians with a strong work ethic and
            great attitude.
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
            <span className="joinParagraph">
              Delaware:&nbsp;
              <a href="tel:302-798-5999" style={{ color: "#222222" }}>
                (302) 798-5999
              </a>
            </span>
            <span className="joinParagraph">
              Pennsylvania:&nbsp;
              <a href="tel:610-640-4067" style={{ color: "#222222" }}>
                (610) 640-4067
              </a>
            </span>
            <span className="joinParagraphCaption">Or send us an email.</span>
            <span className="joinParagraph">
              <a href="mailto:sales@cloudburstsprinkler.com">
                sales@cloudburstsprinkler.com
              </a>
            </span>
          </div>
        </div>
        {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}
