import React, {useState} from 'react';
import styled from 'styled-components'
import Button from '../../components/button';
import Input from '../../components/input';
import Titlepage from '../../components/titlepage';

const Forgotpassword = () => {
    const [email, setEmail] = useState({});

    const handleSubmit = () => {

    }
    
    return (
        <DivForgotpassword>
           <Titlepage title="Mot de passe oublié ?"/>
           <Input label="Votre identifiant/email : " 
           placeholder="xxxx@xxx.xx"
           required
           onChange={e => {
            setEmail({ ...email, email: e.target.value })
        }}/>
           <Button title="Envoyer" onClick={(e) => handleSubmit(e)}/>
        </DivForgotpassword>
    );
};

const DivForgotpassword = styled.div`
  background-color: #303030;
   
`

export default Forgotpassword;