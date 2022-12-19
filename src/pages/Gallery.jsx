import "../styles/gallery.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import { loadImage, loadGallery } from "../utils/imageLoader";
import Gallery from "react-photo-gallery";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";


export default function PhotoGallery() {
  useEffect(() => {
    mediumZoom("[src]")
  }, [])
  return (
    <div>
      <Navbar color="white" />
      <div>
        <img src={loadImage("gallery")} alt="" style={{ width: "100%" }} />
        <span className="galleryCaptionTitle">Gallery</span>
      </div>
      <div className="galleryContainer">
        <Gallery
          photos={loadGallery()}
        />
      </div>
      <Sitemap />
    </div>
  );
}
