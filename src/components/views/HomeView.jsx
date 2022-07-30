import "../../styles/homeView.css";
import ContactButton from "../services/NavigateButton";
import Review from "../userReviews/Review";

export default function HomeView() {
  return (
    <div className="homeViewContainer">
      <div className="homeDescriptionContainer">
        <span className="homeDescription">
          Cloudburst has over 30 years of experience bringing customer's
          landscaping dreams to life.
        </span>
        <span className="homeDescription">
          From designing and planning to installing and maintaining
          commercial-grade sprinkler systems,
        </span>
        <span className="homeDescription">
          we're a premier irrigation company serving the Delaware, Pennsylvania,
          New Jersey, and Maryland areas.
        </span>
      </div>
      <div className="contactButtonContainer">
        <span className="contactDescription">We're ready when you are.</span>
        <ContactButton color="green" />
      </div>
      <div className="homeServices">
        <img
          src={require("../../assets/girl+dog.png")}
          alt=""
          className="girlDogPic"
        />
        <div className="homeImages">
          <img
            src={require("../../assets/residential.png")}
            alt=""
            className="homePicSm"
          />
          <img
            src={require("../../assets/commercial.png")}
            alt=""
            className="homePicSm"
          />
          <img
            src={require("../../assets/gallery.png")}
            alt=""
            className="homePicSm"
          />
        </div>
        <div className="homeImageCaptions">
          <span className="homeImageCaption">RESIDENTIAL</span>
          <span className="homeImageCaption">COMMERCIAL & ATHLETICS</span>
          <span className="homeImageCaption">GALLERY</span>
        </div>
      </div>
      <Review />
    </div>
  );
}
