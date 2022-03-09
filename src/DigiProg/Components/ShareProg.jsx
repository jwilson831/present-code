const ShareProg = (props) => {
  const { title, img } = props;
  return (
    <div id="border">
      <a href="https://skytopstrategies.com/activism">
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
                      <b>Board GPS: Navigating the Road Ahead</b>
                      <br />
                      <i>Top of Mind Concerns for Board Directors</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      Jeremy Fielding, CEO, Kekst CNC
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{ paddingTop: "5px", width: "100px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/kekst.jpg"
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
                      <b>Shareholder Activism Report</b>
                      <br />
                      <i>For Public Company Boards and Management </i>
                      <br />
                      <br />
                      Hosted by
                      <br />
                      Dan Zacchei
                      <br />
                      Kai Liekefett
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

export default ShareProg;
