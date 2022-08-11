import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { loadImage } from "../../utils/imageLoader";

export default function Navbar(props) {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logoContainer">
        <img
          src={loadImage(props.color)}
          alt="Cloudburst Lawn Sprinkler Systems"
          className="logo"
        />
      </div>
      <ul className="navContainer">
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
          }}
          className="navItem"
          id={props.color}
        >
          CONTACT US
        </li>
      </ul>
    </div>
  );
}
