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
  const img = props.color === "black" ? "black" : "white";

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1280);
  };

  const changeZIndex = (open) => {
    if (open) {
      return "1";
    } else {
      return "2";
    }
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
          className={isOpen ? "logo blur" : "logo"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {!isDesktop && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            color: props.color,
            zIndex: changeZIndex(isOpen),
          }}
        >
          <span
            className="navMenu"
            onClick={() => {
              setIsOpen(!isOpen);
              props.setIsOpenBlur(!isOpen);
            }}
          >
            MENU
          </span>
          <SlMenu
            className="navMenuButton"
            onClick={() => {
              setIsOpen(!isOpen);
              props.setIsOpenBlur(!isOpen);
            }}
          />
        </div>
      )}
      <ul className={isOpen ? "navContainer show" : "navContainer hide"}>
        {!isDesktop && (
          <div className="mobileNavClose">
            <TfiClose
              onClick={() => {
                setIsOpen(!isOpen);
                props.setIsOpenBlur(!isOpen);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        <li
          onClick={() => {
            navigate("/");
            setIsOpen(false);
            props.setIsOpenBlur(false);
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
            );
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
        <li
          onClick={() => {
            navigate("/areas-serviced");
          }}
          className="navItem"
          id={props.color}
        >
          AREAS SERVICED
        </li>
      </ul>
    </div>
  );
}
