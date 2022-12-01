import React from "react"
import styled from "styled-components"

const Image = ({ path, description, styleImage }) => {
    return (
        <div>
            <Div styleImage={styleImage} src={path} alt={description} />
        </div>
    )
}

const Div = styled.img`
    width: ${({ styleImage }) => (styleImage?.width ? styleImage?.width : "450px")};
    height: ${({ styleImage }) => (styleImage?.width ? styleImage?.width : "450px")};
    padding: ${({ styleImage }) => (styleImage?.padding ? styleImage?.padding : "0px")};
    object-fit: contain;
`

export default Image
