import React, { useEffect, useState } from 'react'
import SignupPage from '../SignupPage'
import LoginPage from '../LoginPage'
import axios from 'axios';

const AuthPage = ({nav}) => {
    const [displayAuth, setDisplayAuth] = useState("signup");
    const [authUser, setAuthUser] = useState("");
    const displayFn = (display) => {
        setDisplayAuth(display)
    }

    // useEffect(() => {
    //   const postSignup = async(data) => {
    //     try {
    //       const {data} = await axios.post("api/auth/signup", {
    //         ...data
    //       })
    //     } catch (error) {
          
    //     }
    //   }

    //   if(authUser.username?.length){
    //     postSignup(authUser);
    //   }

    // }, [authUser])

    const postSignupFn = (data) => {
      console.log(data)
    }

    
  return (
    <div>
        {displayAuth === "login" ? <SignupPage displayFn={displayFn} nav={nav} postSignupFn={postSignupFn}/> :
        <LoginPage displayFn={displayFn} nav={nav}/>}
    </div>
  )
}

export default AuthPage