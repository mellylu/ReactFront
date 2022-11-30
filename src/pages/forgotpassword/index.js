import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Button from '../../components/button';
import Input from '../../components/input';
import Titlepage from '../../components/titlepage';
import userService from '../../services/user.service';

const Forgotpassword = () => {
    const [email, setEmail] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        userService
            .sendEmailToResetPassword(email)
            .then(data => {
                console.log("dans le reset password")
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    
    return (
        <DivForgotpassword>
            <AiFillCaretLeft color='#fefee0' onClick={() => {navigate("/")}}/>
           <Titlepage title="Mot de passe oublié ?"/>
           <Input label="Entrez votre adresse mail : " 
           placeholder="xxxx@xxx.xx"
           required
           onChange={e => {
            setEmail({ ...email, email: e.target.value })
        }}/>
           <Button colorButton={{color: '#303030'}} title="Envoyer" onClick={(e) => handleSubmit(e)}/>
        </DivForgotpassword>
    );
};

const DivForgotpassword = styled.div`
  background-color: #303030;
   
`

export default Forgotpassword;