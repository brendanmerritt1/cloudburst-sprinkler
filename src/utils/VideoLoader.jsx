import { loadImage } from "./imageLoader";
import { useRef, useEffect } from "react";

export default function VideoLoader(props) {
  const videoRef = useRef(undefined);

  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div className="homePicContainer">
      <video
        className={props.className}
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={props.video_webm} type='video/webm; codecs="vp9"' />
        <source src={props.video_mp4} type='video/mp4; codecs="avc1"' />
        <img src={loadImage("home")} alt="" className={props.className} />
      </video>
    </div>
  );
}
