import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

const ITSPart = (props) => {
  const { title, number, sub_title, logo, build } = props;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div id="back" className="logo col-sm">
          <Link to="/digi-prog">
            <div onClick={() => scrollToTop()} className="itsCard">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="stu-top-auth"
                    src="http://skytop-strategies.com/wp-content/uploads/2022/04/studio-copy.png"
                    alt=""
                  />
                  <div className="program-blurb-auth">
                    <b>
                      <h3> {title}</h3>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITSPart;
