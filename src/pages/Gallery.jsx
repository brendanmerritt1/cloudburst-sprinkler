import "../styles/gallery.css";
import Navbar from "../components/navbar/Navbar";
import Sitemap from "../components/sitemapFooter/Sitemap";
import { loadImage, loadGallery } from "../utils/imageLoader";
import Gallery from "react-photo-gallery";
import { useCallback, useState } from "react"
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default function PhotoGallery() {
    const [isZoomed, setIsZoomed] = useState(false)
    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

  return (
    <div>
      <Navbar color="white" />
      <div>
        <img src={loadImage("gallery")} alt="" style={{ width: "100%" }} />
        <span className="galleryCaptionTitle">Gallery</span>
      </div>
      <div className="galleryContainer">
        <Gallery photos={loadGallery()} onClick={<ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} />}/>
      </div>
      <Sitemap />
    </div>
  );
}
