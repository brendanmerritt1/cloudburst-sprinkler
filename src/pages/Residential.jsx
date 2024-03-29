import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import Navbar from "../components/navbar/Navbar";
import NavigateButton from "../components/services/NavigateButton";
import Accordion from "../components/services/Accordion";
import DesktopResContracts from "../components/residentialContracts/DesktopResContracts";
import MobileResContracts from "../components/residentialContracts/MobileResContracts";
import { windowResize } from "../utils/windowResize";
import { loadImage } from "../utils/imageLoader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Residential() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
      <Helmet>
        <title>Residential - Cloudburst Lawn Sprinkler Systems</title>
        <link
          rel="canonical"
          href="https://cloudburstsprinkler.com/residential"
        />
        <meta
          name="description"
          content="Cloudburst has over 30 years of experience in the design and installation of underground irrigation systems for residential applications."
        />
      </Helmet>
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "servicesBlur" : null}>
        <div className="heroImgContainer">
          <img
            src={loadImage("residential")}
            alt=""
            className="heroImg"
            id="res"
          />
          <div
            className={
              isOpenBlur ? "captionContainer blur" : "captionContainer"
            }
            id="res"
          >
            <p className="servCaptionTitle">Residential</p>
            <p className="servCaption">
              A beautiful lawn starts with Cloudburst.
            </p>
          </div>
        </div>
        <div className="servicesContainer">
          <div className="commTextBody" id="center">
            <p className="servTextParagraph" id="res">
              Walking barefoot across a lush lawn. Kids playing tag in the back
              yard. What's your vision?
            </p>
            <p className="servTextParagraph" id="res">
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
            <div className="resButtonContact" id="noSpace">
              <NavigateButton
                color="lightgray"
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
            <div className="servSlider">
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
          {windowWidth >= 700 ? (
            <div className="commTextBody" id="paragraph">
              <p className="servParaTitle">{data[0].heading}</p>
              <p className="servParagraph">{data[0].body[0].paragraph}</p>
              <p className="servParagraph">{data[0].body[1].paragraph}</p>
              <p className="servParaTitle">{data[1].heading}</p>
              <p className="servParagraph">{data[1].body[0].paragraph}</p>
              <p className="servParaTitle">{data[2].heading}</p>
              <p className="servParagraph">{data[2].body[0].paragraph}</p>
              <p className="servParaTitle">{data[3].heading}</p>
              <p className="servParagraph">{data[3].body[0].paragraph}</p>
            </div>
          ) : (
            <div className="commTextBody" id="paragraph">
              <Accordion data={data} />
            </div>
          )}

          <div className="commTextBody CTA" id="center">
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
            {windowWidth >= 1280 ? (
              <DesktopResContracts />
            ) : (
              <MobileResContracts />
            )}
          </div>
        </div>
        {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}

const data = [
  {
    heading: "Customer Service",
    body: [
      {
        paragraph:
          "We prioritize communication and being responsive. With every job, we'll keep you up to date and informed about appointments, when to expect a technician, and our progress along the way.",
      },
      {
        paragraph:
          "You can count on our experienced service technician to be prompt and reliable to troubleshoot your sprinkler system.",
      },
    ],
  },
  {
    heading: "Smart WiFi Controller Upgrades",
    body: [
      {
        paragraph:
          "An efficient sprinkler system can save you money. Upgrade today with a smart controller and save on average up to 30% on water usage. Smart controllers use the latest technology and real-time weather data to adjust the frequency of watering to ensure a consistent schedule and prevent overwatering. Contact us to learn more.",
      },
    ],
  },
  {
    heading: "Maintaining Your System",
    body: [
      {
        paragraph:
          "Protect your investment with a maintenance plan. We'll maintain your sprinkler system like it's our own. See our residential maintenance plan below to learn more.",
      },
    ],
  },
  {
    heading: "Free Estimates, No Obligation",
    body: [
      {
        paragraph:
          "We'll meet with you at your home to discuss your needs. Every proposal includes a comprehensive digital plan outlining a custom design with detailed measurements, zones, and recommended equipment unique to your landscape requirements. All new installations are backed by a 5-year warranty on parts and labor.",
      },
    ],
  },
];
