import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import styled from "styled-components"

import Login from "./pages/login"
import Register from "./pages/register"
import Forgotpassword from "./pages/forgotpassword"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Checkoutsuccess from "./pages/checkout/checkoutsuccess"
import Resetpassword from "./pages/resetpassword"

import { CartContextProvider } from "./context/CartContext"

import { BsCart4 } from "react-icons/bs"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/Forgotpassword",
        element: <Forgotpassword />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/Cart",
        element: <Cart />,
    },
    {
        path: "/Checkoutsuccess",
        element: <Checkoutsuccess />,
    },
    {
        path: "/Resetpassword",
        element: <Resetpassword />,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <CartContextProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
            <ToastContainer />
        </React.StrictMode>
    </CartContextProvider>,
)
