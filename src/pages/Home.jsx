import "../styles/home.css";
import NavigateButton from "../components/services/NavigateButton";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";
import { useState } from "react";
import "animate.css"

export default function Home() {
  const [isOpenBlur, setIsOpenBlur] = useState(false);

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="homeContainer">
      <Navbar color="black" setIsOpenBlur={setIsOpenBlur}/>
      <div className={isOpenBlur ? "homePicContainer blur" : "homePicContainer"}>
        <img
          src={loadImage("home_1920")}
          alt=""
          className="homePic"
        />
        <div className="homeCaptions">
          <span className="homeCaptionTitle animate__animated animate__fadeInUp animate__slow">
            Protect and Enhance Your Landscape Investment
          </span>
          <span className="homeSubCaption animate__animated animate__fadeIn animate__slower animate__delay-1s">
            Experts in commercial and residential smart irrigation systems,
            design, and maintenance.
          </span>
          <span className="homeSubCaption animate__animated animate__fadeIn animate__slower animate__delay-1s" id="margin">
            Serving Delaware, Maryland, New Jersey, and Pennsylvania.
          </span>
          <div className="homeButtons animate__animated animate__fadeIn animate__slow animate__delay-3s">
            <NavigateButton color={window.screen.width <= 1024 ? "mobile" : "gray"} desc="COMMERCIAL" nav="/commercial"/>
            <NavigateButton color={window.screen.width <= 1024 ? "mobile" : "gray"} desc="RESIDENTIAL" nav="/residential"/>
          </div>
        </div>
        <span className="copyright">&copy; {year} CLOUDBURST LAWN SPRINKLER SYSTEMS | ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}
