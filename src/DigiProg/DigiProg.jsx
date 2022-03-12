import "./styles/styles.css";
import ProgramLogos from "./Components/ProgramLogos.jsx";
// import Programs from "./Components/Programs.jsx";
import WashProg from "./Components/WashProg.jsx";
import ShareProg from "./Components/ShareProg.jsx";
import CapitalProg from "./Components/CapitalProg.jsx";
import CSRProg from "./Components/CSRProg.jsx";
import CyberProg from "./Components/CyberProg.jsx";
import InvestProg from "./Components/InvestProg.jsx";

const DigiProg = (programs) => {
  const invest = programs.programs[0].acf
  const cyber = programs.programs[1].acf
  const csr = programs.programs[2].acf
  const markets = programs.programs[3].acf
  const share = programs.programs[4].acf
  const world = programs.programs[5].acf

  console.log(invest)
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

      <WashProg data={world}/>
      <ShareProg data={share}/>
      <CapitalProg data={markets} />
      <CSRProg data={csr} />
      <CyberProg data={cyber}/>
      <InvestProg data={invest} />

    </>
  );
};

export default DigiProg;
