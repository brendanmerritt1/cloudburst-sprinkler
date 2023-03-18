import "../../styles/services.css";
import "../../styles/mobileContracts.css";

export default function MobileResContracts() {
  return (
    <div className="resGrass">
      <div className="captionContainer" id="bottom">
        <p className="servCaptionTitle" id="bottom">
          Residential Maintenance Contracts
        </p>
        <p className="servCaption" id="bottom">
          Protect your investment with a maintenance plan. &nbsp;We'll maintain
          your sprinkler system like it's our own. &nbsp;Contact us to learn
          more.
        </p>
      </div>
      <div className="contractBoxContainer">
        <div className="contractBox">
          <div className="contractParagraph">
            <p className="contractTitle">Spring Start-Up</p>
            <p className="contractCaption">
              We'll make sure you're ready for spring with a complete inspection
              and service to get your system up and running.
            </p>
          </div>
        </div>
        <div className="contractBox">
          <div className="contractParagraph">
            <p className="contractTitle">Mid-Year</p>
            <p className="contractCaption">
              With a mid-year check-up, we'll inspect rain sensors, valves,
              pipes, and sprinkler heads to make certain they're performing at
              their best.
            </p>
          </div>
        </div>
        <div className="contractBox">
          <div className="contractParagraph">
            <p className="contractTitle">Winterization</p>
            <p className="contractCaption">
              To avoid water damage and pipe bursts, we'll clear the irrigation
              line and get your system ready for winter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
