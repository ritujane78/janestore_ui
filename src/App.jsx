import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify";
import { useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="colored"
      />
      <Header />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center min-h-[852px]">
          <span className="text-xl font-semibold text-pretty dark:text-light">Loading...</span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  )
}

export default App
