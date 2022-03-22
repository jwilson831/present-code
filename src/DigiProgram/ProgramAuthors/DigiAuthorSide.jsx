import { useEffect, useState } from "react";
import PageLoader from "../../util/Loader/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProgramGuestsSide from "./ProgramGuestsSide";

const DigiAuthorSide = () => {
  const [programGuests, setGuest] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guest = await axios(
          `https://skytop-strategies.com/wp-json/wp/v2/program_authors/${id}`
        );
        setGuest(guest.data.acf);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);
  console.log(programGuests);

  const {
    short_part_header,
    guest_name,
    guest_name2,
    guest_name3,
    guest_title,
    guest_title2,
    guest_title3,
    guest_affiliation,
    guest_affiliation2,
    guest_affiliation3,
    guest_img,
    guest_img2,
    guest_img3,
    short_part_header2,
    short_part_header3,
    short_part_header4,
    short_part_header5,
  } = programGuests;
  return (
    <>
      {loaded ? (
        <>
          <h4>
            <button className="previewButtonAuth">Booking Sponsors Now</button>
          </h4>
          <br />

          <ProgramGuestsSide
            header={short_part_header}
            img={guest_img}
            name={guest_name}
            title={guest_title}
            affiliation={guest_affiliation}
            img2={guest_img2}
            name2={guest_name2}
            title2={guest_title2}
            affiliation2={guest_affiliation2}
            img3={guest_img3}
            name3={guest_name3}
            title3={guest_title3}
            affiliation3={guest_affiliation3}
          />
          <ProgramGuestsSide
            header={short_part_header2}
            img={guest_img}
            name={guest_name}
            title={guest_title}
            affiliation={guest_affiliation}
            img2={guest_img2}
            name2={guest_name2}
            title2={guest_title2}
            affiliation2={guest_affiliation2}
            img3={guest_img3}
            name3={guest_name3}
            title3={guest_title3}
            affiliation3={guest_affiliation3}
          />
          <ProgramGuestsSide
            header={short_part_header3}
            img={guest_img}
            name={guest_name}
            title={guest_title}
            affiliation={guest_affiliation}
            img2={guest_img2}
            name2={guest_name2}
            title2={guest_title2}
            affiliation2={guest_affiliation2}
            img3={guest_img3}
            name3={guest_name3}
            title3={guest_title3}
            affiliation3={guest_affiliation3}
          />
          <ProgramGuestsSide
            header={short_part_header4}
            img={guest_img}
            name={guest_name}
            title={guest_title}
            affiliation={guest_affiliation}
            img2={guest_img2}
            name2={guest_name2}
            title2={guest_title2}
            affiliation2={guest_affiliation2}
            img3={guest_img3}
            name3={guest_name3}
            title3={guest_title3}
            affiliation3={guest_affiliation3}
          />
          <ProgramGuestsSide
            header={short_part_header5}
            img={guest_img}
            name={guest_name}
            title={guest_title}
            affiliation={guest_affiliation}
            img2={guest_img2}
            name2={guest_name2}
            title2={guest_title2}
            affiliation2={guest_affiliation2}
            img3={guest_img3}
            name3={guest_name3}
            title3={guest_title3}
            affiliation3={guest_affiliation3}
          />
        </>
      ) : (
        <div className="author-loader">
          <PageLoader />
        </div>
      )}
    </>
  );
};

export default DigiAuthorSide;
