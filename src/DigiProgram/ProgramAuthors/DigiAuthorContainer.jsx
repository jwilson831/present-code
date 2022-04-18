import { useEffect, useState } from "react";
import PageLoader from "../../util/Loader/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";
import ATTAuthor from "./ATTAuthor";
import TTPAuthor from "./TTPAuthor";
import ITSAuthor from "./ITSAuthor";

const DigiAuthorContainer = () => {
  const [programAuthor, setAuthor] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const author = await axios(
          `https://skytop-strategies.com/wp-json/wp/v2/program_authors/${id}?per_page=100`
        );
        setAuthor(author.data.acf);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const category = programAuthor.category;

  return (
    <>
      {loaded ? (
        <div className="feature">

          {category === "At The Table" || category === "Under Construction" ? (
            <ATTAuthor author={programAuthor} />
          ) : ""}
          
          {category === "To The Point" ? (
            <TTPAuthor author={programAuthor} />
          ) : ""}
          
          {category === "In The Studio" ? (
            <ITSAuthor author={programAuthor} />
          ) : ""}

        </div>
      ) : (
        <div className="author-loader">
          <PageLoader />
        </div>
      )}
    </>
  );
};

export default DigiAuthorContainer;
