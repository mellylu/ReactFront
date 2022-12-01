import React from "react"

import checkoutService from "../services/checkout.service"
import Button from "./button"

const Paybutton = ({ cartItems }) => {
    const handleCheckout = () => {
        const token = localStorage.getItem("token")
        checkoutService
            .createCheckoutSession(token, cartItems)

            .then(res => {
                console.log(res)
                if (res.url) {
                    window.location.href = res.url
                }
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Button title="Payer" onClick={() => handleCheckout()} />
        </div>
    )
}

export default Paybutton
