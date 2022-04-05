import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

const PointPart = (props) => {
  const { guest, title, number, sub_title, logo, styles, name } = props;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div id="back" className="logo col-sm">
          <Link to="/digi-prog">
            <div onClick={() => scrollToTop()} id="cardAuthPoint">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="point-top-auth"
                    src="https://skytop-strategies.com/wp-content/uploads/2022/04/point-copy.png"
                    alt=""
                  />
                  <div className="program-blurb-auth">
                    <b>
                      <h3> {title}</h3>
                      <i>{number}</i>
                    </b>
                    <br />
                    <br />
                    <h4>
                      Jeremy Fielding, Chief Executive Officer, Kekst CNC
                      <br />
                      {guest}
                    </h4>
                    <br />
                    <h4>
                      <i>Share What’s Keeping Boards Up at Night</i>
                    </h4>
                    <hr />
                    Brought to You by
                    <br />
                    <br />
                    <img alt="" className={styles} src={logo} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PointPart;
