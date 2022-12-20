import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import NavigateButton from "../components/services/NavigateButton";
import { loadImage } from "../utils/imageLoader";
import { useNavigate } from "react-router-dom";

export default function Commercial() {
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
      <div className="commPicContainer">
        <img src={loadImage("commercial")} alt="" style={{ width: "100%" }} />
        <div className="captionContainer" id="comm">
          <p className="servCaptionTitle">Commercial</p>
          <p className="servCaption">
            Cloudburst is a licensed commercial irrigation company, and we're
            ready to meet your needs.
          </p>
        </div>
        <div className="commLocContainer">
          <p style={{ fontWeight: "bold" }}>Riverfront</p>
          <p>Wilmington, DE</p>
        </div>
      </div>
      <div className="servicesContainer">
        <div className="commTextBody" id="center">
          <p className="servTextParagraph">
            Cloudburst is invested in your success. We're a premier irrigation
            company that has supported and collaborated with the commercial
            industry for over 30 years. We service Delaware, Maryland, New
            Jersey, and Pennsylvania.
          </p>
          <p className="servTextParagraph" id="comm">
            From designing and installing a commercial-grade irrigation system
            to troubleshooting and maintenance, you can count on Cloudburst to
            get the job done right and on time.
          </p>
          <p className="commCTATitle">How can we support you?</p>
          <div className="commButtonContact">
            <NavigateButton
              color="lightgray"
              desc="CONTACT US"
              nav="/contact"
            />
          </div>
          <div style={{ width: "70%" }}>
            <Slider {...settings}>
              {loadImage("commercialCarousel").map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={img} style={{width: "100%"}} />
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
          <p className="servParaTitle">New Construction and Development</p>
          <p>
            New construction irrigation projects demand significant
            coordination, resources, and experience. You can count on our
            talented teams at Cloudburst to navigate common challenges and
            develop solutions to ensure your project goals are met to your
            satisfaction and in a timely manner.
          </p>
          <p>
            We have the capabilities to handle union work and accept bids for
            prevailing wage rate work.
          </p>
          <p>
            We service a wide range of businesses including, but not limited to:
          </p>
          <div className="commIndentedList">
            <p>Multi-Family Apartments, Duplexes, and Condominiums</p>
            <p>HOA and Housing Developments</p>
            <p>Retail Centers</p>
            <p>Medical Centers</p>
            <p>Office Buildings</p>
            <p>Athletic Fields</p>
            <p>Schools and University Campuses</p>
            <p>Municipal Buildings</p>
            <p>Parks and Recreation</p>
          </div>
          <p className="servParaTitle"> Two-Wire Installations</p>
          <p>
            As a leader in the industry, we're certified experts in installing
            and troubleshooting two-wire landscape irrigation systems. Our
            technicians have mastered today's sophisticated control systems and
            will develop solutions to ensure that project goals are met.
          </p>
          <p className="servParaTitle">Backflow Testing & Repairs</p>
          <p>
            Our Certified Backflow Prevention Assembly Testers will test and
            certify new or existing back flow preventers and troubleshoot any
            necessary repairs.
          </p>
          <p className="servParaTitle">
            Repairs, Retrofitting, and Renovations
          </p>
          <p>
            Mainline repairs, retrofits, a hardscape upgrade - we understand
            that over the years there may be landscape renovations and
            improvements that can impact your existing irrigation system. Our
            experienced team will find the best plan to troubleshoot,
            reconfigure, or retrofit your sprinkler system to keep it running
            smoothly.
          </p>
          <p className="servParaTitle">Green Roof Installations</p>
          <p>
            If you're interested in going green, we can help design, construct,
            and maintain your green roof project.
          </p>
          <p className="servParaTitle">Commercial Maintenance Contracts</p>
          <p>
            To keep your system running its best, we offer commercial
            maintenance contracts. Contact us to learn more.
          </p>
          <p className="servParaTitle">
            Commercial Projects Completed by Cloudburst
          </p>
          <p>Join our growing list of projects that we're proud of.</p>
          <div className="commIndentedList">
            <p>Subaru Park - MLS Philadelphia Union Athletic Field (PA)</p>
            <p>Emily B. Clark Historic Garden - University of Delaware (DE)</p>
            <p>
              Solomon Solis-Cohen Elementary School - Green Roof Irrigation (PA)
            </p>
            <p>Mormon Tabernacle Church (PA)</p>
            <p>Riverfront Wilmington (DE)</p>
            <p>The Lofts at Valley Forge (PA)</p>
          </div>
        </div>
        <div className="commTextBody" id="center" style={{marginTop: "4rem"}}>    {/*change inline style later. bad 4 diff resolutions*/}
          <p className="commCTATitle" id="bottom">
            Ready to collaborate?
          </p>
          <div className="commButtonContact">
            <NavigateButton
              color="lightgray"
              desc="CONTACT US"
              nav="/contact"
            />
          </div>
          <div className="certs">
            {loadImage("certifications").map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={img} className="certPic"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sitemap />
    </div>
  );
}
