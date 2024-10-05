import React, { useEffect, useState } from 'react'
import SignupPage from '../SignupPage'
import LoginPage from '../LoginPage'
import axios from 'axios';

const AuthPage = ({nav}) => {
    const [displayAuth, setDisplayAuth] = useState("signup");
    const [authUser, setAuthUser] = useState("");
    const [authUserLogin, setAuthUserLogin] = useState("");
    const displayFn = (display) => {
        setDisplayAuth(display)
    }

    useEffect(() => {
      const postSignup = async(user) => {
        try {
          const res = await fetch("/api/auth/signup", {
            method: "POST",  
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...user}),
            credentials: "include"

          })
          const data = res.json();
          data.then(res => console.log(res));
        } catch (error) {
          console.log("Error in the authPage useEffect")
        }
      }

      if(authUser.username?.length){
        postSignup(authUser);
      }

    }, [authUser])

    useEffect(() => {
      const postLogin = async(user) => {
        console.log(user)
        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",  
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...user}),
            credentials: "include"

          })
          const data = res.json();
          data.then(res => console.log(res));
        } catch (error) {
          console.log("Error in the authPage useEffect")
        }
      }

      if(authUserLogin.username?.length){
        postLogin(authUserLogin);
      }

    }, [authUserLogin])

    const postSignupFn = (data) => {
      setAuthUser(data)
    }

    const postLoginFn = (data) => {
      // console.log(data)
      setAuthUserLogin(data);
    }

    
  return (
    <div>
        {displayAuth === "login" ? <SignupPage displayFn={displayFn} nav={nav} postSignupFn={postSignupFn}/> :
        <LoginPage displayFn={displayFn} nav={nav} postLoginFn={postLoginFn}/>}
    </div>
  )
}

export default AuthPage