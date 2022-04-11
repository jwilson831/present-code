import { Link } from "react-router-dom";
import { scrollToTop } from "../util/scrollToTop";

const Categories = () => {
  return (
    <div id="border">
      <h1 className="textShadow">Gender Bias</h1>
      <img
        alt="boxSetImg"
        className="boxSetImg"
        src="https://skytop-strategies.com/wp-content/uploads/2022/04/w5.jpg"
      />

      <div className="container">
        <br />
        <div className="row">
          {/* Article */}
          <div className="logo col-sm">
            <Link to={`/articles/2560`}>
              <div onClick={() => scrollToTop()} id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      style={{ transform: "translate(0px, -32px)" }}
                      className="program-blurb"
                    >
                      <h4>
                        Women in China and Mexico Are Disappearing:
                        <br />
                        <i>Stop This Global Trend</i>
                      </h4>
                      <i>
                        By Angelita Baeyens and Rachel Margolis, The Robert F.
                        Kennedy Center for Human Rights, and Skytop Contributors
                      </i>
                      <br />
                      <br />
                      <img
                        alt=""
                        className="articleImg"
                        src="https://skytop-strategies.com/wp-content/uploads/2022/04/231a0469-746a-4fa4-b8bf-746b69c6f242.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Author */}
          <div id="back" className="logo col-sm">
            <Link to={`/program-authors/`}>
              <div onClick={() => scrollToTop()} id="progCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <strong>
                      <h4>Author</h4>
                      <h5>
                        Title <br /> Affiliation
                      </h5>
                    </strong>
                    <br/>
                    <br/>
                    <img
                      alt=""
                      className="rfkAuthor"
                      src="https://skytop-strategies.com/wp-content/uploads/2022/04/rightsLogo-3367542517-1649355060719.webp"
                    />
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

export default Categories;
