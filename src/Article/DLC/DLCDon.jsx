// import axios from "axios";
// import React, { useState } from "react";
import DLCDonForm from "./DLCDonForm";
import "./styles.css";

function DLCDon(props) {
const {token} = props;
  // const [token, setToken] = useState(null);
  // const generateToken = async () => {
  //   const {
  //     data: { token },
  //   } = await axios.post(
  //     `https://skytop-strategies.com/wp-json/jwt-auth/v1/token?username=${process.env.REACT_APP_WP_USERNAME}&password=${process.env.REACT_APP_WP_PASSWORD}`
  //   );
  //   setToken(token);
  // };
  return (
    <div className="dlc-box poll-container mt-5 text-center">
      <p className="section-title mb-0">{props.title}</p>
      <p style={{ transform: 'translate(0px, -12px)', paddingBottom: "0px" }} className="section-title mb-0">
        {props.title2}
      </p>
      <br/>
      <p style={{ fontWeight: "500" }} className="section-title mb-0">
        {props.title3}
      </p>
      
        <button
          // onClick={() => generateToken()}
          onClick={() => {}}
          className="btn btn-primary comment-btn mt-4"
          data-toggle="modal"
          data-target="#dlcModal2"
        >
          Description & Pricing <i className="fas"></i>
        </button>
      
      <DLCDonForm  token={token} title={props.title3} />
    </div>
  );
}

export default DLCDon;
