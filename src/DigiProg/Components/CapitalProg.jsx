const CapitalProg = (props) => {
  const { title, img } = props;
  return (
    <div id="border">
      <a href="https://skytopstrategies.com/capital-markets">
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
              <div id="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="point-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png"
                      alt=""
                    />
                    <hr style={{ marginBottom: "-6px" }}></hr>
                    <div className="programContent">
                      <b>Cleary Memo 2022</b>
                      <br />
                      <i>
                        Strategic Priorities for Boards, Management & Investors
                      </i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>Insert Name</i>
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{ marginTop: "5px", border: "1px solid black", width: "150px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/celary.jpg"
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
              <div id="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="programContent">
                      <b>Small Cap Activism</b>
                      <br />
                      <i>Outlook for 2022-2023</i>
                      <br />
                      <br />
                      Hosted By
                      <br />
                      John Grau, Founder & CEO, InvestorCom
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{ paddingTop: "5px", width: "150px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/InvestorCom.jpg"
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
              <div id="card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="studio-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"
                      alt=""
                    />
                    <div className="programContent">
                      <b>Under Construction</b>
                      <br />
                      <i>Coming Soon</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>Insert Name</i>
                      <hr />
                      Brought to You By
                      <br />
                      LOGO
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

export default CapitalProg;
