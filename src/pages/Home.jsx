import "../styles/home.css";
import NavigateButton from "../components/services/NavigateButton";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";

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
          <span className="homeCaptionTitle">
            Protect and Enhance Your Landscape Investment
          </span>
          <span className="homeSubCaption">
            Experts in commercial and residential smart irrigation systems,
            design, and maintenance.
          </span>
          <span className="homeSubCaption" id="margin">
            Serving Delaware, Maryland, New Jersey, and Pennsylvania.
          </span>
          <div className="homeButtons">
            <NavigateButton color="gray" desc="COMMERCIAL" nav="/commercial"/>
            <NavigateButton color="gray" desc="RESIDENTIAL" nav="/residential"/>
          </div>
        </div>
      </div>
    </div>
  );
}
