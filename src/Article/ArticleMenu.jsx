import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideContainer from "../PrimaryMenu/components/SideContainer";
import PageLoader from "../util/Loader/Loader";
import NewsFeed from "../util/News/NewsFeed";
import DLC from "./DLC/DLC";
import DLCDon from "./DLC/DLCDon";
import axios from "axios";

function ArticleMenu(props) {
  const [category, setCategory] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const { id } = useParams();

  const [token, setToken] = useState(null);
  const generateToken = async () => {
    const {
      data: { token },
    } = await axios.post(
      `https://skytop-strategies.com/wp-json/jwt-auth/v1/token?username=${process.env.REACT_APP_WP_USERNAME}&password=${process.env.REACT_APP_WP_PASSWORD}`
    );
    setToken(token);
  };

  useEffect(() => {
    const selectCurrentArticle = (data) => {
      if (Array.isArray(data)) {
        return data.find((article) => article.id === parseInt(id));
      } else {
        return data;
      }
    };
    setCurrentArticle(selectCurrentArticle(props.articles));
    setCategory(selectCurrentArticle(props.articles).acf.category);
    setLoaded(true);
    generateToken();
  }, [id, props.articles]);
  return (
    <div className="text-left pl-3">
      {loaded ? (
        <>
          <SideContainer
            conferences={props.filterByCategory(props.conferences, category)}
            article={true}
          />
          {currentArticle.acf.dlc &&
            currentArticle.acf.dlc.dlc_title !== "" && (
              <DLC
                title={currentArticle.acf.dlc.dlc_title}
                title2={currentArticle.acf.dlc.dlc_title2}
                title3={currentArticle.acf.dlc.dlc_title3}
                image={currentArticle.acf.dlc.dlc_image}
                file={currentArticle.acf.dlc.dlc_file}
                registration={currentArticle.acf.dlc.registration_required}
              />
            )}
          {currentArticle.acf.author[0].ID === 3294 ? (
            <>
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Satellite-Based E-Commerce for Franchising to the Developing World"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Solar Power Satellites (SPS) for Energy Sustainability"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="The Bytes that Feed a Resource-Starved, Hungry Planet"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Climate Change and Competitive Shipping Transport"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Atoms for Africa: A Continental Cyber Attack Force Through
                    Nuclear Development"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Smart City Development and Predictive Policing Export"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Innovative Acquisition, Battery Development and the Lithium Lock"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="The China Syndrome Shaping the Military-Commercial Fusion"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Russia Cooperation Agreement and A New World Order"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="Closing the Innovation Gap Through Key Tech Transfer Alliances"
                registration={currentArticle.acf.dlc.registration_required}
              />
              <DLCDon
                token={token}
                title={currentArticle.acf.dlc.dlc_title}
                title2="Research Report"
                title3="China-Japan Strategy: Mystery Investment Funds"
                registration={currentArticle.acf.dlc.registration_required}
              />
            </>
          ) : (
            ""
          )}
          <div className="mt-5">
            <NewsFeed />
          </div>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
}

export default ArticleMenu;
