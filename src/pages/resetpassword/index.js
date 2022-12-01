import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../components/button"
import Input from "../../components/input"
import Titlepage from "../../components/titlepage"

import userService from "../../services/user.service"

const Resetpassword = () => {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    // console.log(props.location)
    // console.log(props.location.token)

    useEffect(() => {
        const url = window.location.search
        const paramUrl = url.split("=")
        console.log(paramUrl[1])
        const token = paramUrl[1]
        console.log(token)
        userService
            .formResetPassword(token)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                //navigate("/")
            })
    })

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .update(password)
            .then(() => {
                console.log("le password a été réinitialisé")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    //dans un useEffect regarder si le token existe sinon redirection

    return (
        <Div>
            <Titlepage title="changer de mot de passe" />

            <form>
                <Input
                    label="Nouveau mot de passe"
                    type="password"
                    placeholder="**********"
                    size="large"
                    className="mb-5"
                    required={true}
                    onChange={e => {
                        setPassword({ ...password, password: e.target.value })
                    }}
                />
                <Button
                    colorButton={{ color: "#303030" }}
                    onClick={e => handleSubmit(e)}
                    title="Se connecter"
                />
            </form>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

export default Resetpassword
