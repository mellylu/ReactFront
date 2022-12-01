import React, { useContext } from "react"
import { BsFileX } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Button from "../../../components/button"
import Titlepage from "../../../components/titlepage"

import CartContext from "../../../context/CartContext"

const Checkoutsuccess = () => {
    const navigate = useNavigate()
    const { clearCart } = useContext(CartContext)
    clearCart()

    return (
        <Div>
            <Titlepage
                styleTitle={{ color: "#fefee0", align: "center" }}
                title="Votre paiement s'est bien réalisé"
            />
            <br />
            <Button
                colorButton={{ color: "#fefee0" }}
                styleButton={{ bgColor: "#303030" }}
                title="Continuer mes achats"
                onClick={() => navigate("/home")}
            />
        </Div>
    )
}

const Div = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export default Checkoutsuccess
