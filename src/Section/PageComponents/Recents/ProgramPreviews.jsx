import { Link } from "react-router-dom";
import { scrollToTop } from "../../../util/scrollToTop";

const ProgramPreviews = () => {
  return (
    <div >
        {/* id="border" */}
      <div className="container">
        <br />
        <h2  >
          <b style={{fontSize: 30}}>Exceptional Business Insights</b>
        </h2>
        <h3 >
          <i style={{fontSize: 26}}>Hosted by</i>
        </h3>
        <h2 >
          <b style={{fontSize: 26}}>Skytop Contributing Authors</b>
        </h2>
        <br />
        <div className="row">
          {/* At The Table */}
          <div id="back" className="logo col-sm">
            <Link to={`/program-authors/3211`}>
              <div onClick={() => scrollToTop()} id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="program-blurb">
                      <h4>Unpacking World Affairs</h4>
                      <i>For Global Business Leaders</i>
                      <br />
                      <br />
                      Hosted by
                      <br />
                      <i>Ambassador Cameron Munter (retired)</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogo"
                        src="https://skytop-strategies.com/wp-content/uploads/2022/04/yourLogo-382118962-1647035773606.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* At The Table */}
          <div id="back" className="logo col-sm">
            <Link to={`/program-authors/3779`}>
              <div onClick={() => scrollToTop()} id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="program-blurb">
                      <h4>Intelligence Briefing</h4>
                      <i>Emerging Cyber Risks and Best Response Scenarios</i>
                      <br />
                      <br />
                      Hosted by
                      <br />
                      <i>Chuck Brooks</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogo"
                        src="https://skytop-strategies.com/wp-content/uploads/2022/04/yourLogo-382118962-1647035773606.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* At The Table
          <div id="back" className="logo col-sm">
          <Link to={`/program-authors/3781`}>
              <div onClick={() => scrollToTop()} id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="program-blurb">
                    <h4>Boomerang</h4>
                      <i>The Geopolitics of Business</i>
                      <br />
                      <br />
                      Hosted by
                      <br />
                      <i>Elisabeth Braw, Senior Fellow, American Enterprise Institute</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogo"
                        src="https://skytop-strategies.com/wp-content/uploads/2022/04/yourLogo-382118962-1647035773606.jpg"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <Link to={`/digi-prog`}>
        <h3 style={{ paddingBottom: "10px" }}>
          <button onClick={() => scrollToTop()} class="previewButtonAuth">
            More Live, Streamed or On Demand Programs
          </button>
        </h3>
      </Link>
    </div>
  );
};

export default ProgramPreviews;
