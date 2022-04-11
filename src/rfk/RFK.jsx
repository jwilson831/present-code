import "./styles.css";
import Categories from "./Categories";


const RFK = () => {
  return (
    <div>
      <h1 className="textShadow"><b>Robert F. Kennedy</b></h1>
      <img
        id="rfkMain"
        alt=""
        src="https://skytop-strategies.com/wp-content/uploads/2022/04/rfk-indiana.webp"
      />
      <br />
      <br />
      <h3>
        <i>
          "Few will have the greatness to bend history itself, but each of us
          can work to change a small portion of events..."
        </i>
      </h3>
      <hr className="blueLine" />
      <img style={{borderRadius: '10px'}} src="https://skytop-strategies.com/wp-content/uploads/2022/04/rightsLogo-3367542517-1649355060719.webp"/>
      <hr className="blueLine" />

      <Categories/>


    </div>
  );
};

export default RFK;
