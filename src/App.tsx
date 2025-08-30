import { Outlet } from "react-router"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

function App() {

  return (
    <>
    <Navbar />
    <main>
     <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
