import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/Header"
import { useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <>
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
