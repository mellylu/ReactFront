import React from "react"
import styled from "styled-components"

const Titlepage = ({ title, styleTitle }) => {
    return (
        <div>
            <ModalTitre styleTitle={styleTitle}>{title}</ModalTitre>
        </div>
    )
}

const ModalTitre = styled.h2`
    text-transform: uppercase;
    text-align: ${({ styleTitle }) => (styleTitle?.align ? styleTitle?.align : "left")};
    color: ${({ styleTitle }) => (styleTitle?.color ? styleTitle?.color : "#fefee0")};
`

export default Titlepage
