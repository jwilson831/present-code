import ProgramPart from "./ProgramPart";
import PointPart from "./PointPart";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

const TTPAuthor = (props) => {
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
    part_title6,
    part_number6,
    part_sub_title6,
    part_logo6,
    part_title7,
    part_number7,
    part_sub_title7,
    part_logo7,
    construction_img,
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
          <img alt="" className="bigTTP" src={program_logo} />
          <h2>
            {title}
            {sub_title}
          </h2>
          <br />
          <h3>
            Christopher P. Skroupa <br />
            Editor-in-Chief, Skytop <br />
            <h5>
              <i>Presents</i>
            </h5>
          </h3>
          <h4>
            {" "}
            <br />
            Jeremy Fielding, CEO, Kekst CNC <br />
            <h5>
              <i>along with</i>
            </h5>
            Marann Bruce, Board Director and Former CEO
            <br />
            Michael Marquardt, Board Director of Global Companies
            <br />
            Cynthia Plouché, Board Director in the Financial Sector
          </h4>
        </div>
      </div>
      {/* <b>View Streamed or On Demand Worldwide</b><br/><br/> */}
      <h5 className="viewStream">View Streamed or On Demand Worldwide</h5>
      <button className="previewButtonAuth">
        Register Here to Join Our Program
      </button>
      <br />
      <br />
      <hr className="blueLine" />
      <br />
      <h3>A Three Part Series</h3>
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
      <PointPart
        title={part_title}
        number={part_number}
        sub_title={part_sub_title}
        logo={part_logo}
        styles="yourLogoAuth"
        guest="Maryann Bruce, Board Director and Former CEO"
      />

      <PointPart
        title={part_title2}
        number={part_number2}
        sub_title={part_sub_title2}
        logo={part_logo2}
        styles="kekstLogoAuth"
        guest="Michael Marquardt, Director of Global Companies"
      />

      <PointPart
        title={part_title3}
        number={part_number3}
        sub_title={part_sub_title3}
        logo={part_logo3}
        styles="kekstLogoAuth"
        guest="Cynthia Plouché, Board Director in the Financial Sector"
      />
      {/* <ProgramPart
        title={part_title}
        number={part_number}
        sub_title={part_sub_title}
        logo={part_logo}
        build={construction_img}
      />
      <ProgramPart
        title={part_title2}
        number={part_number2}
        sub_title={part_sub_title2}
        logo={part_logo2}
        build={construction_img}
      />
      <ProgramPart
        title={part_title3}
        number={part_number3}
        sub_title={part_sub_title3}
        logo={part_logo3}
        build={construction_img}
      />
      <ProgramPart
        title={part_title4}
        number={part_number4}
        sub_title={part_sub_title4}
        logo={part_logo4}
        build={construction_img}
      />
      <ProgramPart
        title={part_title5}
        number={part_number5}
        sub_title={part_sub_title5}
        logo={part_logo5}
        build={construction_img}
      />
      <ProgramPart
        title={part_title6}
        number={part_number6}
        sub_title={part_sub_title6}
        logo={part_logo6}
        build={construction_img}
      />
      <ProgramPart
        title={part_title7}
        number={part_number7}
        sub_title={part_sub_title7}
        logo={part_logo7}
        build={construction_img}
      /> */}
    </>
  );
};

export default TTPAuthor;
