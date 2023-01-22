import "../styles/gallery.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import { loadImage, loadGallery } from "../utils/imageLoader";
import { loadCaption } from "../utils/captionLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

export default function PhotoGallery() {
  const pics = loadGallery();
  const [isShown, setIsShown] = useState(false);
  const [idxHover, setIdxHover] = useState();

  return (
    <div>
      <Navbar color="white" />
      <div>
        <img src={loadImage("gallery")} alt="lawn irrigation" style={{ width: "100%" }} />
        <div className="galleryCaptionContainer">
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
              <div
                aria-label="Cloudburst Sprinklers Gallery"
                role="img"
                className="galleryBoxH"
                key={pic.alt}
                style={{ backgroundImage: "url(" + pic.src + ")" }}
              ></div>
              {isShown && idxHover === pic.idx && (
                <span className="galleryCaption">
                  {loadCaption("pic" + pic.idx)}
                </span>
              )}
            </div>
          </Zoom>
        ))}
      </div>
      <Sitemap />
    </div>
  );
}
