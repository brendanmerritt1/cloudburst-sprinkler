import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { loadImage } from "../../utils/imageLoader";
import { TfiClose } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import { useState, useEffect } from "react";

export default function Navbar(props) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();
  const img = props.color === "black" ? "black_281" : "white_281";

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="navbar">
      <div>
        <img
          src={loadImage(img)}
          alt="Cloudburst Lawn Sprinkler Systems"
          className="logo"
        />
      </div>
      {!isDesktop && (
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", color: props.color }}>
          <span
            style={{ fontSize: "1.2vw", fontWeight: "300", cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </span>
          <SlMenu
            className="navMenuButton"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
      <ul className={isOpen ? "navContainer show" : "navContainer hide"}>
        {!isDesktop ? (
          <div className="mobileNavClose">
            <TfiClose
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          ""
        )}
        <li
          onClick={() => {
            navigate("/");
          }}
          className="navItem"
          id={props.color}
        >
          HOME
        </li>
        <li
          onClick={() => {
            navigate("/commercial");
          }}
          className="navItem"
          id={props.color}
        >
          COMMERCIAL
        </li>
        <li
          onClick={() => {
            navigate("/residential");
          }}
          className="navItem"
          id={props.color}
        >
          RESIDENTIAL
        </li>
        <li
          onClick={() => {
            navigate("/gallery");
          }}
          className="navItem"
          id={props.color}
        >
          GALLERY
        </li>
        <li
          onClick={() => {
            navigate("/about");
          }}
          className="navItem"
          id={props.color}
        >
          ABOUT US
        </li>
        <li
          onClick={() => {
            navigate("/contact");
            window.location.reload(
              false
            ); /* CHANGE LATER, THIS IS SO HACKY AND BAD */
          }}
          className="navItem"
          id={props.color}
        >
          CONTACT US
        </li>
        <li
          onClick={() => {
            navigate("/join-us");
          }}
          className="navItem"
          id={props.color}
        >
          JOIN US
        </li>
      </ul>
    </div>
  );
}
