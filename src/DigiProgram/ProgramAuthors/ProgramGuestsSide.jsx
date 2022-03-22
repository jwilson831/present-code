const ProgramGuestsSide = ({header, name, title, affiliation }) => {
    return(
        <>
        <div className="guest-container">
        <br />
        <h4 className="textShadow">{header}</h4>
        <i>
          <h5>Featuring</h5>
        </i>
        <div className="guest-box">
          <strong>
            <h5>
              {name},
              <br /> {title}, {affiliation}
            </h5>
          </strong>
          <img
            alt=""
            className="guest-img"
            src="https://skytop-strategies.com/wp-content/uploads/2022/03/placeholder.jpg"
          />
        </div>

        <div className="guest-box">
          <strong>
            <h5>
              Name,
              <br /> Title, Affiliation
            </h5>
          </strong>
          <img
            alt=""
            className="guest-img"
            src="https://skytop-strategies.com/wp-content/uploads/2022/03/placeholder.jpg"
          />
        </div>

        <div className="guest-box">
          <strong>
            <h5>
              Name,
              <br /> Title, Affiliation
            </h5>
          </strong>
          <img
            alt=""
            className="guest-img"
            src="https://skytop-strategies.com/wp-content/uploads/2022/03/placeholder.jpg"
          />
        </div>
      </div>
        </>
    )
}

export default ProgramGuestsSide;