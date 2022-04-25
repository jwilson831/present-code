import ATTPart from "./ATTPart";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

const ATTAuthor = (props) => {
  console.log(props);
  const {
    auth_img_bio,
    program_logo,
    name,
    affiliation1,
    affiliation2,
    // category,
    title,
    sub_title,
    title2,
    sub_title2,
    author_image,
    about_name,
    about_link,
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
    // part_title6,
    // part_number6,
    // part_sub_title6,
    // part_logo6,
    // part_title7,
    // part_number7,
    // part_sub_title7,
    // part_logo7,
    construction_img,
    contributing_author,
  } = props.author;
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
            {name === "Coming Soon" ? (
              <img alt="" className="skyLogoAuth" src={program_logo} />
            ) : (
              <img alt="" className="programTableLogoAuth" src={program_logo} />
            )}
          </h3>
          <h4>Presents</h4>
          <br />
          <h3>
            <p style={{ whiteSpace: "nowrap" }}>{name}</p>
            {affiliation1 ? (
              <h5>
                <p style={{transform: "translate(0px, -14px)"}}>
                  {affiliation1} {affiliation2}
                </p>
              </h5>
            ) : (
              ""
            )}
            <h4>Along with Special Guests</h4>
            <br />
            <h3>{title}</h3>
            <h4>{sub_title}</h4>
            <br />
            <br />
          </h3>
        </div>
      </div>
      <h5 className="viewStream">View Streamed or On Demand Worldwide</h5>
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
      <img className="authorMain" alt="" src={author_image} />
      <br />
      <br />

      <h4>{auth_img_bio}</h4>

      {contributing_author ? (
        <Link to={`/authors/${contributing_author}`}>
          <button onClick={() => scrollToTop()} className="previewButtonAuth">
            About {about_name}
          </button>
        </Link>
      ) : (
        <a href={about_link}>
          {" "}
          <button onClick={() => scrollToTop()} className="previewButtonAuth">
            About {about_name}
          </button>
        </a>
      )}
      <br />
      <br />
      <hr className="blueLine" />
      <br />
      <ATTPart
        title={part_title}
        number={part_number}
        sub_title={part_sub_title}
        logo={part_logo}
        build={construction_img}
      />
      {!part_title2 ? (
        ""
      ) : (
        <ATTPart
          title={part_title2}
          number={part_number2}
          sub_title={part_sub_title2}
          logo={part_logo2}
          build={construction_img}
        />
      )}

      {!part_title3 ? (
        ""
      ) : (
        <ATTPart
          title={part_title3}
          number={part_number3}
          sub_title={part_sub_title3}
          logo={part_logo3}
          build={construction_img}
        />
      )}

      {!part_title4 ? (
        ""
      ) : (
        <ATTPart
          title={part_title4}
          number={part_number4}
          sub_title={part_sub_title4}
          logo={part_logo4}
          build={construction_img}
        />
      )}

      {!part_title5 ? (
        ""
      ) : (
        <ATTPart
          title={part_title5}
          number={part_number5}
          sub_title={part_sub_title5}
          logo={part_logo5}
          build={construction_img}
        />
      )}

      {/* <ATTPart
        title={part_title6}
        number={part_number6}
        sub_title={part_sub_title6}
        logo={part_logo6}
        build={construction_img}
      />
      <ATTPart
        title={part_title7}
        number={part_number7}
        sub_title={part_sub_title7}
        logo={part_logo7}
        build={construction_img}
      /> */}
    </>
  );
};

export default ATTAuthor;
