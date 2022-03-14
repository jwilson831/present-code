import "./styles.css";
import ProgramLogos from "./ProgramLogos.jsx";
import Programs from "./Programs.jsx";

const DigiMain = (programs) => {
  const invest = programs.programs[1].acf;
  const cyber = programs.programs[2].acf;
  const csr = programs.programs[3].acf;
  const markets = programs.programs[4].acf;
  const share = programs.programs[5].acf;
  const world = programs.programs[6].acf;

  return (
    <>
      <div className="stuImgContainer">
        <img
          className="stuImg"
          alt="studio"
          src="https://skytop-strategies.com/wp-content/uploads/2022/02/set.jpg"
        />

        <div className="textContainer">
          <h1 className="robotoFont">
            "Skytop media connects you with exceptional business insights live,
            streamed or on demand."
          </h1>
          <h3>- </h3>
          <h5>Christopher P. Skroupa</h5>
          <h5>Founder and CEO</h5>
        </div>
      </div>

      <ProgramLogos />

      <Programs
        data={world}
        ttpStyle="crLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        data={share}
        ttpStyle="kekstLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        data={markets}
        ttpStyle="clearyLogo"
        attStyle="investorLogo"
        itsStyle="yourLogo"
      />
      <Programs
        data={csr}
        ttpStyle="yourLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        data={cyber}
        ttpStyle="yourLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        data={invest}
        ttpStyle="impactLogo"
        attStyle="impactLogo"
        itsStyle="spLogo"
      />
    </>
  );
};

export default DigiMain;
