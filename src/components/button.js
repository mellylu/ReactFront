import React from 'react'
import styled from 'styled-components'

const Button = ({ title, onClick, styleButton}) => (
    <ButtonContainer onClick={onClick} styleButton={styleButton}>
        {title && (
            <ButtonP color={`${styleButton?.color ? styleButton.color : '#303030'}`}>{title}</ButtonP>
        )}
    </ButtonContainer>
)
export default Button

const ButtonContainer = styled.button`
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: ${({ styleButton }) => (styleButton?.bgColor ? styleButton?.bgColor : '#fefee0')};
`

const ButtonP = styled.p`
    font-weight: bold;
    text-align: center;
    font-size: ${({ styleButton }) => (styleButton?.sizeButton ? styleButton?.sizeButton : '14px')};
    
`
