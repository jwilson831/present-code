import React from "react";
import ViewAllBtn from "../../ViewAll/ViewAllBtn";
import "../styles.css";
import SideConference from "./SideConference";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../util/scrollToTop";

function SideContainer(props) {
  const renderConferences = (conferences) => {
    return conferences.map((conference) => (
      <SideConference
        id={conference.id}
        title={conference.title.rendered}
        tagline={conference.acf.tagline}
        imgUrl={
          conference.acf.location_image
            ? conference.acf.location_image
            : conference._embedded["wp:featuredmedia"][0].source_url
        }
        city={conference.acf.city}
        date={conference.acf.date}
        custom_date={conference.acf.custom_date}
      />
    ));
  };
  return (
    <div className="conference-container">
      <div className="conference-spotlight">
        <h3 className="section-title">Conference Spotlight</h3>
        <h6>ESG Impact</h6>
        <Link to="/conferences/1218">
          <img
            className="card-img side-img"
            src={
              "https://skytop-strategies.com/wp-content/uploads/2022/07/unnamed-7.png"
            }
            alt="spotlight conference"
          ></img>
        </Link>
      </div>
      <p className="section-title">
        {props.article ? "Related Conferences" : "Upcoming Conferences"}
      </p>
      <div className="side-conference-overflow">
        {props.conferences ? renderConferences(props.conferences) : ""}
      </div>
      {/* <div className="text-right"> */}
      <div style={{ marginLeft: "10px", marginBottom: "20px" }}>
        <ViewAllBtn linkTo={"conference"} />
      </div>
    </div>
  );
}

export default SideContainer;
