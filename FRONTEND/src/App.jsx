import { useState } from "react"
import LandingPage from "./components/pages/LandingPage"
import MainPage from "./components/pages/MainPage"
import AuthPage from "./components/pages/AuthPage";


function App() {
  const [navigateToPage, setNavigateToPage] = useState("land");

  const nav = (page) => {
    setNavigateToPage(page);
  }
  return (
    <div>
      {navigateToPage === "land" ? <LandingPage nav={nav}/> : navigateToPage === "auth" ? <AuthPage /> :
      <MainPage nav={nav} />}
    </div>
  )
}

export default App
