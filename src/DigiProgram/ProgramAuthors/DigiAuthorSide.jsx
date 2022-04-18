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
          `https://skytop-strategies.com/wp-json/wp/v2/program_authors/${id}?per_page=100`
        );
        setGuest(guest.data.acf);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const {
    short_part_header,
    guest_name,
    guest_name2,
    guest_name3,
    guest_name4,
    guest_name5,
    guest_name6,
    guest_name7,
    guest_name8,
    guest_name9,
    guest_name10,
    guest_name11,
    guest_name12,
    guest_name13,
    guest_name14,
    guest_name15,
    guest_title,
    guest_title2,
    guest_title3,
    guest_title4,
    guest_title5,
    guest_title6,
    guest_title7,
    guest_title8,
    guest_title9,
    guest_title10,
    guest_title11,
    guest_title12,
    guest_title13,
    guest_title14,
    guest_title15,
    guest_affiliation,
    guest_affiliation2,
    guest_affiliation3,
    guest_affiliation4,
    guest_affiliation5,
    guest_affiliation6,
    guest_affiliation7,
    guest_affiliation8,
    guest_affiliation9,
    guest_affiliation10,
    guest_affiliation11,
    guest_affiliation12,
    guest_affiliation13,
    guest_affiliation14,
    guest_affiliation15,
    guest_img,
    guest_img2,
    guest_img3,
    guest_img4,
    guest_img5,
    guest_img6,
    guest_img7,
    guest_img8,
    guest_img9,
    guest_img10,
    guest_img11,
    guest_img12,
    guest_img13,
    guest_img14,
    guest_img15,
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
            img={guest_img4}
            name={guest_name4}
            title={guest_title4}
            affiliation={guest_affiliation4}
            img2={guest_img5}
            name2={guest_name5}
            title2={guest_title5}
            affiliation2={guest_affiliation5}
            img3={guest_img6}
            name3={guest_name6}
            title3={guest_title6}
            affiliation3={guest_affiliation6}
          />
          <ProgramGuestsSide
            header={short_part_header3}
            img={guest_img7}
            name={guest_name7}
            title={guest_title7}
            affiliation={guest_affiliation7}
            img2={guest_img8}
            name2={guest_name8}
            title2={guest_title8}
            affiliation2={guest_affiliation8}
            img3={guest_img9}
            name3={guest_name9}
            title3={guest_title9}
            affiliation3={guest_affiliation9}
          />
          {!short_part_header4 ? (
            ""
          ) : (
            <ProgramGuestsSide
              header={short_part_header4}
              img={guest_img10}
              name={guest_name10}
              title={guest_title10}
              affiliation={guest_affiliation10}
              img2={guest_img11}
              name2={guest_name11}
              title2={guest_title11}
              affiliation2={guest_affiliation11}
              img3={guest_img12}
              name3={guest_name12}
              title3={guest_title12}
              affiliation3={guest_affiliation12}
            />
          )}
          {!short_part_header5 ? (
            ""
          ) : (
            <ProgramGuestsSide
              header={short_part_header5}
              img={guest_img13}
              name={guest_name13}
              title={guest_title13}
              affiliation={guest_affiliation13}
              img2={guest_img14}
              name2={guest_name14}
              title2={guest_title14}
              affiliation2={guest_affiliation14}
              img3={guest_img15}
              name3={guest_name15}
              title3={guest_title15}
              affiliation3={guest_affiliation15}
            />
          )}
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
