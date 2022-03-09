import "./styles/styles.css";
import ProgramLogos from "./Components/ProgramLogos.jsx";
import Programs from "./Components/Programs.jsx";
import WashProg from "./Components/WashProg.jsx";
import ShareProg from "./Components/ShareProg.jsx";
import CapitalProg from "./Components/CapitalProg.jsx";
import CSRProg from "./Components/CSRProg.jsx";
import CyberProg from "./Components/CyberProg.jsx";
import InvestProg from "./Components/InvestProg.jsx";

const DigiProg = () => {
  const ww =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/w_tw.png";
  const share =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/share.png";
  const markets =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/markets.png";
  const csr =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/csr.png";
  const cyber =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/cyber.png";
  const invest =
    "https://skytop-strategies.com/wp-content/uploads/2022/02/invest.png";
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

      <WashProg title={"Washington & The World"} img={ww} />
      <ShareProg title={"Shareholder Activism"} img={share} />
      <CapitalProg title={"Capital Markets"} img={markets} />
      <CSRProg title={"CSR & Sustainability"} img={csr} />
      <CyberProg title={"Cyber Resilience"} img={cyber} />
      <InvestProg title={"Investment Management"} img={invest} />

      {/* <Programs title={"Washington & The World"} img={ww} />
      <Programs title={"Shareholder Activism"} img={share} />
      <Programs title={"Capital Markets"} img={markets} />
      <Programs title={"CSR & Sustainability"} img={csr} />
      <Programs title={"Cyber Resilience"} img={cyber} />
      <Programs title={"Investment Management"} img={invest} /> */}
    </>
  );
};

export default DigiProg;
