import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import Login, { loginAction } from './components/Login.jsx'
import Contact, { contactAction } from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import About from './components/About.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { productsLoader } from './components/Home.jsx'
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from './components/ProductDetail.jsx'
import { CartProvider } from './store/cart-context.jsx'
import {AuthProvider} from './store/auth-context.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement = {<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />  
    <Route path="/login" element={<Login />} action={loginAction} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route element = {<ProtectedRoute />} >
      <Route path='/checkout' element = {<CheckoutForm />} />
    </Route>
  </Route>
)
const router = createBrowserRouter(routeDefinitions)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>  
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable
            pauseOnHover
            theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
            transition={Bounce}
          />
  </StrictMode>,
)
