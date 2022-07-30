import "../styles/services.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import carousel1 from "../assets/carouselpic1.png";
import carousel2 from "../assets/carouselpic2.png";
import carousel3 from "../assets/carouselpic3.png";
import Sitemap from "../components/sitemapFooter/Sitemap";

const images = [carousel1, carousel2, carousel3];

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
      <div className="servicesContainer">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div>
                <img src={img} alt={img} className="carouselPic"/>
            </div>
          ))}
        </Slider>
      </div>
      <Sitemap />
    </div>
  );
}
