import React from "react"
import styled from "styled-components"

const Button = ({ title, onClick, styleButton, colorButton }) => (
    <ButtonContainer onClick={onClick} styleButton={styleButton} style={colorButton}>
        {title && (
            <ButtonP
                styleButton={styleButton}
                color={`${colorButton?.color ? colorButton?.color : "#303030"}`}
            >
                {title}
            </ButtonP>
        )}
    </ButtonContainer>
)
export default Button

const ButtonContainer = styled.button`
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: ${({ styleButton }) =>
        styleButton?.bgColor ? styleButton?.bgColor : "#fefee0"};
    cursor: pointer;
`

const ButtonP = styled.p`
    font-weight: bold;
    text-align: center;
    font-size: ${({ styleButton }) => (styleButton?.sizeButton ? styleButton?.sizeButton : "14px")};
`
