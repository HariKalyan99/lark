import React, { useState } from 'react'
import SignupPage from '../SignupPage'
import LoginPage from '../LoginPage'

const AuthPage = () => {
    const [displayAuth, setDisplayAuth] = useState("signup");
    const displayFn = (display) => {
        setDisplayAuth(display)
    }
  return (
    <div>
        {displayAuth === "login" ? <SignupPage displayFn={displayFn}/> :
        <LoginPage displayFn={displayFn}/>}
    </div>
  )
}

export default AuthPage