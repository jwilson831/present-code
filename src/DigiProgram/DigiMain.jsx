import "./styles.css";
import ProgramLogos from "../util/ProgramLogos/ProgramLogos.jsx";
import Programs from "./Programs.jsx";

const DigiMain = (programs) => {
  const investment = programs.programs[1].acf;
  const cyber = programs.programs[2].acf;
  const CSR = programs.programs[3].acf;
  const capital_markets = programs.programs[4].acf;
  const activism = programs.programs[5].acf;
  const washington_world = programs.programs[6].acf;

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
        link="/washington-world"
        data={washington_world}
        ttpStyle="crLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        link="/activism"
        data={activism}
        ttpStyle="kekstLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        link="/capital-markets"
        data={capital_markets}
        ttpStyle="clearyLogo"
        attStyle="investorLogo"
        itsStyle="yourLogo"
      />
      <Programs
        link="/CSR"
        data={CSR}
        ttpStyle="yourLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        link="/cyber"
        data={cyber}
        ttpStyle="yourLogo"
        attStyle="yourLogo"
        itsStyle="yourLogo"
      />
      <Programs
        link="/investment"
        data={investment}
        ttpStyle="impactLogo"
        attStyle="impactLogo"
        itsStyle="spLogo"
      />
    </>
  );
};

export default DigiMain;
