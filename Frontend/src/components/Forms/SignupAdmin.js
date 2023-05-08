import React, { useState } from "react";
import "../CSS/Login.css";
const SignupAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username,setUsername]=useState("");
  const [empId, setEmpId] = useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [error,setError]=useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [agree, setAgree]= useState(false);
  const handleCreateAccount = (e) =>{

  }
  return (

    <>
      <div className="container-fluid h-custom vh-90">
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
            <div id="error"></div>
         
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value);
                    }}
                    className="form-control"
                    name="name"
                  />
                  <label className="form-label" for="name">
                    Your Name
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                    name="email"
                  />
                  <label className="form-label" for="email">
                    Your email address
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-fingerprint fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    required
                    value={empId}
                    onChange={(e)=>{
                      setEmpId(e.target.value);
                    }}
                    className="form-control"
                    name="empID"
                  />
                  <label className="form-label" for="empID">
                    Your ID
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    value={username}
                    onChange={(e)=>{
                      setUsername(e.target.value);
                    }}
                    className="form-control"
                    name="username"
                  />
                  <label className="form-label" for="username">
                    Your username
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    name="password"
                    className="form-control"
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
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    name="confirmPassword"
                    className="form-control"
                  />
                  <label className="form-label" for="confirmPassword">
                    Repeat your password
                  </label>
                </div>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={agree}
                  onChange={(e)=>{
                    setAgree(!agree);
                  }}
                  
                />
                <label className="form-check-label" for="form2Example3">
                  I agree all statements in <a href="#!">Terms of service</a>
                </label>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button 
                 className="btn btn-primary btn-lg"
                 onClick={handleCreateAccount}
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

export default SignupAdmin;
