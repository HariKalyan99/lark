import { useState } from "react"
import LandingPage from "./components/pages/LandingPage"
import MainPage from "./components/pages/MainPage"


function App() {
  const [navigateToPage, setNavigateToPage] = useState("land");

  const nav = (page) => {
    console.log(page)
    setNavigateToPage(page);
  }
  return (
    <div>
      {navigateToPage === "land" ? <LandingPage nav={nav}/> :
      <MainPage nav={nav} />}
    </div>
  )
}

export default App
