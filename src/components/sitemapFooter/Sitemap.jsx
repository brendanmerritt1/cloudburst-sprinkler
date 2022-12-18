import "../../styles/sitemap.css";
import { useNavigate } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";
import { loadImage } from "../../utils/imageLoader";

export default function Sitemap() {
  let navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sitemapContainer">
      <div className="flexColumn">
        <div className="topContainer">
          <div className="contactInfo">
            <img
              src={loadImage("white_281")}
              alt="Cloudburst Lawn Sprinklers Systems"
              className="logo2"
            />
            <div className="phoneIconContainer">
              <div className="phoneNumbers">
                <span>Delaware 302.798.5999</span>
                <span>Pennsylvania 610.640.4067</span>
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
                  setTimeout(() => {window.location.reload(false)}, 800); /* CHANGE LATER, THIS IS SO HACKY AND BAD */
                }}
              >
                CONTACT US
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                  scrollTop();
                }}
              >
                PRIVACY POLICY
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

      <div className="arrowContainer">
        <ScrollArrow />
      </div>
    </div>
  );
}
