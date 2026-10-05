import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/Header"

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="colored"
      />
      <Header />
      <Outlet  />
      <Footer />
    </>
  )
}

export default App
