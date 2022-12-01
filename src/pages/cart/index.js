import React, { useState, useEffect, useContext } from "react"
import { AiFillDelete, AiFillCaretLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import styled from "styled-components"

import Button from "../../components/button"
import Image from "../../components/image"
import Modal from "../../components/modal"
import Paybutton from "../../components/paybutton"
import TitlePage from "../../components/titlepage"

import CartContext from "../../context/CartContext"

import mangaService from "../../services/manga.service"

const Cart = () => {
    const { cart, setCart, clearCart, removeItem } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [count, setCount] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        let total = 0
        cart?.map(el => (total += el.price))

        setTotalPrice(total)
    }, [cart])

    const removeElement = id => {
        removeItem(id)
    }

    const increment = () => {
        setCount(count + 1)
        // mangaService
        // .putManga(quantity, id)
        // .then(data => {
        //     setCount(data.quantity + 1)
        // })
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <DivGlobal>
            <DivIcon>
                <AiFillCaretLeft
                    size={20}
                    color="#fefee0"
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </DivIcon>
            <Div>
                <TitlePage styleTitle={{ align: "center" }} title="Panier" />

                <Table>
                    <thead>
                        <tr>
                            <Th>Manga</Th>
                            <Th>Nom</Th>
                            <Th>Prix</Th>
                            <Th>Quantité</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ? (
                            cart?.map(element => (
                                <tr key={element._id}>
                                    <Td>
                                        <Image
                                            styleImage={{ width: "100px", margin: "10px" }}
                                            path={element.image}
                                            description="image manga"
                                        ></Image>
                                    </Td>
                                    <Td>{element.name}</Td>
                                    <Td>{element.price} $</Td>
                                    <Td>
                                        <button onClick={decrement}>-</button>
                                        {count}
                                        <button onClick={increment}>+</button>
                                    </Td>
                                    <Td>
                                        <AiFillDelete
                                            onClick={() => {
                                                removeElement(element._id)
                                            }}
                                        />
                                    </Td>
                                    {}
                                    {/* {setTotalPrice(totalPrice + element.price)} */}
                                </tr>
                            ))
                        ) : (
                            <Td>Votre panier est vide</Td>
                        )}
                    </tbody>
                </Table>
                <Button
                    colorButton={{ color: "#fefee0" }}
                    styleButton={{ bgColor: "#303030" }}
                    onClick={() => {
                        clearCart()
                    }}
                    title="Vider le panier"
                />
                <br />
                <P>Prix total : {totalPrice} $</P>

                <br />
                <Paybutton cartItems={cart} />
            </Div>
        </DivGlobal>
    )
}
const DivGlobal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const DivIcon = styled.div`
    margin-left: 2%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
`

const Div = styled.div`
    width: 100%;
    text-align: center;
    background-color: #303030;
    padding-top: 5%;
    padding-bottom: 5%;
`

const Table = styled.table`
    margin: auto;
    border: 3px solid #fefee0;
    border-collapse: collapse;
`
const Td = styled.td`
    color: #fefee0;
    text-transform: uppercase;
    padding: 10px;
`

const Th = styled.th`
    color: #fefee0;
    text-transform: uppercase;
    padding: 10px;
`

const P = styled.p`
    color: #fefee0;
    text-transform: uppercase;
`

export default Cart
