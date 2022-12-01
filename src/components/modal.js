import React from "react"
import styled from "styled-components"

import manga from "../images/imageManga.jpg"
import Image from "./image"
import Button from "./button"
import Titlepage from "./titlepage"

//import imageManga from '../../public/imageManga.jpg'

const Modal = ({ title, children, styleImage }) => {
    return (
        <ModalDiv>
            <ModalDiv1>
                <ModalDiv2>
                    <Image styleImage={styleImage} path={manga} description="tas de livres" />
                </ModalDiv2>
                <ModalDiv3>
                    <Titlepage title={title} />
                    {children}
                    {/* <a href={href}>{a}</a> */}
                </ModalDiv3>
            </ModalDiv1>
        </ModalDiv>
    )
}

const ModalDiv = styled.div`
    background-color: #303030;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const ModalDiv1 = styled.div`
    padding: 2px;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
`

const ModalDiv2 = styled.div`
    flex: auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
`

const ModalDiv3 = styled.div`
    flex: auto;
    margin-left: 15px;
`

export default Modal
