import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import Login, { loginAction } from './components/Login.jsx'
import Contact, { contactAction, contactLoader } from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import About from './components/About.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { productsLoader } from './components/Home.jsx'
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from './components/ProductDetail.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Profile, { profileAction, profileLoader } from "./components/Profile.jsx";
import Orders from "./components/Orders.jsx";
import AdminOrders, { adminOrdersLoader } from "./components/admin/AdminOrders.jsx";
import Messages, { messagesLoader } from "./components/admin/Messages.jsx"; 
import Register, { registerAction } from './components/Register.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import OrderSuccess from './components/OrderSuccess.jsx'
import { ordersLoader } from './components/Orders.jsx'
import store from './store/store.js';
import { Provider } from 'react-redux'

const stripePromise = loadStripe(
  "pk_test_51RGczH4N2Kx5MDwEZkYDx5oNfMz1bfKx71glMYCrZwB49OV7aPKEd5XmDLOM1MNb38aA46xon5WI36FO4YMBnKVV00JOjh4bAV"
);
const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement = {<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />  
    <Route path="/login" element={<Login />} action={loginAction} />
    <Route path="/contact" element={<Contact />} action={contactAction} loader = {contactLoader}/>
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path='/register' element = {<Register />} action={registerAction}/>
    <Route path="/products/:productId" element={<ProductDetail />} />
    <Route element = {<ProtectedRoute />} >
      <Route path='/checkout' element = {<CheckoutForm />} />
      <Route path='/profile' element = {<Profile />} loader={profileLoader} action={profileAction}   shouldRevalidate={({ actionResult, defaultShouldRevalidate }) => {
          // Do not reload the profile after a successful update.
          if (actionResult?.success) {
            return false;
          }

          return defaultShouldRevalidate;
        }}/>
      <Route path='/orders' element = { <Orders />} loader={ordersLoader}/>
      <Route path='/admin/orders' element = { <AdminOrders />} loader={adminOrdersLoader} />
      <Route path='admin/messages' element = { <Messages />} loader={messagesLoader}/>
      <Route path="/order-success" element={<OrderSuccess />} />
    </Route>
  </Route>
)
const router = createBrowserRouter(routeDefinitions)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
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
    </Elements>
  </StrictMode>,
)
