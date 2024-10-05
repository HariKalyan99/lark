import React, { useRef } from 'react'
import logo from "../../public/lark_logo.png";

const LoginPage = ({displayFn, nav, postLoginFn}) => {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        postLoginFn({username, password});
        usernameRef.current.value = ""
        passwordRef.current.value = ""


    }
    
    return (
        <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{ backgroundColor: "var(--primary-green-color)", height: "100vh" }} id='login'
        >
            <img src={logo} alt="logo_lark" height={100} />
            <h1 className="fs-1 fw-bolder my-3">LOGIN</h1>
            <form
                className="d-flex flex-column gap-2 p-5"
                style={{ boxShadow: "1px 1px 19px 10px white", borderRadius: "10px" }}
                onSubmit={(e) => handleSubmit(e)}
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
                    ref={usernameRef}
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
                    ref={passwordRef}
                />
                <button type='submit' className='btn btn-dark'>Login</button>
                <p className="text-white" >
                    Don't have an account?{" "}
                    <a href='#signup' className="text-info fw-bold" onClick={() => displayFn("login")}>
                        Register
                    </a>
                </p>
                <p className="text-white" >
          Go to dashboard{" "}
          <a href="#" className="text-info fw-bold" onClick={() => nav("land")}>
            click here
          </a>
        </p>
            </form>
        </div>
    )
}

export default LoginPage
