import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AiFillCaretLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

import Button from "../../components/button"
import Input from "../../components/input"
import Titlepage from "../../components/titlepage"
import userService from "../../services/user.service"
import { toast } from "react-toastify"

const Forgotpassword = () => {
    const [email, setEmail] = useState({})
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .sendEmailToResetPassword(email)
            .then(data => {
                console.log("dans le reset password")
                console.log(data)
                toast("Un email a été envoyé", { type: "warning" })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Div>
            <DivIcon>
                <AiFillCaretLeft
                    color="#fefee0"
                    size={20}
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </DivIcon>
            <DivForgotpassword>
                <Titlepage title="Mot de passe oublié ?" />

                <Input
                    label="Entrez votre adresse mail : "
                    placeholder="xxxx@xxx.xx"
                    required
                    onChange={e => {
                        setEmail({ ...email, email: e.target.value })
                    }}
                />
                <Button
                    colorButton={{ color: "#303030" }}
                    title="Envoyer"
                    onClick={e => handleSubmit(e)}
                />
            </DivForgotpassword>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const DivIcon = styled.div`
    margin-left: 2%;
    margin-top: 2%;
    display: flex;
`

const DivForgotpassword = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default Forgotpassword
