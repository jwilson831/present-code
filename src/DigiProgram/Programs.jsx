import { Link } from 'react-router-dom';
import { scrollToTop } from '../util/scrollToTop';

const Programs = (props) => {
const {link, ttpStyle, attStyle, itsStyle} = props;
  const {
    title,
    image,
    ttp_author,
    ttp_title,
    ttp_sub,
    ttp_pre_name,
    ttp_name,
    ttp_logo,
    att_author,
    att_title,
    att_sub,
    att_pre_name,
    att_name,
    att_logo,
    its_author,
    its_title,
    its_sub,
    its_pre_name,
    its_name,
    its_logo,
  } = props.data;
  return (
    <div id="border">
      <Link to={link}>
      <button onClick={() => scrollToTop()} className="categoryButton">{title}</button>
      </Link>
      <img alt="boxSetImg" className="boxSetImg" src={image} />

      <div className="container">
        <br />
        <button className="previewButton">Previews</button>
        <div className="row">
          {/* To The Point */}
          <div id="back" className="logo col-sm">
          <Link to={`/program-authors/${ttp_author}`}>
              <div onClick={() => scrollToTop()} id="progCard">
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
            </Link>
          </div>
          {/* At The Table */}
          <div id="back" className="logo col-sm">
          <Link to={`/program-authors/${att_author}`}>
              <div onClick={() => scrollToTop()} id="progCard">
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
            </Link>
          </div>
          {/* In The Studio */}
          <div id="back" className="logo col-sm">
          <Link to={`/program-authors/${its_author}`}>
              <div onClick={() => scrollToTop()} id="progCard">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
