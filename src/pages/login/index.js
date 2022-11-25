import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

import Input from '../../components/input'
import Button from '../../components/button'

import userService from '../../services/user.service'
import Modal from '../../components/modal'

const Login = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .login(user)
            .then(data => {
                localStorage.setItem('token', data.token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <LoginDiv>
            <Modal title="Se connecter">
            <form>
                <Input
                    label="Identifiant"
                    placeholder="john.doe@exemple.com"
                    size="large"
                    className="mb-5"
                    required={true}
                    onChange={e => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="**********"
                    size="large"
                    className="mb-5"
                    required={true}
                    onChange={e => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />
                <Button colorButton={{color:'#303030'}} onClick={(e) => handleSubmit(e)} title="Se connecter" />
            </form>
            {/* <button onClick={()=> redirect("/register")}> */}
            
            <div>
             <Button onClick={()=> {navigate("/register");}} title="Inscrivez vous" colorButton={{color: '#fefee0'}} styleButton={{ bgColor: '#303030', sizeButton: '10px' }}/>
              | 
             <Button onClick={()=> {navigate("/forgotpassword");}} title="Mot de passe oublié ?" colorButton={{color: '#fefee0'}} styleButton={{ bgColor: '#303030', sizeButton: '10px' }}/>
             </div>
            </Modal>
        </LoginDiv>
    )
}

const LoginDiv = styled.div`
  background-color: #fefee0;
   
`


export default Login
