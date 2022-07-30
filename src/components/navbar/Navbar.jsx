import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logoContainer">
        <img
          src={require("../../assets/cloudburst_black.png")}
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
        >
          HOME
        </li>
        <li
          onClick={() => {
            navigate("/commercial");
          }}
          className="navItem"
        >
          COMMERCIAL
        </li>
        <li
          onClick={() => {
            navigate("/residential");
          }}
          className="navItem"
        >
          RESIDENTIAL
        </li>
        <li
          onClick={() => {
            navigate("/gallery");
          }}
          className="navItem"
        >
          GALLERY
        </li>
        <li
          onClick={() => {
            navigate("/about");
          }}
          className="navItem"
        >
          ABOUT US
        </li>
        <li
          onClick={() => {
            navigate("/contact");
          }}
          className="navItem"
        >
          CONTACT US
        </li>
      </ul>
    </div>
  );
}
