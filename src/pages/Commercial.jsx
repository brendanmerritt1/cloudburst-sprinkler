import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Sitemap from "../components/sitemapFooter/Sitemap";
import Navbar from "../components/navbar/Navbar";
import { loadImage } from "../utils/imageLoader";

export default function Commercial() {
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
    prevArrow: <PrevArrow />
  };

  return (
    <div className="servicesNavContainer">
      <Navbar color="black"/>
      <div className="servicesContainer">
        <Slider {...settings}>
          {loadImage("carousel").map((img, idx) => (
            <div key={idx}>
                <img src={img} alt={img} className="carouselPic"/>
            </div>
          ))}
        </Slider>
      </div>
      <Sitemap />
    </div>
  );
}
