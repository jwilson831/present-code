function Advert2(props) {
  return (
    <div id="border">
      <a href="https://familusa.org/" target="_blank" rel="noreferrer">
        <div className="advertRow">
          <div className="advertColumn">
            <img
              className="soldierImg"
              src="https://skytop-strategies.com/wp-content/uploads/2022/04/IMG_1945.jpg"
              alt="ad"
            />
          </div>

          <div className="advertColumn">
            <div className="">
              <img
                className="familImg"
                src="https://skytop-strategies.com/wp-content/uploads/2022/04/famil_logo_vert-2-1.png"
                alt="ad"
              />
            </div>

            <div className="familQuotes">
              <p>
                <i>
                  "They served alongside U.S. troops for two decades.
                  <br />
                  They risked their lives to protect American lives."
                </i>
                <br />
                <b>
                  LTG John F. Mulholland (USA, Ret), FAMIL Advisory Board Member{" "}
                </b>
              </p>
            </div>

            <div className="familQuotes">
              <p>
                <i>
                  "Now at home in the United States,
                  <br />
                  our Afghan partners strive for the American dream."
                </i>
                <br />
                <b>
                  Geeta Bakshi, Former US Intelligence Officer, Founder of FAMIL
                </b>
              </p>
            </div>

            <div className="familQuotes">
              <p>
                <i>
                  “Join us in helping these great patriots, who risked their all
                  for their country and ours, as they start their new lives as
                  Americans.”
                </i>
                <br />
                <b>
                  Mike Barry, Retired Senior US Intelligence Official, FAMIL
                  Board of Directors
                </b>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Advert2;
