import React from 'react';
import styled from 'styled-components'

const Message = ({type, mess}) => {
    
    return (
        <DivMessage>
        {
            type==="error" ? (
                <DivMessageError>
                    {mess}
                </DivMessageError>  
            ):
            ''
        }
        </DivMessage>
    );
}
const DivMessage = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    
    `
const DivMessageError = styled.div`
    background: #730800;
    border: 1px solid #730800;
    color: #fefee0;
    border-radius: 5px;
    padding-left: 5px;
     `

export default Message;