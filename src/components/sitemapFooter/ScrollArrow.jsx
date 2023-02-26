import { KeyboardArrowUp } from "@mui/icons-material";
import "../../styles/scrollArrow.css";

export default function ScrollArrow() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <KeyboardArrowUp className="scrollTop" style={{fontSize: "1.7vw"}} onClick={scrollTop} />
    </div>
  );
}
