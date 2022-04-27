import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../scrollToTop";

const ProgramLogos = () => {
  return (
    <Link to="/digi-prog">
      <div className="containter">
        <button onClick={() => scrollToTop()} className="programButton">
          Three Streamed Program Channels
        </button>
        <br />
        <div className="row">
          {/* To The Point */}
          <div onClick={() => scrollToTop()} className="logo col-sm">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="ttp"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png"
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    className="ttp-top"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png"
                    alt=""
                  />
                  <hr></hr>
                  <div className="program-blurb">
                    Everything the viewer needs to know in 30 minutes or less
                  </div>
                  {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                </div>
              </div>
            </div>
          </div>
          {/* At The Table */}
          <div onClick={() => scrollToTop()} className="logo col-sm">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="at"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    className="program-img-top"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                  />
                  <div className="program-blurb">
                    A Skytop Contributing Author has convened the experts, now
                    viewers sit and engage in actionable conversation{" "}
                  </div>
                  {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                </div>
              </div>
            </div>
          </div>
          {/* In The Studio */}
          <div onClick={() => scrollToTop()} className="logo col-sm">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="its"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    className="program-img-top"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"
                  />
                  <div className="program-blurb">
                    Skytop CEO Christopher Skroupa sits 1:1 with movers and
                    shakers supporting viewers seeking to impact their company
                    and their performance{" "}
                  </div>
                  {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProgramLogos;
