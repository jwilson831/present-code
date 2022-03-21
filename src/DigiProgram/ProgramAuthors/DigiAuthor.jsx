import { Link } from "react-router-dom";

const DigiAuthor = (props) => {
  console.log(props.author);
  const {
    program_logo,
    name,
    title,
    sub_title,
    title2,
    sub_title2,
    author_image,
    about_name,
    part_title,
    part_number,
    part_sub_title,
    part_logo,
    part_title2,
    part_number2,
    part_sub_title2,
    part_logo2,
    part_title3,
    part_number3,
    part_sub_title3,
    part_logo3,
    part_title4,
    part_number4,
    part_sub_title4,
    part_logo4,
    part_title5,
    part_number5,
    part_sub_title5,
    part_logo5,
    part_title6,
    part_number6,
    part_sub_title6,
    part_logo6,
    part_title7,
    part_number7,
    part_sub_title7,
    part_logo7,
    construction_img,
    contributing_author
  } = props.author;
  const id = contributing_author[0];
  return (
    <>
      <br />
      <div className="stuImgContainer">
        <img
          className="stuImg"
          alt="studio"
          src="https://skytop-strategies.com/wp-content/uploads/2022/03/blank-layout.jpg"
        />
        <br />
        <br />
        <br />
        <div className="textContainerAuth">
          <h3>
            <br />
            <br />
            <br />
            <img
              alt=""
              id="programTableLogoAuth"
              src={program_logo}
            />
          </h3>
          <h4>Presents</h4>

          <br />
          <h3>
            <p style={{ whiteSpace: "nowrap" }}>
              {/* Ambassador Cameron Munter (retired) */}
              {name}
            </p>
            <h4>Along with Special Guests</h4>
            <br />
            <h2>{title}</h2>
            <h4>{sub_title}</h4>
            <br />
            <h5>View Streamed or On Demand Worldwide</h5>
          </h3>
        </div>
      </div>
      <br />
      <button className="previewButtonAuth">
        Register Here to Join Our Program
      </button>
      <br />
      <br />
      <hr className="blueLine" />
      <br />
      <br />
      <h2>{title2}</h2>
      <h3>{sub_title2}</h3>
      <br />
      <img
        id="authorMain"
        alt=""
        src={author_image}
      />
      <br />
      <br />
      <h4>
        Hosted by <br /> {name}
      </h4>
      <h5>Along with Special Guests</h5>
      <br />

      <a href={`/authors/${id}`}>
        {/* <Link to="/authors/563"> */}
        <button className="previewButtonAuth">About {about_name}</button>
        {/* </Link> */}
      </a>

      <br />
      <br />
      <hr className="blueLine" />
      <br />
      <div className="container">
        <br />
        <div className="row">
          {/* At The Table */}
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
                        <h3>
                          {part_title}
                        </h3>
                        <i>{part_number}</i>
                      </b>
                      <br />
                      <br />
                      <i>
                        {part_sub_title}
                      </i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <div className="row">
          {/* At The Table */}
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
                        <h3>
                          {part_title2}
                        </h3>
                        <i>{part_number2}</i>
                      </b>
                      <br />
                      <br />
                      <i>
                      {part_sub_title2}
                      </i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
                      src="http://skytop-strategies.com/wp-content/uploads/2022/03/table.png"
                      alt=""
                    />
                    <div className="program-blurb-auth">
                      <b>
                        <h3>
                          {part_title3}
                        </h3>
                        <i>{part_number3}</i>
                      </b>
                      <br />
                      <br />
                      <i>
                        {part_sub_title3}
                      </i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
                        <h3>{part_title4}</h3>
                        <i>{part_number4}</i>
                      </b>
                      <br />
                      <br />
                      <i>
                        {part_sub_title4}
                      </i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
                        <h3>
                          {part_title5}
                        </h3>
                        <i>{part_number5}</i>
                      </b>
                      <br />
                      <br />
                      <i>{part_sub_title5}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
                        <img
                          alt=""
                          className="constructionLogo"
                          src={construction_img}
                        />
                        <br />
                        <br />
                        <br />
                        <i>{part_number6}</i>
                      </b>
                      <br />
                      <br />
                      <i>{part_sub_title6}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
                        {part_title6 === "Under Construction" ? (<img
                          alt=""
                          className="constructionLogo"
                          src={construction_img}
                        />) : {part_title6} }
                        <br />
                        <br />
                        <br />
                        <i>{part_number7}</i>
                      </b>
                      <br />
                      <br />
                      <i>{part_sub_title7}</i>
                      <br />
                      <hr />
                      Brought to You by
                      <br />
                      <br />
                      <img
                        alt=""
                        className="yourLogoAuth"
                        src={part_logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigiAuthor;
