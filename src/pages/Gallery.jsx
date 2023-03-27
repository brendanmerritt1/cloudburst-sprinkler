import "../styles/gallery.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import MobileSitemap from "../components/sitemapFooter/MobileSitemap";
import { loadImage, loadGallery } from "../utils/imageLoader";
import { loadCaption } from "../utils/captionLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function PhotoGallery() {
  const pics = loadGallery();
  const [isShown, setIsShown] = useState(false);
  const [idxHover, setIdxHover] = useState();
  const [isOpenBlur, setIsOpenBlur] = useState(false);

  return (
    <div className="galleryFlex">
      <Navbar color="white" setIsOpenBlur={setIsOpenBlur} />
      <div className={isOpenBlur ? "galleryBlur" : null}>
        <div className="heroImgContainer">
          <img
            src={loadImage("gallery")}
            alt="lawn irrigation"
            className="heroImg"
            id="gallery"
          />
          <div
            className={
              isOpenBlur
                ? "galleryCaptionContainer blur"
                : "galleryCaptionContainer"
            }
          >
            <span className="galleryCaptionTitle">Gallery</span>
            <span className="gallerySubCaption">A showcase of our work.</span>
          </div>
        </div>
        <div className="galleryContainer">
          {pics.map((pic) => (
            <Zoom>
              <div
                onMouseEnter={() => {
                  setIsShown(true);
                  setIdxHover(pic.idx);
                }}
                onMouseLeave={() => {
                  setIsShown(false);
                  setIdxHover();
                }}
              >
                {isShown && idxHover === pic.idx && window.screen.width >= 700 && (
                  <span className="galleryCaption">
                    {loadCaption("pic" + pic.idx)}
                  </span>
                )}
                <div
                  aria-label="Cloudburst Sprinklers Gallery"
                  role="img"
                  className="galleryBoxH"
                  key={pic.alt}
                  style={{ backgroundImage: "url(" + pic.src + ")" }}
                ></div>
              </div>
            </Zoom>
          ))}
        </div>
        {window.screen.width >= 700 ? <Sitemap /> : <MobileSitemap />}
      </div>
    </div>
  );
}
