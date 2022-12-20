import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import NavigateButton from "../components/services/NavigateButton";
import { loadImage } from "../utils/imageLoader";
import { useNavigate } from "react-router-dom";
import { FaFaucet, FaSnowflake } from "react-icons/fa";
import { GiGrass } from "react-icons/gi";

export default function Residential() {
  let navigate = useNavigate();

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowDropright />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowDropleft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="servicesNavContainer">
      <Navbar color="white" />
      <div className="servPicContainer">
        <img src={loadImage("residential")} alt="" style={{ width: "100%" }} />
        <div className="captionContainer" id="res">
          <p className="servCaptionTitle">Residential</p>
          <p className="servCaption" id="res">
            A beautiful, healthy lawn with great curb appeal starts with a
            reliable sprinkler system by Cloudburst.
          </p>
        </div>
      </div>
      <div className="servicesContainer">
        <div className="commTextBody" id="center">
          <p className="servTextParagraph">
            Walking barefoot across a lush lawn. Kids playing tag in the back
            yard. What's your vision?
          </p>
          <p className="servTextParagraph">
            For over 30 years, Cloudburst has been helping homeowners enhance
            their landscape with a reliable irrigation system. Whether you're
            upgrading an aging sprinkler system or you're ready to outfit your
            dream backyard oasis with a new sprinkler system, you can rely on
            our experienced teams for your project.
          </p>
          <p className="servTextParagraph" id="res">
            Cloudburst is a full-service residential irrigation company that's
            fully licensed and insured. We service Delaware, Maryland, New
            Jersey, and Pennsylvania.
          </p>
          <div className="commButtonContact">
            <NavigateButton
              color="lightgray"
              desc="CONTACT US"
              nav="/contact"
            />
          </div>
          <div style={{ width: "70%" }}>
            <Slider {...settings}>
              {loadImage("residentialCarousel").map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={img} style={{ width: "100%" }} />
                </div>
              ))}
            </Slider>
          </div>
          <p
            className="servGalleryRedir"
            onClick={() => {
              navigate("/gallery");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            View All Projects In Gallery
          </p>
        </div>
        <div className="commTextBody">
          <p className="servParaTitle">Customer Service</p>
          <p>
            We prioritize communication and being responsive. With every job,
            we'll keep you up to date and informed about appointments, when to
            expect a technician, and our progress along the way.
          </p>
          <p>
            You can count on our on-call service to be prompt and reliable to
            troubleshoot your sprinkler system.
          </p>
          <p className="servParaTitle"> Smart WiFi Controller Upgrades</p>
          <p>
            An efficient sprinkler system can save you money. Upgrade today with
            a smart controller and save on average up to 30% on water usage.
            Smart controllers use the latest technology and real-time weather
            data to adjust the frequency of watering to ensure a consistent
            schedule and prevent overwatering. Contact us to learn more.
          </p>
          <p className="servParaTitle">Free Estimates, No Obligation</p>
          <p>
            We'll meet with you at your home to discuss your needs. Every
            proposal includes a comprehensive digital plan outlining a custom
            design with detailed measurements, zones, and recommended equipment
            unique to your landscape requirements. All new installations are
            backed by a 5-year warranty on parts and labor.
          </p>
        </div>
        <div className="commTextBody" id="center" style={{ marginTop: "4rem" }}>
          {/*change inline style later. bad 4 diff resolutions*/}
          <p className="commCTATitle" id="bottom">
            We'll help you get beautiful results.
          </p>
          <div className="commButtonContact">
            <NavigateButton
              color="lightgray"
              desc="CONTACT US"
              nav="/contact"
            />
          </div>
          <div className="resGrass">
            <img src={loadImage("res_grass")} alt="dewy grass" />
            <div className="captionContainer" id="bottom">
              <p className="servCaptionTitle" id="bottom">
                Residential Maintenance Contracts
              </p>
              <p className="servCaption" id="bottom">
                Protect your investment with a maintenance plan. We'll maintain
                your sprinkler system like it's our own. Contact us to learn
                more.
              </p>
            </div>
            <div className="contractBoxContainer">
              <div className="contractBox">
                <div className="contractMUI">
                  <FaFaucet color="#000000" size={"6rem"} />
                </div>
                <div className="contractParagraph">
                  <p className="contractTitle">Spring Start-Up</p>
                  <p className="contractCaption">
                    We'll make sure you're ready for spring with a complete
                    inspection and service to get your system up and running.
                  </p>
                </div>
              </div>
              <div className="contractBox">
                <div className="contractMUI">
                  <GiGrass color="#000000" size={"6rem"} />
                </div>
                <div className="contractParagraph">
                  <p className="contractTitle">Mid-Year</p>
                  <p className="contractCaption">
                    With a mid-year check-up, we'll inspect rain sensors,
                    valves, pipes, and sprinkler heads to make certain they're
                    performing at their best.
                  </p>
                </div>
              </div>
              <div className="contractBox">
                <div className="contractMUI">
                  <FaSnowflake color="#000000" size={"6rem"} />
                </div>
                <div className="contractParagraph">
                  <p className="contractTitle">Winterization</p>
                  <p className="contractCaption">
                    To avoid water damage and pipe bursts, we'll clear the
                    irrigation line and get your system ready for winter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sitemap />
    </div>
  );
}
