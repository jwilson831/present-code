import { Link } from "react-router-dom";
import { scrollToTop } from "../util/scrollToTop";

const Categories = (props) => {
  const {
    category,
    categoryImage,
    article,
    artTitle,
    artByLine,
    artImage,
    name,
    title,
    affiliation,
    image,
    style,
    link,
  } = props;
  // console.log(article);
  return (
    <div id="border">
      <h1 className="textShadow">{category}</h1>

      <div className="categoryImg">
        <img alt="" className="boxSetImg" src={categoryImage} />
        {/* <img
          alt=""
          style={{ position: "relative", width: "95%", borderRadius: "10px" }}
          id="img-top"
          src="https://skytop-strategies.com/wp-content/uploads/2022/04/w3-1.jpg"
        /> */}
      </div>

      <div className="container">
        <br />
        <div className="row">
          {/* Article */}
          <div className="logo col-sm">
            <Link to={`/articles/${article}`}>
              <div onClick={() => scrollToTop()} className="authorCard">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      style={{ transform: "translate(0px, -32px)" }}
                      className="program-blurb"
                    >
                      <h4>{artTitle}</h4>
                      <i>{artByLine}</i>
                      <br />
                      <br />
                      <img alt="" className={style} src={artImage} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Author */}
          <div id="back" className="logo col-sm">
            <a href={link}>
              <div onClick={() => scrollToTop()} className="authorCard">
                <div className="flip-card-inner">
                  <div id="cardColor" className="flip-card-front">
                    <div style={{ transform: "translate(0px, -13px)" }}>
                      <strong>
                        <h3>{name}</h3>
                        <h5>
                          {title}
                          <br /> {affiliation}
                        </h5>
                      </strong>
                    </div>
                    <img alt="" className="rfkAuthor" src={image} />
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

export default Categories;
