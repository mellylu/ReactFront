import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import authService from "../../services/user.service"

import Input from "../../components/input";
import Modal from "../../components/modal";
import Button from "../../components/button";

const Index = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(user)
      .then(data => {
        console.log(data);
        if (data.success === false) {
          return false;
        }
        localStorage.setItem("token", data.token);
      })
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <Modal styleImage={{width: '500px'}}title="S'inscrire">
    <div>
      <form>
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}
          <Input
            type="text"
            label="Nom"
            id="firstName"
            name="firstName"
            placeholder="Mon nom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value })
            }}
          />
          <Input
            type="text"
            label="Prénom"
            id="lastName"
            name="lastName"
            placeholder="Mon prénom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value })
            }}
          />
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="Mon email"
            required={true}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value })
            }}
          />
          <Input
            type="password"
            label="Mot de passe"
            id="password"
            name="password"
            placeholder="Mon mot de passe"
            required={true}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value })
            }}
          />
          <Button colorButton={{color: '#303030'}} onClick={(e) => handleSubmit(e)} title="S'inscrire" />
        </form>
        <Button onClick={()=> {navigate("/");}} title="Vous avez déjà compte ? Connectez vous" colorButton={{color: '#fefee0'}} styleButton={{ bgColor: '#303030', sizeButton: '10px' }}/>
            
        </div>
    </Modal>

  );
};

export default Index;
