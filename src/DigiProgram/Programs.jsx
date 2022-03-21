import { Link } from 'react-router-dom';

const Programs = (props) => {
const {link, programAuthor2, ttpStyle, attStyle, itsStyle} = props;
  const {
    title,
    image,
    ttp_title,
    ttp_sub,
    ttp_pre_name,
    ttp_name,
    ttp_logo,
    att_title,
    att_sub,
    att_pre_name,
    att_name,
    att_logo,
    its_title,
    its_sub,
    its_pre_name,
    its_name,
    its_logo,
  } = props.data;
  return (
    <div id="border">
      {/* <Link to={link}> */}
      <a href={link}>
      <button className="categoryButton">{title}</button>
      </a>
      {/* </Link> */}
      <img alt="boxSetImg" className="boxSetImg" src={image} />

      <div className="container">
        <br />
        <button className="previewButton">Previews</button>
        <div className="row">
          {/* To The Point */}
          <div id="back" className="logo col-sm">
            <a href="https://skytopstrategies.com/program">
              <div id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="point-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png"
                      alt=""
                    />
                    <hr style={{ marginBottom: "-6px" }}></hr>
                    <div className="program-blurb">
                      <h4>{ttp_title}</h4>
                      <i>{ttp_sub}</i>
                      <br />
                      <br />
                      {ttp_pre_name}
                      <br />
                      <i>{ttp_name}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className={ttpStyle}
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
          {/* <Link to={link2}> */}
          <a href={`/digi-author/${programAuthor2}`}>
              <div id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="table-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"
                      alt=""
                    />
                    <div className="program-blurb">
                    <h4>{att_title}</h4>
                      <i>{att_sub}</i>
                      <br />
                      <br />
                      {att_pre_name}
                      <br />
                      <i>{att_name}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className={attStyle}
                        src={att_logo}
                        />
                    </div>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </a>
          </div>
          {/* In The Studio */}
          <div id="back" className="logo col-sm">
            <a href="https://skytopstrategies.com/program">
              <div id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="studio-top"
                      src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"
                      alt=""
                    />
                    <div className="program-blurb">
                    <h4>{its_title}</h4>
                      <i>{its_sub}</i>
                      <br />
                      <br />
                      {its_pre_name}
                      <br />
                      <i>{its_name}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className={itsStyle}
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
