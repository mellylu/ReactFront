import React from 'react';
import styled from 'styled-components'

const Titlepage = ({title}) => {
    return (
        <div>
            <ModalTitre>{title}</ModalTitre>
        </div>
    );
};

const ModalTitre = styled.h2`
   text-transform : uppercase;
   text-align: left;
   color:#fefee0;
   
   `

export default Titlepage;