import "../../styles/sitemap.css";
import { useNavigate } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";
import { loadImage } from "../../utils/imageLoader";
import { windowResize } from "../../utils/windowResize";
import { useState, useEffect } from "react";

export default function Sitemap() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="sitemapContainer">
      <div className="flexColumn">
        <div className="topContainer">
          <div className="contactInfo">
            <img
              src={loadImage("white")}
              alt="Cloudburst Lawn Sprinklers Systems"
              className="logo2"
            />
            <div className="phoneIconContainer">
              <div className="phoneNumbers">
                <span itemProp="telephone">
                  Delaware <a href="tel:302-798-5999">302-798-5999</a>
                </span>
                <span>
                  Pennsylvania <a href="tel:610-640-4067">610-640-4067</a>
                </span>
              </div>
            </div>
          </div>
          <div className="linkContainer">
            <ul className="links">
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                  scrollTop();
                }}
              >
                HOME
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/about");
                  scrollTop();
                }}
              >
                ABOUT CLOUDBURST
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/commercial");
                  scrollTop();
                }}
              >
                COMMERCIAL
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/residential");
                  scrollTop();
                }}
              >
                RESIDENTIAL
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/gallery");
                  scrollTop();
                }}
              >
                GALLERY
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/contact");
                  scrollTop();
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 800);
                }}
              >
                CONTACT US
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/join-us");
                  scrollTop();
                }}
              >
                JOIN US
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/privacy-policy");
                  scrollTop();
                }}
              >
                PRIVACY POLICY
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/areas-serviced");
                  scrollTop();
                }}
              >
                AREAS SERVICED
              </li>
            </ul>
          </div>
        </div>

        <div className="bottomContainer">
          <div className="trademark">
            <span>
              &copy; {new Date().getFullYear()} CLOUDBURST LAWN SPRINKER SYSTEMS{" "}
              <big>&#124;</big> ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>

      {windowWidth >= 1280 && (
        <div className="arrowContainer">
          <ScrollArrow />
        </div>
      )}
    </div>
  );
}
