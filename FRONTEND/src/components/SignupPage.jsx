import React from "react";
import logo from "../../public/lark_logo.png";

const SignupPage = ({displayFn}) => {
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ backgroundColor: "var(--primary-green-color)", height: "100vh" }} id="signup"
    >
      <img src={logo} alt="logo_lark" height={100} />
      <h1 className="fs-1 fw-bolder my-3">SIGNUP</h1>
      <form
        className="d-flex flex-column gap-2 p-5"
        style={{ boxShadow: "1px 1px 19px 10px white", borderRadius: "10px" }}
      >
        <label id="username" className="fs-3 fw-bold">
          Username
        </label>
        <input
          type="text"
          placeholder="Type your username"
          style={{
            width: "400px",
            height: "60px",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
          }}
        />

        <label id="fullname" className="fs-3 fw-bold">
          Fullname
        </label>
        <input
          type="text"
          placeholder="Type your fullname"
          style={{
            width: "400px",
            height: "60px",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
          }}
        />

        <label id="email" className="fs-3 fw-bold">
          Email
        </label>
        <input
          type="text"
          placeholder="Type your email"
          style={{
            width: "400px",
            height: "60px",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
          }}
        />

        <label id="password" className="fs-3 fw-bold">
          Password
        </label>
        <input
          type="text"
          placeholder="Type your password"
          style={{
            width: "400px",
            height: "60px",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
          }}
        />

        <p className="text-white" >
          Already have an account?{" "}
          <a href="#login" className="text-info fw-bold" onClick={() => displayFn("signup")}>
            Signin
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
