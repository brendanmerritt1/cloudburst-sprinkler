import "../styles/services.css";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import Navbar from "../components/navbar/Navbar";
import NavigateButton from "../components/services/NavigateButton";
import { loadImage } from "../utils/imageLoader";
import { windowResize } from "../utils/windowResize";
import Accordion from "../components/services/Accordion";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Commercial() {
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
        <title>Commercial - Cloudburst Lawn Sprinkler Systems</title>
        <link rel="canonical" href="https://cloudburstsprinkler.com/commercial" />
      </Helmet>
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "servicesBlur" : null}>
        <div className="heroImgContainer">
          <img
            src={loadImage("commercial")}
            alt=""
            className="heroImg"
            id="comm"
          />
          <div
            className={
              isOpenBlur ? "captionContainer blur" : "captionContainer"
            }
            id="comm"
          >
            <p className="servCaptionTitle">Commercial</p>
            <p className="servCaption">We're ready to meet your needs.</p>
          </div>
          <div
            className={
              isOpenBlur ? "commLocContainer blur" : "commLocContainer"
            }
          >
            <p style={{ fontWeight: "bold" }}>Riverfront</p>
            <p>Wilmington, DE</p>
          </div>
        </div>
        <div className="servicesContainer">
          <div className="commTextBody" id="center">
            <p className="servTextParagraph" id="comm">
              Cloudburst is invested in your success. We're a premier irrigation
              company that has supported and collaborated with the commercial
              industry for over 30 years.
            </p>
            <p className="servTextParagraph" id="comm">
              From designing and installing a commercial-grade irrigation system
              to troubleshooting and maintenance, you can count on Cloudburst to
              get the job done right and on time.
            </p>
            <p className="servTextParagraph" id="comm">
              We service Delaware, Maryland, New Jersey, and Pennsylvania.
            </p>
            <p className="commCTATitle">How can we support you?</p>
            <div className="commButtonContact">
              <NavigateButton
                color="lightgray"
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
            <div className="servSlider">
              <Slider {...settings}>
                {loadImage("commercialCarousel").map((img, idx) => (
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
              <p className="servParagraph">{data[0].body[2].paragraph}</p>
              <div className="commIndentedList">
                {data[0].body[3].list.map((para, i) => {
                  return <p key={i}>{para}</p>;
                })}
              </div>
              <p className="servParaTitle">{data[1].heading}</p>
              <p className="servParagraph">{data[1].body[0].paragraph}</p>
              <p className="servParaTitle">{data[2].heading}</p>
              <p className="servParagraph">{data[2].body[0].paragraph}</p>
              <p className="servParaTitle">{data[3].heading}</p>
              <p className="servParagraph">{data[3].body[0].paragraph}</p>
              <p className="servParaTitle">{data[4].heading}</p>
              <p className="servParagraph">{data[4].body[0].paragraph}</p>
              <p className="servParaTitle">{data[5].heading}</p>
              <p className="servParagraph">{data[5].body[0].paragraph}</p>
              <p className="servParaTitle">{data[6].heading}</p>
              <p className="servParagraph">{data[6].body[0].paragraph}</p>
              <div className="commIndentedList">
                {data[6].body[1].list.map((para, i) => {
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </div>
          ) : (
            <div className="commTextBody" id="paragraph">
              <Accordion data={data} />
            </div>
          )}
          <div className="commTextBody CTA" id="center">
            <p className="commCTATitle" id="bottom">
              Ready to collaborate?
            </p>
            <div className="commButtonContact" id="bottom">
              <NavigateButton
                color="lightgray"
                desc="CONTACT US"
                nav="/contact"
              />
            </div>
            <div className="certs">
              {loadImage("certifications").map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={img} className="certPic" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {windowWidth >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}

const data = [
  {
    heading: "New Construction and Development",
    body: [
      {
        paragraph:
          "New construction irrigation projects demand significant coordination, resources, and experience. You can count on our talented teams at Cloudburst to navigate common challenges and develop solutions to ensure your project goals are met to your satisfaction and in a timely manner.",
      },
      {
        paragraph:
          "We have the capabilities to handle union work and accept bids for prevailing wage rate work.",
      },
      {
        paragraph:
          "We service a wide range of businesses including, but not limited to:",
      },
      {
        list: [
          "Multi-Family Apartments, Duplexes, and Condominiums",
          "HOA and Housing Developments",
          "Retail Centers",
          "Medical Centers",
          "Office Buildings",
          "Athletic Fields",
          "Schools and University Campuses",
          "Municipal Buildings",
          "Parks and Recreation",
        ],
      },
    ],
  },
  {
    heading: "Two-Wire Installations",
    body: [
      {
        paragraph:
          "As a leader in the industry, we're certified experts in installing and troubleshooting two-wire landscape irrigation systems. Our technicians have mastered today's sophisticated control systems and will develop solutions to ensure that project goals are met.",
      },
    ],
  },
  {
    heading: "Backflow Testing and Repairs",
    body: [
      {
        paragraph:
          "Our Certified Backflow Prevention Assembly Testers will test and certify new or existing back flow preventers and troubleshoot any necessary repairs.",
      },
    ],
  },
  {
    heading: "Repairs, Retrofitting, and Renovations",
    body: [
      {
        paragraph:
          "Mainline repairs, retrofits, hardscape upgrades - we understand that over the years there may be landscape renovations and improvements that can impact your existing irrigation system.  Our experienced team will find the best plan to troubleshoot, reconfigure, or retrofit your sprinkler system to keep it running smoothly.",
      },
    ],
  },
  {
    heading: "Green Roof Installations",
    body: [
      {
        paragraph:
          "If you're interested in going green, we can help design, construct, and maintain your green roof project.",
      },
    ],
  },
  {
    heading: "Commercial Maintenance Contracts",
    body: [
      {
        paragraph:
          "To keep your system running its best, we offer commercial maintenance contracts. Contact us to learn more.",
      },
    ],
  },
  {
    heading: "Commercial Projects Completed by Cloudburst",
    body: [
      {
        paragraph: "Join our growing list of projects that we're proud of.",
      },
      {
        list: [
          "Subaru Park - MLS Philadelphia Union Athletic Field (PA)",
          "Emily B. Clark Historic Garden - University of Delaware (DE)",
          "Solomon Solis-Cohen Elementary School - Green Roof Irrigation (PA)",
          "Mormon Tabernacle Church (PA)",
          "Riverfront Wilmington (DE)",
          "The Lofts at Valley Forge (PA)",
        ],
      },
    ],
  },
];
