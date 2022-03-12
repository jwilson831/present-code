const Programs = (data) => {
  const {
    title,
    image,
    ttp_title,
    ttp_sub,
    ttp_name,
    ttp_logo,
    att_title,
    att_sub,
    att_name,
    att_logo,
    its_title,
    its_sub,
    its_name,
    its_logo,
  } = data.data;
  // console.log(image)

  return (
    <div id="border">
      <button className="categoryButton">{title}</button>

      <img alt="boxSetImg" className="boxSetImg" src={image} />

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
                    <div className="program-blurb">
                      <b>{ttp_title}</b>
                      <br />
                      <i>{ttp_sub}</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>{ttp_name}</i>
                      <br />
                      <hr />
                      Brought to You By
                      <br />
                      <br />
                      <img
                        alt=""
                        // style={{ width: "200px", paddingTop: "5px" }}
                        // style={{ transform: "translate(-50%, -50%)", position: "absolute" }}
                        src={ttp_logo}
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
                    <div className="program-blurb">
                    <b>{att_title}</b>
                      <br />
                      <i>{att_sub}</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>{att_name}</i>
                      <br />
                      <hr />
                      Brought to You By
                      <br />
                      <br />
                      <img
                        alt=""
                        // style={{ width: "200px", paddingTop: "5px" }}
                        // style={{ transform: "translate(-50%, -50%)", position: "absolute" }}
                        src={att_logo}
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
                    <div className="program-blurb">
                    <b>{its_title}</b>
                      <br />
                      <i>{its_sub}</i>
                      <br />
                      <br />
                      Featuring
                      <br />
                      <i>{its_name}</i>
                      <br />
                      <hr />
                      Brought to You By
                      <br />
                      <br />
                      <img
                        alt=""
                        // style={{ width: "200px", paddingTop: "5px" }}
                        // style={{ transform: "translate(-50%, -50%)", position: "absolute" }}
                        src={its_logo}
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

export default Programs;
