const InvestProg = (props) => {
  const { title, img } = props;
  return (
    <div id="border">
      <a href="https://skytopstrategies.com/investment">
        <button className="categoryButton">{title}</button>
      </a>

      <img alt="boxSetImg" className="boxSetImg" src={img} />

      <div className="container">
        <br />
        <button className="previewButton">Previews</button>
        <div className="row">
          {/* To The Point */}
          <div id="back" className="logo col-sm">
            <a href="https://skytopstrategies.com/program">
              <div className="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="point-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png"
                      alt=""
                    />
                    <hr style={{ marginBottom: "-6px" }}></hr>
                    <div className="programContent">
                      <b>Money Talks</b>
                      <br />
                      <i>Investing in Social Change</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      Ethan Powell, Founder & CEO, Impact Shares <br />
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{ width:"180px", paddingTop: "5px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/impactShares.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* At The Table */}
          <div id="back" className="logo col-sm">
            <a href="https://skytopstrategies.com/program">
              <div className="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="programContent">
                      <b>ETF ESG FYI</b>
                      <br />
                      <i>For the Responsible Investor</i>
                      <br />
                      <br />
                      Hosted By
                      <br />
                      Bill Davis, Stance Capital
                      <br />
                      Terry Norman, Blue Tractor
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{width:"180px", paddingTop: "5px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/blueTractor.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* In The Studio */}
          <div id="back" className="logo col-sm">
            <a href="https://skytopstrategies.com/program">
              <div className="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="studio-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"
                      alt=""
                    />
                    <div className="programContent">
                      <b>ESG Score Card</b>
                      <br />
                      <i>Aligning Company and Investor Values</i>
                      <br />
                      <br />
                      Guest
                      <br />
                      Lauren Smart, CCO,
                      <br />
                      S&P Global Sustainable1
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{width:"180px", border: "1px solid"}}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/spGlobal.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestProg;
