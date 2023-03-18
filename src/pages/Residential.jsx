import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import NavigateButton from "../components/services/NavigateButton";
import DesktopResContracts from "../components/residentialContracts/DesktopResContracts";
import MobileResContracts from "../components/residentialContracts/MobileResContracts";
import { windowResize } from "../utils/windowResize";
import { loadImage } from "../utils/imageLoader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Residential() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [isOpenBlur, setIsOpenBlur] = useState(false);
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

  useEffect(() => {
    return windowResize(setWindowWidth);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: windowWidth >= 1280 ? <NextArrow /> : null,
    prevArrow: windowWidth >= 1280 ? <PrevArrow /> : null,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className="servicesNavContainer">
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "servicesBlur" : null}>
        <div className="heroImgContainer">
          <img
            src={loadImage("residential")}
            alt=""
            className="heroImg"
          />
          <div className={isOpenBlur ? "captionContainer blur" : "captionContainer"} id="res">
            <p className="servCaptionTitle">Residential</p>
            <p className="servCaption">
              A beautiful lawn starts with Cloudburst.
            </p>
          </div>
        </div>
        <div className="servicesContainer">
          <div className="commTextBody" id="center">
            <p className="servTextParagraph" id="res">
              Walking barefoot across a lush lawn. &nbsp;Kids playing tag in the
              back yard. &nbsp;What's your vision?
            </p>
            <p className="servTextParagraph" id="res">
              For over 30 years, Cloudburst has been helping homeowners enhance
              their landscape with a reliable irrigation system. &nbsp;Whether
              you're upgrading an aging sprinkler system or you're ready to
              outfit your dream backyard oasis with a new sprinkler system, you
              can rely on our experienced teams for your project.
            </p>
            <p className="servTextParagraph" id="res">
              Cloudburst is a full-service residential irrigation company that's
              fully licensed and insured. &nbsp;We service Delaware, Maryland,
              New Jersey, and Pennsylvania.
            </p>
            <div className="resButtonContact">
              <NavigateButton
                color="lightgray"
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
            <div style={{ width: "60%" }}>
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
          <div className="commTextBody" id="paragraph">
            <p className="servParaTitle">Customer Service</p>
            <p className="servParagraph">
              We prioritize communication and being responsive. &nbsp;With every
              job, we'll keep you up to date and informed about appointments,
              when to expect a technician, and our progress along the way.
            </p>
            <p className="servParagraph">
              You can count on our on-call service to be prompt and reliable to
              troubleshoot your sprinkler system.
            </p>
            <p className="servParaTitle"> Smart WiFi Controller Upgrades</p>
            <p className="servParagraph">
              An efficient sprinkler system can save you money. &nbsp;Upgrade
              today with a smart controller and save on average up to 30% on
              water usage. &nbsp;Smart controllers use the latest technology and
              real-time weather data to adjust the frequency of watering to
              ensure a consistent schedule and prevent overwatering.
              &nbsp;Contact us to learn more.
            </p>
            <p className="servParaTitle">Free Estimates, No Obligation</p>
            <p className="servParagraph">
              We'll meet with you at your home to discuss your needs.
              &nbsp;Every proposal includes a comprehensive digital plan
              outlining a custom design with detailed measurements, zones, and
              recommended equipment unique to your landscape requirements.
              &nbsp;All new installations are backed by a 5-year warranty on
              parts and labor.
            </p>
          </div>
          <div
            className="commTextBody CTA"
            id="center"
          >
            <p className="commCTATitle" id="bottom">
              We'll help you get beautiful results.
            </p>
            <div className="resButtonContact" id="noSpace">
              <NavigateButton
                color="lightgray"
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
            {windowWidth > 1023 ? <DesktopResContracts /> : <MobileResContracts />}
          </div>
        </div>
      </div>
      <Sitemap />
    </div>
  );
}
