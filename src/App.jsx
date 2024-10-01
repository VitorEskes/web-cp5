import { Outlet } from "react-router-dom"
import Nav from "./components/nav"
import Footer from "./components/Footer"
import { GlobalStyle } from "./components/GlobalStyle"

function App() {


  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
