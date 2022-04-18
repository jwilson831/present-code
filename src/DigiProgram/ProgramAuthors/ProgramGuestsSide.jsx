const ProgramGuestsSide = (data) => {
  const {
    img,
    img2,
    img3,
    header,
    name,
    name2,
    name3,
    title,
    title2,
    title3,
    affiliation,
    affiliation2,
    affiliation3,
  } = data;

  return (
    <>
      <div className="guest-container">
        <br />
        <h4 className="textShadow">{header}</h4>
        <i>
          <h5>Featuring</h5>
        </i>
        <div className="guest-box">
          <strong>
            <h5>{name}</h5>
            <h6>
              {title} <br /> {affiliation}
            </h6>
          </strong>
          <img alt="" className="guest-img" src={img} />
          <button className="guestButton">About {name}</button>
        </div>

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

      </div>
    </>
  );
};

export default ProgramGuestsSide;
