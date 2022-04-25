const ProgramGuestsSide = (data) => {
  const {
    img,
    img2,
    img3,
    img4,
    header,
    name,
    name2,
    name3,
    name4,
    title,
    title2,
    title3,
    title4,
    affiliation,
    affiliation2,
    affiliation3,
    affiliation4
  } = data;


  return (
    <>
      <div className="guest-container">
        <br />
        <h4 className="textShadow">{header}</h4>
        <i>
          <h5>Featuring</h5>
        </i>

        {name === "Sarah McPhee" ? (<div className="guest-box">
          <strong>
            <h5>Sarah McPhee</h5>
            <h6>
            Chair of Houdini Sportswear <br /> 
            Audit and Risk Chair at Grover.com <br/>
            Non-Executive Director at ACQ Bure, Bure Equity, Atle Investment and Axel Johnson Inc. <br/> <br/>
            Recognized as <br/>
            Best CEO in Sweden <br/>
            Most Powerful Women
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img} />
          <button className="guestButton">About {name}</button>
        </div>) : (<div className="guest-box">
          <strong>
            <h5>{name}</h5>
            <h6>
            {title} <br /> {affiliation}
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img} />
          <button className="guestButton">About {name}</button>
        </div>)}

        { name2 ? (<div className="guest-box">
          <strong>
            <h5>{name2}</h5>
            <h6>
              {title2} <br /> {affiliation2}
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img2} />
          <button className="guestButton">About {name2}</button>
        </div>) : "" }

        { name3 ? (<div className="guest-box">
          <strong>
            <h5>{name3}</h5>
            <h6>
              {title3} <br /> {affiliation3}
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img3} />
          <button className="guestButton">
            About {name3}
          </button>
        </div>) : ""}

        { name4 ? (<div className="guest-box">
          <strong>
            <h5>{name4}</h5>
            <h6>
              {title4} <br /> {affiliation4}
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img4} />
          <button className="guestButton">
            About {name3}
          </button>
        </div>) : ""}
      </div>
    </>
  );
};

export default ProgramGuestsSide;
