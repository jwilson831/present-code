import "./styles.css";
import Categories from "./Categories";
import axios from "axios";
import { useEffect, useState } from "react";
import PageLoader from "../util/Loader/Loader";

const RFK = () => {
  const [rfk, setRfk] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rfk = await axios(
          "https://skytop-strategies.com/wp-json/wp/v2/rfks"
        );
        setRfk(rfk.data);
        {
          console.log(rfk.data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoaded(true);
    };
    fetchData();
  }, []);
  const race = rfk[0];
  const activism = rfk[1];
  const prison = rfk[2];
  const gender = rfk[3];

  return (
    <>
      {loaded ? (
        <div>
          <h1 className="textShadow">
            <b>Robert F. Kennedy</b>
          </h1>
          <img
            id="rfkMain"
            alt=""
            src="https://skytop-strategies.com/wp-content/uploads/2022/04/rfk-indiana.webp"
          />
          <br />
          <br />
          <h3>
            <i>
              "Few will have the greatness to bend history itself, but each of
              us can work to change a small portion of events..."
            </i>
          </h3>
          <hr className="blueLine" />
          <a href="https://rfkhumanrights.org/">
            <img
              alt=""
              style={{ borderRadius: "10px" }}
              src="https://skytop-strategies.com/wp-content/uploads/2022/04/rightsLogo-3367542517-1649355060719.webp"
            />
          <br/>
          <button style={{fontSize: "40px"}} class="previewButtonAuth">Donate Now</button>
          </a>
          <hr className="blueLine" />

          <Categories
            category="Gender Bias"
            categoryImage="https://skytop-strategies.com/wp-content/uploads/2022/04/w5.jpg"
            article={gender.acf.article[0]}
            artTitle={gender.acf.article_title}
            artByLine={gender.acf.article_by_line}
            artImage={gender.acf.article_image}
            name={gender.acf.name}
            title={gender.acf.title}
            affiliation={gender.acf.affiliation}
            image={gender.acf.image}
            style="articleImg"
            link="https://rfkhumanrights.org/who-we-are/our-people/angelita-baeyens"
          />

          <Categories
            category="Mass Incarceration"
            categoryImage="https://skytop-strategies.com/wp-content/uploads/2022/04/20170208_065e.jpg"
            article={prison.acf.article[0]}
            artTitle={prison.acf.article_title}
            artByLine={prison.acf.article_by_line}
            artImage={prison.acf.article_image}
            name={prison.acf.name}
            title={prison.acf.title}
            affiliation={prison.acf.affiliation}
            image={prison.acf.image}
            style="articleImg"
            link="https://rfkhumanrights.org/who-we-are/our-people/sancia-dalley"
          />

          <Categories
            category="Civil Space & Activism"
            categoryImage="https://skytop-strategies.com/wp-content/uploads/2022/04/220314162419-protester-full-169-3621671246-1650653791201.jpeg"
            article={activism.acf.article[0]}
            artTitle={activism.acf.article_title}
            artByLine={activism.acf.article_by_line}
            artImage={activism.acf.article_image}
            name={activism.acf.name}
            title={activism.acf.title}
            affiliation={activism.acf.affiliation}
            image={activism.acf.image}
            style="constructionImg"
            link="https://rfkhumanrights.org/"
          />

          <Categories
            category="Racial Injustice"
            categoryImage="https://skytop-strategies.com/wp-content/uploads/2022/04/wide_16x9.jpg"
            article={race.acf.article[0]}
            artTitle={race.acf.article_title}
            artByLine={race.acf.article_by_line}
            artImage={race.acf.article_image}
            name={race.acf.name}
            title={race.acf.title}
            affiliation={race.acf.affiliation}
            image={race.acf.image}
            style="constructionImg"
            link="https://rfkhumanrights.org/"
          />
        </div>
      ) : (
        <div className="loader">
          <PageLoader />
        </div>
      )}
    </>
  );
};

export default RFK;
