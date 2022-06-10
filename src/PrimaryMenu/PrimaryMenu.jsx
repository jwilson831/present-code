import React, { useState, useEffect } from "react";
import SideContainer from "./components/SideContainer";
import NewsFeed from "../util/News/NewsFeed";
import Editorial from "../util/Editorial/Editorial";
import Calendar from "../util/Calendar/Calendar";
import { Link } from "react-router-dom";
import { scrollToTop } from "../util/scrollToTop";
import { Markup } from "interweave";

function PrimaryMenu(props) {
  // eslint-disable-next-line
  const [currentWindow, setCurrentWindow] = useState(window.location.pathname);
  useEffect(() => {
    setCurrentWindow(window.location.pathname);
  }, []);
  return (
    <>
      <div className="side-menu-container text-left">
        <SideContainer conferences={props.conferences} />
        <Editorial
              id={props.editorial.id}
              category={"Editor's Note"}
              // title={"Editor’s Note #7: The Death of Discourse"}
              title={"Editor’s Note #7:"}
              title2={" The Death of Discourse"}
              img={props.editorial.acf.image}
              author={props.editorial.acf.author}
              excerpt={props.editorial.excerpt.rendered}
              link={"/editorial"}
              comments={props.comments}
              email={"cskroupa@skytopstrategies.com"}
            />
        <a href={props.ad_link} target="_blank" rel="noreferrer">
          <img
            style={{ boxShadow: "none" }}
            className="menu-advert"
            alt="ad"
            src={props.ad}
          ></img>
        </a>
        <br />

        <div className="calendarStyle" >
            <br/>
        <Calendar calendar={props.calendar}/>
    </div>

        {/* {
        window.location.pathname === "/" ? (
          <div>
            <a
              href={"https://www.spglobal.com/en/"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{boxShadow: "none" }}
                className="menu-advert"
                alt="ad"
                src={
                  "https://skytop-strategies.com/wp-content/uploads/2022/06/SP-S1-Collage-Resize-970x250-02.jpg"
                }
              ></img>
            </a>


            <Editorial
              id={props.publisher.id}
              category={"Publisher's Note"}
              title={
                "Publisher’s Note #6: Hostile Nation States, Terrorists and Cyber Criminals"
              }
              img={props.publisher.acf.image}
              author={props.publisher.acf.author}
              excerpt={props.publisher.excerpt.rendered}
              link={"/publisher"}
              comments={props.comments}
              email={"asullivan@skytopstrategies.com"}
            />
          </div>
        ) : (
          ""
        )} */}
        
        {/* <hr style={{ marginTop: "85px" }} /> */}
        <br/>
        <NewsFeed />
      </div>
    </>
  );
}

export default PrimaryMenu;
