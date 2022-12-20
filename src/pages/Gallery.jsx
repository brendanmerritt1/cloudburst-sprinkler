import "../styles/gallery.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import { loadImage, loadGallery } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function PhotoGallery() {
  const pics = loadGallery();
  return (
    <div>
      <Navbar color="white" />
      <div>
        <img src={loadImage("gallery")} alt="" style={{ width: "100%" }} />
        <span className="galleryCaptionTitle">Gallery</span>
      </div>
      <div className="galleryContainer">
        {pics.map((pic) => (
          <Zoom>
            <div
              aria-label="Cloudburst Sprinklers Gallery"
              role="img"
              className="galleryBoxH"
              key={pic.alt}
              style={{ backgroundImage: "url(" + pic.src + ")" }}
            >
            </div>
          </Zoom>
        ))}
      </div>
      <Sitemap />
    </div>
  );
}
