import { KeyboardArrowUp } from "@mui/icons-material";
import "../../styles/scrollArrow.css";

export default function ScrollArrow() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <KeyboardArrowUp className="scrollTop" onClick={scrollTop} />
    </div>
  );
}
