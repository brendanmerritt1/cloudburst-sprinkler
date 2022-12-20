import "../styles/home.css";
import NavigateButton from "../components/services/NavigateButton";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";
import "animate.css"

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar color="black"/>
      <div className="homePicContainer">
        <img
          src={loadImage("home_1920")}
          alt=""
          className="homePic"
        />
        <div className="homeCaptions">
          <span className="homeCaptionTitle animate__animated animate__fadeInLeft animate__slow">
            Protect and Enhance Your Landscape Investment
          </span>
          <span className="homeSubCaption animate__animated animate__fadeInUp animate__slower animate__delay-1s">
            Experts in commercial and residential smart irrigation systems,
            design, and maintenance.
          </span>
          <span className="homeSubCaption animate__animated animate__fadeInUp animate__slower animate__delay-1s" id="margin">
            Serving Delaware, Maryland, New Jersey, and Pennsylvania.
          </span>
          <div className="homeButtons animate__animated animate__fadeIn animate__slow animate__delay-3s">
            <NavigateButton color="gray" desc="COMMERCIAL" nav="/commercial"/>
            <NavigateButton color="gray" desc="RESIDENTIAL" nav="/residential"/>
          </div>
        </div>
        <span className="copyright">&copy; 2022 CLOUDBURST LAWN SPRINKLER SYSTEMS | ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}
