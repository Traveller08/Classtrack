import React, { useState } from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
 
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // 
    //  
    // 
    setLoading(false);
  };
  const handleSubmitUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };
  return (
    <>
      <div className="container-fluid  vh-90">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="user"
            ></img>
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2>
              <strong>Welcome to admin Portal</strong>
            </h2>
            {/* 
            
             error div here


            */}

            <div className="form-outline mb-4">
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChangeUser}
                className="form-control form-control-lg"
                placeholder="Enter your username"
              />
              <label className="form-label" for="username">
                Username
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChangeUser}
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" for="password">
                Password
              </label>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              {props.admin ? (
                <>
                  <button
                    onClick={handleSubmitAdmin}
                    className="btn btn-primary btn-lg"
                    style={{
                      "padding-left": "2.5rem",
                      "padding-right": "2.5rem",
                    }}
                  >
                    {loading ? <>Logging...</> : <>Login</>}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSubmitUser}
                    className="btn btn-primary btn-lg"
                    style={{
                      "padding-left": "2.5rem",
                      "padding-right": "2.5rem",
                    }}
                  >
                    {loading ? <>"Logging..."</> : <>"Login"</>}
                  </button>
                </>
              )}
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="/create_new_admin_account" className="link-danger">
                  Create new account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
