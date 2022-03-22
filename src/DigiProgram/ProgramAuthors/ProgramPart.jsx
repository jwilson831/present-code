const ProgramPart = (props) => {
  const { title, number, sub_title, logo, build } = props;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div id="back" className="logo col-sm">
          <a href="https://skytopstrategies.com/program">
            <div id="cardAuth">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="table-top-auth"
                    src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                    alt=""
                  />
                  <div className="program-blurb-auth">
                    <b>
                      {title === "Under Construction" ? (
                        <>
                          <img
                            alt=""
                            className="constructionLogo"
                            src={build}
                          />
                          <br />
                          <br />
                          <br />
                        </>
                      ) : (
                        <h3> {title}</h3>
                      )}

                      <i>{number}</i>
                    </b>
                    <br />
                    <br />
                    <i>{sub_title}</i>
                    <br />
                    <hr />
                    Brought to You by
                    <br />
                    <br />
                    <img alt="" className="yourLogoAuth" src={logo} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramPart;
