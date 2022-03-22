import { useEffect, useState } from "react";
import PageLoader from "../../util/Loader/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";
import DigiAuthor from "./DigiAuthor";

const DigiAuthorContainer = () => {

  const [programAuthor, setAuthor] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const author = await axios(
          `https://skytop-strategies.com/wp-json/wp/v2/program_authors/${id}`
        );
        setAuthor(author.data.acf);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);
//   console.log(programAuthor);

  return (
    <>
      {loaded ? (
        <div className="feature">
          <DigiAuthor author={programAuthor} />
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
