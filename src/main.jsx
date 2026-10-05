import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import About from './components/About.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement = {<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
  </Route>
)
const router = createBrowserRouter(routeDefinitions)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: "/login",
//         element: <Login />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/cart",
//         element: <Cart />
//       },
//       {
//         path: "/about",
//         element: <About />
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
