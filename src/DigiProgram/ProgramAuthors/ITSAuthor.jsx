import ITSPart from "./ITSPart";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

const ITSAuthor = (props) => {
  const {
    auth_img_bio,
    program_logo,
    name,
    category,
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
    // construction_img,
    contributing_author,
  } = props.author;
  return (
    <>
      <br />
      <div className="stuImgContainer">
        <img
          className="ttpBack"
          alt="studio"
          src="https://skytop-strategies.com/wp-content/uploads/2022/03/blank-layout.jpg"
        />
        <br />
        <br />
        <br />
        <div className="textContainerAuth">
          <br />
          <br />
          <br />
          <img alt="" style={{ width: "376px" }} src={program_logo} />
          <br />
          <br />
          <h3>
            Christopher P. Skroupa <br />
            Editor-in-Chief, Skytop <br />
          </h3>
          <h5>
            <i>Presents</i>
          </h5>
          <h4>{name}</h4>
          <br />
          <h5>
            <i>{sub_title2}</i>
          </h5>

          <h3>{title}</h3>
          <h4>{sub_title}</h4>
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
      <img className="authorImgBig" alt="" src={author_image} />
      <br />
      <br />

      {contributing_author ? (
        <Link to={`/authors/${contributing_author}`}>
          <button onClick={() => scrollToTop()} className="previewButtonAuth">
            About {about_name}
          </button>
        </Link>
      ) : (
        <a href={about_link}>
          <button onClick={() => scrollToTop()} className="previewButtonAuth">
            About {about_name}
          </button>
        </a>
      )}
      <br />
      <br />
      <hr className="blueLine" />
      <br />

      <ITSPart
        title={part_title}
        number={part_number}
        sub_title={part_sub_title}
        logo={part_logo}
      />

      <ITSPart
        title={part_title2}
        number={part_number2}
        sub_title={part_sub_title2}
        logo={part_logo2}
      />

      <ITSPart
        title={part_title3}
        number={part_number3}
        sub_title={part_sub_title3}
        logo={part_logo3}
      />

      <ITSPart
        title={part_title4}
        number={part_number4}
        sub_title={part_sub_title4}
        logo={part_logo4}
      />

      <ITSPart
        title={part_title5}
        number={part_number5}
        sub_title={part_sub_title5}
        logo={part_logo5}
      />

    </>
  );
};

export default ITSAuthor;
