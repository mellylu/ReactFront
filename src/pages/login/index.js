import React, { useState, useEffect } from 'react'
import { Navigate, useHistory, redirect} from 'react-router-dom'
import styled from 'styled-components'

import Input from '../../components/input'
import Button from '../../components/button'

import userService from '../../services/user.service'
import Modal from '../../components/modal'

const Login = () => {
    const [user, setUser] = useState({})
    // const navigate = Navigate()

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

    // const goRegister=()=> {
    //     let url = "/register";
    //     navigate.push(url);
    //   }

    return (
        <LoginDiv>
            <Modal title="Se connecter">
            <form>
                <Input
                    label="Identifiant"
                    placeholder="john.doe@pinotes.com"
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
                <Button styleButton={{ color: '#303030' }} onClick={(e) => handleSubmit(e)} title="Se connecter" />
            </form>
            {/* <button onClick={()=> redirect("/register")}> */}
            
            <div>
             <Button title="Inscrivez vous" styleButton={{ bgColor: '#303030', color: '#fefee0', sizeButton: '24px' }}/>
              | 
             <Button title="Mot de passe oublié ?" styleButton={{ bgColor: '#303030', color: '#fefee0', sizeButton: '24px' }}/>
             </div>
            </Modal>
        </LoginDiv>
    )
}

const LoginDiv = styled.div`
  background-color: #fefee0;
   
`


export default Login
