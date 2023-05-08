import React, { useState } from "react";
import "../CSS/Login.css";
const SignupUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    roll: "",
    branch: "",
    batch: "",
    password: "",
    confirmPassword: "",
  });
  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUpUser = (e) => {
    e.preventDefault();
    // console.log(name, roll, branch,batch,password,confirmPassword,error,agree);
  };

  return (
    <>
      <div className="container-fluid vh-90 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
              alt="user"
            />
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p className="text-center h3  mb-5 mx-1 mx-md-4 mt-4">
              Create new account
            </p>

            <div id="error">{error ? errorMessage : ""}</div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  value={userData.name}
                  onChange={handleChangeUser}
                  className="form-control"
                  name="name"
                  required
                />
                <label className="form-label" for="name">
                  Your Name
                </label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-list-ol me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  value={userData.roll}
                  onChange={handleChangeUser}
                  className="form-control"
                  name="roll"
                  required
                />
                <label className="form-label" for="roll-number">
                  Roll number
                </label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-graduation-cap fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  value={userData.branch}
                  onChange={handleChangeUser}
                  className="form-control"
                  name="branch"
                  required
                />
                <label className="form-label" for="branch">
                  Your Branch
                </label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-users fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  value={userData.batch}
                  onChange={handleChangeUser}
                  className="form-control"
                  name="batch"
                  required
                />
                <label className="form-label" for="batch">
                  Your Batch
                </label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChangeUser}
                  className="form-control"
                  required
                />
                <label className="form-label" for="password">
                  Password
                </label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="password"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChangeUser}
                  className="form-control"
                  required
                />

                <label className="form-labfasel" for="confirmPassword">
                  Repeat your Password
                </label>
              </div>
            </div>

            <div className="form-check d-flex justify-content-center mb-5">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={agree}
                onChange={(e) => {
                  setAgree(!agree);
                }}
                id="form2Example3c"
                name="termsandconditions"
              />
              <label className="form-check-label" for="form2Example3">
                I agree all statements in{" "}
                <a href="https://legislative.gov.in/sites/default/files/A2017-23_0.pdf">
                  Terms of service
                </a>
              </label>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleSignUpUser}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupUser;
