const WashProg = (props) => {
  const { title, img } = props;
  return (
    <div id="border">
      <a href="https://skytopstrategies.com/washington-world">
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
                      <b>ESG Evolution or Revolution </b>
                      <br />
                      <i>Growing Political Risks and Regional Instability</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>Insert Name</i>
                      <br />
                      <hr />
                      Brought to You By
                      <br />
                      <img
                        alt=""
                        style={{width:"200px", paddingTop: "5px" }}
                        src="https://skytop-strategies.com/wp-content/uploads/2022/03/controlRisks.png"
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
                      <b>Unpacking World Affairs</b>
                      <br />
                      <i>For Global Leaders</i>
                      <br />
                      <br />
                      Hosted by Ambassador Cameron Munter(retired)
                      <br />
                      Along with Guests
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
                      <b>Women Disappearing in Mexico and China</b>
                      <br />
                      <i>A Briefing for Global Companies</i>
                      <br />
                      <br />
                      Guest Appearance By
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

export default WashProg;
