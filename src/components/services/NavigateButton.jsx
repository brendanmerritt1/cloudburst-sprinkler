import "../../styles/contact.css";
import { useNavigate } from "react-router-dom";

export default function NavigateButton(props) {
  let navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0});
  };

  return (
    <button
      onClick={() => {
        navigate(props.nav)
        scrollTop();
        if (props.nav === "/contact") {
          window.location.reload(false); /* CHANGE LATER, THIS IS SO HACKY AND BAD */
        }
      }}
      className="navigateButton"
      id={props.color}
      title={props.desc}
    >
      {props.desc}
    </button>
  );
}
