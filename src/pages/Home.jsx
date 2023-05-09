import "../styles/home.css";
import NavigateButton from "../components/services/NavigateButton";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";
import { windowResize } from "../utils/windowResize";
import { useState, useEffect } from "react";
import "animate.css";
import { Helmet } from "react-helmet";

export default function Home() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  return (
    <div className="homeContainer">
      <Helmet>
        <link rel="canonical" href="http://cloudburstsprinkler.com/" />
      </Helmet>
      <Navbar color="black" setIsOpenBlur={setIsOpenBlur} />
      <div
        className={isOpenBlur ? "homePicContainer blur" : "homePicContainer"}
      >
        <img src={loadImage("home")} alt="" className="homePic" />
        <div className="homeCaptions">
          {windowWidth >= 700 ? (
            <span className="homeCaptionTitle animate__animated animate__fadeInUp animate__slow">
              Protect and Enhance Your Landscape Investment
            </span>
          ) : (
            <div className="mobileHomeAlign">
              <span className="homeCaptionTitle animate__animated animate__fadeInUp animate__slow">
                Protect and Enhance
              </span>
              <span className="homeCaptionTitle animate__animated animate__fadeInUp animate__slow">
                Your Landscape Investment
              </span>
            </div>
          )}
          <span className="homeSubCaption animate__animated animate__fadeIn animate__slower animate__delay-1s">
            Experts in commercial and residential smart
            {windowWidth < 700 && <br />} irrigation systems, design, and
            maintenance.
          </span>
          <span
            className="homeSubCaption animate__animated animate__fadeIn animate__slower animate__delay-1s"
            id="margin"
          >
            Serving Delaware, Maryland, {windowWidth < 700 && <br />} New
            Jersey, and Pennsylvania.
          </span>
          <div className="homeButtons animate__animated animate__fadeIn animate__slow animate__delay-3s">
            <NavigateButton
              color={window.innerWidth <= 1024 ? "mobile" : "gray"}
              desc="COMMERCIAL"
              nav="/commercial"
            />
            <NavigateButton
              color={window.innerWidth <= 1024 ? "mobile" : "gray"}
              desc="RESIDENTIAL"
              nav="/residential"
            />
          </div>
        </div>
        <span className="copyright">
          &copy; {year} CLOUDBURST LAWN SPRINKLER SYSTEMS | ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
}
