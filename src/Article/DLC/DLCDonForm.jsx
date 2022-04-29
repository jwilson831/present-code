import axios from "axios";
import React, { useState } from "react";
import PageLoader from "../../util/Loader/Loader";
import "./styles.css";

function DLCDonForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [title, setTitle] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  const download = () => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setAffiliation("");
      setTitle("");
      setLoading(true);
      setShowMessage(true);
    }, 2000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userExists = async () => {
      try {
        const { data } = await axios(
          `https://skytop-strategies.com/wp-json/wp/v2/user_downloads?search=${name}`
        );
        if (data.length > 0) {
          //just download the file
          download();
        } else {
          //download file, then register user
          download();
          const newUser = await axios.post(
            "https://skytop-strategies.com/wp-json/wp/v2/user_downloads",
            {
              title: name,
              content: `${name} requests pricing and description for ${props.title}`,
              status: "private",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${props.token}`,
              },
            }
          );
          await axios.post(
            `https://skytop-strategies.com/wp-json/acf/v3/user_downloads/${newUser.data.id}?fields[name]=${name}&fields[email]=${email}&fields[company]=${affiliation}&fields[job_title]=${title}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${props.token}`,
              },
            }
          );
        }
      } catch (e) {
        console.error(e);
      }
    };
    setLoading(false);
    userExists();
  };

  return (
    <div
      className="modal fade"
      id="dlcModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6
              style={{ textTransform: "capitalize" }}
              className="category"
              id="exampleModalLabel"
            >
              Please Register for Description & Pricing
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="comments-form" onSubmit={(e) => submitHandler(e)}>
              {showMessage && (
                <div className="thank-you-msg">
                  <h5 className="m-0">Thank You For Registering!<br/>Someone will contact you shortly.</h5>
                  <span className="pt-2">
                    <i className="far fa-check-square"></i>
                  </span>
                </div>
              )}
              <div className="form-group">
                <p className="section-title"></p>
                <div className="d-flex align-items-center comment-data-container">
                  <label className="comment-data-label">Full Name: </label>
                  <input
                    className="comment-data-input form-control"
                    minLength="5"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  ></input>
                </div>
                <div className="d-flex align-items-center comment-data-container">
                  <label className="comment-data-label">Email: </label>
                  <input
                    className="comment-data-input form-control"
                    type="email"
                    minLength="5"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></input>
                </div>
                <div className="d-flex align-items-center comment-data-container">
                  <label className="comment-data-label">Title: </label>
                  <input
                    className="comment-data-input form-control"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  ></input>
                </div>
                <div className="d-flex align-items-center comment-data-container">
                  <label className="comment-data-label">Affiliation: </label>
                  <input
                    className="comment-data-input form-control"
                    required
                    onChange={(e) => setAffiliation(e.target.value)}
                    value={affiliation}
                  ></input>
                </div>
              </div>
              {loading ? (
                <button type="submit" className="btn btn-primary comment-btn">
                  Submit
                </button>
              ) : (
                <PageLoader search={true} />
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DLCDonForm;
