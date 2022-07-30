import "../../styles/sitemap.css";
import { Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";

export default function Sitemap() {
  let navigate = useNavigate();

  return (
    <div className="sitemapContainer">
      <div className="flexColumn">
        <div className="topContainer">
          <div className="contactInfo">
            <img
              src={require("../../assets/cloudburst_white.png")}
              alt="Cloudburst Lawn Sprinklers Systems"
              className="logo2"
            />
          </div>
          <div className="linkContainer">
            <ul className="links">
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                ABOUT CLOUDBURST
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                OUR SERVICES
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                GALLERY
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                CAREERS
              </li>
              <li
                className="link"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                CONTACT US
              </li>
            </ul>
          </div>
          <div className="phoneIconContainer">
            <Phone />
            <div className="phoneNumbers">
              <span>Delaware 302.798.5999</span>
              <span>Pennsylvania 610.640.4067</span>
            </div>
          </div>
        </div>

        <div className="bottomContainer">
          <div className="trademark">
            <span>
              &copy; CLOUDBURST LAWN SPRINKERS SYSTEMS <big>&#124;</big> ALL RIGHTS RESERVED
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
